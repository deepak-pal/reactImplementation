function UserInfo(props){
return (
    <div className="userInfor">
        <div className="userAvatar"><img src="" className="rounded-circle img-fluid"/></div>
   <div className="userDetails"><h4>{props.name}</h4></div>
    </div>
);
}