import { expect } from "chai";
import { now } from "../src/Untestables.mjs";

describe("Time based test", () => {
    it("get current time", () => {
        expect(now()).to.equal(new Date().getTime());
    });
});
