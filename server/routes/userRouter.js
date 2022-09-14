/*
* Здесь обрабрабатываем роутер UserController
* импортируется express , router Expressa и контроллер UserController
* из папки контроллеров
* */



import express from "express";
const router = express.Router();

// Ипортируем контроллер из папки controllers
import UserController from "../controller/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";


// Для регистрации
// Передаём как объект UserController c соответствующей функцией
router.post('/registration', UserController.registration);
// Для входа
router.post('/login', UserController.login);
// Для проверки зарегестрирован ли пользоаватель
router.get('/auth',authMiddleware, UserController.check);




export default router;