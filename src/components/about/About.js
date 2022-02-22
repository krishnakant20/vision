import React from 'react'
import { ExternalLink } from 'react-external-link';

const About = () => {
  return (
    <>
      <div className='container my-3'>
        <h3>Krishnakant Pawar</h3>
        <div>
          Linkedin -<ExternalLink href="https://www.linkedin.com/in/krishnakant-pawar/" />
        </div>
        <img src={require("./3.jpg")} alt="123" style={{ width: 150, height: 250 }} />
        <h4>I am a Full Stack Developer & like to make Web Applications for Development of people around the world.</h4>
      </div>

    </>
  )
}

export default About