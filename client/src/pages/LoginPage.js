import { useContext } from "react";
import { useState } from "react";
import {Navigate} from "react-router-dom";
import { UserContext } from "../UserContext";
// import { AllHTMLAttributes } from "react";

export default function Loginpage(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [redirect,setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function login(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-type': 'application/json'},
            credentials: 'include',
        });
        // console.log(redirect);
        if(response.ok){
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            })
        } else {
            // console.log(response.data)
            // console.log(redirect);
            alert("WRONG CREDENTIALS");
        }
    }

    if(redirect){
        console.log(redirect);
        return <Navigate to={'/'}/>
    }
    return(
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text" 
            placeholder="username" 
            value={username} 
            onChange={ev => setUsername(ev.target.value)} required={true}/>
            <input type="password" 
            placeholder="password" 
            value={password} 
            onChange={ev => setPassword(ev.target.value)} required={true}/>
            <button>Log in</button>
        </form>
    );
}