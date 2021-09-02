import {makeAutoObservable} from "mobx";
import photo from "../images/Photo.jpg"

class Profile {
    login = "admin@test.ru"
    password = "12345678qwe"
    name = "Араик"
    surname = "Расоян"
    dateOfBirth = "21.03.1993"
    photo = photo


    constructor() {
        makeAutoObservable(this)
    }
}

export default new Profile()