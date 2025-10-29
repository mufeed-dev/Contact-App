import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const handleDeleteClick = () => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete ${name}?`
    );

    if (isConfirmed) {
      props.clickHandler(id);
    }
  };

  return (
    <div className="item" key={id}>
      <img src={user} alt="user" className="ui avatar image" />
      <div className="content">
        <Link to={`/contact-detail/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <div className="right floated">
        <Link to={`/edit/${id}`} state={{ contact: props.contact }}>
          <i
            className="edit alternate outline icon"
            style={{ color: "blue", marginTop: "7px", cursor: "pointer" }}
          ></i>
        </Link>
        <i
          className="trash alternate outline icon"
          style={{
            color: "red",
            marginTop: "7px",
            marginLeft: "10px",
            cursor: "pointer",
          }}
          onClick={handleDeleteClick}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
