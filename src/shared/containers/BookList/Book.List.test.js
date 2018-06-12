import { shallow } from "enzyme";
import React from "react";

import { BookListContainer } from "./index";

describe("BookList Container", () => {
    const props = {
        fetchBooks: () => ({})
    };

    it("should render", () => {
        shallow(<BookListContainer {...props} />);
    });
});
