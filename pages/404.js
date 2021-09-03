import Link from 'next/link'

export default function  ErrorPage() {

    return <>
    <h1>Ошибка 404</h1>
        <p>Пожалуйста возвращайтесь на <Link href={'/'}><a>главную страницу</a></Link></p>
    </>
}