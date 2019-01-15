import React from 'react';
import { homeInfo } from '../constants/constants';

const HomePage = () => (
    <div className="content-container">
        <div className="page-info-container">
            <div className="image">
                <img src={"/images/home_page.jpg"} />
            </div>
            <h2 className="page-title">Our Story</h2>
            <p className="page-body">
               {homeInfo.story}
            </p>
            <h2 className="page-title">The Proposal</h2>
            <p className="page-body">
                {homeInfo.proposal}
            </p>
        </div>
    </div>
);

export default HomePage;