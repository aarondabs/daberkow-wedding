import React from 'react';
import { Link } from 'react-router-dom';

const GuestListItem = ({ id, firstName, lastName, partyName, attending, hasPlusOne, plusOneName, hasReplied }) => (
    <Link className="list-item" to={`/admin/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{`${firstName} ${lastName}`}</h3>
            <span className="list-item__sub-title">{`Party: ${partyName}`}</span><br/>
            <span className="list-item__sub-title">{hasPlusOne ? `Plus One: ${plusOneName}` : 'No Plus One'}</span>
        </div>
        <h3 className="list-item__data">{hasReplied ? (attending ? <span className="list-item__data--positive">Attending</span> : <span className="list-item__data--negative">Declined</span>) : 'No Reply'}</h3>
    </Link>
);

export default GuestListItem;