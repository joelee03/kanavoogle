import React from 'react';
import RedirectButton from './SocialMediaButton';

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t py-4 absolute bottom-0 left-0">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div id="footer_text">
                    <p className="text-gray-700">Copyright © 2024 Kanavoogle Pty Ltd</p>
                </div>
                <div id="footersociallinks" className="flex space-x-4">
                    <RedirectButton platform="LinkedIn" />
                    <RedirectButton platform="Facebook" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;