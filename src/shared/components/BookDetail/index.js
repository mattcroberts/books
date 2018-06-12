import React from "react";
import css from "./BookDetail.css";

const BookDetail = ({ title, ranksHistory = [] }) => (
    <div className={css.root}>
        <h2>{title}</h2>

        {ranksHistory.map(
            ({
                primary_isbn10,
                primary_isbn13,
                rank,
                list_name,
                display_name,
                published_date,
                bestsellers_date,
                weeks_on_list,
                ranks_last_week,
                asterisk,
                dagger
            }) => (
                <dl key={`${primary_isbn10}`} className={css.rank}>
                    <dt>ISBN10</dt>
                    <dd>{primary_isbn10}</dd>

                    <dt>ISBN13</dt>
                    <dd>{primary_isbn13}</dd>

                    <dt>Rank</dt>
                    <dd>{rank}</dd>

                    <dt>List Name</dt>
                    <dd>{list_name}</dd>

                    <dt>Display Name</dt>
                    <dd>{display_name}</dd>

                    <dt>Published Date</dt>
                    <dd>{published_date}</dd>

                    <dt>Bestsellers Date</dt>
                    <dd>{bestsellers_date}</dd>

                    <dt>Weeks On List</dt>
                    <dd>{weeks_on_list}</dd>

                    <dt>Ranks Last Week</dt>
                    <dd>{ranks_last_week}</dd>

                    <dt>Asterisk</dt>
                    <dd>{asterisk}</dd>

                    <dt>Dagger</dt>
                    <dd>{dagger}</dd>
                </dl>
            )
        )}
    </div>
);

export default BookDetail;
