import {action, autorun, makeObservable, observable, reaction} from "mobx";
import localStorage from 'mobx-localstorage';

class Authorization {
    auth = {
        isAuth: null,
        rememberMe: null,
        initialized: null,
    }

    comeIn(rememberMe) {
        this.auth.isAuth = true
        this.auth.rememberMe = rememberMe
    }

    logOut() {
        this.auth.isAuth = false
        this.auth.rememberMe = false
    }

    constructor() {
        makeObservable(this, {
            auth: observable,
            comeIn: action,
            logOut: action,
        })
    }
}

const authorization = new Authorization()

autorun( () => {
    authorization.auth.isAuth = localStorage.getItem('auth')
    authorization.auth.initialized = true
});

reaction(() => JSON.stringify(authorization.auth),
    () => {
        if (authorization.auth.rememberMe) {
            localStorage.setItem('auth', authorization.auth.isAuth)
        } else {
            localStorage.setItem('auth', false)
        }
    })

export default authorization