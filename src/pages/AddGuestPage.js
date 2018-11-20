import React from 'react';
import { connect } from 'react-redux';
import GuestForm from '../components/GuestForm';
import { startAddGuest } from '../actions/guests';

export class AddGuestPage extends React.Component {
    onSubmit = (guest) => {
        this.props.startAddGuest(guest);
        this.props.history.push('/admin');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Guest</h1>
                    </div>
                </div>
                <div className="content-container">
                    <GuestForm 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddGuest: (guest) => dispatch(startAddGuest(guest))
});

export default connect(undefined, mapDispatchToProps)(AddGuestPage);