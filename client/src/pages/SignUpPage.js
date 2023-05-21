import { useState } from "react";
// import axios from "axios";

export default function Signuppage(){
    const [username ,setUsername]= useState('');
    const [password,setPassword]= useState(''); 
   async function register(ev){
        ev.preventDefault();
        const response = await fetch('http://localhost:3001/signup' , {
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers:{'Content-Type': 'application/json'},
        });
        console.log(response);
        if( response.status === 200)
        {
            alert('registration success');
        }else{
            alert('registration failed');
        }
        // await axios.post('http://localhost:3001/signup',JSON.stringify({username,password}))
    }
    return(
        <form className="signup" onSubmit={register}>
            <h1>Sign up</h1>
            <input type="text" 
            placeholder="username"
            value={username} 
            onChange={ev =>setUsername(ev.target.value)}/>
            <input type="password" 
            placeholder="password" 
            value={password}
            onChange={ev =>setPassword(ev.target.value)}/>
            <button>Sign up</button>
        </form>
    );
}