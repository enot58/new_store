
/*
* Здесь обрабрабатываем роутер брэнда
* импортируется express , router Expressa и контроллер брэнда
* из папки контроллеров
* */


import express from "express";
const router = express.Router();
import BrandController from "../controller/brandController.js";



// Для создания бренда
router.post('/', BrandController.create);
// Для получения всех брендов
router.get('/', BrandController.get);
// Можно добавить delete





export default router;