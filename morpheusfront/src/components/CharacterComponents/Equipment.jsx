import React, { useContext, useState } from 'react';
import MyContext from '../../helpers/context/MyContext';
import Header from './Header';

import './styles/Equipment.css';

const Equipment = () => {
  const { characterSheet, setCharacterSheet, screen } = useContext(MyContext);
  const [equipmentArray, setEquipmentArray] = useState([]);
  const [newItem, setNewItem] = useState({ quantidade: 0, item: '', descricao: '' });
  const [treasureArray, setTreasureArray] = useState([]);
  const [newTreasure, setNewTreasure] = useState({ quantidade: 0, nome: '', descricao: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const equipamentButton = () => {
    setEquipmentArray([...equipmentArray, newItem]);
    setNewItem({ quantidade: 0, item: '', descricao: '' });
  };

  const deleteEquipmentButton = (index) => {
    const updatedEquipmentArray = [...equipmentArray];
    updatedEquipmentArray.splice(index, 1);
    setEquipmentArray(updatedEquipmentArray);
  };

  const handleTreasureInputChange = (e) => {
    const { name, value } = e.target;
    setNewTreasure({ ...newTreasure, [name]: value });
  };

  const treasureButton = () => {
    setTreasureArray([...treasureArray, newTreasure]);
    setNewTreasure({ quantidade: 0, nome: '', descricao: '' });
  };

  const deleteTreasureButton = (index) => {
    const updatedTreasureArray = [...treasureArray];
    updatedTreasureArray.splice(index, 1);
    setTreasureArray(updatedTreasureArray);
  };

  const renderEquipment = () => {
    return (
      <div className="equipment-group">
        <h4>Equipamentos</h4>
        <div className="equipment-title-group">
          <span className="equipment-Quantidade"></span>
          <span className="equipment-Item">Item</span>
          <span className="equipment-Descrição">Descrição</span>
          <span className="equipment-delit"></span>
        </div>

        {equipmentArray.length > 0 &&
          equipmentArray.map((item, index) => (
            <div className="equipment-title-group" key={index}>
              <span className="equipment-Quantidade">{item.quantidade}</span>
              <span className="equipment-Item">{item.item}</span>
              <span className="equipment-Descrição">{item.descricao}</span>
              <span className="material-symbols-outlined" onClick={() => deleteEquipmentButton(index)}>
                delete
              </span>
            </div>
          ))}

        <div>
          <input
            type="number"
            name="quantidade"
            value={newItem.quantidade}
            className="equipment-Quantidade-input"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="item"
            value={newItem.item}
            placeholder="Item"
            className="equipment-Item-input"
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="descricao"
            value={newItem.descricao}
            placeholder="Descrição"
            className="equipment-Descrição-input"
            onChange={handleInputChange}
          />
          <span className="material-symbols-outlined" onClick={equipamentButton}>
            check_circle
          </span>
        </div>
      </div>
    );
  };

  const renderTreasure = () => {
    return (
      <div className="treasure-group">
        <h4>Tesouros</h4>
        <div className="treasure-title-group">
          <span className="treasure-Quantidade"></span>
          <span className="treasure-Nome">Nome</span>
          <span className="treasure-Descrição">Descrição</span>
          <span className="treasure-delit"></span>
        </div>

        {treasureArray.length > 0 &&
          treasureArray.map((item, index) => (
            <div className="treasure-title-group" key={index}>
              <span className="treasure-Quantidade">{item.quantidade}</span>
              <span className="treasure-Nome">{item.nome}</span>
              <span className="treasure-Descrição">{item.descricao}</span>
              <span className="material-symbols-outlined" onClick={() => deleteTreasureButton(index)}>
                delete
              </span>
            </div>
          ))}

        <div>
          <input
            type="number"
            name="quantidade"
            value={newTreasure.quantidade}
            className="treasure-Quantidade-input"
            onChange={handleTreasureInputChange}
          />
          <input
            type="text"
            name="nome"
            value={newTreasure.nome}
            placeholder="Nome"
            className="treasure-Nome-input"
            onChange={handleTreasureInputChange}
          />
          <input
            type="text"
            name="descricao"
            value={newTreasure.descricao}
            placeholder="Descrição"
            className="treasure-Descrição-input"
            onChange={handleTreasureInputChange}
          />
          <span className="material-symbols-outlined" onClick={treasureButton}>
            check_circle
          </span>
        </div>
      </div>
    );
  };

  const renderRanged = () => {
    return (
      <div className="ranged-group">
        <h4>Armas à Distância</h4>

        <div className='ranged-title-group'>
          <span className='ranged-Tipo' >Tipo</span>
          <span className='ranged-name' >Nome</span>
          <span className='ranged-Quantidade'>Quant</span>
        </div>
        <div className='ranged-title-group'>
          <span className='ranged-Tipo' >Munição</span>
          <input className='ranged-Nome-input' type="text" name="nome" />
          <input className='ranged-Quantidade-input' type="number" name="quantidade" />
        </div>
        <div className='ranged-title-group'>
          <span className='ranged-Tipo' >Arremesso</span>  
          <input className='ranged-Nome-input' type="text" name="nome" />
          <input className='ranged-Quantidade-input' type="number" name="quantidade" />
        </div>
      </div>
    );
  };

  const renderArmor = () => {
    return (
      <div className="ca-group">
        <h4>Armadura e escudo</h4>

        <div className='ca-title-group'>
          <span className='ca-Tipo' >Tipo</span>
          <span className='ca-name' >Nome</span>
          <span className='ca-bonus'>Bonus</span>
          <span className='ca-value'>CA</span>
        </div>
        <div className='ca-title-group'>
          <span className='ca-Tipo' >Armadura</span>
          <input className='ca-Nome-input' type="text" name="nome" />
          <input className='ca-bonus' type="number" name="bonus" />
          <input className='ca-value' type="number" name="value" />
        </div>
        <div className='ca-title-group'>
          <span className='ca-Tipo' >Escudo</span>  
          <input className='ca-Nome-input' type="text" name="nome" />
          <input className='ca-bonus' type="number" name="bonus" />
          <input className='ca-value' type="number" name="value" />
        </div>
      </div>
    );
  }

  return (
    <div className="equipments-group">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <Header />
      {renderEquipment()}
      {renderTreasure()}
      <div>
      {renderRanged()}
      {renderArmor()}
      </div>
    </div>
  );
};

export default Equipment;
