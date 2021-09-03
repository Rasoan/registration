import style from "./style.module.scss"
import Head from "next/head";
import authorization from "../../stores/authorization";
import {observer} from "mobx-react";
import {useRouter} from "next/router";
import autorization from "../../stores/authorization";
import {useEffect} from "react";
import {Button} from "antd";


const App = observer(({children, tittle = "Главная"}) => {
    const router = useRouter()

    const logOut = () => {
        authorization.logOut()
        router.push("/authorization")
        window.localStorage.setItem('auth', false)
    }

    useEffect(() => {
        if (!authorization.auth.isAuth) {
            router.push("/authorization")
        }
    }, [])

    return <>
        <Head>
            <title>{tittle}</title>
        </Head>
        {autorization.auth.initialized ? <>
            <header>
                {authorization.auth &&
                <Button type={"primary"}
                        ghost
                        className={style.exit} onClick={() => logOut()}>
                    Выход
                </Button>}
            </header>
            <main>
                {children}
            </main>
        </> : "Загрузка"}
    </>
})

export default App