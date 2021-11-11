// https://www.codewars.com/kata/5bc7bb444be9774f100000c3/train/javascript

const vm = (version='0.0.1') => {
    if (version === '') version = '0.0.1';

    let newVersion = version.split('.').every((x) => parseInt(x, 10));
    let error = null;
    let lastModifiedVersion = null;

    if (newVersion.length > 3) newVersion.splice(3);
    if (newVersion.length === 1) newVersion = [parseInt(newVersion[0], 10), 0, 0];
    if (newVersion.length === 2) newVersion = [parseInt(newVersion[0], 10), parseInt(newVersion[1], 10), 0];

    if (!newVersion.every((v) => (/^\d+$/).test(v))) {
        throw Error('Error occured while parsing version!');
    }

    const api = {
        major() {
            lastModifiedVersion = newVersion;
            // 1.2.3 => 2.0.0
            newVersion = [parseInt(newVersion[0], 10) + 1, 0, 0];
            return this;
        },

        minor() {
            lastModifiedVersion = newVersion;
            // 1.2.3 => 1.3.0
            newVersion = [parseInt(newVersion[0], 10), parseInt(newVersion[1], 10) + 1, 0];
            return this;
        },

        patch() {
            lastModifiedVersion = newVersion;
            newVersion = [parseInt(newVersion[0], 10), parseInt(newVersion[1], 10), parseInt(newVersion[2], 10) + 1];
            return this;
        },

        release() {
            console.log(error ? error : newVersion.join('.'));
            return error ? error : newVersion.join('.');
        },

        rollback() {
            if (!lastModifiedVersion) throw Error('Cannot rollback!');
            if (lastModifiedVersion) newVersion = lastModifiedVersion;
            return this;
        }
    }
    return api;
};
