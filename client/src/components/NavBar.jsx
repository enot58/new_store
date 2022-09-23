import React from "react";
import { useContext } from "react";
import { Context } from "..";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite"
const NavBar = observer(()=> {
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={SHOP_ROUTE}
        >
          Покупки
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{color: "white"}}>
            <Button variant={"outline-light"}>Адмиин панель</Button>
            <Button variant={"outline-light"} style={{marginLeft: "20px"}} onClick={() => user.setIsAuth(false)}>Выйти</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{color: "white"}}>
            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
})


export default NavBar;
