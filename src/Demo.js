import React,{useRef} from 'react'
import './App.css';
import useWebAnimations ,{bounce, fadeInLeft, zoomIn} from "@wellyshen/use-web-animations";
const Demo = () => {
    const { ref:elem, playState,getAnimation } = useWebAnimations({...bounce
       /* keyframes: {
          transform: "translateX(500px)", // Move by 500px
         // background: ["red", "blue", "green"], // Go through three colors
        },
        timing: {
         // delay: 500, // Start with a 500ms delay
          duration: 1000, // Run for 1000ms
          iterations: 2, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          //easing: "ease-in-out", // Use a fancy timing function
        }
      */});
      
      const { ref:mob } = useWebAnimations({...zoomIn});
      const { ref:head } = useWebAnimations({...fadeInLeft});
    return (
        <>
            <div className="container-fluid" id="Demo">
                <div className="row" >
                    <div ref={head} className="col-lg-6 col-sm-12 px-md-5  mb-5 main-text">
                        <h1>Faster than <br /> you can imagine <br />always on time</h1>
                        <h5 className="mt-4" style={{color:"gray",letterSpacing:"2px"}}>Lorem Ipsum is simply dummy text of the printing and.<br /> Lorem Ipsum has been the you can imagine industry's <br /> standard dummy</h5>
                        <button className="btn order-btn mt-4 ">ORDER NOW</button>
                    </div>
                    <div className="col-lg-6 col-sm-12 demo">
                        <img ref={mob} className="mx-auto mob-set" style={{maxWidth:"100%",height:"481px"}} src="https://foody-animated-site.netlify.app/static/media/Landingmobile.8984414d.png"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Demo