import React from 'react';

export default class GuestRSVPForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            attending: undefined,
            plusOneName: '',
            error: ''
        };
    }

    onAttendingChange = (e) => {
        const attending = e.target.value;
        if(attending === 'true'){
            this.setState(() => ({ attending: true }));
        } else if(attending === 'false'){
            this.setState(() => ({ attending: false }));
        }
        
    };

    onFirstNameChange = (e) => {
        const firstName = e.target.value;
        this.setState(() => ({ firstName }));
    };
    
    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.attending === undefined) {
            this.setState(() => ({ error: 'Please select if you will be in attendance.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                ...this.props.guest,
                attending: this.state.attending,
                plusOneName: this.state.plusOneName,
                hasReplied: true
            });
        }
    };
    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <div className="input-group">
                        <div className="input-group__item">
                            <h1 className="input-group__item__title">{this.props.guest.firstName} {this.props.guest.lastName}</h1>
                        </div>
                        <div className="input-group__item">
                            <select
                                className="select"
                                value={this.state.attending}
                                onChange={this.onAttendingChange}
                                defaultValue={''}
                            >
                                <option disabled value={''}> -- Select an option -- </option>
                                <option value={true}>Attending</option>
                                <option value={false}>Decline</option>
                            </select>
                        </div>
                        <div className="input-group__item">
                            <button className="button">Submit</button>
                        </div>
                    </div>
                    {
                        //TODO fix add plus one button submitting form
                        ((this.state.attending === true) && this.props.guest.hasPlusOne) ? (
                            <div className="input-group">
                                <button className="button">Add Plus One</button>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                </form>
        );
    }
}