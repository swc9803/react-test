import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.ts";
import React from "react";

export interface IDay {
    id: number;
    day: number;
}

export default function DayList() {
    const days: IDay[] = useFetch('http://localhost:3001/days')

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    Day {day.day}
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    );
}