import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import MyContext from '../helpers/context/MyContext';

import './styles/Rules.css';
  
const Rules = () => {
  const {loggedIn} = useContext(MyContext)
  if (loggedIn.name === '') {
    return (
      <Navigate to={'/'} />
    )
  }
  return (
    <div className="dnd-rules-container">
      <h1>Regras Básicas do D&D</h1>
      <h2>1. Teste de Atributo</h2>
      <p>Para fazer um teste de atributo, role um dado de 20 faces (d20) e adicione o valor do atributo relacionado.</p>
      <h2>2. Combate</h2>
      <p>Durante o combate, os personagens realizam ataques usando uma rolagem de d20 e adicionando os bônus de ataque e modificadores de dano.</p>
      <h2>3. Magias</h2>
      <p>Os personagens mágicos podem lançar magias gastando slots de magia. Cada magia possui um nível de slot necessário para ser lançada.</p>
      <h2>4. Experiência</h2>
      <p>Os personagens ganham experiência ao derrotar inimigos e completar missões. Ao acumular experiência suficiente, eles podem subir de nível.</p>
      <h2>Regra de Falha Crítica</h2>
      <table>
        <thead>
          <tr>
            <th>Valor do Dado</th>
            <th>Efeito</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Acidente grave, resultando em dano ou consequências negativas significativas para o personagem.</td>
          </tr>
          <tr>
            <td>2-5</td>
            <td>Falha desastrosa, resultando em perda de ação, item ou vantagem.</td>
          </tr>
          <tr>
            <td>6-10</td>
            <td>Erro comum, resultando em ação mal-sucedida sem grandes consequências.</td>
          </tr>
        </tbody>
      </table>
      <h2>Regra do Teste Contra a Morte</h2>
      <table>
        <thead>
          <tr>
            <th>Resultado do Teste</th>
            <th>Efeito</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10 ou mais</td>
            <td>O personagem estabiliza e não precisa fazer mais testes.</td>
          </tr>
          <tr>
            <td>9 ou menos</td>
            <td>O personagem falha no teste. Seu estado piora e ele deve fazer um novo teste na próxima rodada.</td>
          </tr>
        </tbody>
      </table>
      <h2>Regras de Descanso</h2>
      <p>Descansar é uma parte essencial do jogo para recuperar energia e recursos. Existem diferentes tipos de descanso:</p>
      <ul>
        <li><strong>Descanso Curto:</strong> Um descanso curto dura pelo menos 1 hora. Durante esse tempo, os personagens podem gastar Dados de Vida para recuperar pontos de vida.</li>
        <li><strong>Descanso Longo:</strong> Um descanso longo dura pelo menos 8 horas. Durante esse tempo, os personagens podem recuperar todos os pontos de vida, restaurar magias e recuperar habilidades especiais.</li>
        <li><strong>Descanso de Trance (elfos):</strong> Os elfos meditam profundamente por 4 horas para obter o mesmo benefício de um descanso longo.</li>
      </ul>
      <h2>Turno</h2>
      <p>Em um turno de Dungeons & Dragons 5ª Edição (D&D 5e), um personagem pode realizar as seguintes ações:

Ação (Action): É a principal ação que um personagem pode realizar durante seu turno. Alguns exemplos de ações incluem:

Atacar (Attack): Realizar um ataque corpo a corpo ou à distância com uma arma.
Conjurar uma Magia (Cast a Spell): Lançar uma magia utilizando uma das magias disponíveis para o personagem.
Usar uma Habilidade Especial (Use a Special Ability): Usar uma habilidade especial do personagem, como Desarmar, Curar ou Furtividade.
Ação Bônus (Bonus Action): Alguns personagens, classes ou habilidades concedem uma ação bônus adicional durante o turno. Exemplos de ações bônus incluem:

Ataque Adicional (Extra Attack): Alguns personagens têm a capacidade de realizar um ataque adicional como ação bônus.
Lançar uma Magia Bônus (Cast a Bonus Action Spell): Alguns feitiços têm um tempo de conjuração de ação bônus.
Usar uma Habilidade Especial Bônus (Use a Bonus Action Special Ability): Alguns personagens têm habilidades especiais que podem ser usadas como ação bônus.
Movimento (Movement): O personagem pode se mover até sua velocidade de movimento durante o turno. A velocidade de movimento depende da raça e de outras circunstâncias, como efeitos mágicos ou condições.

Reação (Reaction): Durante o turno de outro personagem ou em resposta a uma determinada condição, um personagem pode usar sua reação para realizar uma ação específica. Exemplos de reações incluem:

Ataque de Oportunidade (Opportunity Attack): Quando um inimigo se move para fora do alcance de combate do personagem, ele pode realizar um ataque de oportunidade.
Conjurar uma Magia de Reação (Cast a Reaction Spell): Alguns feitiços têm um tempo de conjuração de reação.</p>
      
    </div>
  );
};

export default Rules;
