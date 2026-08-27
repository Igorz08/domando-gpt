import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        
         <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                 <li>
                    <Link to="/users">Usuários</Link>
                </li>
                <li>
                    <Link to="/cardapio">Cardápio</Link>
                </li>
                <li>
                    <Link to="/comentario">Comentários</Link>
                </li>

                <li>
                    <a href="#">Mais ▾</a>

                    <ul>
                        <li>
                            <a href="#">Fale Conosco</a>
                        </li>
                        <li>
                            <a href="#">FAQ</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Menu