import {useState} from "react";

export default function Person() {
    const [person, setPerson] = useState<String>('Daniel')

    setTimeout(() => {
        setPerson('Sandra')
    }, 2000)

    return <div>
        <h1>Pefil</h1>
        <p>Este é o perfil de {person}</p>
    </div>
}