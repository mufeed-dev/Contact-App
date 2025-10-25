import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = () => {
  const location = useLocation();
  const { name, email } = location.state.contact;
  return (
    <div className="main" style={{ paddingTop: "50px" }}>
      <div className="ui small card centered">
        <div className="image">
          <img src={user} alt="user" style={{ height: "250px" }} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div
        className="center-div"
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        <Link to="/">
          <button className="ui button blue ">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetail;
