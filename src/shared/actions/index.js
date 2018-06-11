import axios from "axios";

const booksFetchStarted = () => {
    return {
        type: "BOOKS/FETCH_STARTED"
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

const fetchBooks = () => dispatch => {
    dispatch(booksFetchStarted());
    axios
        .get("http://localhost:3000/books")
        .then(resp => dispatch(booksFetchFinished(resp.data)))
        .catch(err => {
            console.error(err);
            dispatch(booksFetchError(err));
        });
};

export { fetchBooks };
