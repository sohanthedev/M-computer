import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Shared/Spinner";

const Advertised = () => {
  let show = "hidden";
  let len = 2;

  const { data: products, isLoading } = useQuery({
    queryKey: [len],
    queryFn: () =>
      fetch("https://mpc-server-hamidthedev.vercel.app/advertise").then((res) =>
        res.json()
      ),
  });

  if (isLoading) {
    <Spinner></Spinner>;
  }

  if (products?.length > 0) {
    show = "block";
    len = products?.length;
  }

  return (
    <div className={show}>
      <section>
        <div className="main-hr flex items-center  text-center">
          <hr className="hr-tag border-gray-300 border-1 w-full rounded-md" />
          <label className="hr-tag block font-bold my-16 text-3xl text-gray-600 w-full">
            Advertised Items
          </label>
          <hr className="hr-tag border-gray-300 border-1 w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products?.map((product) => {
            return (
              !product.sold && (
                <div className="card w-full  shadow-xl">
                  <figure className=" relative pb-5 ">
                    <img
                      className="w-full -mt-10"
                      src={product?.img}
                      alt="img"
                    />
                    <div className="absolute bottom-10">
                      <h3 className=" text-xs overflow-hidden  w-56 lg:text-sm font-semibold lg:text-gray-800">
                        {product?.model}
                      </h3>
                      <h3 className="pt-2 text-sm font-semibold text-green-600">
                        ${product?.price}
                      </h3>
                    </div>
                  </figure>
                </div>
              )
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Advertised;
