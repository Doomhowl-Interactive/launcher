import { PackageInfo } from './Package';

function makeURL(url: string) {
    if (url.endsWith('/app.json')) {
        return url;
    } else if (url.endsWith('/packages')) {
        return url + 'app.json';
    } else {
        return url + '/packages/app.json';
    }
}

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
    const url = makeURL(packageURL);
    try {
        const content = await fetchOrThrow(url);
        return JSON.parse(content);
    } catch (e) {
        throw new Error(`Unable to parse package info from ${url}!`);
    }
}
