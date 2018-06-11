import React from "react";

const BookList = ({ books }) =>
    books.map(book => {
        return <Book book={book} />;
    });

export default BookList;
