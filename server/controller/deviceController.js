// Контроллер для DeviceController

// Подключаем uuid
import * as uuid from 'uuid';
import * as path from "path";
import Db from '../models/models.js';
import ApiError from "../error/ApiError.js";


class DeviceController {
    async create (request, response , next) {

        // console.log(path.resolve('static'))

        try {
            const {name, price, brandId, typeId, info} = request.body;
            // Для работы с файлами устанавливаем npm i express-fileupload
            const {img} = request.files;
            // для генерации уникального имени npm i uuid
            let fileName = uuid.v4() + ".jpg";
            // Создадим папку с файлами static
            // Расположение файла с адаптацией с OS
            // Таким образом мы перемещаем файл с заданным именем в заданную директорию
            await img.mv(path.resolve('static', fileName));
            /*
            *  Если указано инфо
            *  выполняется условие и добавляется в таблицу
            * */
            if (info) {
                /*
                *  На фронтенде мы получаем данные в виде строки
                *  потом мы на сервере переводим в json
                *  потом обратно по запрос из клиента
                * */
                let info = JSON.parse(info)
                info.forEach(i => Db.DeviceInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: deviceId
                }))
            }

            // Далее создаём сам девайс
            const device = await Db.Device.create({
                name,
                price,
                brandId,
                typeId,
                img: fileName
            });

            return response.json(device)
        } catch (e) {
            console.log(e)
            next(ApiError.badRequest(e.message))
            return response.json(e)
        }



    }
    // Получаем все девайсы
    async getAll (request, response) {

        let { brandId, typeId, limit, page } = request.query;

        page = +page || 1;
        limit = +limit || 2;
        let offset = page * limit - limit;


        let devices;
        // findAndCountAll - выводит общее количество товаров
        // Фильтрация по типу
        if (!brandId && !typeId) {
            devices = await Db.Device.findAndCountAll({limit: limit, offset: offset})
        }
        // Фильтрация по типу
        if (!brandId && typeId) {
            // Параметры указываются с помощью where
            devices = await Db.Device.findAndCountAll({where: {typeId}, limit, offset})
        }
        // Фильтрация по бренду
        if (brandId && !typeId) {
            devices = await Db.Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        // Фильтрация по типу и бренду
        if (brandId && typeId) {
            devices = await Db.Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }

        return response.json(devices)

       /* // Добавим так же страницы и лимит
        let {brandId, typeId, limit, page} = request.query;
        page = page || 1;
        limit = limit || 9;
        // Рассчёт отступов
        let offset = page * limit - limit;

        let devices;
        // Если brandId и typeId не указаны возвращает все девайсы
        if (!brandId && !typeId) {
            devices = await Db.Device.findAll({limit ,offset})
        }
        // Фильтрация по типу
        if (!brandId && typeId) {
            // Параметры указываются с помощью where
            devices = await Db.Device.findAll({where: {typeId}, limit, offset})
        }
        // Фильтрация по бренду
        if (brandId && !typeId) {
            devices = await Db.Device.findAll({where: {brandId}, limit, offset})
        }
        // Фильтрация по типу и бренду
        if (brandId && typeId) {
            devices = await Db.Device.findAll({where: {typeId, brandId}, limit, offset})
        }

        return response.json(devices);*/
    }

    async getOne (request, response) {
        /*
        * id получаем из параметров
        *  они указаны в routes/deviceRouter.js
        * */
        const {id} = request.params;
        const device = await Db.Device.findOne(
            {
                // выбор по id
                where: {id},
                // подгружаем параметры
                include: [{model: Db.DeviceInfo, as: 'info'}]
            }
        )
        // Возвращаем на клиент json
        return response.json(device);
    }
}

export default new DeviceController();