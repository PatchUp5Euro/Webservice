"use client";

import { Button } from "@mui/material";
import BookingCalendar from "./booking-calendar";
import { appointmentSlots } from "./demo-data";

export default function BookingView() {
    return (
        <>
            <BookingCalendar
                appointmentSlots={appointmentSlots}
            ></BookingCalendar>
            <Button variant="contained" color="primary">
                Book
            </Button>
        </>
    );
}
