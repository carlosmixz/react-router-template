import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { MainContainer} from "../style";

function HomePage() {
    const Rota = useParams()
    
  return (
    <MainContainer>
      <Header />
      <h1>Página inexistente ou com erro</h1>
      <h3>{Rota["*"]} não existe</h3>
    </MainContainer>
  );
}

export default HomePage;
