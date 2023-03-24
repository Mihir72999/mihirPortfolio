import React from "react";
import App from "../App";


const About = () => {
  return (
    <>
    <App/>
    <section className="bg-gray-700 text-white px-5 py-32 lg:py-[27vh]"  id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is MIHIR PATEL everyone calls me Amrin. I am a
            Frontend Developer. I build beautifull websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

          <p>
            In my spare time I Learn nextjs react-netive.
           
          </p>
        </div>

        <div className="about-img">
          <img
            src='/images/image2.png'
           
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default About;