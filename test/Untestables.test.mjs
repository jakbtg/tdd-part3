import { expect } from "chai";
import { now } from "../src/Untestables.mjs";
import { Singleton } from "../src/Untestables.mjs";

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
});
