import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import './index.scss'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('react-portfolio', 'react-portfolio-template', form.current, '4DGUhB8YqUB0LtlW1')
            .then(
                () => {
                    alert('Message sent!')
                    window.location.reload(false)
                },
                () => alert('Failed to send')
            )
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    
        return () => clearTimeout(timer)
        }, [])
    return (
    <>
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','M','e']}
                    idx={15}/>
                </h1>
                <p>
                    Please contact me directly at
                    {" "}
                    <a className="email-link" href="mailto:kkttrinh@ucdavis.edu">
                        kkttrinh@ucdavis.edu
                    </a>
                    {" "}or through this form.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            <div className='map-wrap'>
                <MapContainer center={[38.540, -121.75]} zoom={16}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[38.540, -121.75]}>
                        <Popup>I go to school here</Popup>
                    </Marker>
                </MapContainer>
            </div>

        </div>
        <Loader type="pacman" />
    </>
    )
}

export default Contact