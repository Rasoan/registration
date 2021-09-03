import Index from "../components/App";
import {useRouter} from "next/router";
import authorization from "../stores/authorization";
import {observer} from "mobx-react";
import {useEffect} from "react";
import Link from "next/link";
import {Typography} from "antd";

const Home = () => {
    const {Text} = Typography
    const router = useRouter()

    useEffect(() => {
        if (!authorization.auth.isAuth) {
            router.push("/authorization")
        }
    }, [])

    return <div>
        <div>
            <Text>Главная страница</Text>
        </div>
        <Link href={"/profile"}><a>
            Перейти к профайлу
        </a></Link>
    </div>
}

export default observer(Home)