import LoadingIcons from 'react-loading-icons';
import { MenuBar } from './menubar/MenuBar';
import { useEffect, useMemo, useState } from 'react';
import { getPackageInfo } from '$renderer/PackageFetcher';

interface AppInfo {
    displayName: string;
    version: string;
}

function StateText(props: { prefix: string }) {
    const [dots, setDots] = useState<number>(0);

    useEffect(() => {
        const int = setInterval(() => {
            setDots((dots) => (dots + 1) % 4);
        }, 500);
        return () => clearInterval(int);
    }, []);

    return <h2>{props.prefix}<span>{'.'.repeat(dots)}</span></h2>;
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
            {info && <h1>{info.displayName}</h1>}
            <StateText prefix='Downloading' />
            <LoadingIcons.TailSpin />
        </div>
    );
}
