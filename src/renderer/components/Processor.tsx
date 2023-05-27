import LoadingIcons from 'react-loading-icons';
import { MenuBar } from './menubar/MenuBar';
import { useContext, useEffect, useState } from 'react';
import { getPackageInfo } from '$renderer/PackageFetcher';
import { AppContext } from './App';
import { PackageInfo } from '$renderer/Package';

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
    const app = useContext(AppContext);
    const [pack, setPack] = useState<PackageInfo | undefined>(undefined);

    useEffect(() => {
        getPackageInfo(props.package).then((info) => {
            app?.fetchedPackage(info);
            setPack(info);
        });
    }, [props.package]);

    return (
        <div className='processor'>
            <MenuBar />
            {pack && <h1>{pack.displayName}</h1>}
            <StateText prefix='Downloading' />
            <LoadingIcons.TailSpin />
        </div>
    );
}
