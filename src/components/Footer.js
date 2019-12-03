import React, { Component } from 'react';
import '../assets/App.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul className='social-links'>
                    <li>
                        <a href="https://www.instagram.com/clcbadges/" target="_blank">
                            Instagram
                        </a>
                    </li>

                    <li>
                        <a href="https://www.facebook.com/CLC-Badges-108963010585460/?modal=admin_todo_tour" target="_blank">
                            Facebook
                        </a>
                    </li>
                
                </ul>
            </div>
        )
    }
}

export default Footer;