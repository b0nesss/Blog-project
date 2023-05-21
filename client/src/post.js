import {formatISO9075} from "date-fns";
import { Link } from "react-router-dom";

export default function Post({_id,title,summary,cover,content,createdAt,author}){
  // console.log(author["username"])
  
    return(
      <div className="post">
      <div className="image">
        <Link to= {`/post/${_id}`}>
         <img src="https://img.wattpad.com/34461f020b35f118570215609d7ba11c75a595ca/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5157623251375f363256334c57673d3d2d3138352e313566373166326430303364343362613437353538303730333537382e6a7067?s=fit&w=720&h=720" alt="Megumin pic"/>
         </Link>
      </div>
      <div className="texts">
        <Link to= {`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author&&author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <div className="summaryDiv">
        <p className="summary">{summary}</p>


        </div>

      </div>
    </div> 
    );
}