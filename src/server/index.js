import express from "express";
import React from "React";
import { renderToString } from "react-dom/server";
import { join } from "path";

import App from "../shared/components/App";

const app = express();
app.set("views", join(__dirname, "./views"));
app.get("/books", (req, res, next) => {
    res.json({});
});
app.get("*", (req, res, next) => {
    // render react
    res.render("index.ejs", {
        app: renderToString(<App />)
    });
});

app.listen(3000, () => {
    console.log("Listening on 3000");
});
