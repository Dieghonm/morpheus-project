import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import MyContext from '../helpers/context/MyContext';

const Fight = () => {
  const {loggedIn, setSelectedToken} = useContext(MyContext)
  useEffect(() => {
    setSelectedToken([])
  }, [])


  if (loggedIn.name === '') {
    return (
      <Navigate to={'/'} />
    )
  }
  return (
    <div>
      Fight
    </div>
  );
}

export default Fight;