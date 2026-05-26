import React from "react";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  NavLink,
  Container,
} from "reactstrap";

import { NavLink as RRNavLink } from "react-router-dom";

function AuthNavbar({ transparent = true, fixed = true, innerRef, className }) {
  const [navbarColor, setNavbarColor] = React.useState("black");
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={(fixed ? "fixed-top " : "") + "black " + " " + className}
        expand="lg"
      >
        <Container>
          <div ref={innerRef} className="navbar-translate">
            <NavbarBrand tag={RRNavLink} to="/" id="navbar-brand">
              <div style={{ fontSize: "1.5rem" }}>Code Kar</div>
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  activeClassName="active"
                  to="/home"
                >
                  <div style={{ fontSize: "1.3rem" }}>
                    <i className="fas fa-home mr-1"></i>
                    Home
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  activeClassName="active"
                  to="/profile"
                >
                  <div style={{ fontSize: "1.3rem" }}>
                    <i className="fas fa-user mr-1"></i>
                    Profile
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  activeClassName="active"
                  to="/rooms/list"
                >
                  <div style={{ fontSize: "1.3rem" }}>
                    <i className="fas fa-list mr-1"></i>
                    Rooms
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  activeClassName="active"
                  to="/ide"
                >
                  <div style={{ fontSize: "1.3rem" }}>
                    <i className="fas fa-code mr-1"></i>
                    IDE
                  </div>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={RRNavLink}
                  exact
                  activeClassName="active"
                  to="/logout"
                >
                  <div style={{ fontSize: "1.3rem" }}>
                    <i className="fas fa-sign-out-alt mr-1"></i>
                    Logout
                  </div>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AuthNavbar;
