import React from 'react';

export default class GuestSearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
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
    
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.firstName || !this.state.lastName) {
            this.setState(() => ({ error: 'Please provide first and last name.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
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
                    
                    <div>
                        <button className="button">Find</button>
                    </div>
                </form>
        );
    }
}