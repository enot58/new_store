/*
* Здесь обрабрабатываем роутер DeviceController
* импортируется express , router Expressa и контроллер DeviceController
* из папки контроллеров
* */

import express from "express";
const router = express.Router();
import DeviceController from "../controller/deviceController.js";

// Для создания
router.post('/', DeviceController.create);
// Для получения
router.get('/', DeviceController.getAll);
// Для получения отдельного устройства
router.get('/:id', DeviceController.getOne);





export default router;