import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl text-gray-800 font-bold mb-6 text-center">About MiricleEstate</h1>
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="mb-6">
            Welcome to <strong>MiricleEstate</strong>, where we transform dreams into reality. With a passion for excellence and a commitment to integrity, our company stands at the forefront of the real estate industry. Whether you’re looking to buy your first home, invest in commercial properties, or find the perfect rental, Miricle Estate offers a seamless and personalized experience to meet your needs.
          </p>
          <p className="mb-6">
            At Miricle Estate, we believe that finding the perfect property should be an exciting and fulfilling journey. Our team of experienced professionals works tirelessly to ensure that every client receives the highest level of service, tailored to their unique preferences and requirements. From the initial consultation to closing the deal, we guide you every step of the way, making the process as smooth and stress-free as possible.
          </p>
          <p className="mb-6">
            We take pride in our deep understanding of the local market, allowing us to provide valuable insights and expert advice. Our extensive portfolio of properties includes everything from modern apartments and luxury homes to commercial spaces and land for development. With a focus on innovation and customer satisfaction, Miricle Estate continues to set new standards in the real estate industry.
          </p>
          <p className="mb-6">
            Join us on our social media platforms to stay updated with the latest listings, real estate trends, and company news. Connect with us on Facebook and Instagram, and be a part of our growing community!
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4 mt-8">
          <a href="https://www.facebook.com/MiracleEstate" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-4xl">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/MiracleEstate" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 text-4xl">
            <FaInstagram />
          </a>
          <span className="text-lg font-bold text-gray-800">MiricleEstate</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
