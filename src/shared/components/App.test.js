import mocha from "mocha";
import { expect } from "chai";
import { shallow } from "enzyme";
import React from "react";

import App from "./App";

describe("App", () => {
    it("should render", () => {
        shallow(<App />);
    });
});
