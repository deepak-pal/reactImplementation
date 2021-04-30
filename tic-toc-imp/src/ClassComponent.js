import React from "react";
import {render} from "react-dom";
function UserInfo(props){
return (
    <div className="userInfor">
        <div className="userAvatar"><img src="" className="rounded-circle img-fluid"/></div>
   <div className="userDetails"><h4>{props.name}</h4></div>
    </div>
);
}
function Comment(props){
    return (
        <div className="comment">
            <UserInfo name = {props.name}></UserInfo>
            <CommentArea></CommentArea>
             <div className="commentDate"></div>
        </div>
    )
}
function CommentArea(){
    return(<div className="commentText"><textarea type="text" id="inputStatus" placeholder="King Kong Is Cool"></textarea></div>);
}
    const element = <Comment name="Deepak Pal"></Comment>
    render(element, document.getElementById("root"));



//setInterval(Tick, 1000);