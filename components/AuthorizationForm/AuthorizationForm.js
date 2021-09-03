import {observer} from "mobx-react";
import authorization from "../../stores/authorization";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import profile from "../../stores/profile";
import {useRouter} from "next/router";

const AuthorizationForm = observer(() => {
    const router = useRouter()
    const schema = yup.object().shape({
        login: yup.string().required(),
        password: yup.string().required(),
    });

    const { register, handleSubmit, watch, formState: { errors }, setError } = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        if (data.login !== profile.login) {
            setError("login", {})
            return
        }

        if (data.password !== profile.password) {
            setError("password", {})
            return;
        }

        authorization.comeIn()
        router.push("/profile")
        window.localStorage.setItem('auth', true)
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input name="login" type="text" {...register('login')} />
            </div>
            <div>
                <input name="password" type="text" {...register('password')} />
            </div>
            <div>
                {(errors.login || errors.password) && <div>неверный пароль или логин</div>}
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </>
})

export default AuthorizationForm