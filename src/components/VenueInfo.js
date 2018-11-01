import React from 'react';

export default class VenuInfo extends React.Component {
    render() {
        return (
            <div className="venue-info">
                <h1>{this.props.venue.title}</h1>
                <h2>{this.props.venue.name}</h2>
                <p>{this.props.venue.address.street}</p>
                <p>{`${this.props.venue.address.city}, ${this.props.venue.address.state} ${this.props.venue.address.zip}`}</p>
            </div>
        );
    }
}