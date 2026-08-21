import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Feedback from "./Components/Feedback";
import "./Global.css";

function App() {

  return (

    <div className="container">
      
      <Header titleHeader="🍕 Bem-vindo à OpenPizzaria!"
      textHeader="Sabores irresistíveis, ingredientes selecionados e aquela pizza quentinha feita especialmente para você!" />
      
      <Menu />

      <Banner />

      <Cards />

      <Feedback />

      <Footer titleFooter="OpenPizzaria - Todos os direitos reservados 2026" />
      
    </div>
  )
}

export default App