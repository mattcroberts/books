import React from "react";
import { connect } from "react-redux";

import { getBookByIsbn10 } from "../../reducers/books";
import BookDetail from "../../components/BookDetail";
import { fetchBooks } from "../../actions";

export class DetailContainer extends React.Component {
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        return <BookDetail {...this.props} />;
    }
}

export const mapStateToProps = (state, { match }) => {
    const book = getBookByIsbn10(state, match.params.isbn);

    return book
        ? {
              title: book.title,
              ranksHistory: book.ranksHistory
          }
        : {};
};

export default connect(
    mapStateToProps,
    { fetchBooks }
)(DetailContainer);
