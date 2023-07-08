import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DayList() {
    const [days, setDays] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/days')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setDays(data)
        })
    }, [])

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
// json-server --watch ./src/db/data.json --port 3001