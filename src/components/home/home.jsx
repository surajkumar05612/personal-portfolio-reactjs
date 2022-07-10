import React from "react";
import "./home.css";
import profile from "./../../assets/logo.png";
import Typewriter from 'typewriter-effect';
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Home() {
    return(
        <>
            <section id="home">
                <div className="home-parent">
                    <div className="home-left">
                        <p className="body-font text-color welcome">WELCOME TO MY WORLD</p>
                        <h1 className="home-heading">Hi, I'm <span>Suraj Kumar Jena</span> a <span>
                            <Typewriter
                                options={{
                                    strings: ['Developer', 'Coder', 'UI/UX Designer', 'Gamer', 'Graphics Designer'],
                                    autoStart: true,
                                    loop: true,
                                    cursor: ".",
                                }}
                            />
                            </span></h1>
                        <p className="body-font text-color description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem atque culpa deleniti. Minus numquam temporibus dolor quod et consectetur maiores similique fuga deleniti ad? Provident enim exercitationem ratione! Veniam, voluptatum.</p>
                    </div>
                    <div className="home-right">
                        <div className="neomorph-1">
                            <img src={profile} alt="profile_pic"></img>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <h2 className="contact-heading">Drop Me a Message</h2>
                    <div className="social-bar">
                    <button className="primary">
                        <a href="https://wa.me/9348864738" target="blank"><FaWhatsapp /></a>
                    </button>
                    <button className="primary">
                        <a href="https://www.instagram.com/surajkumarjena.005612/" target="blank"><FaInstagram/></a>
                    </button>
                    <button className="primary">
                    <a href="https://www.facebook.com/suraj.jena.771/" target="blank"><FaFacebook/></a>
                    </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;