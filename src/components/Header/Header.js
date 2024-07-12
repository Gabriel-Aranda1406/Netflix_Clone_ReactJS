import React from 'react';
import './Header.css'

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href='/'>
                    <img src="https://ik.imagekit.io/4lf7m2y5a/aluraflixLogo.png?updatedAt=1720812372340"/>
                </a>
            </div>
            <div className='header--user'>
                <a href='/'>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"/>
                </a>
            </div>
        </header>
    )
}