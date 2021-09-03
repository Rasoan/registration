import style from "./style.module.scss"
import {observer} from "mobx-react";
import authorization from "../../stores/authorization";
import {useForm, Controller} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import profile from "../../stores/profile";
import {useRouter} from "next/router";
import {Input} from "antd";
import {UserOutlined, ToolOutlined} from '@ant-design/icons';
import {Typography} from 'antd';
import {Button, Checkbox} from 'antd';

const AuthorizationForm = observer(() => {
    const router = useRouter()
    const {Text} = Typography

    const schema = yup.object().shape({
        login: yup.string().email("Логин это email!").required("Поле обязательно для заполнения"),
        password: yup.string().required("Поле обязательно для заполнения")
            .matches(new RegExp(/[a-z]/, "i"), "Пароль должен содержать хотя бы одну английскую букву")
            .min(6, "Минимум 6 символов в пароле"),
        rememberMe: yup.bool(),
    });

    const {register, handleSubmit, watch, formState: {errors}, setError, control} = useForm({
        mode: 'onSubmit',
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data)
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

    return <div className={style.wrapper}>
        <form className={style.form}>
            <div className={style['form__container']}>
                <Controller
                    name="login"
                    control={control}
                    render={({field}) => {
                        return <Input className={style.field} {...field} size="large" placeholder="Логин"
                                      prefix={<UserOutlined/>}/>; // ✅
                    }}
                />
                {errors.login && <Text type="danger">{errors.login.message}</Text>}
            </div>
            <div className={style['form__container']}>
                <Controller
                    name="password"
                    control={control}
                    render={({field}) => {
                        return <Input {...field} size="large" placeholder="Пароль" prefix={<ToolOutlined/>}/>; // ✅
                    }}
                />
                {errors.password && <Text type={"danger"}>{errors.password.message}</Text>}
            </div>
            <div className={style['form__container-rememberMe']}>
                <Controller control={control}
                            {...register("rememberMe")}
                            render={({field}) => {
                                return <Checkbox {...field}>Запомнить меня</Checkbox>
                            }}
                />
            </div>
            <div>
                {(errors.login || errors.password) && <div>неверный пароль или логин</div>}
            </div>
            <div>
               <Button className={style['field-button']} size={"large"} type="primary" onClick={handleSubmit(onSubmit)} >Войти</Button>
            </div>
        </form>
    </div>
})

export default AuthorizationForm