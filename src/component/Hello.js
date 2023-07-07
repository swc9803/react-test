import { useState } from "react";

export default function Hello() {
    const [name, setName] = useState('mike');

    const changeName = () => {
        setName(name === 'mike' ? 'Jane' : "mike")
    }

    return (
        <div>
            <h2>{name}</h2>
            <button onClick={changeName}>change name</button>
        </div>
    )
}