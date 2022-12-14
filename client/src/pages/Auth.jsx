import React, {useContext} from "react";
import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { NavLink, useLocation } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
// Страница авторизации



const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const click = async () => {
    try {
      let data;

      if (isLogin) {
        data = await login(email, password)
        console.log(data)
      } else {
        data = await registration(email, password)
        console.log(data)
      }

      user.setUser(data)
      user.setIsAuth(true)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: "600px" }}>
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="m-5 d-flex flex-column">
          <Form.Control 
            className="mt-3" 
            placeholder="Введите email..." 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control 
            className="mt-3" 
            placeholder="Введите пароль" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between">
            {isLogin ? 
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
              </div> :
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            }
            <Button className="mt-3" variant={"outline-success"} onClick={click}>
              {isLogin ? "Войти" : "Зарегистрировать"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
})

export default Auth;
