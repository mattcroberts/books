import React from "react";
import { Route, Link } from "react-router-dom";
import BookListContainer from "../../containers/BookList";
import DetailContainer from "../../containers/Detail";
import "./global.css";
import css from "./App.css";

const App = () => (
    <React.Fragment>
        <h1 className={css.header}>
            Books
            <Link className={css.link} to="/">
                Home
            </Link>
        </h1>

        <Route path="/book/:isbn" component={DetailContainer} />
        <Route exact path="/" component={BookListContainer} />
    </React.Fragment>
);

export default App;
