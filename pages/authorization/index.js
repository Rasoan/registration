import AuthorizationForm from "../../components/AuthorizationForm";
import {observer} from "mobx-react";
import authorization from "../../stores/authorization";
import {useRouter} from "next/router";

const Authorization = () => {
    const router = useRouter()

    if (authorization.auth.isAuth) {
        router.push("/profile")
    }

    if (authorization.auth.isAuth) {
        return <p>Загрузка</p>
    }

    return <>
        <AuthorizationForm/>
    </>
}

export default observer(Authorization)