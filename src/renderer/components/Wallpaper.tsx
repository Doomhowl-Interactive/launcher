import { PackageInfo } from "$renderer/Package";
import { formImageURL } from "$renderer/PackageFetcher";

export function Wallpaper(props: {package?: PackageInfo}) {
    return props.package?.image ? (<img src={formImageURL(props.package)} className='wallpaper' />):<></>;
}
