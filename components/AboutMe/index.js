import profile from "../../stores/profile";
import Image from "next/image";

export default function AboutMe() {
    return <>
        <Image src={profile.photo} width={100} height={100} alt="Picture of the author" />
        <table>
            <tr>
                <td>
                    логин
                </td>
                <td>
                    {profile.login}
                </td>
            </tr>
            <tr>
                <td>
                   Имя
                </td>
                <td>
                    {profile.name}
                </td>
            </tr>
            <tr>
                <td>
                    Фамилия
                </td>
                <td>
                    {profile.surname}
                </td>
            </tr>
            <tr>
                <td>
                    Дата рождения
                </td>
                <td>
                    {profile.dateOfBirth}
                </td>
            </tr>
        </table>
    </>
}