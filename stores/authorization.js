import {action, autorun, makeObservable, observable, reaction} from "mobx";
import localStorage from 'mobx-localstorage';

class Authorization {
    isAuth = null
    rememberMe = null
    initialized = null

    comeIn(rememberMe) {
        this.isAuth = true
        this.rememberMe = rememberMe
    }

    logOut() {
        this.isAuth = false
        this.rememberMe = false
    }

    constructor() {
        makeObservable(this, {
            isAuth: observable,
            rememberMe: observable,
            initialized: observable,
            comeIn: action,
            logOut: action,
        })
    }
}

const authorization = new Authorization()

autorun(() => {
    authorization.isAuth = localStorage.getItem('auth')
    authorization.initialized = true
});

reaction(() => JSON.stringify(authorization.isAuth),
    () => {
        if (authorization.rememberMe) {
            localStorage.setItem('auth', authorization.isAuth)
        } else {
            localStorage.setItem('auth', false)
        }
    })

export default authorization