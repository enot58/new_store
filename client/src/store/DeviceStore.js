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
            {id:1, name: "Iphone20", price:300, rating: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU'},
            {id:2, name: "Iphone30", price:300, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU'},
            {id:3, name: "Iphone40", price:300, rating: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU'},
            {id:4, name: "Iphone50", price:300, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU'},
            {id:5, name: "Iphone60", price:300, rating: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU'},
            {id:6, name: "Iphone70", price:300, rating: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU'},
            {id:7, name: "Iphone70", price:300, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU'},
            {id:8, name: "Iphone70", price:300, rating: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU'},
            {id:9, name: "Iphone70", price:300, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU'},
            {id:10, name: "Iphone70", price:300, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU'},
            {id:11, name: "Iphone70", price:300, rating: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtsAzfAnC6Onpen3al9qVywgNwKSYY1-QxTg&usqp=CAU'},
        ]

        this._selectedType = {}
        this._selectedBrand = {}
        this._selectedRating = {}
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
    setSelectedBrand (brand) {
        this._selectedBrand = brand
    }
    setSelectedRating (rating) {
        this._selectedRating = rating + 1
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
    get selectedBrand () {
        return this._selectedBrand
    }

    get selectedRating () {
        return this._selectedRating
    }
}