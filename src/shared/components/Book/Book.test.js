import { shallow } from "enzyme";
import React from "react";

import Book from "./index";

describe("Book", () => {
    it("should render", () => {
        shallow(<Book />);
    });
});
