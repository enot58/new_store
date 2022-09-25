import React from "react";
import { useContext } from "react";
import { Context } from "..";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite"
const NavBar = observer(()=> {
  const { user } = useContext(Context);
  console.log(user)
  const navigate = useNavigate()
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
            <Button
              onClick={() => navigate(ADMIN_ROUTE)} 
              variant={"outline-light"}
              >Админ панель</Button>
            <Button 
              onClick={() => navigate(LOGIN_ROUTE)} 
              variant={"outline-light"} style={{marginLeft: "20px"}}
              >Выйти</Button>
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
