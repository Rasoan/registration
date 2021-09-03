import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import '../styles/main.scss'

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}