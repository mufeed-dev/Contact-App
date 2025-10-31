import React, { useState } from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    props.clickHandler(id);
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <>
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

      {showDeleteModal && (
        <div className="ui modal visible active">
          <div className="header">Confirm Delete</div>
          <div className="content">
            <p>
              Are you sure you want to delete <strong>{name}</strong>?
            </p>
            <p>This action cannot be undone.</p>
          </div>
          <div className="actions">
            <button className="ui button" onClick={cancelDelete}>
              Cancel
            </button>
            <button className="ui red button" onClick={confirmDelete}>
              <i className="trash alternate outline icon"></i>
              Delete
            </button>
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div className="ui dimmer modals visible active"></div>
      )}
    </>
  );
};

export default ContactCard;
