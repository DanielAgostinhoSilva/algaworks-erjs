import usePeople from "../hooks/usePeople";

export default function PeopleList() {
    const {people, addPerson} = usePeople()
    return <>
        <ul>
            {
                people.map((person, index) => <li key={index}>{person}</li>)
            }
            <button onClick={() => addPerson(('Daniel'))}>
                adicionar pessoa
            </button>
        </ul>
    </>
}