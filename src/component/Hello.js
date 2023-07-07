import { useState } from "react";
import UserName from "./UserName";

export default function Hello(props) {
    console.log(props.age);
    const [name, setName] = useState('mike');
    const [age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인" : "미성년자"

    const changeName = () => {
        setName(name === 'mike' ? 'Jane' : "mike")
        setAge(age + 1)
    }

    return (
        <div>
            <h2>{name}({age}) : {msg}</h2>
            <UserName name={name} />
            <button onClick={changeName}>change name</button>
        </div>
    )
}