import React from "react";

class BookControls extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        this.props.onFilter(e.target[0].value);
        e.preventDefault();
    }

    onChange(e) {
        this.props.onFilter(e.target.value);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="filter"
                    placeholder="filter"
                    onChange={this.onChange}
                />
                <button type="submit">Search</button>
            </form>
        );
    }
}
export default BookControls;
