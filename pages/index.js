import App from "../components/App/App";
import {useRouter} from "next/router";
import authorization from "../stores/authorization";
import {observer} from "mobx-react";
import {useEffect} from "react";
import Link from "next/link";

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    if (!authorization.auth.isAuth) {
      router.push("/authorization")
    }
  }, [])

  return <App>
    <p>Главная страница</p>
    <Link href={"/profile"}><a>Перейти к профайлу</a></Link>
  </App>
}

export default observer(Home)