import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, StyledButton} from "../style";
import { goToHomePage } from "../routes/Coordinator";

function HomePage() {
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")
    const navigate = useNavigate()

  return (
    <MainContainer>
        <h1>Login</h1>        
        <label id="Login">Insira seu login</label>
        <input value={login} onChange={(e) => setLogin(e.target.value)} id="Login" placeholder="Digite o login..."/>
        <label id="Senha">Insira sua senha</label>
        <input value={senha} onChange={(e) => setSenha(e.target.value)} id="Senha" placeholder="Digite a senha..." type="password"/>
        <StyledButton onClick={() => {
            if(login.toLowerCase() === "disney" && senha === "World") {
                goToHomePage(navigate)
            } else {
                alert("Erroouuu!")
            }
        }}>Entrar</StyledButton>
    </MainContainer>
  );
}

export default HomePage;