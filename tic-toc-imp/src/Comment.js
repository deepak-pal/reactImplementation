function Comment(props){
    return (
        <div className="comment">
            <UserInfo name = {props.name}></UserInfo>
            <CommentArea></CommentArea>
             <div className="commentDate"></div>
        </div>
    )
}