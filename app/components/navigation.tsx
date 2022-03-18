import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "remix";

export default function Navigation(): JSX.Element {
  return (
    <>
      {
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">OurRecipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/Login" className="nav-link">
                  Login
                </NavLink>
                <NavLink to="/Register" className="nav-link">
                  Register
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      }
    </>
  );
}
