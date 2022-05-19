import { expect } from "chai";
import { now, Singleton, getRandomInt } from "../src/Untestables.mjs";

describe("Time test", () => {
    // This test won't pass all the time, but randomly.
    it("get current time", () => {
        expect(now()).to.equal(new Date().getTime());
    });
});

describe("Singleton test", () => {
    // This test won't pass because I can't instantiate the class more than once.
    it("get id of two singleton instances", () => {
        const instance1 = new Singleton("1");
        const instance2 = new Singleton("1");
        expect(instance1.getId()).to.equal(instance2.getId());
    });

    // I can check if it's already instantiated.
    it("check if it's already instantiated", () => {
        expect(Singleton.instance).to.exist;
    });

    // And I can get the id.
    it("get id", () => {
        expect(Singleton.instance.getId()).to.equal("1");
    });
});

describe("Random test", () => {
    // Cannot compare two random numbers, it will pass only if I'm really lucky.
    it("compare random numbers", () => {
        let random1 = getRandomInt(0, 10);
        let random2 = getRandomInt(0, 10);
        expect(random1).to.equal(random2);
    });
    
    // I can check if the random number is in the range.
    it("get random int", () => {
        expect(getRandomInt(0, 10)).to.be.within(0, 10);
    });
});
