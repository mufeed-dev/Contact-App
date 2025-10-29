import React from "react";
import { withRouter } from "./withRouter";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const contactValidationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const EditContact = (props) => {
  const { id, name, email } = props.location.state.contact;

  const formik = useFormik({
    initialValues: {
      name: name,
      email: email,
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values, { resetForm }) => {
      const updatedContact = {
        id: id,
        name: values.name,
        email: values.email,
      };

      props.updateContactHandler(updatedContact);
      resetForm();
      props.navigate("/");
    },
  });

  return (
    <div className="ui main" style={{ paddingTop: "50px" }}>
      <h3>Edit Contact</h3>
      <form className="ui form" onSubmit={formik.handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div
              className="ui pointing red basic label"
              style={{ marginTop: "5px" }}
            >
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div
              className="ui pointing red basic label"
              style={{ marginTop: "5px" }}
            >
              {formik.errors.email}
            </div>
          ) : null}
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
            type="submit"
            className="ui button blue"
            style={{ position: "absolute", left: "40%" }}
            disabled={formik.isSubmitting}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(EditContact);
