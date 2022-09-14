/*
*  Здесь middleware
*
* Обрабатывае запрос от клиента прежде чем попасть на сервер
*  (различные предварительные проверки)
*
* */

/*
*
* Сначала обрабатываем на ошибки
*  импортируем ApiErr
* */

import ApiError from "../error/ApiError.js";



export default (err, request, response, next) => {
        // instanceof проверяет, принадлежит ли объект к определённому классу.
    // Проверяет на обработанные ошибки
    if (err instanceof ApiError) {
        return response.status(err.status).json({message: err.message})
    }

    // Если в ApiError нет обработки ошибки функици возвращает непредвиденную ошибку

    return response.status(500).json({message: "Непредвиденная ошибка"})
}

/*
*  подключаем к основному index.js
*
* */