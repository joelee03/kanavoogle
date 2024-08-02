import React from 'react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa'; // Import LinkedIn and Facebook icons

const RedirectButton = ({ platform }) => {
    const handleRedirect = () => {
        let url = '';

        if (platform === 'LinkedIn') {
            url = 'https://au.linkedin.com/in/drnvchalam';
        } else if (platform === 'Facebook') {
            url = 'https://www.facebook.com/';
        }

        // Open the URL in a new tab
        window.open(url, '_blank');
    };

    return (
        <button onClick={handleRedirect} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {platform === 'LinkedIn' && <FaLinkedin size={32} color="#0e76a8" />}
            {platform === 'Facebook' && <FaFacebook size={32} color="#4267B2" />}
        </button>
    );
}

export default RedirectButton;

