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