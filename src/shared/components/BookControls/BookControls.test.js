import { shallow } from "enzyme";
import React from "react";

import BookControls from "./index";

describe("BookControls", () => {
    it("should render", () => {
        shallow(<BookControls />);
    });
});
