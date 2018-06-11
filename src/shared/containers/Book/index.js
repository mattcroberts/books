import React from "react";
import { connect } from "react-redux";

import { fetchBooks, filterBooks } from "../../../shared/actions";
import BookList from "../../components/BookList";
import BookControls from "../../components/BookControls";

export class BookContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onFilter = this.onFilter.bind(this);
        this.renderBookListOrLoading = this.renderBookListOrLoading.bind(this);
    }

    onFilter(filter) {
        this.props.fetchBooks(filter);
    }

    componentDidMount() {
        this.props.fetchBooks();
    }

    renderBookListOrLoading() {
        if (!this.props.loaded) {
            return "Loading...";
        }

        return <BookList books={this.props.books} />;
    }

    render() {
        return (
            <React.Fragment>
                <BookControls onFilter={this.onFilter} />
                {this.renderBookListOrLoading()}
            </React.Fragment>
        );
    }
}

BookContainer.defaultProps = {
    books: []
};

export const mapStateToProps = state => ({
    // TODO selectors
    loaded: state.books ? state.books.loaded : false,
    books: state.books ? state.books.books : undefined
});
export const mapDispatchToProps = { fetchBooks, filterBooks };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookContainer);
