import {makeAutoObservable} from "mobx";

class Authorization {
    auth = false

    comeIn() {
        this.auth = true
    }

    logOut() {
        this.auth = false
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new Authorization()