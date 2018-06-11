const defaultState = {
    books: []
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case "BOOKS/FETCH_FINISHED":
            console.log(action.payload.results);
            return {
                books: action.payload.results.map(result => ({
                    title: result.title,
                    description: result.description,
                    isbn10: result.isbns[0].isbn10,
                    isbn13: result.isbns[0].isbn13
                }))
            };
    }
    return state;
};