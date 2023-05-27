import { PackageInfo } from './Package';

async function fetchOrThrow(url: string) {
    try {
        const res = await fetch(url, { method: 'GET' });
        return await res.text();
    } catch (e) {
        throw new Error(
            `Unable to fetch package info from ${url}. Do you have an internet connection?`,
        );
    }
}

export async function getPackageInfo(packageURL: string): Promise<PackageInfo> {
    try {
        const infoURL = `${packageURL}/packages/app.json`;
        const content = await fetchOrThrow(infoURL);
        const json =  JSON.parse(content);
        (json as any).url = packageURL
        return json as PackageInfo;
    } catch (e) {
        throw new Error(`Unable to parse package info from ${packageURL}!`);
    }
}

export function formImageURL(info: PackageInfo): string|undefined {
    if (info.image) {
        return info.url + "/" + info.image;
    } 
}