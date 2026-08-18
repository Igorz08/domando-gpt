import { useState } from 'react'

function App() {

  return (
    <>
      <header>
        <h1>🍕 Bem-vindo à OpenPizzaria!</h1>
        <p>Sabores irresistíveis, ingredientes selecionados e aquela pizza quentinha feita especialmente para você!</p>
      </header>
      <hr/>

      <section className="banner">
        <img
          src="https://fastly.picsum.photos/id/95/1000/300.jpg?hmac=55ZVL8bjWr1X8KGA8zlG1CQgLP_VBJsYiFWtHmhM79A"
          alt="Banner da OpenPizzaria"
          width="1000"
          height="300"
        />
      </section>

      <section className="pizzaria-section">
        <article>
          <h1>🍕 Nossas Pizzas</h1>
          <p>
            Na OpenPizzaria, você encontra pizzas deliciosas preparadas com ingredientes
            frescos e muito carinho. Escolha seu sabor favorito e aproveite cada pedaço!
          </p>
        </article>

        <article>
          <h1>🔥 Sabor que conquista</h1>
          <p>
            Massa crocante, queijo derretido e combinações irresistíveis. Nossa missão
            é levar até você uma pizza quentinha e cheia de sabor para tornar qualquer
            momento ainda mais especial.
          </p>
        </article>
      </section>

    </>
  )
}

export default App