import { useContext } from "react";
import { AppContext } from "./App";

export function Wallpaper() {
    const app = useContext(AppContext);
    return <img className='wallpaper' />;
}
