/*
*  Здесь подключаемся к базе данных
*  данные лучше взять из файла .env
*  (пока не подключены)
* */


import {Sequelize} from "sequelize";


const sequelize = new Sequelize('store','root', '28162342', {
    dialect: "mysql",
    host: '127.0.0.1',
    port: '3306',
    define: {
        timestamps: false
    }
});

export default sequelize;