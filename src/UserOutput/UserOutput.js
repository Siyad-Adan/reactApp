import React from "react";
//import "./UserOutput.css";
const UserOutput = (props) => {
  return (
    <div>
      <p onClick={props.onClick}>{props.username}</p>
      <p>Paragraph 2</p>
    </div>
  );
};

export default UserOutput;
