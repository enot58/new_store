import {makeAutoObservable} from "mobx"
export default class DeviceStore {
    constructor () {
        this._types= [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Ноутбуки'},
            {id: 4, name: 'Аксесуары'},
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Lenovo'},
            {id: 3, name: 'Apple'},
            {id: 4, name: 'Honor'},
            {id: 5, name: 'Huawey'},
        ]
        this._devices = [
            {id:1, name: "Iphone20", price:300, rating: 5, img: 'https://im0-tub-ru.yandex.net/i?id=1f4a56649ecde5b810ac86edaef0d574-l&ref=rim&n=13&w=640&h=640'},
            {id:2, name: "Iphone30", price:300, rating: 5, img: 'https://fb.ru/media/i/1/4/1/5/9/2/4/i/1415924.jpg'},
            {id:3, name: "Iphone40", price:300, rating: 5, img: 'https://im0-tub-ru.yandex.net/i?id=1f4a56649ecde5b810ac86edaef0d574-l&ref=rim&n=13&w=640&h=640'},
            {id:4, name: "Iphone50", price:300, rating: 5, img: 'https://im0-tub-ru.yandex.net/i?id=1f4a56649ecde5b810ac86edaef0d574-l&ref=rim&n=13&w=640&h=640'},
            {id:5, name: "Iphone60", price:300, rating: 5, img: 'https://im0-tub-ru.yandex.net/i?id=1f4a56649ecde5b810ac86edaef0d574-l&ref=rim&n=13&w=640&h=640'},
            {id:6, name: "Iphone70", price:300, rating: 5, img: 'https://im0-tub-ru.yandex.net/i?id=1f4a56649ecde5b810ac86edaef0d574-l&ref=rim&n=13&w=640&h=640'},
            {id:7, name: "Iphone70", price:300, rating: 5, img: 'https://im0-tub-ru.yandex.net/i?id=1f4a56649ecde5b810ac86edaef0d574-l&ref=rim&n=13&w=640&h=640'},
            {id:8, name: "Iphone70", price:300, rating: 5, img: 'https://im0-tub-ru.yandex.net/i?id=1f4a56649ecde5b810ac86edaef0d574-l&ref=rim&n=13&w=640&h=640'},
            {id:9, name: "Iphone70", price:300, rating: 5, img: 'https://im0-tub-ru.yandex.net/i?id=1f4a56649ecde5b810ac86edaef0d574-l&ref=rim&n=13&w=640&h=640'},
            {id:10, name: "Iphone70", price:300, rating: 5, img: 'https://im0-tub-ru.yandex.net/i?id=1f4a56649ecde5b810ac86edaef0d574-l&ref=rim&n=13&w=640&h=640'},
            {id:11, name: "Iphone70", price:300, rating: 5, img: 'https://im0-tub-ru.yandex.net/i?id=1f4a56649ecde5b810ac86edaef0d574-l&ref=rim&n=13&w=640&h=640'},
        ]

        this._selectedType = {}
        makeAutoObservable(this)
    }

    setTypes (types) {
        this._types = types
    }

    setBrands (brands) {
        this._brands = brands
    }

    setDevices (devices) {
        this._devices = devices
    }
    
    setSelectedType (type) {
        this._selectedType = type
    }

    get devices () {
        return this._devices
    }
    
    get brands () {
        return this._brands
    }

    get types () {
        return this._types
    }

    get selectedType () {
        return this._selectedType
    }

}