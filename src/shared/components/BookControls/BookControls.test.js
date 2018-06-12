import mocha from "mocha";
import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";

import BookControls from "./index";

describe("BookControls", () => {
    it("should render", () => {
        shallow(<BookControls />);
    });
});
