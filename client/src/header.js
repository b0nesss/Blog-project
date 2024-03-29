// import { useState } from "react";
import { useContext,useEffect } from "react";
import {Link} from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header(){
    // const [username,setUsername] =useState(null);
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:3001/profile', {
            credentials:'include',
        }).then( response => {
            response.json().then( userInfo => {
                setUserInfo(userInfo);
            })
        })
    },[]);

    function logout(){
        fetch('http://localhost:3001/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }
const username=userInfo?.username;

    return(
        <header>
        <Link to="/" className="logo">Bool Blogs</Link>
        <nav>
            {username && (
                <>
                    <Link to="/post">Create new post</Link>
                    <a onClick={logout}>Logout</a>
                </>
            )}
            {!username && (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                </>
            )}
          
        </nav>
      </header>
    );
}
