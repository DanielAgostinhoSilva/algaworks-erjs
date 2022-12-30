import {useState} from "react";

export default function Form() {
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    })

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(form)
    }

    return <form
        style={{
            display: 'flex',
            flexDirection: 'column'
        }}
        onSubmit={handleSubmit}
    >
        <input
            type="text"
            placeholder="nome"
            value={form.name}
            name={'name'}
            onChange={handleInputChange}
        />
        <input
            type={'text'}
            placeholder={'sobrenome'}
            value={form.lastName}
            name={'lastName'}
            onChange={handleInputChange}
        />
        <input
            type="email"
            placeholder={'email'}
            value={form.email}
            name={'email'}
            onChange={handleInputChange}
        />
        <input
            type={'password'}
            placeholder={'senha'}
            value={form.password}
            name={'password'}
            onChange={handleInputChange}
        />
        <button type={'submit'}>
            enviar formulario
        </button>

    </form>
}