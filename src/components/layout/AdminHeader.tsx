'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function UXHeader() {
  return (
    <>
      <header className="text-white">
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="../">CW</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <Nav.Link href="">Site</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}
