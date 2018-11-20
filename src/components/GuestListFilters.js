import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, displayAll, displayAttending, displayDeclined, displayNoResponse, displayPlusOne } from '../actions/filters';

export class GuestListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onDisplayChange = (e) => {
        switch(e.target.value) {
            case 'all':
                this.props.displayAll();
                return;
            case 'attending':
                this.props.displayAttending();
                return;
            case 'declined':
                this.props.displayDeclined();
                return;
            case 'noResponse':
                this.props.displayNoResponse();
                return;
            case 'plusOne':
                this.props.displayPlusOne();
                return;
            default:
                return;
        }
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            type="text"
                            className="text-input"
                            placeholder="Search guests"
                            value={this.props.filters.text} 
                            onChange={this.onTextChange}
                        />
                    </div>
                    <div className="input-group__item">
                        <select 
                            className="select"
                            value={this.props.filters.display} 
                            onChange={this.onDisplayChange}
                        >
                            <option value="all">All Guests</option>
                            <option value="attending">Attending</option>
                            <option value="declined">Declined</option>
                            <option value="noResponse">No Response</option>
                            <option value="plusOne">Has Plus One</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    displayAll: () => dispatch(displayAll()),
    displayAttending: () => dispatch(displayAttending()),
    displayDeclined: () => dispatch(displayDeclined()),
    displayNoResponse: () => dispatch(displayNoResponse()),
    displayPlusOne: () => dispatch(displayPlusOne())
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestListFilters);