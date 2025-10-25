import React from "react";
import { withRouter } from "./withRouter";
import { Link } from "react-router-dom";

class EditContact extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, email } = props.location.state.contact;
    this.state = { id, name, email };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.navigate("/");
  };
  render() {
    return (
      <div className="ui main" style={{ paddingTop: "50px" }}>
        <h3>Edit Contact</h3>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => this.setState({ name: e.target.value })}
              value={this.state.name}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Link to="/" className="ui circular icon button">
              <i className="arrow left icon"></i>
            </Link>
            <button
              className="ui button blue "
              style={{ position: "absolute", left: "40%" }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EditContact);
