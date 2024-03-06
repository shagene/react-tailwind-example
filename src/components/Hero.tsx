import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col items-center md:flex-row">
        <div className="w-full md:w-1/2 px-6">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Awesome Product</h1>
          <p className="text-lg text-gray-700 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Go
          </button>
        </div>
        <div className="w-full md:w-1/2 px-6 mt-6 md:mt-0">
          <img src="https://via.placeholder.com/400x300" alt="Product" className="rounded-lg"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
