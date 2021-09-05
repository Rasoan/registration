import {observer} from "mobx-react";
import Link from "next/link";
import style from "./index.module.scss"

const Home = () => {


    return <>
        <main>
            <div className={style.container}>
                <Link href={"/profile"}><a className={style.link}>
                    Перейти к профайлу
                </a></Link>
            </div>
        </main>
    </>
}

export default observer(Home)