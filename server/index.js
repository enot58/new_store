/*
*  Здесь основной файл
*
* */


import express from 'express';
import sequelize from "./db.js";
import models from "./models/models.js";
import cors from 'cors';
import dotenv from 'dotenv';
const PORT = process.env.PORT || 5000;
const app = express();
import fileUpload from 'express-fileupload';

// Подключаем path для статики
import * as path from "path";

// Подключаем основной роутер
import router from "./routes/index.js";
// Подключаем middleware
import errorHandlingMiddleware from "./middleware/ErrorHandlingMiddleware.js";


// Здесь регистраци конфигурации
app.use(cors());
app.use(express.json());
// Это для
app.use(express.static(path.resolve('static')));
app.use(fileUpload({}));


// Здесь подключаем общий роутер
app.use('/api', router);



// Middleware в самом конце всегда, замыкающий
// На нём работа прекращается и мы возвращаем на клиент ответ
app.use(errorHandlingMiddleware);








// Слушаем порт сервера
(async () => {
    await sequelize.sync().then( () => [
        app.listen(PORT, function () {
            console.log(`Сервер ожидает подключения...${PORT}`);
            console.log(path.resolve('static'))
        })
    ]);
})();
