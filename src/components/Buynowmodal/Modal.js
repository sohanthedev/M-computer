import React, { useContext } from "react";
import Spinner from "../../Shared/Spinner";
import { Usercontext } from "../Authprovider/Authprovider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Modal = ({ product }) => {
  const { user, loader } = useContext(Usercontext);

  const navigate = useNavigate();
  if (loader) {
    return <Spinner></Spinner>;
  }

  console.log(product);

  const handleBuy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    // [3, 4, 5].map((value, i) => console.log(value))
    const cartInfo = {
      buyer: name,
      seller: product.seller,
      img: product.img,
      email,
      phone,
      price: product.price,
      productName: product.title,
    };

    fetch("https://mpc-server-hamidthedev.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
    toast.success("Order Successful");
  };

  return (
    <div>
      <input type="checkbox" id="buyModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white">
          <label
            htmlFor="buyModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Buying: {product?.title}</h3>
          <form onSubmit={handleBuy} className="grid grid-cols-1 gap-3 mt-10">
            <input
              name="price"
              type="text"
              defaultValue={"Price: $" + product?.price}
              disabled
              placeholder="Your Name"
              className="input bg-white w-full input-bordered"
            />
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input bg-white w-full input-bordered"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input bg-white w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Your Address"
              className="input bg-white w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input bg-white w-full input-bordered"
            />
            <br />
            <input
              className="w-full p-2 rounded-lg bg-[#f57224] text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Modal;
