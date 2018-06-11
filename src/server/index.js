import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { join } from "path";
import ejs from "ejs";

import bookResp from "./data/data.json";
import App from "../shared/components/App";

let manifest = null;

const app = express();
app.engine("ejs", ejs.renderFile);
app.set("views", join(__dirname, "./views"));
app.get("/books", (req, res, next) => {
    res.json(bookResp);
});
app.get("*", (req, res, next) => {
    res.render("index.ejs", {
        bundle: "client.bundle.js",
        app: renderToString(<App />)
    });
});

app.listen(3000, () => {
    console.log("Listening on 3000");
});
