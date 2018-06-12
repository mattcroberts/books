import React from "react";
import { connect } from "react-redux";

import { getBookByIsbn10 } from "../../reducers/books";

export class DetailContainer extends React.Component {
    render() {
        return <div>Detail</div>;
    }
}

export const mapStateToProps = (state, { match }) => ({
    title: getBookByIsbn10(state, match.params.isbn)
});

export default connect(
    mapStateToProps,
    null
)(DetailContainer);
