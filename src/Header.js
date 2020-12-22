import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg navbar-light  bg-light">
                <a className="navbar-brand" >
                    <img style={{maxWidth:"100%",height:"50px"}} className="img-fluid ml-3" src="https://foody-animated-site.netlify.app/static/media/LogoLight.c74b6855.png"
                        alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" collapse navbar-collapse justify-content-md-end " id="navbarNavAltMarkup">
                    <div className="navbar-nav mr-md-4 mr-sm-0">
                        <a className="nav-link"><Link
                            activeClass="active"
                            to="Demo"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >HOME</Link></a>
                        <a className="nav-link"><Link
                            activeClass="nav-item"
                            to="Services"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Services</Link>
                        </a>
                        <a className="nav-link"><Link
                            activeClass="nav-item"
                            to="Contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Contact</Link></a>
                        <a className="nav-link"><Link
                            activeClass="nav-item"
                            to="Testimonal"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Testimonal</Link></a>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
