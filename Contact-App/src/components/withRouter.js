import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

export function withRouter(Component) {
  return function WrappedComponent(props) {
    const location = useLocation();
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} location={location} />;
  };
}
