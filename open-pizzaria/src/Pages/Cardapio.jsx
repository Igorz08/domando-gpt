import React from 'react';
import './Cardapio.css';

export default function Cardapio() {

  return (

    <>
        
            <h2>🍕 Pizzas Tradicionais</h2>

            <h3>Calabresa</h3>
            <p>Molho de tomate, mussarela, calabresa e cebola.</p>
            <strong>R$ 39,90</strong>

            <h3>Marguerita</h3>
            <p>Molho de tomate, mussarela, tomate e manjericão.</p>
            <strong>R$ 42,90</strong>

            <h3>Frango com Catupiry</h3>
            <p>Molho de tomate, frango desfiado e catupiry.</p>
            <strong>R$ 44,90</strong>

            <h3>Portuguesa</h3>
            <p>Molho de tomate, mussarela, presunto, ovo, cebola e azeitona.</p>
            <strong>R$ 46,90</strong>

            <hr>

            <h2>⭐ Pizzas Especiais</h2>

            <h3>Quatro Queijos</h3>
            <p>Mussarela, parmesão, provolone e catupiry.</p>
            <strong>R$ 49,90</strong>

            <h3>Strogonoff de Carne</h3>
            <p>Molho de tomate, mussarela, strogonoff de carne e batata palha.</p>
            <strong>R$ 52,90</strong>

            <h3>Costela BBQ</h3>
            <p>Mussarela, costela desfiada, molho barbecue e cebola.</p>
            <strong>R$ 54,90</strong>

            <hr>

            <h2>🥤 Bebidas</h2>

            <ul>
                <li>Refrigerante lata — R$ 6,00</li>
                <li>Refrigerante 2L — R$ 12,00</li>
                <li>Suco natural — R$ 8,00</li>
                <li>Água — R$ 4,00</li>
            </ul>

            </hr>

            <h2>🍰 Sobremesas</h2>

            <ul>
                <li>Pizza de chocolate — R$ 29,90</li>
                <li>Pizza de banana com canela — R$ 27,90</li>
                <li>Pudim — R$ 10,00</li>
            </ul>

            </hr>

            <h2>📋 Tamanhos</h2>

            <table border="1">
                <tr>
                    <th>Tamanho</th>
                    <th>Quantidade de fatias</th>
                </tr>

                <tr>
                    <td>Pequena</td>
                    <td>4 fatias</td>
                </tr>

                <tr>
                    <td>Média</td>
                    <td>6 fatias</td>
                </tr>

                <tr>
                    <td>Grande</td>
                    <td>8 fatias</td>
                </tr>

            </table>

            <br/>

            <button>Fazer pedido</button>

        
    </>

  );
}