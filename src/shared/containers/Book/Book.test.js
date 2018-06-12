import mocha from "mocha";
import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";

import { BookContainer } from "./index";

describe("Book Container", () => {
    const props = {
        fetchBooks: () => ({})
    };

    it("should render", () => {
        shallow(<BookContainer {...props} />);
    });
});
