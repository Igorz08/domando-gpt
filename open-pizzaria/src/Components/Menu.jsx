import "./Menu.css";

const Menu = () => {
    return (
        
         <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Cardápio</a></li>

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