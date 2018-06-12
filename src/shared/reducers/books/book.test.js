import { expect } from "chai";

import reducer from "./index";
import { fetchStarted, fetchFinished, fetchError } from "../../actions";
import data from "./fixtures/bookResponse.json";

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
            reducer({ loaded: false }, fetchFinished({ results: [] }))
        ).to.have.property("loaded", true);
    });

    it("should set loading flag=true when fetch errors", () => {
        expect(
            reducer({ loaded: false }, fetchError(new Error()))
        ).to.have.property("loaded", true);
    });

    it("should store book data in state", () => {
        const result = reducer(undefined, fetchFinished(data));

        expect(result).to.have.nested.property("books.length", 2);
        expect(result).to.have.deep.nested.property("books[0]", {
            author: "Diana Gabaldon",
            description:
                "The author of the Outlander novels gives tips on writing sex scenes, drawing on examples from the books.",
            isbn10: "0399178570",
            isbn13: "9780399178573",
            title: '"I GIVE YOU MY BODY ..."'
        });
    });
});
