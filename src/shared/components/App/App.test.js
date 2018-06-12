import mocha from "mocha";
import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";

import App from "./index";

describe("App", () => {
    it("should render", () => {
        shallow(<App />);
    });
});
