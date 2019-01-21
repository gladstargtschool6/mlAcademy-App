import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <nav class="navbar fixed-bottom navbar-expand-md navbar-light bg-light">
    <Link to="/" class="nav-link">
      <button type="button" class="btn btn-primary">
        Back
      </button>
    </Link>
    <a
      href={`/editor/${this.props.labID}/${parseInt(this.props.classID) + 1}`}
      class="nav-link"
    >
      <button type="button" class="btn btn-primary">
        Next
      </button>
    </a>
  </nav>
);
export default Footer;
