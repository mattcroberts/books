import express from "express";

const app = express();

app.get("/books", (req, res, next) => {
    res.json({});
});
app.get((req, res, next) => {
    // render react
});
