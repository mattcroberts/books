import { expect } from "chai";

import reducer from "./index";
import { fetchStarted, fetchFinished } from "../../actions";

describe("Book reducer", () => {
    let state;

    beforeEach(() => {
        state = {
            test: 123,
            a: 1
        };
    });

    it("should return state by default", () => {
        expect(
            reducer(state, {
                type: "not-an-action"
            })
        ).to.deep.equal(state);
    });

    it("should set loading flag=false when fetch starts", () => {
        expect(reducer(undefined, fetchStarted())).to.have.property(
            "loaded",
            false
        );
    });

    it("should set loading flag=true when fetch ends", () => {
        expect(
            reducer(undefined, fetchFinished({ results: [] }))
        ).to.have.property("loaded", true);
    });
});
