import './Login.css';
import InputText from '../InputText'
import { useState } from "react"

function Login() {
    const [formData, setFormData] = useState({
        email: '', // required
        password: '' // required
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data.user))
    }

    function handleChange(e) {
        console.log(e.target.value)
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    return (
        <section className="Login" name="Login">
            <header className="App-header">
                <img src='/images/logo.png' alt='Logo da marca Algo mais'/>
            </header>
            <form onSubmit={e => handleSubmit(e)}>
                <InputText name="email" label="Email" placeholder="Digite seu email aqui" onChange={e => handleChange(e)}/>
                <InputText name="password" label="Senha" placeholder="Digite sua senha aqui" onChange={e => handleChange(e)}/>
                <button className="login-btn" type="submit">Entrar</button>
            </form>
        </section>
    );
}

export default Login;