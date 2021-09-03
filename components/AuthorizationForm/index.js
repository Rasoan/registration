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
        login: yup.string().email("Логин это email!").required("Поле обязательно для заполнения"),
        password: yup.string().required("Поле обязательно для заполнения")
            .matches(new RegExp(/[a-z]/, "i"), "Пароль должен содержать хотя бы одну английскую букву")
            .min(6, "Минимум 6 символов в пароле"),
        rememberMe: yup.bool(),
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
        if (data.rememberMe) {
            window.localStorage.setItem('auth', true)
        } else {
            window.localStorage.setItem('auth', false)
        }
    }

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input name="login" type="email" {...register('login')} />
                {errors.login && <div>{errors.login.message}</div>}
            </div>
            <div>
                <input name="password" type="text" {...register('password')} />
                {errors.password && <div>{errors.password.message}</div>}
            </div>
            <div>
                <input name="rememberMe" type={"checkbox"} {...register('rememberMe')} />
            </div>
            <div>
                {(errors.login || errors.password) && <div>неверный пароль или логин</div>}
            </div>
            <div>
                <input type="submit" value={"Войти"} />
            </div>
        </form>
    </>
})

export default AuthorizationForm