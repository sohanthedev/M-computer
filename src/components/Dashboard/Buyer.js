import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { Usercontext } from "../Authprovider/Authprovider";
import Spinner from "../../Shared/Spinner";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { toast, Toaster } from "react-hot-toast";

//chekcout form
const CheckoutForm = ({ product }) => {
  console.log(product);
  const [Warn, setWarn] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setWarn(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const payment = {
      buyingId: product?._id,
      product: product?.productName,
      price: product?.price,
      buyer: product?.buyer,
      email: product?.email,
      seller: product?.seller,
    };

    fetch("https://mpc-server-hamidthedev.vercel.app/payment", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("payment Successfull");
        setTimeout(() => {
          window.location.reload(true);
        }, 800);
      });
  };

  return (
    <div className="flex justify-center flex-col items-center my-auto ">
      <form
        className="lg:w-[600px] w-[420px] h-42 border p-10 rounded-md bg-gray-600"
        onSubmit={handleSubmit}
      >
        <div className="flex -mt-6 pb-5 ">
          <h4 className="text-gray-100 text-lg font-bold mr-2">We Accepts: </h4>
          <img
            className="w-48"
            src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
            alt=""
          />
        </div>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "19px",
                color: "#fff ",
                "::placeholder": {
                  color: "#fff",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className=" btn mt-5 btn-sm w-20 btn-primary"
          disabled={!stripe}
        >
          Pay
        </button>
        <p className="font-semibold mt-3 text-[16px] text-warning">{Warn}</p>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

//buyer function
const Buyer = () => {
  const { user } = useContext(Usercontext);

  const [Product, setProduct] = useState(null);
  const price = Product?.price;
  console.log(price);
  const { data: carts, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(
        `https://mpc-server-hamidthedev.vercel.app/cart?email=${user?.email}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    <Spinner></Spinner>;
  }

  //this is for stripe
  const stripePromise = loadStripe(
    "pk_test_51M8hmyBxfMe73ILHxnYqy2OjB7wDg0B6IpJ5WTD2m7gSbgZbp6vSCHf5jFp540bJJBtobQ5S1nd2SF3HeItprWae00Hibu5M7N"
  );

  return (
    <div>
      <section class="antialiased px-2 lg:px-32 bg-gray-100 text-gray-600 lg:py-24 py-10">
        <div class="flex flex-col justify-center">
          <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
              <h2 class="font-semibold text-lg text-gray-800">
                Added Products
              </h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto">
                <table class="table-auto w-full">
                  <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Product Name</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Price</div>
                      </th>
                      <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-center">Status</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-sm divide-y divide-gray-100">
                    {carts?.map((order) => {
                      return (
                        <tr>
                          <td class="p-2 whitespace-nowrap">
                            <div class="flex items-center">
                              <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                <img
                                  class="rounded-full"
                                  src={order?.img}
                                  width="40"
                                  height="40"
                                  alt="no-photos"
                                />
                              </div>
                              <div class="w-52 lg:w-full overflow-hidden font-medium text-gray-800">
                                {order?.productName}
                              </div>
                            </div>
                          </td>
                          <td class="p-2 whitespace-nowrap">
                            <div class="text-left font-medium text-green-500">
                              ${order?.price}
                            </div>
                          </td>
                          <td class="p-2 whitespace-nowrap">
                            {order?.paid ? (
                              <button disabled className="btn h-10 btn-sm">
                                Paid
                              </button>
                            ) : (
                              <label
                                onClick={() => setProduct(order)}
                                htmlFor="pay-modal"
                                className="btn h-10 w-14 btn-sm  btn-primary"
                              >
                                Pay
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

      {/* pay with card modal */}

      <input type="checkbox" id="pay-modal" className="modal-toggle" />
      <div className="modal">
        <Elements stripe={stripePromise}>
          <CheckoutForm product={Product} />
        </Elements>
        <label
          htmlFor="pay-modal"
          className="btn -top-[70px] -left-11 relative btn-primary btn-sm btn-circle"
        >
          ✕
        </label>
      </div>
    </div>
  );
};

export default Buyer;
