// Контроллер для User

// Импортируем обработчик ошибок
import ApiError from "../error/ApiError.js";

import bcrypt from 'bcrypt';
import Db from '../models/models.js';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();
/*
* Авторизация по JWT токену
* npm i jsonwebtoken bcrypt
* bcrypt - для хеширования паролей
* */

const generateJwt = (id , email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}


class UserController {
    async registration (request, response, next) {
        // Из тела запроса получаем email and password
        const { email, password, role } = request.body;

        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email or password'))
        }

        // Проверим есть ли логин и пароль для нового пользоваателя
        const candidat = await Db.User.findOne({
            where: {email}
        })
        // Если кандидат найден выполняется условие
        if (candidat) {
            return next(ApiError.badRequest('Пользоваатель с таким email уже существует'))
        }
        // первый параметр пароль, второй количество раз хэширования
        const hashPassword = await bcrypt.hash(password, 5)
        // создаём нового пользователя
        const user = await Db.User.create({email, role, password: hashPassword})
        // Создаём корзину для пользователя
        const basket = await Db.Basket.create({userId: user.id})
        // Формируем jwt токкен
        const token = generateJwt(user.id, user.email, user.role)

        return response.json({token})
    }

    async login (request, response, next) {
        // Получаем почту пароль из тела
        const {email, password} = request.body;
        // Проверяем есть ли пользователь в базе данных
        const user = await Db.User.findOne({where: {email}})
        // Если не найден или неверен выполняется условие
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        // Сравниваем пароли
        let comparePassword = bcrypt.compareSync(password, user.password);
        // Если не найден или неверен выполняется условие
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        // Генерируем токен
        const token = generateJwt(user.id, user.email, user.role)
        return response.json({token})
    }

    async check (request, response, next) {
        // Суть функции сгенерировать новый токкен и отправить на клиент
        const token = generateJwt(request.user.id, request.user.email, request.user.role)
        return response.json({token})

        response.json({message: 'its OK'})
    }
}

export default new UserController();