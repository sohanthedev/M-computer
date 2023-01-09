import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";
import { Usercontext } from "../Authprovider/Authprovider";
import "./Ribbon.css";

const Flashsale = () => {
  const [data, setdata] = useState([]);
  const { setId } = useContext(Usercontext);

  useEffect(() => {
    fetch("https://mpc-server-hamidthedev.vercel.app/product")
      .then((res) => res.json())
      .then((d) => setdata(d));
  }, []);

  const Completionist = () => (
    <span className=" px-3 text-red-500 font-bold py-1 rounded text-xl">
      Expired!
    </span>
  );

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="text-2xl text-white hidden lg:block">
          <span className="bg-[#ff6801] px-3 py-1 rounded">{hours}</span>
          <span className="text-[#ff6801] px-1">:</span>
          <span className="bg-[#ff6801] px-3 py-1 rounded">{minutes}</span>
          <span className="text-[#ff6801] px-1">:</span>
          <span className="bg-[#ff6801] px-3 py-1 rounded">{seconds}</span>
        </span>
      );
    }
  };

  return (
    <section className="bg-white p-5 rounded">
      <div className="flex items-center gap-20 border-b-2 border-gray-200 p-4">
        <h1 className="text-2xl text-left text-gray-500 font-bold">
          FlashSale
        </h1>
        <Countdown date={Date.now() + 999999999} renderer={renderer} />
      </div>
      <section className="container mx-auto">
        <div className="lg:grid grid-cols-4 gap-7 lg:gap-y-12  py-4 tex-black">
          {data?.map((item, i) => {
            return (
              i % 3 === 0 && (
                <Link to={`/details/${item._id}`}>
                  <div class="rounded-2xl shadow-md hover:shadow-lg border-t-4 h-full border-[#ff6801] cursor-pointer transition-all duration-300 p-5 text-left  mycard lg:my-0 my-10">
                    <span className="ribbon"></span>
                    <img
                      class="w-full lg:max-h-[235px] min-h-[230px] rounded-2xl"
                      src={item.img}
                      alt=""
                    />
                    <h3 class="font-bold text-lg pt-3">{item.title}</h3>
                    {/* <p class="py-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p> */}
                    <h1 class="text-xl font-bold text-[#ff6801]">
                      ${item.price}
                    </h1>
                    <span class="text-sm line-through  text-gray-400">
                      ${item.price + 30}
                    </span>
                    <span class="text-sm pl-2  text-gray-800">-49%</span>
                  </div>
                </Link>
              )
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Flashsale;
