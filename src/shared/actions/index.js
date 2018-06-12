import axios from "axios";

const actions = {
    FETCH_STARTED: "BOOKS/FETCH_STARTED",
    FETCH_FINISHED: "BOOKS/FETCH_FINISHED",
    FETCH_ERROR: "BOOKS/FETCH_ERROR"
};

export const fetchStarted = filter => {
    return {
        type: actions.FETCH_STARTED,
        payload: {
            filter
        }
    };
};

export const fetchFinished = resp => {
    return {
        type: actions.FETCH_FINISHED,
        payload: resp
    };
};

export const fetchError = err => {
    return {
        type: actions.FETCH_ERROR,
        payload: err
    };
};

const fetchBooks = filter => dispatch => {
    dispatch(fetchStarted(filter));
    axios
        .get("http://localhost:3000/books", {
            params: {
                filter: filter
            }
        })
        .then(resp => dispatch(fetchFinished(resp.data)))
        .catch(err => {
            console.error(err);
            dispatch(fetchError(err));
        });
};

export { actions, fetchBooks };
