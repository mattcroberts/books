import React from "react";
import { connect } from "react-redux";

import { fetchBooks } from "../../../shared/actions";
import BookList from "../../components/BookList";

export class BookContainer extends React.Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        console.log("!!", this.props);
        return <BookList books={this.props.books} />;
    }
}

BookContainer.defaultProps = {
    books: []
};

export const mapStateToProps = state => ({
    books: state.books ? state.books.books : undefined
});
export const mapDispatchToProps = { fetchBooks };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookContainer);
