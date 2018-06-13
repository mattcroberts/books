import { Router } from "express";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { combineReducers } from "redux";
import React from "react";
import { renderToString } from "react-dom/server";

import App from "../../../shared/components/App";
import reducers from "../../../shared/reducers";

const store = createStore(combineReducers(reducers));
const router = new Router();
router.get("*", (req, res) => {
    const context = {};
    res.render("index.ejs", {
        bundle: "/static/client.bundle.js",
        styles: "/static/client.css",
        app: renderToString(
            <Provider store={store}>
                <StaticRouter context={context} location={req.url}>
                    <App />
                </StaticRouter>
            </Provider>
        )
    });
});

export default router;
