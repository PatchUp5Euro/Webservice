import { Button, Rating, Typography } from "@mui/material";
import { Partner } from "../src/app/map/partner";

export default function PartnerCard({
    partner = {} as Partner,
}: {
    partner: Partner;
}) {
    return (
        <div
            className="partner-card"
            style={{
                padding: "4px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <div className="partner-card-left">
                    <Typography variant="h6" gutterBottom marginBottom={0}>
                        {partner.name}
                    </Typography>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "8px",
                        }}
                    >
                        <p
                            style={{
                                paddingTop: "4px",
                                width: "20px",
                                margin: 0,
                            }}
                        >
                            {partner.rating}
                        </p>
                        <Rating
                            defaultValue={partner.rating}
                            precision={0.5}
                            readOnly
                        />
                    </div>
                    <p>{partner.adress}</p>
                    <p>{partner.services.get("Socken flicken")?.description}</p>
                    <h1
                        style={{
                            margin: 0,
                        }}
                    >
                        {partner.services.get("Socken flicken")?.price}€
                    </h1>
                </div>
                <div
                    className="partner-card-right"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "right",
                    }}
                >
                    <img
                        src={
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
                        }
                        alt={partner.name}
                        style={{
                            borderRadius: 8,
                            height: "100px",
                            width: "100px",
                            objectFit: "cover",
                        }}
                    />
                    <Button variant="contained" style={{ marginTop: "12px" }}>
                        Book
                    </Button>
                </div>
            </div>
        </div>
    );
}
