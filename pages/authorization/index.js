import AuthorizationForm from "../../components/AuthorizationForm";
import {useEffect} from "react";
import {observer} from "mobx-react";
import authorization from "../../stores/authorization";
import {useRouter} from "next/router";

const Authorization = () => {
    const router = useRouter()

    if (authorization.auth.isAuth) {
        router.push("/profile")
    }

    return <>
        <AuthorizationForm/>
    </>
}

export default observer(Authorization)