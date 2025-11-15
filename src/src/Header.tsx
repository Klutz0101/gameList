import type { JSX } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate, type NavigateFunction } from "react-router-dom";
import { pageType } from "./enums";

interface headerProps {
  page: pageType;
}

function Header({ page = pageType.Home }: headerProps) {
  const nav: NavigateFunction = useNavigate();

  function printNavItems(): JSX.Element {
    if (page == pageType.Game) {
      return <></>;
    }
    return (
      <>
        <Nav
          className="justify-content-end"
          variant="tabs"
          defaultActiveKey={location.pathname}
        >
          <Nav.Link as={NavLink} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/about-me"}>
            About me
          </Nav.Link>
        </Nav>
      </>
    );
  }
  return (
    <>
      <Navbar
        className="bg-body-tertiary"
        data-bs-theme="dark"
        sticky="top"
        style={{ height: "70px" }}
      >
        <Container>
          <Navbar.Brand onClick={() => nav("/")} style={{ cursor: "pointer" }}>
            <img
              alt=""
              src="/public/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Game List
          </Navbar.Brand>
          {printNavItems()}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
