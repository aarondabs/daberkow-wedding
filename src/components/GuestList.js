import React from 'react';
import { connect } from 'react-redux';
import GuestListItem from './GuestListItem';
// import selectExpenses from '../selectors/expenses';

export const GuestList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Guests</div>
            <div className="show-for-desktop">Guest</div>
            <div className="show-for-desktop">Reply</div>
        </div>
        <div className="list-body">
        {
            props.guests.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No guests</span>
                </div>
            ) : (
                props.guests.map((guest) => {
                    return <GuestListItem key={guest.id} {...guest} />
                })
            )
        }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        //TODO add filtering
        // expenses: selectExpenses(state.expenses, state.filters)
        guests: state.guests
    };
};

export default connect(mapStateToProps)(GuestList);