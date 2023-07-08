import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.ts";
import Word, {IWord} from "./Word.tsx";
import React from "react";

export default function Day() {
    const { day } = useParams<{day: string}>();

    const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`)

    return (
        <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
            {words.map(word => (
                <Word word={word} key={word.id} />
            ))}
            </tbody>
        </table>
        </>
    );
}