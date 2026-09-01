import React, { useState } from 'react'
import './Cadastro.css'

export default function Cadastro() {
    // Estado para armazenar os dados do formulario
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: ""
    })

    // Função para atualizar o estado ao digitar no formulario
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }))
    }

    // Função para enviar o formulario

    // e = event
    const handleSubmit = (e) => {
      
      e.preventDefault()

      console.log("Enviar.....")
    }

  return (
    <main className="containerCadastro">
      <h1>Cadastro de usuário</h1>

      <form onSubmit={handleSubmit}>
        <article className="form-control">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder='Digite seu nome'
            value={formData.nome}
            onChange={handleChange}
          />
        </article>

        <article className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Digite seu email'
            value={formData.email}
            onChange={handleChange}
          />
        </article>

        <article className="form-control">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder='Digite seu número de telefone'
            value={formData.telefone}
            onChange={handleChange}
          />
        </article>

        <button className="botaoCadastro" type="submit">
          Cadastrar
        </button>
      </form>
    </main>
  )
}
