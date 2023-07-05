import { useContext } from "react";
import MyContext from '../../helpers/context/MyContext';

const CharacterButtons = () => {
  const {screen, setScreen, selectedToken, setSelectedToken} = useContext(MyContext)

  return (
    <>
      <button onClick={() => setSelectedToken([])}>Trocar ficha</button>
      <p>{selectedToken[1]}</p>
      <button onClick={() => setScreen('ficha')}>Ficha</button>
      <button onClick={() => setScreen('edit')}>Editar Ficha</button>
      <button onClick={() => setScreen('equipamentos')}>Equipamentos</button>
      <button onClick={() => setScreen('habilidades')}>Habilidades</button>
      <button onClick={() => setScreen('magias')}>Magias</button>
      <button onClick={() => setScreen('anotacoes')}>Anotações</button>
    </>
  );
}

export default CharacterButtons;