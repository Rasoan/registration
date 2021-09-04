import style from "./style.module.scss"
import Head from "next/head";
import authorization from "../../stores/authorization";
import {observer} from "mobx-react";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {Button} from "antd";

const App = observer(({children, tittle = "Главная"}) => {
    const router = useRouter()

    const logOut = () => {
        authorization.logOut()
        router.push("/authorization")
    }

    useEffect(() => {
        if (!authorization.auth.isAuth) {
            console.log("перенаправлю")
            router.push("/authorization")
        }
    }, [])

    if (!authorization.auth.isAuth) {
        return <p>Загрузка</p>
    }

    return <>
        <Head>
            <title>{tittle}</title>
        </Head>
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
    </>
})

export default App