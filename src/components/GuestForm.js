import React from 'react';

export default class GuestForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: props.guest ? props.guest.firstName : '',
            lastName: props.guest ? props.guest.lastName : '',
            partyName: props.guest ? props.guest.partyName : '',
            hasPlusOne: props.guest ? props.guest.hasPlusOne : false,
            error: ''
        };
    }
    onFirstNameChange = (e) => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));
    };
    onLastNameChange = (e) => {
        const lastName = e.target.value;
        this.setState(() => ({ lastName }));
    };
    onPartyNameChange = (e) => {
        const partyName = e.target.value;
        this.setState(() => ({ partyName }));
    };
    onHasPlusOneChange = (e) => {
        const hasPlusOne = e.target.value;
        this.setState(() => ({ hasPlusOne }));
    };
    
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.firstName || !this.state.lastName || !this.state.partyName) {
            this.setState(() => ({ error: 'Please provide all guest info.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                partyName: this.state.partyName,
                hasPlusOne: this.state.hasPlusOne
            });
        }
    };
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input 
                        type="text"
                        placeholder="First Name"
                        autoFocus
                        className="text-input"
                        value={this.state.firstName}
                        onChange={this.onFirstNameChange}
                    />
                    <input 
                        type="text"
                        placeholder="Last Name"
                        className="text-input"
                        value={this.state.lastName}
                        onChange={this.onLastNameChange}
                    />
                    <input 
                        type="text"
                        placeholder="Party Name"
                        className="text-input"
                        value={this.state.partyName}
                        onChange={this.onPartyNameChange}
                    />
                    <select
                        className="select"
                        value={this.state.hasPlusOne}
                        onChange={this.onHasPlusOneChange}
                    >
                        <option value={false}>No Plus One</option>
                        <option value={true}>Has Plus One</option>
                    </select>
                    
                    <div>
                        <button className="button">Save Guest</button>
                    </div>
                </form>
        );
    }
}