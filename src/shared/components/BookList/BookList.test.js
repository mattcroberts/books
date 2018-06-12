import { expect } from "chai";
import { mount, shallow } from "enzyme";
import React from "react";

import BookList from "./index";
import Book from "../Book";

const books = [
    {
        title: "title",
        author: "author",
        description: "description",
        isbn10: "0123456789",
        isbn13: "0123456789111"
    },
    {
        title: "title2",
        author: "author2",
        description: "description2",
        isbn10: "1123456789",
        isbn13: "1123456789111"
    }
];
describe("BookList", () => {
    it("should render", () => {
        shallow(<BookList books={[]} />);
    });

    it("should render all books in list", () => {
        const component = mount(<BookList books={books} />);
        expect(component.find(Book).length).to.equal(2);
    });
});
