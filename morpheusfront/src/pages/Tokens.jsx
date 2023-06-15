import { useContext } from "react";
import { Navigate } from "react-router-dom";
import MyContext from '../helpers/context/MyContext';

const Tokens = () => {
  const {loggedIn} = useContext(MyContext)
  if (loggedIn.name === '') {
    return (
      <Navigate to={'/'} />
    )
  }
  return (
    <div>
      Tokens
    </div>
  );
}

export default Tokens;