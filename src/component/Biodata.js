import React from "react";
import App from "../App";

const Blog = () => {
  const post = [
    {
      img: "https://wallpapercave.com/wp/wp4923992.png",
      title: " Build a website app with Reactjs with using tailwind ,bootstrap css libraries ",
      
    },
    {
      img: "https://th.bing.com/th/id/R.08b7f631b8ae989e2b8d1bda66d3168a?rik=L5%2ftOazF7nQGAQ&riu=http%3a%2f%2fcharantechnologies.com%2fimages%2fcourses%2fexpressjs.png&ehk=i%2bBGgc8QBhKzJkExK4gz1xcOGHo5MLtoyzEllxuUiAc%3d&risl=&pid=ImgRaw&r=0",
      title: "make some beautiful portfolio website in express node js and also with mernstack project",
      
    },
  ];

  return (
    <>
    <App/>
    <section className="bg-gray-700 text-white px-5 lg:py-[12vh] py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Services
          </h2>

          <p className="pb-5">Some of my best Services.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {post.map((item) => {
          return (
            <div>
              <img  src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.title}</h3>
              
            </div>
          );
        })}
      </div>
    </section>
    </>

  );
};

export default Blog;