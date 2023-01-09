import React from 'react';
import img1 from "../../assets/bannerImg.jpg";
import img2 from "../../assets/bannerImg1.jpg";
import img3 from "../../assets/bannerImg2.jpg";

const Slider = () => {
  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              src={img1}
              class="block w-full h-48 lg:min-h-[50vh] rounded-md"
              alt="..."
            />
            <div class="carousel-caption hidden md:block absolute text-center text-white">
              <h5 class="text-xl">First look of combo!</h5>
              <p>Combo offer with all needed tools for daily uses.</p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src={img2}
              class="block w-full h-48 lg:min-h-[50vh] rounded-md"
              alt="..."
            />
            <div class="carousel-caption hidden md:block absolute text-center text-white">
              <h5 class="text-xl">Flash sale begun</h5>
              <p>
                Just place an order and receive the product instantly within an
                hour.
              </p>
            </div>
          </div>
          <div class="carousel-item relative float-left w-full">
            <img
              src={img3}
              class="block w-full h-48 lg:min-h-[50vh] rounded-md"
              alt="..."
            />
            <div class="carousel-caption hidden md:block absolute text-white text-center">
              <h5 class="text-xl">New era has been released</h5>
              <p>Some amazing new feature with high configuration for you.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;