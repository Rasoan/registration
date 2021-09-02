import {makeAutoObservable} from "mobx";

class Authorization {
    auth = false

    setAuth(auth) {
        this.auth = auth
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new Authorization()