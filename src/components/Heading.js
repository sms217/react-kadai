import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="dark" dark>
      <Container className="w-50">
        <NavbarBrand href="/">My Team</NavbarBrand>
      </Container>
      <Nav>
        <NavItem>
            <Link to="/add" className=" btn btn-primary">Add Teammate</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
