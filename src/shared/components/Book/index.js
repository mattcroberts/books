import React from "react";

const Book = ({ title, description }) => (
    <article>
        <h2>{title}</h2>
        <p>{description}</p>
    </article>
);

Book.defaultProps = {
    description: "(Description Unavailable)"
};

export default Book;
