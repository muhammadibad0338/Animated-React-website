import React from 'react';
import bg from "./asset/bg.PNG";
import './App.css';
import fb from "./asset/facebook.png";
import go from "./asset/google.png";
import twt from "./asset/twitter.png";


export default function Contact() {
    return (
        <>
            <div className="container-fluid contc-bg" id="Contact">
                <div className="row">
                    <div className="col-lg-7 col-sm-12 contc-frnt-1 my-lg-5">
                        <h1 className="my-lg-4" style={{ color: "white" }}>Get in touch</h1>
                        <p style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur possimus quaerat vitae rerum reprehenderit laudantium, eveniet nesciunt quis. Omnis, blanditiis</p>
                        <div className="row my-lg-4">
                            <div className="col-12">
                                <img style={{ maxWidth: "100%", height: "30px", marginRight: "8px" }} src={fb} />
                                <img style={{ maxWidth: "100%", height: "30px", marginRight: "8px" }} src={go} />
                                <img style={{ maxWidth: "100%", height: "30px", marginRight: "4px" }} src={twt} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12" style={{boxShadow:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"}}>
                        <div className="row ">
                            <div className="col-lg-8 col-sm-12" style={{ backgroundColor: "white", height: "350px" }}>
                                <form>
                                    <div className="row mb-5 mt-3">
                                        <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail3" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <label for="inputEmail3" className="col-sm-2 col-form-label">Comment</label>
                                        <div className="col-sm-10">
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <button className="btn mt-4 order-btn">Contact</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}