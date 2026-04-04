import React from "react";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src="https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg" alt="contact image" className="w-full md:max-w-120" />
        <div className="flex flex-col justify-center  items-center sm:items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">OUR STORE</p>
          <p className="text-gray-500">Bangalore,<br/> Karnataka, India  </p>
          <p className="text-gray-500">Tel: (+91) 1223487095 <br /> Email: ShopHere@email.com </p>
          <p className="font-semibold text-xl text-gray-600"> Careers at ShopHere</p>
          <p className="text-gray-500">Learn more about our team and Jobs</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 ease-in-out">Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default Contact;
