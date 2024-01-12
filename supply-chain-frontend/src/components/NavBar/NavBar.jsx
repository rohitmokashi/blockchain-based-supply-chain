import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} top="/">Supply Chain</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
            <Nav.Link as={Link} to="/display-products">Display Products</Nav.Link>
            <Nav.Link as={Link} to="/worker">Worker</Nav.Link>
            <Nav.Link as={Link} to="/add-status">Add Status</Nav.Link>
            <Nav.Link as={Link} to="/display-status">Display Status</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;