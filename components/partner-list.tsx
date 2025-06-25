import { Divider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { Partner } from "../src/app/map/partner";
import PartnerCard from "./partner-card";

function getDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
    // Haversine formula
    const toRad = (v: number) => (v * Math.PI) / 180;
    const R = 6371; // km
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
            Math.cos(toRad(lat2)) *
            Math.sin(dLng / 2) *
            Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

export default function PartnerList({ partner = [] }: { partner: Partner[] }) {
    const [sortBy, setSortBy] = React.useState<"rating" | "distance">("rating");
    const [userLocation, setUserLocation] = React.useState<{
        lat: number;
        lng: number;
    } | null>(null);

    React.useEffect(() => {
        if (sortBy === "distance" && !userLocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) =>
                    setUserLocation({
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                    }),
                () => setUserLocation(null)
            );
        }
    }, [sortBy, userLocation]);

    let sortedPartners = [...partner];
    if (sortBy === "rating") {
        sortedPartners.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "distance" && userLocation) {
        sortedPartners.sort(
            (a, b) =>
                getDistance(userLocation.lat, userLocation.lng, a.lat, a.lng) -
                getDistance(userLocation.lat, userLocation.lng, b.lat, b.lng)
        );
    }

    return (
        <div
            className="partner-list"
            style={{
                overflowX: "hidden",
                gap: "8px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <ToggleButtonGroup
                value={sortBy}
                exclusive
                onChange={(_e, v) => v && setSortBy(v)}
                size="small"
                style={{ marginBottom: 12 }}
            >
                <ToggleButton value="rating">Beste Bewertung</ToggleButton>
                <ToggleButton
                    value="distance"
                    disabled={!userLocation && sortBy !== "distance"}
                >
                    Nächste Entfernung
                </ToggleButton>
            </ToggleButtonGroup>
            {sortedPartners.map((p) => (
                <div key={p.id}>
                    <PartnerCard key={p.id} partner={p}></PartnerCard>
                    <Divider style={{ paddingBottom: "8px" }}></Divider>
                </div>
            ))}
        </div>
    );
}
