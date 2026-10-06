import { Outlet } from "react-router-dom";

import style from "./style.module.css";

export default function Guest() {
    return (
        <>
            <div className={style.content}>
                <Outlet />
            </div>
        </>
    )
}
