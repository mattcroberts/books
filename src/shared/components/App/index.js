import React from "react";
import { Route } from "react-router-dom";
import BookContainer from "../../containers/Book";
import DetailContainer from "../../containers/Detail";

const App = () => (
    <React.Fragment>
        <h1>Books</h1>
        <Route path="/" component={BookContainer} />
        <Route path="/book/:isbn" component={DetailContainer} />
    </React.Fragment>
);

export default App;
