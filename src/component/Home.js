import React from "react";
import App from "../App";


const Home = () => { 

  return (
    <>
    <App/>
    <section className="bg-black px-5 text-white lg:py-[25vh] py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl active">
            Hi, <br />I am <span className="text-accent active"></span>MIHIR PATEL <br />
            Frontend Developer
          </h1>

          <p className="py-5 active1 ">
            I am proficient in JavaScript, React.js and Tailwind CSS
          </p>

      

          <a
            href="/images/MihirResume.pdf"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
            download
         >
            Download CV
          </a>
        </div>

        <div className="hero-img sm:my-2">
          <img
            src='/images/image1.png'
            
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;