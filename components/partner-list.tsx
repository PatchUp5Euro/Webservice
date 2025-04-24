import { Divider } from "@mui/material";
import { Partner } from "../src/app/map/partner";
import PartnerCard from "./partner-card";

export default function PartnerList({ partner = [] }: { partner: Partner[] }) {
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
            {partner.map((p) => (
                <div key={p.id}>
                    <PartnerCard key={p.id} partner={p}></PartnerCard>
                    <Divider style={{ paddingBottom: "8px" }}></Divider>
                </div>
            ))}
        </div>
    );
}
