"use client";

import Searchbar from "../../components/searchbar";
export default function Home() {
    const availableServices = [{ label: "Socken flicken", group: "Schneider" }];

    return (
        <div
            style={{
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: 64,
                fontFamily: "var(--font-geist-sans)",
            }}
        >
            <h1
                style={{
                    fontSize: 36,
                    fontWeight: 700,
                    marginBottom: 12,
                    fontFamily: "var(--font-geist-sans)",
                }}
            >
                Patch Up
            </h1>
            <p
                style={{
                    fontSize: 18,
                    color: "#555",
                    marginBottom: 32,
                    textAlign: "center",
                    maxWidth: 480,
                    fontFamily: "var(--font-geist-sans)",
                }}
            >
                Finde lokale Partner für nachhaltige Reparaturen und
                Dienstleistungen. Gib einfach ein, was du reparieren möchtest!
            </p>
            <Searchbar></Searchbar>
        </div>
    );
}
