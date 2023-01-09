import React from "react";
import { Link } from "react-router-dom";
import category1 from "../../assets/Categories/headphones.jpg";
import category2 from "../../assets/Categories/laptops.jpg";
import category3 from "../../assets/Categories/smartphone.jpg";
import category4 from "../../assets/Categories/tv.jpg";
import './CategoryRibbon.css'

const Categories = () => {
  return (
    <div>
      <div className="main-hr flex items-center  text-center">
        <hr className="hr-tag border-gray-300 border-1 w-full rounded-md" />
        <label className="hr-tag block font-bold my-16 text-3xl text-gray-500 w-full">
          Browse by Categories
        </label>
        <hr className="hr-tag border-gray-300 border-1 w-full" />
      </div>
      <section className="container mx-auto">
        <section className="lg:grid grid-cols-4 pb-12 gap-5">
         <Link to='/product/Headphones' className="anim">
         <div class="rounded-2xl shadow-md hover:shadow-lg border border-gray-400 cursor-pointer transition-all duration-300 p-5 text-center relative overflow-hidden pb-20 category lg:my-0 my-10">
            <span className="categoryribbon"></span>
            <img
              class="w-full lg:max-h-[235px] min-h-[230px] rounded-2xl"
              src={category1}
              alt=""
            />
            <h3 class="font-bold text-xl pt-3 pb-5 absolute w-full -bottom-3 hover:bottom-0 left-0 bg-[#62baea] text-white tracking-widest transition-all duration-500">
              Headphones
            </h3>
          </div>
         </Link>
          <Link to='/product/watch' className="anim"><div class="rounded-2xl shadow-md hover:shadow-lg border border-gray-400 cursor-pointer transition-all duration-300 p-5 text-center relative overflow-hidden pb-20 category lg:my-0 my-10">
            <span className="categoryribbon"></span>
            <img
              class="w-full lg:max-h-[235px] min-h-[230px] rounded-2xl"
              src='https://m.media-amazon.com/images/I/716tEwpUImL._AC_SX679_.jpg'
              alt=""
            />
            <h3 class="font-bold text-xl pt-3 pb-5 absolute w-full -bottom-3 hover:bottom-0 left-0 bg-[#62baea] text-white tracking-widest transition-all duration-500">
              Watch
            </h3>
          </div></Link>
          <Link to='/product/smartphone' className="anim"><div class="rounded-2xl shadow-md hover:shadow-lg border border-gray-400 cursor-pointer transition-all duration-300 p-5 text-center relative overflow-hidden pb-20 category lg:my-0 my-10">
            <span className="categoryribbon"></span>
            <img
              class="w-full lg:max-h-[235px] min-h-[230px] rounded-2xl"
              src='https://m.media-amazon.com/images/I/612yrAXpo-L._AC_SX679_.jpg'
              alt=""
            />
            <h3 class="font-bold text-xl pt-3 pb-5 absolute w-full -bottom-3 hover:bottom-0 left-0 bg-[#62baea] text-white tracking-widest transition-all duration-500">
              Smartphones
            </h3>
          </div></Link>
         <Link to='/product/TV' className="anim"> <div class="rounded-2xl shadow-md hover:shadow-lg border border-gray-400 cursor-pointer transition-all duration-300 p-5 text-center relative overflow-hidden pb-20 category lg:my-0 my-10">
            <span className="categoryribbon"></span>
            <img
              class="w-full lg:max-h-[235px] min-h-[230px] rounded-2xl"
              src={category4}
              alt=""
            />
            <h3 class="font-bold text-xl pt-3 pb-5 absolute w-full -bottom-3 hover:bottom-0 left-0 bg-[#62baea] text-white tracking-widest transition-all duration-500">
              Television
            </h3>
          </div></Link>
        </section>
      </section>
      <section className="lg:flex mt-12 mb-12 lg:mx-6">
        <div className="text-left lg:w-3/5 lg:pr-4">
          <h3 className="text-3xl font-bold">MORE INFORMATION ABOUT US</h3>
          <p className="text-3xl">
            M Computers Shop is the ultimate company is also the leader of the
            market with more than 600 workers is the country{" "}
          </p>
          <Link className="text-blue-600 font-semibold" to="/blog">
            Our Blogs
          </Link>
        </div>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 w-2/5 ">
          <div className="w-40">
            <h1 className="font-semibold mb-3">Our Team</h1>
            <div className="border-2 border-gray-400 rounded-full p-4 py-12">
              <span className="text-4xl ">125</span> <br />
              <span>PAY</span>
            </div>
          </div>
          <div className="w-40">
            <h1 className="font-semibold mb-3">Our Operator</h1>
            <div className="border-2 border-gray-400 rounded-full p-4 py-12">
              <span className="text-4xl ">616K</span> <br />
              <span>EMPLOYES</span>
            </div>
          </div>
          <div className="w-40">
            <h1 className="font-semibold mb-3">Our Customer</h1>
            <div className="border-2 border-gray-400 rounded-full p-4 py-12 ">
              <span className="text-4xl ">100+</span> <br />
              <span>ANS</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
