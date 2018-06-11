import React from "react";

import Book from "../Book";

const BookList = ({ books }) =>
    books.map(book => {
        return (
            <Book
                key={book.isbn10}
                title={book.title}
                author={book.author}
                description={book.description || undefined}
            />
        );
    });

export default BookList;
