import fs from 'fs';

export function now() {
    return new Date().getTime();
}

export class Singleton {
    id;

    constructor(id) {
        if (Singleton._instance) {
            throw new Error("Singleton classes can't be instantiated more than once.")
        }
        Singleton._instance = this;
        this.id = id;
    }

    static get instance() {
        return Singleton._instance;
    }

    getId() {
        return this.id;
    }
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function writeFile(fileName, content) {
    fs.writeFileSync(fileName, content);
}

export function readFile(fileName) {
    return fs.readFileSync(fileName, 'utf8');
}

export function removeFile(fileName) {
    fs.unlinkSync(fileName);
}