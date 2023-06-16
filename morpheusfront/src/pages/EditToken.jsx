import { useContext } from "react";
import { Navigate } from "react-router-dom";
import MyContext from '../helpers/context/MyContext';
import EditCharacterSheet from "../components/EditCharacterSheet";

const EditToken = () => {
  const {loggedIn} = useContext(MyContext)
  if (loggedIn.name === '') {
    return (
      <Navigate to={'/'} />
    )
  }
  return (
    <div>
      <EditCharacterSheet />
    </div>
  );
}

export default EditToken;