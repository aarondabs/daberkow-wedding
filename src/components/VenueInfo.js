import React from 'react';

export default class VenuInfo extends React.Component {
    render() {
        return (
            <div className="venue-info">
                <h2>{this.props.venue.title}{this.props.venue.time && <span> - {this.props.venue.time}</span>}</h2>
                <h3>{this.props.venue.name}</h3>
                <p>{this.props.venue.address.street}</p>
                <p>{`${this.props.venue.address.city}, ${this.props.venue.address.state} ${this.props.venue.address.zip}`}</p>
            </div>
        );
    }
}