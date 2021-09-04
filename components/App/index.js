import style from "./style.module.scss"
import Head from "next/head";
import authorization from "../../stores/authorization";
import {observer} from "mobx-react";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {Button} from "antd";
import Authorization from "../../pages/authorization";

const App = observer(({children, tittle = "Главная"}) => {
    const router = useRouter()

    const logOut = () => {
        authorization.logOut()
        router.push("/authorization")
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
        {authorization.auth.isAuth && <header>
            <Button type={"primary"}
                    ghost
                    className={style.exit} onClick={() => logOut()}>
                Выход
            </Button>
        </header>}
        <main>
            {authorization.auth.isAuth ? children: <Authorization />}
        </main>
    </>
})

export default App