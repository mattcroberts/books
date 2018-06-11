import express from "express";
import { renderToString } from "react-dom/server";
import { join } from "path";

const app = express();
app.set("views", join(__dirname, "./views"));
app.get("/books", (req, res, next) => {
    res.json({});
});
app.get("*", (req, res, next) => {
    // render react
    res.render("index.ejs", {
        app: "bam"
    });
});

app.listen(3000, () => {
    console.log("Listening on 3000");
});
