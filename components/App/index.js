import style from "./style.module.scss"
import Head from "next/head";
import authorization from "../../stores/authorization";
import {observer} from "mobx-react";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Button} from "antd";
import Authorization from "../../pages/authorization";

const App = observer(({children, tittle = "Главная"}) => {
    const router = useRouter()
    const [isAuth, setIsAuth] = useState(false)

    const logOut = () => {
        authorization.logOut()
        router.push("/authorization")
    }

    useEffect(() => {
        setIsAuth(authorization.isAuth)
        if (!authorization.isAuth) {
            router.push("/authorization")
        }
    }, [])

    return <>
        <Head>
            <title>{tittle}</title>
        </Head>
            {isAuth ? <main className={style.wrapper}>
                <div>
                    <Button type={"primary"}
                            ghost
                            className={style.exit} onClick={() => logOut()}>
                        Выход
                    </Button>
                </div>
                <div>
                    {children}
                </div>
            </main> : <Authorization />}
    </>
})

export default App