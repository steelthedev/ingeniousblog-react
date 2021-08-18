import { Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return ( 
        <Navbar
        expand="lg"
        bg="myLight"
        variant="light"
        fixed="top"
       
        >
            <Navbar.Brand>
                <a href="/" className="navbrand">iBlog</a>
            </Navbar.Brand>
            <Navbar.Toggle className="shadow-none"></Navbar.Toggle>
          <Navbar.Collapse className="collapse justify-content-center navbar-collapse">
          <Nav className=" ms-auto text-center ">
              <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
              <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
     );
}
 
export default NavBar;