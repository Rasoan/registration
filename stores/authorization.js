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

const autorization = new Authorization()

autorun(() => {
    autorization.auth.isAuth = localStorage.getItem('auth')
    autorization.auth.initialized = true
});

export default autorization