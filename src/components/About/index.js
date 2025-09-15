import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import portrait from '../../assets/images/portrait.jpg'
import Loader from 'react-loaders'

const About = () => {

     const [letterClass, setLetterClass] = useState('text-animate')
     useEffect(() => {
         const timer = setTimeout(() => {
             setLetterClass('text-animate-hover')
         }, 3000)
     
         return () => clearTimeout(timer)
         }, [])

    return (
        <>
        <div className='container about-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p>
                    I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a family
                    person, father of a beautiful daughter, a sports fanatic,
                    photography enthusiast, and tech-obsessed!!!
                </p>
                <img src={portrait} alt="developer" />
            </div>
            
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About