import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import s from "./mainLayout.module.css";
import {Main} from "./Main/Main";

export const MainLayout = () => {

    return (
        <div className={s.layout}>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}
