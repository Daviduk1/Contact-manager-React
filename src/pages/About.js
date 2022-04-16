import React from 'react'
import {useNavigate} from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
    return (
        <div className='about-container'>

            <div className='about'>
                <h2>About us</h2>
                <p>This is an app created to manage contacts. It could be seen and used as a backup for your contacts....Version 1.0.0</p>

                {/* <button onClick={() =>navigate('/contact')}>Contact us now</button> */}
            </div>
            <footer>
                <a href="#">&copy;2022. David Ukpalichi</a>
            </footer>
        </div>
    )
}

export default About
