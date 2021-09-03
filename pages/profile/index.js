import Index from "../../components/App";
import {observer} from "mobx-react";
import AboutMe from "../../components/AboutMe";

const Profile = () => {
    return <>
        <Index tittle={"Профайл"}>
            <AboutMe />
        </Index>
    </>
}
export default observer(Profile)