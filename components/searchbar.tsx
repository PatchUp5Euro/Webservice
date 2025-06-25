"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Searchbar() {
    type ServiceOption = { label: string; group: string };
    const [selectedService, setSelectedService] =
        useState<ServiceOption | null>(null);
    const router = useRouter();
    const availableServices: ServiceOption[] = [
        { label: "Socken flicken", group: "Schneider" },
        { label: "Hose kürzen", group: "Schneider" },
        { label: "Stuhl reparieren", group: "Schreiner" },
        { label: "Tisch abschleifen", group: "Schreiner" },
        { label: "Fahrradreifen wechseln", group: "Fahrradservice" },
        { label: "Kette ölen", group: "Fahrradservice" },
        { label: "Toaster reparieren", group: "Elektronik" },
        { label: "Kabel tauschen", group: "Elektronik" },
        { label: "Absatz erneuern", group: "Schuhmacher" },
        { label: "Schuhe putzen", group: "Schuhmacher" },
        { label: "Reißverschluss ersetzen", group: "Schneider" },
        { label: "Knopf annähen", group: "Schneider" },
        { label: "Laptop reinigen", group: "IT-Service" },
        { label: "Software installieren", group: "IT-Service" },
        { label: "Batterie wechseln", group: "Uhrmacher" },
        { label: "Armband kürzen", group: "Uhrmacher" },
        { label: "Sessel neu beziehen", group: "Polsterei" },
        { label: "Polster reinigen", group: "Polsterei" },
        { label: "Display tauschen", group: "Handywerkstatt" },
        { label: "Akku wechseln", group: "Handywerkstatt" },
    ];

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Autocomplete
                disablePortal
                options={availableServices}
                groupBy={(option) => option.group}
                sx={{ width: 300 }}
                value={selectedService}
                onChange={(_e, v) => setSelectedService(v)}
                renderInput={(params) => (
                    <TextField {...params} label="z.B. Socken flicken" />
                )}
            />
            <Button
                variant="contained"
                sx={{
                    minWidth: "48px",
                    width: "48px",
                    height: "48px",
                    padding: 0,
                }}
                onClick={() => {
                    if (selectedService) {
                        router.push(
                            `/map?service=${encodeURIComponent(
                                selectedService.label
                            )}`
                        );
                    } else {
                        router.push("/map");
                    }
                }}
            >
                <ArrowForwardIcon />
            </Button>
        </div>
    );
}
