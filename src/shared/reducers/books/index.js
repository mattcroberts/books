const defaultState = {
    loaded: false,
    books: [],
    filter: ""
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case "BOOKS/FETCH_STARTED":
            return Object.assign({}, state, {
                loaded: false,
                filter: action.payload.filter
            });
        case "BOOKS/FETCH_ERROR":
            return Object.assign({}, state, {
                loaded: true
            });
        case "BOOKS/FETCH_FINISHED":
            return Object.assign({}, state, {
                loaded: true,
                books: action.payload.results.map(result => ({
                    title: result.title,
                    author: result.author,
                    description: result.description,
                    isbn10: result.isbns[0].isbn10,
                    isbn13: result.isbns[0].isbn13
                }))
            });
    }
    return state;
};
