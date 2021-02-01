import React, { useState } from "react";
import { Link } from "react-router-dom";
import StyledWrapper from "./NavigationStyles";

function Navigation() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <StyledWrapper>
      <div className="logo-wrapper">
        <img
          src="https://camunda.com/wp-content/uploads/2020/05/logo-camunda-black.svg"
          alt="Camunda BPM is a scalable workflow and decision automation platform"
        />
      </div>
      <ul className={`${toggleMenu ? "open" : "closed"} navbar`}>
        <li>
          <Link to="/" className="navigation-link" onClick={handleToggle}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/modeler"
            className="navigation-link"
            onClick={handleToggle}
          >
            Modeler
          </Link>
        </li>
        <li>
          <Link
            to="/frameworks"
            className="navigation-link"
            onClick={handleToggle}
          >
            Frameworks
          </Link>
        </li>
      </ul>
      <button type="button" className="hamburger-menu" onClick={handleToggle}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </StyledWrapper>
  );
}

export default Navigation;
