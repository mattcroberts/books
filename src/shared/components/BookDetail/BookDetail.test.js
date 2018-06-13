import { shallow } from "enzyme";
import { expect } from "chai";
import React from "react";

import BookDetail from "./index";

describe("BookDetail", () => {
    const props = {
        title: "test",
        ranksHistory: [
            {
                primary_isbn10: "0871404427",
                primary_isbn13: "9780871404428",
                rank: 16,
                list_name: "Hardcover Nonfiction",
                display_name: "Hardcover Nonfiction",
                published_date: "2016-05-01",
                bestsellers_date: "2016-04-16",
                weeks_on_list: 1,
                ranks_last_week: null,
                asterisk: 1,
                dagger: 0
            },
            {
                primary_isbn10: "0399178570",
                primary_isbn13: "9780399178573",
                rank: 8,
                list_name: "Advice How-To and Miscellaneous",
                display_name: "Advice, How-To & Miscellaneous",
                published_date: "2016-09-04",
                bestsellers_date: "2016-08-20",
                weeks_on_list: 1,
                ranks_last_week: null,
                asterisk: 0,
                dagger: 0
            }
        ]
    };

    beforeEach(() => {});

    it("should render", () => {
        shallow(<BookDetail {...props} />);
    });

    it("should render all ranks history segments", () => {
        const component = shallow(<BookDetail {...props} />);

        expect(component.find("dl").length).to.equal(2);
    });
});
