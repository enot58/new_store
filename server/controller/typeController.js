// Контроллер для TypeRouter

/*
*  Импортируем Type из models
*  и ApiError для обработки ошибок
* * */

import Db from '../models/models.js'

class TypeController {
    // Для создания типов
    async create (request, response) {
        try {
            const {name} = request.body;
            const types = await Db.Type.create({name})
            return response.json(types)
        } catch (e) {
            console.log(e)
            return response.json(e)

        }
    }
    // Для получения типов
    async getAll(request, response) {
        try {
            const types = await Db.Type.findAll();
            return response.json(types)
        } catch (e) {
            console.log(e)
            return response.json(e)
        }
    }

}


export default new TypeController();