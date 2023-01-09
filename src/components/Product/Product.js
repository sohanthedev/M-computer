import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Usercontext } from "../Authprovider/Authprovider";
import Usetitle from "../Tilehook/Usetitle";

const Product = () => {
  Usetitle();
  const products = useLoaderData();
  const { setId } = useContext(Usercontext);

  return (
    <div className="grid px-5 lg:px-14 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 pb-14 pt-7">
      {products.map((product) => {
        return (
          <Link to={`/details/${product._id}`}>
            <div class="rounded-2xl shadow-md hover:shadow-lg border-t-4 h-full border-[#ff6801] cursor-pointer transition-all duration-300 p-5 text-left  mycard lg:my-0 my-10">
              <span className="ribbon"></span>
              <img
                class="w-full lg:max-h-[235px] min-h-[230px] rounded-2xl"
                src={product.img}
                alt=""
              />
              <h3 class="font-bold text-lg pt-3">{product.title}</h3>
              {/* <p class="py-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p> */}
              <h1 class="text-xl font-bold text-[#ff6801]">${product.price}</h1>
              <span class="text-sm line-through  text-gray-400">
                ${product.price + 50}
              </span>
              <span class="text-sm pl-2  text-gray-800">-49%</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Product;
