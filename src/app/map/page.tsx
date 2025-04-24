"use client";

import Maps from "../../../components/maps";
import PartnerList from "../../../components/partner-list";
import Searchbar from "../../../components/searchbar";
import { Partner, Service } from "./partner";

export default function ResultView() {
    const availableServices = [{ label: "Socken flicken", group: "Schneider" }];

    const partner: Partner[] = [
        {
            id: "1",
            name: "Schneiderei Mustermann",
            lat: 47.733333,
            lng: 10.316667,
            rating: 3.2,
            adress: "Musterstraße 2, 12345 Musterstadt",
            services: new Map<string, Service>([
                [
                    "Socken flicken",
                    {
                        description:
                            "Die Socken werden maschinell schnell zusammengeflickt.",
                        price: 4,
                    },
                ],
            ]),
        },
        {
            id: "2",
            name: "Schreinerei Müller",
            lat: 47.719008,
            lng: 10.297393,
            rating: 4.5,
            adress: "Müllerstraße 1, 12345 Musterstadt",
            services: new Map<string, Service>([
                [
                    "Socken flicken",
                    {
                        description:
                            "Die Socken werden mit einer feinen Nadel in Handarbeit zusammengenäht.",
                        price: 5,
                    },
                ],
            ]),
        },
    ];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "32px",
                height: "100%",
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
                <Searchbar></Searchbar>
                <div
                    style={{
                        paddingTop: "32px",
                    }}
                >
                    <PartnerList partner={partner}></PartnerList>
                </div>
            </div>
            <div
                className="map-container"
                style={{
                    width: "50%",
                }}
            >
                <Maps partner={partner}></Maps>
            </div>
        </div>
    );
}
