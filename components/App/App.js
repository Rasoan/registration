import Head from "next/head";
import Link from 'next/link'
import authorization from "../../stores/authorization";
import {observer} from "mobx-react";
// import {redirect} from "next/dist/server/api-utils";
import {useRouter} from "next/router";
import {useEffect} from "react";
// import useLocalStorage from "react-use-localstorage";



const App = observer(({children, tittle = "Главная"}) => {
    // const [auth] = useLocalStorage("auth");
    const router = useRouter()

    // useEffect(() => {
    //     console.log(auth)
    //     if (auth) {
    //         authorization.comeIn()
    //     } else {
    //         authorization.logOut()
    //     }
    // }, [])

    useEffect(() => {
        console.log(window.localStorage.getItem('auth'))
        if (window.localStorage.getItem('auth') === "true") {
            authorization.comeIn()
        } else {
            authorization.logOut()
        }
    }, [])

    const logOut = () => {
        authorization.logOut()
        router.push("/authorization")
        window.localStorage.setItem('auth', false)
    }

    return <>
        <Head>
            <title>{tittle}</title>
        </Head>
        <header>
            {authorization.auth ? <button onClick={() => logOut()}>Выход</button>:
                <Link href="/authorization"><a>Вход</a></Link>}
        </header>
        <nav>
            <Link href={'/'}>Главная страница</Link>
            <Link href={'/authorization'}>Авторизация</Link>
            <Link href={'/profile'}>Профайл</Link>
        </nav>
        <main>
            {children}
        </main>
    </>
})

export default App