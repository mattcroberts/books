import { expect } from "chai";
import sinon from "sinon";
import { filterBooks, get } from "./index";

// const { get } = route;

describe("Books route", () => {
    let filterSpy;

    beforeEach(() => {
        filterSpy = sinon.spy(filterBooks);
    });

    afterEach(() => {
        //route.filterBooks.restore();
    });

    it("should add missing isbns", () => {
        const jsonStub = sinon.stub();
        get(
            {
                query: {}
            },
            {
                json: jsonStub
            }
        );
        
        expect(jsonStub.callCount).to.equal(1);
        expect(jsonStub.firstCall.args[0].results[5].isbns[0].isbn10).to.equal(
            "isbn5.000000"
        );
    });

    it("should filter books", () => {
        const jsonStub = sinon.stub();
        get(
            {
                query: {
                    filter: "PATRIARCHS"
                }
            },
            {
                json: jsonStub
            }
        );
        
        expect(jsonStub.callCount).to.equal(1);
        expect(jsonStub.firstCall.args[0].results.length).to.equal(1);
    });
});
