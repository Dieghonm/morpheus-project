import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../helpers/context/MyContext';
import Header from './Header';

import './styles/Equipment.css';
import { equipmentRequest } from '../../helpers/requests/equipment';

const Equipment = () => {
  const { characterSheet, setCharacterSheet, screen } = useContext(MyContext);
  const [equipmentArray, setEquipmentArray] = useState([]);
  const [newItem, setNewItem] = useState({ quantidade: 0, item: '', descricao: '' });
  const [treasureArray, setTreasureArray] = useState([]);
  const [newTreasure, setNewTreasure] = useState({ quantidade: 0, nome: '', descricao: '' });
  const [allequipment, setAllequipment] = useState([]);
  const [armor, setArmor] = useState({name: 'Sem armadura', value: 0, bonus: 0});
  const [shield, setShield] = useState({name: 'Sem escudo', value: 0, bonus: 0});

  const equipmentFatch = async () => {
    setAllequipment(equipmentRequest())
    try {
      const response = await equipmentRequest();
      setAllequipment(response);
      setArmor({name: characterSheet.armadura, value: allequipment[0].find(item => item[0] === characterSheet.armadura)[1], bonus: 0})
      setShield({name: characterSheet.escudo, value: allequipment[0].find(item => item[0] === characterSheet.escudo)[1], bonus: 0})
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    equipmentFatch();
  },[]);

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

  const armorChang = (target) => {
    setCharacterSheet({...characterSheet, armadura: target.value})
    setArmor({...armor, [target.name]:target.value, value: allequipment[0].find(item => item[0] === target.value)[1]});
  }

  const shieldChang = (target) => {
    setCharacterSheet({...characterSheet, escudo: target.value})
    setShield({...armor, [target.name]:target.value, value: allequipment[0].find(item => item[0] === target.value)[1]});
  }

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
            <select className='ca-Nome-input' name="name" value={armor.name} onChange={(e) => armorChang(e.target)}>
              {allequipment[0].map((item) =>  !item[0].toLowerCase().includes("escudo")? <option value={item[0]}>{item[0]}</option> : null)}
            </select>
          <input className='ca-bonus' type="number" name="bonus" onChange={(e) => armorChang(e.target)} value={armor.bonus}/>
          <span className='ca-value'>{armor.value}</span>
        </div>
        <div className='ca-title-group'>
          <span className='ca-Tipo' >Escudo</span>  
          <select className='ca-Nome-input' name="name" value={shield.name} onChange={(e) => shieldChang(e.target)}>
              {allequipment[0].map((item) =>  item[0].toLowerCase().includes("escudo")? <option value={item[0]}>{item[0]}</option> : null)}
          </select>
          <input className='ca-bonus' type="number" name="bonus" onChange={(e) => armorChang(e.target)} value={shield.bonus}/>
          <span className='ca-value'>{shield.value}</span>
        </div>
      </div>
    );
  }

  return allequipment.length ? (
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
  ) : null ;
};

export default Equipment;
