import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link';


const ElectronicEye = () => {
  return (
<>
            <div className='container my-3'>

                <h3> Idea 4 - Electronic Eye </h3>
                <hr />
                <hr />
                <h5>Inspiration: eSight </h5>
                <div>
                    Website -<ExternalLink href="https://esighteyewear.com/int/" />
                </div>
                <div>1. Introduction</div>
                <ReactPlayer url='https://www.youtube.com/watch?v=OYzP_RgXrIE' controls='true' />
                <div>2. eSight | Benefits in the Workplace</div>
                <ReactPlayer url='https://www.youtube.com/watch?v=htXcYPSDqmA&t=5s' controls='true' />

            </div>

        </>  )
}

export default ElectronicEye