import { useContext } from "react";
import MyContext from '../helpers/context/MyContext';

const CharacterButtons = () => {
  const {setScreen} = useContext(MyContext)

  const handonclick = (screen) => {
    setScreen(screen)

  }

  return (
    <div>
      <button onClick={() => handonclick('ficha')}>Ficha</button>
      <button onClick={() => handonclick('edit')}>Editar Ficha</button>
      <button onClick={() => handonclick('equipamentos')}>Equipamentos</button>
      <button onClick={() => handonclick('habilidades')}>Habilidades</button>
      <button onClick={() => handonclick('magias')}>Magias</button>
      <button onClick={() => handonclick('anotacoes')}>Anotações</button>
    </div>
  );
}

export default CharacterButtons;