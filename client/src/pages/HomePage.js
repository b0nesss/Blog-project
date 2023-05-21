import { useEffect, useState } from "react";
import Post from "../post";
import Post2 from "../post2";
import Post3 from "../post3";
// import { response } from "express";

export default function Homepage(){
    const [posts,setPosts] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3001/post').then(response => {
            response.json().then(res => setPosts(res))});
    },[]);
    return(
        <>
            {/* <Post />
            <Post2 />
            <Post3 />  */}
            {posts.length > 0 && posts.map( post => (
                <Post  {...post} />
            ))}
        </>
    );
}