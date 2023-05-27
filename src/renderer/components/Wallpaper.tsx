import { useContext } from "react";
import { AppContext } from "./App";

export function Wallpaper() {
    const app = useContext(AppContext);

    return app?.package?.image ? (<img src={app.package.image} className='wallpaper' />):<></>;
}
