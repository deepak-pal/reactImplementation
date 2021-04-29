import userInfo from "./UserInfo"
function Comment(props){
    return (
        <div className="comment">
            <userInfo >{props.name}</userInfo>
            <div className="commentText"></div>
             <div className="commentDate"></div>
        </div>
    )
}