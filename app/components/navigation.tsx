import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "remix";
import SearchByTitle from "./searchBar";

export default function Navigation(): JSX.Element {
  const [searchValue,setSearchValue]=useState("")
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand">
          OurRecipes
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    
          <Nav className="ms-auto">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/register" className="nav-link">
              Register
            </NavLink>
          </Nav>
          {/*
          When implemented authentication
          <Nav className="ms-auto">
            <NavLink to="/profile/:id" className="nav-link">
              Profile
            </NavLink>
          
          </Nav>
  ;*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}
