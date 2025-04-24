"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Autocomplete, Button, TextField } from "@mui/material";

export default function Searchbar() {
    const availableServices = [{ label: "Socken flicken", group: "Schneider" }];

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Autocomplete
                disablePortal
                options={availableServices}
                groupBy={(option) => option.group}
                sx={{ width: 300 }}
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
                    window.location.href = "/map";
                }}
            >
                <ArrowForwardIcon />
            </Button>
        </div>
    );
}
