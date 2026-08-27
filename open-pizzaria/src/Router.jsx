import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Cardapio from './Pages/Cardapio'
import Menu from './Components/Menu'
import Users from './Pages/Users'
import Comentario from './Pages/Comentario'

export default function Router() {
  return (
    <BrowserRouter>

       <Menu />

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/users" element={<Users />} />
            <Route path="/comentario" element={<Comentario />} />

        </Routes>
    </BrowserRouter>
  )
}