// Контроллер для BrandController
import Db from "../models/models.js";

class BrandController {
    // Для создания типов
    async create (request, response) {
        try {
            const {name} = request.body;
            const brand = await Db.Brand.create({name})
            return response.json(brand)
        } catch (e) {
            console.log(e)
            return response.json(e)

        }
    }
    // Для получения типов
    async get (request, response) {
        try {
            const brand = await Db.Brand.findAll();
            return response.json(brand)
        } catch (e) {
            console.log(e)
            return response.json(e)
        }
    }

}

export default new BrandController();