/*
*  Здесь описаны все таблицы (сущности) и зависимости
*  имортируем db.js (в db подключение к базе данных)
*
* */


import { Sequelize } from "sequelize";
import sequelize from "../db.js";



class User extends Sequelize.Model {}

User.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "USER"
        }
    },
    {
        sequelize, modelName: 'user', timestamps: true, createdAt: true
    }
)

class Basket extends Sequelize.Model {}
Basket.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
    },
    {
        sequelize, modelName: 'basket', timestamps: true, createdAt: true
    }
);

class Device extends Sequelize.Model {}
Device.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        rating: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        img: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        sequelize, modelName: 'device', timestamps: true, createdAt: true
    }
);

class Type extends Sequelize.Model {}
Type.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        }
    },
    {
        sequelize, modelName: 'type', timestamps: true, createdAt: true
    }
);
class Brand extends Sequelize.Model {}
Brand.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        }
    },
    {
        sequelize, modelName: 'brand', timestamps: true, createdAt: true
    }
);
class BasketDevice extends Sequelize.Model {}
BasketDevice.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        }
    },
    {
        sequelize, modelName: 'basket_device', timestamps: true, createdAt: true
    }
);
class Rating extends Sequelize.Model {}
Rating.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        rate: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize, modelName: 'rating', timestamps: true, createdAt: true
    }
);
class DeviceInfo extends Sequelize.Model {}
DeviceInfo.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        sequelize, modelName: 'device_info', timestamps: true, createdAt: true
    }
);


class TypeBrand extends Sequelize.Model {}
TypeBrand.init(
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    },
    {
        sequelize, modelName: 'type_brand', timestamps: true, createdAt: true
    }
);

/*
* Порядок определения ассоциаций имеет принципиальное значение. В приведенных примерах A — это модель-источник (source), а B — это целевая модель (target). Запомните эти термины.

A.hasOne(B) означает, что между A и B существуют отношения один-к-одному, при этом, внешний ключ (foreign key) определяется в целевой модели (B).

A.belongsTo(B) — отношения один-к-одному, внешний ключ определяется в источнике (A).

A.hasMany(B) — отношения один-ко-многим, внешний ключ определяется в целевой модели (B).

В этих случаях Sequelize автоматически добавляет внешние ключи (при их отсутствии) в соответствующие модели (таблицы).

A.belongsToMany(B, { through: 'C' }) означает, что между A и B существуют отношения многие-ко-многим, таблица C выступает в роли связующего звена между ними через внешние ключи (например, aId и bId). Sequelize автоматически создает модель C при ее отсутствии, определяя в ней соответствующие ключи.
*
* */
// https://habr.com/ru/post/566036/

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

// info подключаем из deviceController.js
// Информация сущности Device хранится в сущности DeviceInfo
// Здесь это указывается
Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device);

// Device.hasOne(Brand);
// Brand.belongsToMany(Device);

Brand.hasMany(Device);
Device.belongsTo(Brand);

// Device.hasOne(Type);
// Type.belongsToMany(Device);

Type.hasMany(Device);
Device.belongsTo(Type);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});


export default {User, Device, Type, TypeBrand, Rating, Brand, Basket, BasketDevice, DeviceInfo};

