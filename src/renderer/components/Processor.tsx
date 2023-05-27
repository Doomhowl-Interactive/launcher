import LoadingIcons from 'react-loading-icons';
import { MenuBar } from './menubar/MenuBar';
import { useEffect, useMemo, useState } from 'react';
import { getPackageInfo } from '$renderer/PackageFetcher';

interface AppInfo {
    displayName: string;
    version: string;
}

export function Processor(props: { package: string }) {
    const [info, setInfo] = useState<AppInfo | undefined>(undefined);

    useEffect(() => {
        getPackageInfo(props.package).then((info) => {
            console.log(info);
            setInfo(info);
        });
    }, [props.package]);

    return (
        <div className='processor'>
            <MenuBar />
            <h1>{info ? info.displayName : '...'}</h1>
            <h2>Downloading</h2>
            <LoadingIcons.TailSpin />
        </div>
    );
}
