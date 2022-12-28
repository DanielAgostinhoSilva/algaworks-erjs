export default function HelloWorld() {
    const name  = 'Daniel'
    const title = <h1>Hello, {name}</h1>
    return <div>
        {title}
    </div>
}