import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here is our all terms and conditions</h3>
            <p>Go back to<Link to="/register">Registration</Link></p>
        </div>
    );
};

export default TermsAndConditions;