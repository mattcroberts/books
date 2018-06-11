import React from "react";
import { connect } from "react-redux";

import { fetchBooks } from "../../../shared/actions";
import BookList from "../../components/BookList";

export class BookContainer extends React.Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        if (!this.props.loaded) {
            return "Loading...";
        }

        return <BookList books={this.props.books} />;
    }
}

BookContainer.defaultProps = {
    books: []
};

export const mapStateToProps = state => ({
    loaded: state.books ? state.books.loaded : false,
    books: state.books ? state.books.books : undefined
});
export const mapDispatchToProps = { fetchBooks };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookContainer);
