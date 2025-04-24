"use client";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import { Partner } from "../src/app/map/partner";

export default function Maps({ partner = [] }: { partner: Partner[] }) {
    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <Map
                defaultCenter={{ lat: 47.733333, lng: 10.316667 }}
                defaultZoom={14}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
                minZoom={13}
                mapId={"86c7fed7df589b70"}
                restriction={{
                    latLngBounds: {
                        north: 47.77,
                        south: 47.68,
                        east: 10.36,
                        west: 10.27,
                    },
                }}
            >
                {partner.map((p) => (
                    <AdvancedMarker
                        key={p.name}
                        position={{ lat: p.lat, lng: p.lng }}
                        title={p.name}
                        onClick={() => {
                            window.location.href = "/map";
                        }}
                    />
                ))}
            </Map>
        </APIProvider>
    );
}
