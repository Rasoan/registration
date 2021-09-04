import App from "../../components/App";
import {observer} from "mobx-react";
import AboutMe from "../../components/AboutMe";

const Profile = () => {
    return <>
        <App tittle={"Профайл"}>
            <AboutMe />
        </App>
    </>
}

export default observer(Profile)