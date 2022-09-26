/*
*  Здесь подключаемся к базе данных
*  данные лучше взять из файла .env
*  (пока не подключены)
* */


import {Sequelize} from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize('store','root', process.env.DB_PASSWORD, {
    dialect: "mysql",
    host: '127.0.0.1',
    port: '3306',
    define: {
        //timestamps: false
    }
});

export default sequelize;