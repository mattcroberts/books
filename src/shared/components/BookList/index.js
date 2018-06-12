import React from "react";

import Book from "../Book";
import css from "./BookList.css";

const BookList = ({ books }) => (
    <div className={css.root}>
        {books.map(book => {
            return (
                <Book
                    key={book.isbn10}
                    title={book.title}
                    author={book.auth}
                    description={book.description || undefined}
                    isbn10={book.isbn10}
                />
            );
        })}
    </div>
);

export default BookList;
