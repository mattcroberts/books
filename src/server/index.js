import express from "express";
import { join } from "path";
import ejs from "ejs";

import booksRouter from "./routes/books";
import indexRouter from "./routes/index";

const app = express();

app.engine("ejs", ejs.renderFile);
app.set("views", join(__dirname, "./views"));

app.get("/books", booksRouter);

app.use("/static", express.static(join(__dirname, "../../dist/client/")));

app.use("/books", booksRouter);
app.use("*", indexRouter);

app.listen(3000, () => {
    console.log("Listening on 3000");
});
