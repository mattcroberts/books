import React from "react";
import { Link } from "react-router-dom";
import css from "./Book.css";

const Book = ({ title, author, description, isbn10 }) => (
    <article className={css.root}>
        <h2>
            <Link className={css.link} to={`/book/${isbn10}`}>
                {title}
            </Link>
        </h2>
        <span>Written by: {author}</span>
        <p>{description}</p>
    </article>
);

Book.defaultProps = {
    description: "(Description Unavailable)"
};

export default Book;
