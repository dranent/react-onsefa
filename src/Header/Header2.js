import { Container, Navbar, Nav } from "react-bootstrap";
import { useLocation} from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Header2() {

    const location = useLocation();
    const [onClinicBrandClass, setOnClinicBrandClass] = useState('');
    const [sefaAcademyBrandClass, setSefaAcademyBrandClass] = useState('');
  
    useEffect(() => {
      // Update the brandClass states based on the current path
      if (location.pathname === '/') {
        setOnClinicBrandClass('nav-bg');
        setSefaAcademyBrandClass('opacity');
      } else if (location.pathname === '/academy/') {
        setOnClinicBrandClass('opacity');
        setSefaAcademyBrandClass('nav-bg');
      } else {
        setOnClinicBrandClass('');
        setSefaAcademyBrandClass('');
      }
    }, [location.pathname]);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top' >
            <Container className="container-width">
                {/* <Image src="/sefa-logo.svg" width={"100px"}></Image> */}
                <Navbar.Brand href="/" className={onClinicBrandClass}>On Artmake</Navbar.Brand>&　
                <Navbar.Brand href="https://www.xenaclinic.co.kr/" className={sefaAcademyBrandClass}>ジェナダイエット</Navbar.Brand>
                
                {/* <Navbar.Brand href="/mens/" className="navbar-formen">for men</Navbar.Brand> */}
                {/* <a href="https://www.instagram.com/onclinic_sefa/" target="_blank" rel="noreferrer noopener">
                    <img src="/img/instar-icon.svg" alt="Instagram button" id="instagram-btn" />
                </a>
                <a href="https://www.instagram.com/onclinic_mens/" target="_blank" rel="noreferrer noopener">
                    <img src="/img/instar-icon-mens.svg" alt="Instagram button" id="instagram-mens-btn" />
                </a> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Top</Nav.Link>
                        <Nav.Link href="/#define">ON Artmakeについて</Nav.Link>
                        
                        {/* <Nav.Link href="#artist">アーティスト</Nav.Link> */}
                        <Nav.Link href="#price">料金表</Nav.Link>

                        {/* <Nav.Link href="#curriculum">カリキュラム</Nav.Link> */}
                        
                        <Nav.Link href="#reserve" >予約</Nav.Link>
                        <Nav.Link href="#qna-a" >よくある質問</Nav.Link>
                        <Nav.Link href="#access">ACCESS</Nav.Link>
                        <Nav.Link href="/academy/">SEFAについて</Nav.Link>
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
