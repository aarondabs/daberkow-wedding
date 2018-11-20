import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectGuestsAttending from '../selectors/guests-attending';
import selectGuests from '../selectors/guests';
import selectPlusOneCount from '../selectors/guests-plus-one-count';

export const GuestsSummary = ({ guestCount, attendingNumber, plusOneCount }) => {
    const guestWord = guestCount === 1 ? 'guest' : 'guests';
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{guestCount}</span> {guestWord} with <span>{attendingNumber}</span> expected and <span>{plusOneCount}</span> plus ones</h1>
                <div className="page-header__actions">
                    <Link className="button" to="/admin/add">Add Guest</Link>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleGuests = selectGuests(state.guests, state.filters);
    return {
        guestCount: visibleGuests.length,
        attendingNumber: selectGuestsAttending(visibleGuests),
        plusOneCount: selectPlusOneCount(visibleGuests)
    };
};

export default connect(mapStateToProps)(GuestsSummary);