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
const router = new Router();

router.get("/", (req, res, next) => {
    res.json(bookResp);
});
export default router;
