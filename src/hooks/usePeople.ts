import {useState} from "react";

export default function usePeople() {
    const [people, setPeople] = useState(['Fulano A', "Fulano B"])

    function addPerson(name: string) {
        setPeople([...people, name])
    }

    return {people, addPerson};
}