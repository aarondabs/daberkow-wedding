import React from 'react';
import { connect } from 'react-redux';
import GuestForm from './GuestForm';
import { startEditGuest, startRemoveGuest } from '../actions/guests';

export class EditGuestPage extends React.Component {
    onSubmit = (guest) => {
        this.props.startEditGuest(this.props.guest.id, guest);
        this.props.history.push('/admin');
    };
    onClick = () => {
        this.props.startRemoveGuest({ id: this.props.guest.id });
        this.props.history.push('/admin');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Guest</h1>
                    </div>
                </div>
                <div className="content-container">
                    <GuestForm 
                        guest={this.props.guest}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onClick}>Remove Guest</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        guest: state.guests.find((guest) => guest.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditGuest: (id, guest) => dispatch(startEditGuest(id, guest)),
    startRemoveGuest: (data) => dispatch(startRemoveGuest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditGuestPage);