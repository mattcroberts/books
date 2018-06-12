import { Router } from "express";
import rawData from "./data.json";

const bookResp = Object.assign({}, rawData, {
    results: rawData.results.map((result, i) => {
        if (!result.isbns.length) {
            return Object.assign({}, result, {
                isbns: [
                    {
                        isbn10: `isbn${i.toFixed(6)}`,
                        isbn13: `isbn${i.toFixed(9)}`
                    }
                ]
            });
        }
        return result;
    })
});

const filterBooks = (books, filter) => {
    return books.filter(book => {
        return (
            !filter ||
            (book.title || "").toLowerCase().includes(filter) ||
            (book.author || "").toLowerCase().includes(filter) ||
            (book.description || "").toLowerCase().includes(filter)
        );
    });
};
const router = new Router();

router.get("/", (req, res, next) => {
    const { filter } = req.query;
    // simulate slow connection
    setTimeout(() => {
        let resp = Object.assign({}, bookResp);

        if (filter) {
            Object.assign(resp, {
                results: filterBooks(bookResp.results, filter)
            });
        }

        res.json(resp);
    }, 1000);
});
export default router;
