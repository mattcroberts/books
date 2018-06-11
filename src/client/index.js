import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import App from "../shared/components/App";
import store from "../shared/store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
