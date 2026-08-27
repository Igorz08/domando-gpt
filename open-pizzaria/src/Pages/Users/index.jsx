import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Users.css"

export default function index() {
    // UseState do react para gerenciar estado dos usuarios
    const [usuarios, setUsuarios] = useState([]);

    // Hook useEffect para lidar com efeitos colaterais no componente

    // useEffect(() => {

    // }, [])

     useEffect(() => {
        console.log("Olaaaaaaa");
    }, [])

  return (
    <main className="containerUsers">
        <h1>Lista de Usuários</h1>
        <Link to="/">Voltar para HOME</Link>
        <section className="contentUsers">
            <article>
                <strong>Nome: Kaio</strong>
                <strong>Telefone: 11 1234567</strong>
            </article>
        </section>
    </main>
  )
}
