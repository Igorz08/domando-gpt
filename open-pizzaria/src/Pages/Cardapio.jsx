import React from 'react';
import './Cardapio.css';

export default function Cardapio() {

  return (

    <>

         <div className="cardapio">

            <h2>🍕 Pizzas Tradicionais</h2>

            <div className="aba">
                <h3>Calabresa</h3>
                <p>Molho de tomate, mussarela, calabresa e cebola.</p>
                <strong>R$ 39,90</strong>
            </div>

            <div className="aba">
                <h3>Frango com queijo</h3>
                <p>Molho de tomate, frango desfiado e mussarela.</p>
                <strong>R$ 39,90</strong>
            </div>

            <div className="aba">
                <h3>Marguerita</h3>
                <p>Molho de tomate, mussarela, tomate e manjericão.</p>
                <strong>R$ 42,90</strong>
            </div>

            <div className="aba">
                <h3>Frango com Catupiry</h3>
                <p>Molho de tomate, frango desfiado e catupiry.</p>
                <strong>R$ 44,90</strong>
            </div>

            <div className="aba">
                <h3>Portuguesa</h3>
                <p>Molho de tomate, mussarela, presunto, ovo, cebola e azeitona.</p>
                <strong>R$ 46,90</strong>
            </div>

            <h2>⭐ Pizzas Especiais</h2>

            <div className="aba">
                <h3>Quatro Queijos</h3>
                <p>Mussarela, parmesão, provolone e catupiry.</p>
                <strong>R$ 49,90</strong>
            </div>

            <div className="aba">
                <h3>Strogonoff de Carne</h3>
                <p>Molho de tomate, mussarela, strogonoff de carne e batata palha.</p>
                <strong>R$ 52,90</strong>
            </div>

            <div className="aba">
                <h3>Costela BBQ</h3>
                <p>Mussarela, costela desfiada, molho barbecue e cebola.</p>
                <strong>R$ 54,90</strong>
            </div>
            
            <h2>🥤 Bebidas</h2>

            <ul>
                <li>Refrigerante lata — R$ 6,00</li>
                <li>Refrigerante 2L — R$ 12,00</li>
                <li>Suco natural — R$ 8,00</li>
                <li>Água — R$ 4,00</li>
            </ul>

            <h2>📋 Tamanhos</h2>

            <ul>
                <li>Broto - 4 fatias</li>
                <li>Média - 8 fatias</li>
                <li>Grande - 10 fatias</li>
                <li>Familia - 12 fatias</li>
            </ul>

            <button>Fazer pedido</button>

        </div>
        
    </>

  );
}