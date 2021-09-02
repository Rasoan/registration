import Head from "next/head";
import Link from 'next/link'

const App = ({children, tittle = "Главная"}) => {
    return <>
        <Head>
            <title>{tittle}</title>
        </Head>
        <header>Шапка</header>
        <nav>
            <Link href={'/'}>Главная страница</Link>
            <Link href={'/authorization'}>Авторизация</Link>
            <Link href={'/profile'}>Профайл</Link>
        </nav>
        <main>
            {children}
        </main>
    </>
}
export default App