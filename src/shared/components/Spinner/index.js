import React from "react";
import css from "./Spinner.css";

// From https://loading.io/css/
const Spinner = () => (
    <div className={css.root}>
        <div className={css["lds-grid"]}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);

export default Spinner;
