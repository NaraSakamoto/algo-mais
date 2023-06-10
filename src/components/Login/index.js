import './Login.css';
import InputText from '../InputText'
import Button from '../Button'

function Login() {
    return (
        <section className="Login" name="Login">
            <header className="App-header">
                <img src='/images/logo.png' alt='Logo da marca Algo mais'/>
            </header>
            <form>
                <InputText label="Email" placeholder="Digite seu email aqui" />
                <InputText label="Senha" placeholder="Digite sua senha aqui" />
                <Button>Entrar</Button>
            </form>
        </section>
    );
}

export default Login;