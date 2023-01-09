import React from "react";
import Admin from "./Admin";
import Buyer from "./Buyer";
import Sellers from "./Sellers";
import Spinner from "../../Shared/Spinner";
import { useContext } from "react";
import { Usercontext } from "../Authprovider/Authprovider";
import { useQuery } from "@tanstack/react-query";
import Usetitle from "../Tilehook/Usetitle";

const Dashboard = () => {
  const { user, loader } = useContext(Usercontext);
  Usetitle();

  const { data: role, isLoading } = useQuery({
    queryKey: [user?.email, loader],
    queryFn: () =>
      fetch(
        `https://mpc-server-hamidthedev.vercel.app/role?email=${user?.email}`
      ).then((res) => res.json()),
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <div className="main-hr flex items-center pt-10 px-2 lg:px-12 text-center">
        <hr className="hr-tag border-gray-300 border-2 w-full rounded-md" />
        <label className="hr-tag block font-medium text-lg text-gray-800 w-96">
          <span className="btn btn-accent btn-sm tracking-[2px] outline-dashed">
            {role[0]?.role === "admin"
              ? "Dashboard|Admin"
              : role[0]?.role === "seller"
              ? "Dashboard|Seller"
              : "Dashboard|Buyer"}
          </span>
        </label>
        <hr className="hr-tag border-gray-300 border-2 w-full" />
      </div>
      {role[0]?.role === "admin" ? (
        <Admin></Admin>
      ) : role[0]?.role === "seller" ? (
        <Sellers></Sellers>
      ) : (
        <Buyer></Buyer>
      )}
    </div>
  );
};

export default Dashboard;
