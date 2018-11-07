import React from 'react';
import { connect } from 'react-redux';
import { startAddGuest } from '../actions/guests';

export class AddGuestPage extends React.Component {
    onClick = () => {
        const guest = {
            firstName: 'Aaron',
                lastName: 'Daberkow',
                partyName: 'Daberkows',
                hasPlusOne: true,
                plusOneName: 'Hannah Alexander'
        }
        this.props.startAddGuest(guest);
        // this.props.history.push('/');
    };
    render() {
        return (
            <div>
            <button onClick={this.onClick}>Test Add Guest</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddGuest: (guest) => dispatch(startAddGuest(guest))
});

export default connect(undefined, mapDispatchToProps)(AddGuestPage);