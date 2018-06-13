import { shallow } from "enzyme";
import { expect } from "chai";
import React from "react";
import sinon from "sinon";

import { DetailContainer } from "./index";

describe("Detail Container", () => {
    const props = {
        fetchBooks: sinon.stub().returns({})
    };

    beforeEach(() => {
        props.fetchBooks.reset();
    });

    it("should render", () => {
        shallow(<DetailContainer {...props} />);
    });

    it("should fetch data on mount", () => {
        shallow(<DetailContainer {...props} />);

        expect(props.fetchBooks.callCount).to.equal(1);
    });
});
