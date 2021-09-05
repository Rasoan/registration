import AuthorizationForm from "../../components/AuthorizationForm";
import {observer} from "mobx-react";
import authorization from "../../stores/authorization";
import Profile from "../profile";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const Authorization = () => {
    const router = useRouter()
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        setIsAuth(authorization.isAuth)
        if (authorization.isAuth) {
            router.push("/profile")
        }
    },[])

    return <>
        {isAuth ? <Profile />: <AuthorizationForm />}
    </>
}

export default observer(Authorization)