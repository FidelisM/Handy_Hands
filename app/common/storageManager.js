export function createStorage(key) {
    localStorage.setItem(key, JSON.stringify({}));
}

export function getStorage(key) {
    let storage = localStorage.getItem(key);

    if (storage) {
        return JSON.parse(localStorage.getItem(key));
    }

    return null;
}

export function setStorage(key, data) {
    let storage = localStorage.getItem(key),
        storageJSON = {};

    if (storage) {
        storageJSON = JSON.parse(storage)
    }

    localStorage.setItem(key, JSON.stringify(Object.assign(storageJSON, data)))
}
