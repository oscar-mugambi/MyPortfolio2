import React from "react";
import image from "../bg-resume.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="background"
        className="absolute object-cover w-ful h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-900 font-bold cursive leading-none lg:leading-snug home-name">
          Hi there. I'm Oscar.
        </h1>
      </section>
    </main>
  );
};

export default Home;
