import { StyledHeader, StyledButton } from "../style"
import { goToHomePage, goToLoginPage, goToProfilePage } from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";

function Header( ) {

  const navigate = useNavigate()
  let nome = "Disney"

  return (
    <StyledHeader>
      <StyledButton onClick={() => goToHomePage(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => goToProfilePage(navigate, nome)}>
        Ir para página de perfil
      </StyledButton>
      <StyledButton onClick={() => goToLoginPage(navigate)}>
        Ir para página de login
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
