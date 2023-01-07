import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

function Header() {
  return (
    <>
      {/* {size : false, 'sm', 'md', 'lg', 'xl', 'xxl'} */}
      {['lg'].map((expand) => (
        
        <Navbar collapseOnSelect expand={expand} fixed='top' key={expand} bg="light" className="mb-3">
          <Container fluid>
            <Image src="/sefa-logo.svg" width={"100px"}></Image>

            <Navbar.Brand href="#"><h6>Sefa Artmake Academy</h6></Navbar.Brand>


            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>

                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Sefa Artmake Academy
                </Offcanvas.Title>
              </Offcanvas.Header>


              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#top">Top</Nav.Link>

                  <Nav.Link href="#about">SEFAについて</Nav.Link>
                  <Nav.Link href="#artist">アーティスト</Nav.Link>
                  <Nav.Link href="#menu">カリキュラム</Nav.Link>
                  {/* <Nav.Link href="#gallery">症例ギャラリー</Nav.Link> */}
                  <Nav.Link href="#price">料金表</Nav.Link>
                  <Nav.Link href="#qna-a" >よくある質問</Nav.Link>
                  <Nav.Link to="/access" href="#access">ACCESS</Nav.Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>


      ))}

    </>
  );
}

export default Header;