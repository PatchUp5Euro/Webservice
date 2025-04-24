"use client";

import Searchbar from "../../components/searchbar";
export default function Home() {
    const availableServices = [{ label: "Socken flicken", group: "Schneider" }];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Searchbar></Searchbar>
        </div>
    );
}
