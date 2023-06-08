import React, { useRef, useEffect, useContext} from 'react'
import userContext from '../../context/UserContext'

const Login = () => {
    const user1 = useRef('')
    console.log("user "+user.current.value)
    const pass = useRef('')
    const [user, setUser] = useContext(userContext)

//    const checkUser = ()=>{
//         window.localStorage.getItem("user")
//     }

//     useEffect (()=> {
//         checkUser()
//        },);
    
        
    const signIn = (e) =>{
        e.preventDefault();
        console.log("Aquí tenemos el user "+ user1.current.value+" y el pass "+ pass.current.value)
        
        window.localStorage.setItem("user",JSON.stringify({UserName:user1.current.value, Pass:pass.current.value}) );
        setUser(user1.current.value)

    }
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