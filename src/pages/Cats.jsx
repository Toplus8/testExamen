import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import {userContext} from '../context/UserContext'

const Cats = () => {

  const [user, setUser] = useContext(userContext)
  const navigate = useNavigate();
  const t = window.localStorage.getItem("user");
  useEffect(() => {
    setUser({nombre:window.localStorage.getItem("users")}); 
    console.log("esto es user "+ `${user.name}` +" y esto es storage "+ t)  
		if (user.nombre!=t) {
      alert("Al no estar logeado no tiene permiso para acceder aqui, por favor, identifíquese.")
			navigate('/');
		}
	}, []);
  return (
    <div>Miau Marramiau {user.nombre}</div>
  )
}

export default Cats