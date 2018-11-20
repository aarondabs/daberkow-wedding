import React from 'react';
import { connect } from 'react-redux';
import GuestSearchForm from '../components/GuestSearchForm';
import GuestRSVPForm from '../components/GuestRSVPForm';
import selectGuestsInParty from '../selectors/guest-party';
import { startEditGuest } from '../actions/guests';

export class RSVPPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            partyGuests: [],
            guestNumber: 1,
            error: ''
        };
    };
    onSearchSubmit = (name) => {
        const partyGuests = selectGuestsInParty(name, this.props.guests);
        this.setState(() => ({ partyGuests }));
        if(partyGuests === undefined || partyGuests.length == 0){
            this.setState(() => ({ error: 'Guest not found. Please enter the name as it appears on the invite.' }));
        }
    };
    onRSVPSubmit = (updates) => {
        this.props.startEditGuest(this.state.partyGuests[this.state.guestNumber - 1].id, updates);
        this.setState((prevState) => ({ guestNumber: prevState.guestNumber + 1 }));
    };
    goBack = () => {
        if(this.state.guestNumber === 1){
            this.setState(() => ({ partyGuests: [], error: '' }));
        } else {
            this.setState((prevState) => ({ guestNumber: prevState.guestNumber - 1 }));
        }
    };

    render() {
        return (
            <div className="content-container">
                {
                    this.state.partyGuests.length === 0 ? (
                        <div>
                            <p className="page-info">Find your reservation by typing your first and last name as they appear on your mailed RSVP</p>
                            {this.state.error && <p className="form__error">{this.state.error}</p>}
                            <GuestSearchForm 
                                onSubmit={this.onSearchSubmit}
                            />
                        </div>
                    ) : (
                        this.state.guestNumber > this.state.partyGuests.length ? (
                            <div>
                                <h3 className="page-info">Success! Thanks for submitting your RSVP!</h3>
                            </div>
                        ) : (
                            <div>
                                <h3 className="page-info">Guest <span>{this.state.guestNumber}</span> of <span>{this.state.partyGuests.length}</span></h3>
                                <GuestRSVPForm
                                    key={this.state.partyGuests[this.state.guestNumber - 1].id}
                                    guest={this.state.partyGuests[this.state.guestNumber - 1]}
                                    onSubmit={this.onRSVPSubmit}
                                />
                                <button className="button" onClick={this.goBack}>Back</button>
                            </div>
                        )
                    )
                }
            </div>
        );
    }
} 

const mapStateToProps = (state) => {
    return {
        guests: state.guests
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditGuest: (id, guest) => dispatch(startEditGuest(id, guest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RSVPPage);