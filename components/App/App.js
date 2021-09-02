import Head from "next/head";
import Link from 'next/link'
import authorization from "../../stores/authorization";
import {observer} from "mobx-react";


const App = observer(({children, tittle = "Главная"}) => {

    return <>
        <Head>
            <title>{tittle}</title>
        </Head>
        <header>
            {authorization.auth ? "авторизован": "не авторизован"}
        <button onClick={() => authorization.setAuth(false)}>Выход</button>
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