import React from "react";
import { Route, Link } from "react-router-dom";
import BookContainer from "../../containers/Book";
import DetailContainer from "../../containers/Detail";
import "./global.css";
import css from "./App.css";

const App = () => (
    <React.Fragment>
        <h1>Books</h1>
        <Link className={css.link} to="/">
            Home
        </Link>
        <Route path="/book/:isbn" component={DetailContainer} />
        <Route exact path="/" component={BookContainer} />
    </React.Fragment>
);

export default App;