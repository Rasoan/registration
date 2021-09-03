import style from "./style.module.scss"
import profile from "../../stores/profile";
import {Space, Table} from "antd";
import Image from  'next/image'

export default function AboutMe() {
    const columns = [
        {
            title: 'Tittle',
            dataIndex: 'tittle',
            key: 'tittle',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
    ];

    const dataSource = [
        {
            key: '1',
            tittle: "Логин",
            description: profile.login,
        },
        {
            key: '2',
            tittle: "Фамилия",
            description: profile.surname,
        },
        {
            key: '3',
            tittle: "Имя",
            description: profile.name,
        },
        {
            key: '4',
            tittle: "Дата рождения",
            description: profile.dateOfBirth,
        },
    ];

    return <div className={style.container}>
        <Space align="center">
            <Image width={300}
                   height={240}
                   className={style.photo}
                   alt={`${profile.surname} ${profile.name}`}
                   src={profile.photo}
            />
            <Table dataSource={dataSource}
                   columns={columns}
                   showHeader={false}
                   pagination={false}
            />
        </Space>
    </div>
}