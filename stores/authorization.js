import {autorun, makeAutoObservable} from "mobx";
import localStorage from 'mobx-localstorage';

class Authorization {
    auth = {
        isAuth: null,
        initialized: null,
    }

    comeIn() {
        this.auth.isAuth = true
    }

    logOut() {
        this.auth.isAuth = false
    }

    constructor() {
        makeAutoObservable(this)
    }
}

const authorization = new Authorization()

autorun(() => {
    authorization.auth.isAuth = localStorage.getItem('auth')
    authorization.auth.initialized = true
});

export default authorization