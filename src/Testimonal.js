import React from 'react'
import tes from "./asset/testoman.png";
import './App.css';
import useWebAnimations ,{jackInTheBox, rubberBand} from "@wellyshen/use-web-animations";

export default function Testimonal() {
    const { ref:mob } = useWebAnimations({...rubberBand});
    const { ref:te } = useWebAnimations({...jackInTheBox});
    return (
        <>
            <div className="container" id="Testimonal">
                <div className="row mt-4">
                    <div className="col-12">
                        <h1 ref={mob} className="h1 my-5" style={{textAlign:"center"}}>Testimonial</h1>
                    </div>
                </div>
                <div className="row test" ref={te}>
                    <div className="col-lg-5 col-sm-12 mb-3 q-test" >
                        <p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown</p>
                        <h5>Muhammad Ibad</h5>
                        <img style={{ maxWidth: "100%", height: "60px" }} src={tes} />
                    </div>
                    <div className="col-lg-5 col-sm-12 mb-3 q-test">
                        <p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknown</p>
                        <h5>Muhammad Ibad</h5>
                        <img style={{ maxWidth: "100%", height: "60px" }} src={tes} />
                    </div>
                </div>
            </div>

        </>
    )
}
