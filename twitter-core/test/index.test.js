"use strict";

import {expect} from "chai";
import Twitter from "../source/index";

describe("Twitter namespace", () => {
    it("shall exist", () => {
        expect(Twitter).to.be.defined;
    });

    describe("Twitter.User", () => {
        it("shall exist", () => {
            let user = new Twitter.User();

            expect(user).to.be.defined;
        });
    });
});
