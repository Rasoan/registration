import App from "../../components/App/App";
import AuthorizationForm from "../../components/AuthorizationForm";

const Authorization = () => {
    return <>
    <App tittle={"Авторизация"}>
        <p>Страница авторизации</p>
        <AuthorizationForm />
    </App>
    </>
}

export default Authorization