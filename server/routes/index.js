// Это основной роутер, к нему подключаются доп.роуты

import express from "express";
const router = express.Router();

// Здесь подключаются
import brandRouter from "./brandRouter.js";
import deviceRouter from "./deviceRouter.js";
import typeRouter from "./typeRouter.js";
import userRouter from "./userRouter.js";


/*
*  Здесь основные роуты
* их подключаем из папки routes
* */

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);







export default router;