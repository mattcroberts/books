import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { join } from "path";
import ejs from "ejs";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";

import booksRouter from "./routes/books";

import App from "../shared/components/App";

const store = {
    getState() {
        return {};
    }
};

const app = express();
app.engine("ejs", ejs.renderFile);
app.set("views", join(__dirname, "./views"));
app.get("/books", booksRouter);

app.use("/static", express.static(join(__dirname, "../../dist/client/")));

app.use("/books", booksRouter);

app.get("*", (req, res, next) => {
    const context = {};
    res.render("index.ejs", {
        bundle: "/static/client.bundle.js",
        app: renderToString(
            <Provider store={store}>
                <StaticRouter context={context} location={req.url}>
                    <App />
                </StaticRouter>
            </Provider>
        )
    });
});

app.listen(3000, () => {
    console.log("Listening on 3000");
});
