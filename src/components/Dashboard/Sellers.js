import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../../Shared/Spinner";
import { Usercontext } from "../Authprovider/Authprovider";

const Sellers = () => {
  const [DeleteProduct, setDeleteProduct] = useState(null);
  const [Advertise, setAdvertise] = useState(null);
  const { user, loader } = useContext(Usercontext);

  const {
    data: products,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [user],
    queryFn: () =>
      fetch(
        `https://mpc-server-hamidthedev.vercel.app/product?email=${user?.email}`
      ).then((res) => res.json()),
  });

  if (loader) {
    return <Spinner></Spinner>;
  }

  if (isLoading) {
    <Spinner></Spinner>;
  }

  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;
    const model = form.model.value;
    const img = form.img.value;
    const description = form.description.value;
    const location = form.location.value;
    const category = form.category.value;
    const seller = form.seller.value;
    const phone = form.phone.value;
    const price = form.price.value;
    // [3, 4, 5].map((value, i) => console.log(value))
    const productInfo = {
      model,
      email: user.email,
      img,
      seller,
      phone,
      category,
      price,
      description,
      location,
    };

    fetch("https://mpc-server-hamidthedev.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
    toast.success("Product Added");
  };

  const handleDelete = () => {
    fetch("https://mpc-server-hamidthedev.vercel.app/products", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(DeleteProduct),
    }).then((res) => {
      toast.success("Product Deleted");
      refetch();
    });
  };

  const handleAdvertise = () => {
    fetch("https://mpc-server-hamidthedev.vercel.app/advertise", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Advertise),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Item Advertised");
      });
  };

  return (
    <div>
      <div className="thisismodal">
        <input type="checkbox" id="buyModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="buyModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold">Add your product</h3>
            <form onSubmit={handleAdd} className="grid grid-cols-1 gap-3 mt-10">
              <input
                name="seller"
                required
                type="text"
                placeholder="Seller Name"
                className="input w-full input-bordered"
              />
              <input
                name="model"
                required
                type="text"
                placeholder="Product Name"
                className="input w-full input-bordered"
              />
              <input
                required
                name="img"
                type="text"
                placeholder="Product image url"
                className="input w-full input-bordered"
              />
              <input
                required
                name="price"
                type="text"
                placeholder="Price"
                className="input w-full input-bordered"
              />
              <input
                required
                name="category"
                type="text"
                placeholder="Category must be:hp,dell or asus"
                className="input w-full input-bordered"
              />
              <input
                required
                name="description"
                type="text"
                placeholder="product Description"
                className="input w-full input-bordered"
              />
              <input
                required
                name="location"
                type="text"
                placeholder="Address"
                className="input w-full input-bordered"
              />
              <input
                required
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="input w-full input-bordered"
              />
              <br />
              <input
                className="btn btn-primary w-full"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
        <Toaster />
      </div>

      <div>
        <section class="antialiased px-2 lg:px-32 bg-gray-100 text-gray-600 lg:py-20 py-10">
          <label
            htmlFor="buyModal"
            className="btn btn-sm btn-primary mb-5 h-10 border-black"
          >
            Add product
          </label>
          <div class="flex flex-col justify-center">
            <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-lg text-gray-800">
                  Your Products
                </h2>
              </header>
              <div class="p-3">
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">
                            Product Name
                          </div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Price</div>
                        </th>
                        <th>Delete</th>
                        <th>Advertise</th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Status</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {products?.map((product) => {
                        return (
                          <tr>
                            <td class="p-2 whitespace-nowrap">
                              <div class="flex items-center">
                                <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                  <img
                                    class="rounded-full"
                                    src={product?.img}
                                    width="40"
                                    height="40"
                                    alt="no-photos"
                                  />
                                </div>
                                <div class="w-20 lg:w-full overflow-hidden font-medium text-gray-800">
                                  {product?.model}
                                </div>
                              </div>
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              <div class="text-left font-medium text-green-500">
                                ${product?.price}
                              </div>
                            </td>
                            <td>
                              <button
                                onFocus={() => setDeleteProduct(product)}
                                onClick={handleDelete}
                                className="btn btn-sm btn-primary "
                              >
                                delete
                              </button>
                            </td>
                            <td>
                              {product?.sold ? (
                                <button disabled className="btn  btn-sm">
                                  Item Sold
                                </button>
                              ) : (
                                <button
                                  onClick={handleAdvertise}
                                  onFocus={() => setAdvertise(product)}
                                  className="btn h-10  btn-sm  btn-primary"
                                >
                                  Advertise
                                </button>
                              )}
                            </td>
                            <td class="p-2 whitespace-nowrap">
                              {product?.sold ? (
                                <button disabled className="btn  btn-sm">
                                  Sold
                                </button>
                              ) : (
                                <label
                                  htmlFor="pay-modal"
                                  className="btn h-10  btn-sm  btn-primary"
                                >
                                  Available
                                </label>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sellers;
