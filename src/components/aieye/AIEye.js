import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link';

const AIEye = () => {
    return (
        <>
            <div className='container my-3'>

                <h3> Idea 2 - Artificial Intelligent Camera Apk : We can Build app for people for visual assistance using Artificial Intelligent Camera (LIVE Audio Instructions)</h3>
                <div>This AI app helps to complete everyday routines by detecting objects, people, products, text, and more</div>
                <hr />
                <hr />
                <h5>Inspiration: Google - Lookout (Assisted vision) </h5>
                <div>
                    Website -<ExternalLink href="https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal&hl=en_IN&gl=US" />
                </div>
                <div>1. Introduction</div>
                <ReactPlayer url='https://www.youtube.com/watch?v=H6sBtxXK0-s' controls='true' />

            </div>


        </>
    )
}

export default AIEye