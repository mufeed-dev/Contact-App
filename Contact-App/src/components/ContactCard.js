import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item" key={id}>
      <img src={user} alt="user" className="ui avatar image" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div className="right floated">
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
