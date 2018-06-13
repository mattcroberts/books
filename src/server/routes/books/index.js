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

export const filterBooks = (books, filter) => {
    return books.filter(book => {
        return (
            !filter ||
            (book.title || "").toLowerCase().includes(filter) ||
            (book.author || "").toLowerCase().includes(filter) ||
            (book.description || "").toLowerCase().includes(filter)
        );
    });
};
export const get = (req, res) => {
    const { filter } = req.query;
    let resp = Object.assign({}, bookResp);
    
    if (filter) {
        Object.assign(resp, {
            results: filterBooks(bookResp.results, filter.toLowerCase())
        });
    }

    res.json(resp);
};

const router = new Router();

router.get("/", get);
export default router;
