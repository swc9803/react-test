import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() {
    const days = useFetch('http://localhost:3001/days')

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