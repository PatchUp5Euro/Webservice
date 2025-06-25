"use client";

import { Divider } from "@mui/material";
import { useSearchParams } from "next/navigation";
import Maps from "../../../components/maps";
import PartnerList from "../../../components/partner-list";
import Searchbar from "../../../components/searchbar";
import { getExampleData } from "./example-data";
import { Partner } from "./partner";

export default function ResultView() {
    const searchParams = useSearchParams();
    const selectedService = searchParams.get("service");
    const allPartners: Partner[] = getExampleData();
    const filteredPartners = selectedService
        ? allPartners.filter((p) =>
              Array.from(p.services.keys()).includes(selectedService)
          )
        : allPartners;

    const availableServices = [{ label: "Socken flicken", group: "Schneider" }];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "32px",
                height: "100vh",
                fontFamily: "var(--font-geist-sans)",
            }}
        >
            <div
                className="result-list"
                style={{
                    width: "calc(50% - 16px)",
                    overflowX: "hidden",
                    paddingLeft: "16px",
                }}
            >
                <h2
                    style={{
                        fontSize: 28,
                        fontWeight: 600,
                        margin: 0,
                        marginTop: 32,
                        marginBottom: 8,
                    }}
                >
                    Finde Partner in deiner Nähe
                </h2>
                <p
                    style={{
                        color: "#555",
                        margin: 0,
                        marginBottom: 24,
                        fontSize: 16,
                        maxWidth: 420,
                    }}
                >
                    Suche nach Dienstleistungen und entdecke lokale Anbieter auf
                    der Karte.
                </p>
                <Searchbar></Searchbar>
                <div
                    style={{
                        paddingTop: "32px",
                    }}
                ></div>
                <Divider></Divider>
                <div
                    style={{
                        paddingTop: "16px",
                    }}
                >
                    <PartnerList partner={filteredPartners}></PartnerList>
                </div>
            </div>
            <div
                className="map-container"
                style={{
                    width: "50%",
                }}
            >
                <Maps partner={filteredPartners}></Maps>
            </div>
        </div>
    );
}
