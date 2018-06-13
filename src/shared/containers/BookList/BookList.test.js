import { shallow } from "enzyme";
import sinon from "sinon";
import { expect } from "chai";
import React from "react";

import { BookListContainer } from "./index";

describe("BookList Container", () => {
    const props = {
        fetchBooks: sinon.stub().returns({})
    };

    beforeEach(() => {
        props.fetchBooks.reset();
    });

    it("should render", () => {
        shallow(<BookListContainer {...props} />);
    });

    it("should fetch data on mount", () => {
        shallow(<BookListContainer {...props} />);

        expect(props.fetchBooks.callCount).to.equal(1);
    });
});
