import React from "react";

import { Container, Navbar, Nav } from "react-bootstrap";

function Header2() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
            <Container className="container-width">
                {/* <Image src="/sefa-logo.svg" width={"100px"}></Image> */}
                <Navbar.Brand href="#home">On Clinic & Sefa Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#sefa-top">Top</Nav.Link>
                        <Nav.Link href="#define">ON Clinicについて</Nav.Link>
                        <Nav.Link href="#artist">アーティスト</Nav.Link>
                        <Nav.Link href="#price">料金表</Nav.Link>
                        <Nav.Link href="#defineSefa">SEFAについて</Nav.Link>
                        <Nav.Link href="#curriculum">カリキュラム</Nav.Link>
                        <Nav.Link href="#qna-a" >よくある質問</Nav.Link>
                        <Nav.Link href="#reserve" >予約</Nav.Link>
                        <Nav.Link href="#access">ACCESS</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header2;
