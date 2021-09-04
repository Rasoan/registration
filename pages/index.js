import {useRouter} from "next/router";
import authorization from "../stores/authorization";
import {observer} from "mobx-react";
import {useEffect} from "react";
import Link from "next/link";
import {Typography} from "antd";
import Authorization from "./authorization";

const Home = () => {
    const {Text} = Typography
    const router = useRouter()

    useEffect(() => {
        if (!authorization.auth.isAuth) {
            router.push("/authorization")
        }
    }, [])

    return <>
        {authorization.auth.isAuth ? <main>
            <div>
                <Text>Главная страница</Text>
            </div>
            <Link href={"/profile"}><a>
                Перейти к профайлу
            </a></Link>
        </main> : <Authorization />}
    </>
}

export default observer(Home)