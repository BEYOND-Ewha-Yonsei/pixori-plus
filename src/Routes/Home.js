import React, { Fragment } from 'react'
import '../styles/home.css'
import Bird from "../img/img_pixelart_bird.png"
import Cherry from "../img/img_pixelart_cherry.png"
function Maker() {
    return (
        <div>
        <div className="Rectangle-491">
          <div className="font">  Make your own artwork and song at the same time 
via easy, hands-on experiments. 
Then share your collection on the ____ Marketplace.  
Now is the time for you to become a well-rounded artist with our newest technology Pixorie.  
</div>

<img src={Bird} className="img_pixelart_bird"/>


    <div className="Rectangle-462">
         <div className="LETS-Start">
            LET’S Start!</div> 
    </div>
    </div>
    <div className="grid">
            <div className="Frame-5">
        <div className="What-is-Pixori">What is Pixori?</div></div>
        <img src={Cherry} className="img_pixelart_cherry"/>
        <div className="Frame-1">
        <div className="Create-your-own-NFTs">Create your own NFTs</div></div>
        
        </div>
        </div>





    )
}

export default Maker