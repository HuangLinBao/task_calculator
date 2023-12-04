import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Bootstrap
        </a>
      </div>
    </nav>
  );
}
