import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Menu from "./Components/Menu";
import Router from "./Router";
import "./Global.css";

function App() {

  return (

    <div className="container">
      
      <Header titleHeader="🍕 Bem-vindo à OpenPizzaria!"
      textHeader="Sabores irresistíveis, ingredientes selecionados e aquela pizza quentinha feita especialmente para você!" />
      
     

      <Router />

      <Footer titleFooter="OpenPizzaria - Todos os direitos reservados 2026" />
      
    </div>
  )
}

export default App