import { useEffect, useState } from "react"

export default function index() {

    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/comments")
        .then((response) => response.json())
        .then((data) => setComentarios(data))
        .catch((error) => console.error("Erro na API", error))
    }, [])

    console.log(comentarios)

  return (
        <main className="contentComentario">

            <section className="containerComentario">
                <article>
                    <img src="" alt="" />
                    <strong></strong>
                </article>
            </section>
        </main>
  )
}