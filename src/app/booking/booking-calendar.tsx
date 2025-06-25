"use client";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import {
    DateCalendar,
    DateCalendarProps,
    DateView,
    DayCalendarSkeleton,
    LocalizationProvider,
    PickersDay,
    PickersDayProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import React from "react";

type AppointmentSlot = {
    id?: string;
    start: Dayjs;
    end?: Dayjs;
};

type BookingCalendarProps = DateCalendarProps &
    React.RefAttributes<HTMLDivElement> & {
        appointmentSlots?: AppointmentSlot[];
    };

export default function BookingCalendar(props: BookingCalendarProps) {
    const today = dayjs();

    const { appointmentSlots: appointmentSlots = [] } = props;

    const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
        getFirstAvailableAppointmentSlot(appointmentSlots, today)
    );

    const [selectedAppointmentSlot, setSelectedAppointmentSlot] =
        React.useState<Dayjs>(
            getFirstAvailableAppointmentSlot(appointmentSlots, today)
        );

    const availableAppointmentSlots = appointmentSlots
        ?.filter((slot) => slot.start.isSame(selectedDate, "day"))
        .sort(sortByDate);

    const maxDate = appointmentSlots.sort(sortByDate).reverse()[0].start;

    const yearSelection = today.year() === maxDate.year();
    const views: DateView[] = yearSelection ? ["day"] : ["day", "year"];

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "fit-content",
            }}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                    disablePast
                    maxDate={maxDate}
                    renderLoading={() => <DayCalendarSkeleton />}
                    views={views}
                    slots={{
                        day: CustomPickersDay,
                    }}
                    slotProps={{
                        day: {
                            bookableDays: appointmentSlots?.map(
                                (slot) => slot.start
                            ),
                            maxDate: maxDate,
                        } as any,
                    }}
                    onChange={(event) => {
                        if (selectedDate?.isSame(event, "day")) {
                            return;
                        }

                        setSelectedDate(event);
                        setSelectedAppointmentSlot(
                            getFirstAvailableAppointmentSlot(
                                appointmentSlots,
                                event || today
                            )
                        );
                    }}
                />
            </LocalizationProvider>
            <ToggleButtonGroup
                exclusive
                value={selectedAppointmentSlot}
                onChange={(_event, value) => {
                    if (value === null) {
                        return;
                    }

                    setSelectedAppointmentSlot(value);
                }}
                style={{
                    width: "400px",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {availableAppointmentSlots?.map((slot) => (
                        <ToggleButton
                            color="primary"
                            key={slot.id}
                            value={slot.start}
                        >
                            {slot.start.format("HH:mm")}
                            {slot.end === undefined
                                ? ""
                                : " - " + slot.end?.format("HH:mm")}{" "}
                        </ToggleButton>
                    ))}
                </div>
            </ToggleButtonGroup>
        </div>
    );
}

function CustomPickersDay(
    props: PickersDayProps & { bookableDays?: Dayjs[]; maxDate?: Dayjs }
) {
    const {
        bookableDays: bookableDays = [],
        maxDate,
        day,
        outsideCurrentMonth,
        ...other
    } = props;

    const disabled =
        !bookableDays.some((bookableDay) => bookableDay.isSame(day, "day")) ||
        day.isAfter(maxDate);

    return (
        <PickersDay
            {...other}
            outsideCurrentMonth={outsideCurrentMonth}
            day={day}
            disabled={disabled}
        />
    );
}

function getFirstAvailableAppointmentSlot(
    appointmentSlots: AppointmentSlot[],
    today: Dayjs
) {
    return (
        appointmentSlots
            ?.filter((slot) => slot.start.isSame(today, "day"))
            .sort(sortByDate)[0]?.start ||
        appointmentSlots
            ?.filter((slot) => slot.start.isAfter(today, "day"))
            .sort(sortByDate)[0]?.start ||
        today
    );
}

function sortByDate(a: AppointmentSlot, b: AppointmentSlot) {
    return a.start.unix() - b.start.unix();
}
