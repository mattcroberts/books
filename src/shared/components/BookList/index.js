import React from "react";

import Book from "../Book";

const BookList = ({ books }) =>
    books.map(book => {
        return (
            <Book
                key={book.isbn10}
                title={book.title}
                author={book.auth}
                description={book.description || undefined}
                isbn10={book.isbn10}
            />
        );
    });

export default BookList;
