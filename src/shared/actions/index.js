import axios from "axios";

const booksFetchStarted = filter => {
    return {
        type: "BOOKS/FETCH_STARTED",
        payload: {
            filter
        }
    };
};

const booksFetchFinished = resp => {
    return {
        type: "BOOKS/FETCH_FINISHED",
        payload: resp
    };
};

const booksFetchError = err => {
    return {
        type: "BOOKS/FETCH_ERROR",
        payload: err
    };
};

const fetchBooks = filter => dispatch => {
    dispatch(booksFetchStarted(filter));
    axios
        .get("http://localhost:3000/books", {
            params: {
                filter: filter
            }
        })
        .then(resp => dispatch(booksFetchFinished(resp.data)))
        .catch(err => {
            console.error(err);
            dispatch(booksFetchError(err));
        });
};

export { fetchBooks };
