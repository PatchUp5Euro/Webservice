"use client";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

export default function Home() {
    const availableServices = [{ label: "Socken flicken", group: "Schneider" }];

    const partner = [
        {
            name: "Schneiderei Mustermann",
            lat: 47.733333,
            lng: 10.316667,
        },
        {
            name: "Schreinerei Müller",
            lat: 47.719008,
            lng: 10.297393,
        },
    ];

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <Map
                    style={{ width: 500, height: 500 }}
                    defaultCenter={{ lat: 47.733333, lng: 10.316667 }}
                    defaultZoom={14}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    minZoom={13}
                    mapId={"TEST_MAP"}
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
            </div>
        </APIProvider>
    );
}
