import { actions } from "../../actions";

const defaultState = {
    loaded: false,
    books: [],
    filter: ""
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actions.FETCH_STARTED:
            return Object.assign({}, state, {
                loaded: false,
                filter: action.payload.filter
            });
        case actions.FETCH_ERROR:
            return Object.assign({}, state, {
                loaded: true
            });
        case actions.FETCH_FINISHED:
            return Object.assign({}, state, {
                loaded: true,
                books: action.payload.results.map(result => ({
                    title: result.title,
                    author: result.author,
                    description: result.description,
                    isbn10: result.isbns[0].isbn10,
                    isbn13: result.isbns[0].isbn13,
                    ranksHistory: result.ranks_history
                }))
            });
    }
    return state;
};

export const getBookByIsbn10 = ({ books }, isbn10) => {
    return books && books.books
        ? books.books.find(book => book.isbn10 === isbn10)
        : null;
};
