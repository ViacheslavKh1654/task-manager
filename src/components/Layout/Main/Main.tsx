import s from "./main.module.css"
import {Outlet} from "react-router-dom";

export const Main = () => {


    return (
            <main className={s.main}>
                <div className="inner">
                    <Outlet/>
                </div>
            </main>
    )
}