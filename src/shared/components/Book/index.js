import React from "react";
import { Link } from "react-router-dom";

const Book = ({ title, author, description, isbn10 }) => (
    <article>
        <h2>
            <Link to={`/book/${isbn10}`}>{title}</Link>
        </h2>
        <span>Written by: {author}</span>
        <p>{description}</p>
    </article>
);

Book.defaultProps = {
    description: "(Description Unavailable)"
};

export default Book;
