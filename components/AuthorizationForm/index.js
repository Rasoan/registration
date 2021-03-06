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
    const {Text, Title} = Typography

    const schema = yup.object().shape({
        login: yup.string().email("Логин это email!").required("Поле обязательно для заполнения"),
        password: yup.string().required("Поле обязательно для заполнения")
            .matches(new RegExp(/[a-z]/, "i"), "Пароль должен содержать хотя бы одну английскую букву")
            .min(6, "Минимум 6 символов в пароле"),
        rememberMe: yup.bool(),
    });

    const { handleSubmit, formState: {errors}, setError, control} = useForm({
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

        authorization.comeIn(data.rememberMe)
        router.push("/profile")
    }

    return <div className={style.wrapper}>
        <Title className={style.header} level={4}>Авторизуйтесь пожалуйста</Title>
        <form className={style.form}>
            <div className={style['form__container']}>
                <Controller
                    name="login"
                    control={control}
                    render={({field}) => {
                        return <Input className={style.field} {...field} size="large" placeholder="Логин"
                                      prefix={<UserOutlined/>}/>
                    }}
                />
                {errors.login && <Text className={style['field__promt']} type="danger">{errors.login.message}</Text>}
            </div>
            <div className={style['form__container']}>
                <Controller
                    name="password"
                    control={control}
                    render={({field}) => {
                        return <Input {...field} size="large" placeholder="Пароль" prefix={<ToolOutlined/>}/>
                    }}
                />
                {errors.password &&
                <Text className={style['field__promt']} type={"danger"}>{errors.password.message}</Text>}
            </div>
            <div className={style['form__container-rememberMe']}>
                <Controller control={control}
                            name="rememberMe"
                            render={({field: { onChange, name }}) => {
                                return <Checkbox name={name}
                                                 onChange={onChange}
                                >
                                    Запомнить меня
                                </Checkbox>
                            }}
                />
            </div>
            <div>
                {(errors.login || errors.password) &&
                <Text className={style['field__promt-all']} type={"danger"}>неверный пароль или логин</Text>}
            </div>
            <div>
                <Button className={style['field-button']}
                        size={"large"}
                        type="primary"
                        onClick={handleSubmit(onSubmit)}>Войти</Button>
            </div>
        </form>
    </div>
})

export default AuthorizationForm