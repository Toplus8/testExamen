import React, { useRef, useEffect, useContext} from 'react'
import {userContext} from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const user1 = useRef('')
  const pass = useRef('')
  const [user, setUser] = useContext(userContext)
  const navigate = useNavigate();
   
  const signIn = (e) =>{
    e.preventDefault();
    setUser({
      nombre: user1.current.value,
      pass: pass.current.value 
    })
  }
  useEffect(() => {
    console.log({user})
		
    /*if (user.nombre===userInLocalStorage) {
      alert("redirigiendo a cats porque estás identificado.") 
			navigate('/cats');
		}*/
	},[]);
   


  return (
    <div>
        <form onSubmit={(e)=>signIn(e)}>
            <h2>Acceso usuario</h2>
            <input type="text" placeholder='Introduzca su usuario' ref={ user1 }></input>
            <input type="password" placeholder='Introduzca su contraseña' ref={ pass }></input>
            <button type="submit">Acceder</button> 
        </form>    
    </div>
  )
}

export default Login

/*<input type="text" placeholder='Introduzca su usuario' value={ email } onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" placeholder='Introduzca su contraseña' value={ pass } onChange={(e) => setPass(e.target.value)}></input>
            <button type="submit">Acceder</button> 

            https://api.giphy.com/v1/gifs/trending?api_key=T6pNX5Puy2Y3DEKPREQRH49vEbk8rci3&limit=25&rating=g

            https://api.giphy.com/v1/gifs/search?api_key=T6pNX5Puy2Y3DEKPREQRH49vEbk8rci3&q=cats&limit=25&rating=g
             */

            /*
            --------------------------------------
             const user1 = useRef('')
   /* console.log("user1 "+user1.current.value)
    const pass = useRef('')
    const [user, setUser] = useContext(userContext)

    const navigate = useNavigate();
  const userInLocalStorage = window.localStorage.getItem("user");
  useEffect(() => {
    setUser({nombre:window.localStorage.getItem("user")});
    console.log("Este es el nombre "+ user.name) 
		
    if (user.nombre===userInLocalStorage) {
      alert("redirigiendo a cats porque estás identificado.") 
			navigate('/cats');
		}
	},[]);

    /*const checkUser = ()=>{
        setUser({
    nombre: window.localStorage.getItem("user"),
    pass: window.localStorage.getItem("pass")  
  });
    } 
    const signIn = (e) =>{
      e.preventDefault();  
      /*console.log("Aquí tenemos el user "+ user1.current.value+" y el pass "+ pass.current.value)*/
      /*window.localStorage.setItem("user",JSON.stringify({UserName:user1.current.value, Pass:pass.current.value}) );
      window.localStorage.setItem("user",user1.current.value);
      window.localStorage.setItem("pass",pass.current.value);
      setUser({
        nombre: user1.current.value /*window.localStorage.getItem("user"),
        pass: pass.current.value /*window.localStorage.getItem("pass")
      });
      console.log(user.nombre +" Esto es user")
      
      /*checkUser()
        console.log({user} +" este no sale")
        let g= window.localStorage.getItem("user")
        console.log(g+" y "+window.localStorage.getItem("pass"))
    }
            
            
            */