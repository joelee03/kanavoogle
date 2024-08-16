import React from 'react'
import RedirectButton from './SocialMediaButton';

const Footer = () => {
    return (
    <footer>
        <div id="footer_text">
            <p>Copyright 2018 Kanavoogle Pty Ltd</p>
        </div>
        <div id="footersociallinks" style={{ display: 'flex', gap: '10px', }}>
          <RedirectButton platform="LinkedIn" />
          <RedirectButton platform="Facebook" />
        </div>
    </footer>
            )
    }
    export default Footer