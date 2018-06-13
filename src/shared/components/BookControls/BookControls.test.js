import { shallow } from "enzyme";
import { expect } from "chai";
import React from "react";
import sinon from "sinon";

import BookControls from "./index";

describe("BookControls", () => {
    it("should render", () => {
        shallow(<BookControls />);
    });

    it("should call onFilter on form submission", () => {
        const stub = sinon.stub();
        const stubEvent = {
            target: [
                {
                    value: "test"
                }
            ],
            preventDefault: sinon.stub()
        };
        const component = shallow(<BookControls onFilter={stub} />);
        component.find("form").simulate("submit", stubEvent);

        expect(stub.callCount).to.equal(1);
        expect(stub.calledWithExactly("test")).to.equal(true);
    });

    it("should call onFilter on input change", () => {
        const stub = sinon.stub();
        const stubEvent = {
            target: {
                value: "test"
            }
        };
        const component = shallow(<BookControls onFilter={stub} />);
        component.find("input").simulate("change", stubEvent);

        expect(stub.callCount).to.equal(1);
        expect(stub.calledWithExactly("test")).to.equal(true);
    });

    it("should call preventDefault on form submission", () => {
        const stub = sinon.stub();
        const stubEvent = { target: [{}], preventDefault: sinon.stub() };
        const component = shallow(<BookControls onFilter={stub} />);
        component.find("form").simulate("submit", stubEvent);

        expect(stubEvent.preventDefault.callCount).to.equal(1);
    });
});
