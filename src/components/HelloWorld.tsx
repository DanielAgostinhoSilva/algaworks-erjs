export default function HelloWorld() {
    const name = 'Daniel'
    return <div>
        <h1
            tabIndex={0}
            style={{background: 'red'}}
        >Hello, {name}</h1>
    </div>
}