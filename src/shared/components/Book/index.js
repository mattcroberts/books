import React from "react";

const Book = ({ title, author, description }) => (
    <article>
        <h2>{title}</h2>
        <span>Written by: {author}</span>
        <p>{description}</p>
    </article>
);

Book.defaultProps = {
    description: "(Description Unavailable)"
};

export default Book;
