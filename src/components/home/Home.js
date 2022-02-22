import React from 'react'
import ReactPlayer from 'react-player'
import { ExternalLink } from 'react-external-link';


const Home = () => {
  return (
    <>
      <div className='container my-3'>

        <h3> Idea 1 - Online Eye : We can CREATE app for people, that connects blind and low-vision people with sighted volunteers for visual assistance through a live video call.</h3>
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
      <hr />
      <hr />
      <div className='container my-3'>

        <h3> Idea 2 - Artificial Intelligent Camera Apk : We can Build app for people for visual assistance using Artificial Intelligent Camera (LIVE Audio Instructions)</h3>
        <div>This AI app helps to complete everyday routines by detecting objects, people, products, text, and more</div>
        {/* <hr />
        <hr /> */}
        <h5>Inspiration: Google - Lookout (Assisted vision) </h5>
        <div>
          Website -<ExternalLink href="https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.reveal&hl=en_IN&gl=US" />
        </div>
        <div>1. Introduction</div>
        <ReactPlayer url='https://www.youtube.com/watch?v=H6sBtxXK0-s' controls='true' />

      </div>
      <hr />
      <hr />
      <div className='container'>
        <h3>We can develop wooden frame + Colourfull Glasses for Special people </h3>
        <div>To change the trend of black googles</div>
        <img src={require("../colourful/1.jpg")} alt="123" style={{ width: 600, height: 600 }} />
      </div>
      <hr />
      <hr />
      <div className='container my-3'>

                <h3> Idea 4 - Electronic Eye </h3>
                {/* <hr />
                <hr /> */}
                <h5>Inspiration: eSight </h5>
                <div>
                    Website -<ExternalLink href="https://esighteyewear.com/int/" />
                </div>
                <div>1. Introduction</div>
                <ReactPlayer url='https://www.youtube.com/watch?v=OYzP_RgXrIE' controls='true' />
                <div>2. eSight | Benefits in the Workplace</div>
                <ReactPlayer url='https://www.youtube.com/watch?v=htXcYPSDqmA&t=5s' controls='true' />

            </div>
            <hr />
            <hr />
            <hr />
            <h1>Thank You Very Much!!!</h1>
    </>
  )
}

export default Home