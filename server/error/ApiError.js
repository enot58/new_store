/*
*  Здесь обработчик ошибок
* (разобраться с super , static)
*
* */


class ApiError extends Error {
    // принимает статус код и сообщение которое будем возвращать на клиент

    constructor(status, message) {

        super();
        this.status = status;
        this.message = message;
    }
    // Статические функции - это функции которые можно вызывать без создания объекта

    /*
    *  params = message (сообщение ошибки)
    *  return = Object
    * */
    static badRequest (message) {
        return new ApiError(404, message)
    }
    /*
    *  params = message (сообщение ошибки)
    *  return = Object
    * */
    static internal (message) {
        return new ApiError(500, message)
    }

    /*
    *  params = message (сообщение ошибки)
    *  return = Object
    * */
    static forbidden (message) {
        return new ApiError(403, message)
    }
    
}

export default ApiError;