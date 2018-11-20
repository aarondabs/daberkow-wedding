import React from 'react';

export default class GuestRSVPForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            attending: undefined,
            plusOneName: '',
            showPlusOne: false,
            error: ''
        };
    };

    onAttendingChange = (e) => {
        const attending = e.target.value;
        if(attending === 'true'){
            this.setState(() => ({ attending: true }));
        } else if(attending === 'false'){
            this.setState(() => ({ attending: false, showPlusOne: false, plusOneName: '' }));
        }
        
    };

    onPlusOneNameChange = (e) => {
        const plusOneName = e.target.value;
        this.setState(() => ({ plusOneName }));
    };
    
    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.attending === undefined) {
            this.setState(() => ({ error: 'Please select if you will be in attendance.' }));
        } else if(this.state.attending === true && this.state.showPlusOne === true && !this.state.plusOneName.trim()){
            this.setState(() => ({ error: 'Please enter a plus one name.' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                attending: this.state.attending,
                plusOneName: this.state.plusOneName,
                hasReplied: true
            });
        }
    };

    showPlusOne = () => {
        this.setState(() => ({ showPlusOne: true }));
    };

    hidePlusOne = () => {
        this.setState(() => ({ showPlusOne: false, plusOneName: '' }));
    }

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
                        ((this.state.attending === true) && this.props.guest.hasPlusOne) ? (
                            this.state.showPlusOne === true ? (
                                <div className="input-group input-group--bordered">
                                    <div className="input-group__item">
                                        <input 
                                            type="text"
                                            placeholder="Plus One Full Name"
                                            className="text-input"
                                            value={this.state.plusOneName}
                                            onChange={this.onPlusOneNameChange}
                                        />
                                    </div>
                                    <div className="input-group__item">
                                        <button 
                                            className="button"
                                            onClick={this.hidePlusOne}
                                            type="button"
                                        >
                                            Remove Plus One
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="input-group">
                                <button 
                                    className="button"
                                    onClick={this.showPlusOne}
                                    type="button"
                                >
                                    Add Plus One
                                </button>
                            </div>
                            )
                        ) : (
                            <div></div>
                        )
                    }
                </form>
        );
    }
}