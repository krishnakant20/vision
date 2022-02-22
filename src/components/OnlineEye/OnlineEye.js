import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link';

const OnlineEye = () => {
    return (
        <>
            <div className='container my-3'>

                <h3> Idea 1 - Online Eye : We can CREATE app for Indian's, that connects blind and low-vision people with sighted volunteers for visual assistance through a live video call.</h3>
                <div>Important- People can get connected to the "Indian regional speaking language's" volunteers.</div>
                <hr />
                <hr />
                <h5>Inspiration: Be My Eyes (Computer Software Tranbjerg J, Midtjylland)</h5>
                <div>
                    Website -<ExternalLink href="https://www.bemyeyes.com/" />
                </div>
                <div>1. Introduction</div>
                <ReactPlayer url='https://www.youtube.com/watch?v=6GRfFuWsjNU' controls='true' />
                <div>2. Be My Eyes: Hans Jørgen Wiberg at TEDxCopenhagen</div>
                <ReactPlayer url='https://www.youtube.com/watch?v=IfeLJxCSLC0&t=85s' controls='true' />

            </div>

        </>

    )
}

export default OnlineEye