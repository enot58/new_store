/*
* Здесь обрабрабатываем роутер TypeController
* импортируется express , router Expressa и контроллер TypeController
* из папки контроллеров
* */


import express from "express";
const router = express.Router();
import TypeController from "../controller/typeController.js";
import CheckRoleMiddleware from "../middleware/checkRoleMiddleware.js";


// Для создания бренда
router.post('/',CheckRoleMiddleware('ADMIN') ,TypeController.create);
// Для получения всех брендов
router.get('/', TypeController.getAll);
// Можно добавить delete





export default router;

