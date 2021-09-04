import AuthorizationForm from "../../components/AuthorizationForm";
import {observer} from "mobx-react";
import authorization from "../../stores/authorization";
import Profile from "../profile";
import {useRouter} from "next/router";

const Authorization = () => {
    const router = useRouter()

    if (!authorization.auth.isAuth) {
        return <AuthorizationForm />
    } else {
        router.push("/profile")
        return <Profile />
    }
}

export default observer(Authorization)