// preload.ts

document.addEventListener('DOMContentLoaded', () => {
    // HACK: There is probably a better way to do this
    if (sessionStorage) {
        sessionStorage.setItem(
            'diagnostics',
            JSON.stringify({
                version: process.env.npm_package_version,
                electron: process.versions.electron,
                chrome: process.versions.chrome,
                node: process.versions.node,
                v8: process.versions.v8,
                os: process.platform,
                arch: process.arch,
                env: process.env.NODE_ENV,
            }),
        );
    } else {
        console.error('sessionStorage not found');
    }
});
