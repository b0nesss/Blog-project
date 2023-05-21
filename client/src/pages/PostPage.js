import { formatISO9075 } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function PostPage() {
    const [postInfo,setPostInfo]= useState(null);
    const [redirect,setRedirect] = useState(false);
    const {userInfo} = useContext(UserContext);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:3001/post/${id}`)
        .then(response => {
            response.json().then(res=>{setPostInfo(res)});
        });
    },[]);

    const deletePost =async ()=>{
        await fetch(`http://localhost:3001/delete/${postInfo?._id}`)
        .then((res)=>{
            if(res.ok){
                setRedirect(true)
            }
        })
    }

    if(redirect){
        return(
        <Navigate to={"/"}></Navigate>
        )
    }
 

    // if(!postInfo) return '';
    return(
        <div className="post-page">
            <h1>{postInfo&&postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo&&postInfo.createdAt))}</time>
            <div className="author">By {postInfo&&postInfo.author?.username}</div>
            {userInfo?.id === postInfo?.author?._id && (
                <div className="edit-row">
                    <Link className="edit-btn" to={`/edit/${postInfo?._id}`}>Edit this blog</Link>
                    <Link className="delete-btn"  onClick={deletePost}>Delete this blog</Link>
                </div>
            )}
            <div dangerouslySetInnerHTML={{__html:postInfo&&postInfo.content}} />
        </div>
    );
}