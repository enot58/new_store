// Проверка роли

import jwt from 'jsonwebtoken';

// Принимает роль
export default (role) => {
    return (request, response, next) => {
        if (request.method === 'OPTIONS') {
            next()
        }
        try {
            const token = request.headers.authorization.split(' ')[1] // Bearer sdfjs;df;lks
            if (!token) {
                return response.status(401).json({message: 'Не авторизован'})
            }

            // Функция verify проверяет токкен на валидность
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            // Проверяем роль пользователя
            if (decoded.role !== role) {
                return response.status(403).json({message: 'нет доступа'})
            }

            request.user = decoded;
            // Вызываем следующий middleware
            next();
        } catch (e) {
            response.status(401).json({message: "Не авторизован"})
        }
    }
}

