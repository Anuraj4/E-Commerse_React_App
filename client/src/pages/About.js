import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={'About us - E-Commerce app'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2 className="mt-3">Who We Are</h2>
          <p className="text-justify mt-3">
            Welcome to our e-commerce platform! We are committed to providing the best
            shopping experience for our customers, with a wide range of products, 
            competitive prices, and exceptional customer service. Our goal is to make 
            online shopping easy, enjoyable, and accessible for everyone.
          </p>
          <h3 className="mt-4">Our Mission</h3>
          <p className="text-justify mt-3">
            Our mission is to deliver quality products while ensuring customer satisfaction 
            every step of the way. We work with trusted vendors and suppliers to bring you 
            the latest products across various categories, from fashion and electronics to 
            home essentials.
          </p>
          <h3 className="mt-4">Why Choose Us</h3>
          <ul className="mt-3">
            <li>Wide range of products to cater to all your needs.</li>
            <li>Secure payment options for a worry-free shopping experience.</li>
            <li>Fast and reliable shipping to get your products to you quickly.</li>
            <li>Exceptional customer service available to assist you at any time.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default About;
