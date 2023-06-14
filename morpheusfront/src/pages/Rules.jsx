import React from 'react';
import './styles/Rules.css';

const Rules = () => {
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
    </div>
  );
};

export default Rules;
