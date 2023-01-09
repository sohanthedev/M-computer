import { useQuery } from "@tanstack/react-query";
import Spinner from "../../Shared/Spinner";
import avatar from "../../assets/davatar.png";
import itmes from "../../assets/items.png";
import { useEffect } from "react";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const Admin = () => {
  const [report, setReport] = useState([]);
  const [DeleteUser, setDeleteUser] = useState(null);
  const [VerifyUser, setVerifyUser] = useState(null);

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://mpc-server-hamidthedev.vercel.app/users").then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    fetch("https://mpc-server-hamidthedev.vercel.app/reported")
      .then((res) => res.json())
      .then((data) => setReport(data));
  }, []);

  //deleting user
  const handleDelete = () => {
    fetch("https://mpc-server-hamidthedev.vercel.app/users", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(DeleteUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Deleted");
        refetch();
      });
  };

  //verifying user
  const handleVerify = () => {
    fetch("https://mpc-server-hamidthedev.vercel.app/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(VerifyUser),
    });

    refetch();
    toast.success("Verified Successfully");
    setTimeout(() => {
      window.location.reload(true);
    }, 500);
  };

  if (isLoading || !report) {
    return <Spinner></Spinner>;
  }

  console.log(data);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full font-semibold my-9 lg:my-24  px-2">
        <div className="overflow-x-auto shadow-lg sellers">
          <table className="table full">
            <thead>
              <tr>
                <th></th>
                <th className="text-sm">Sellers</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user) => {
                return (
                  <>
                    {user?.role === "seller" && (
                      <tr>
                        <td>
                          <img
                            class="w-10 h-10 rounded-full mr-4"
                            src={avatar}
                            alt=""
                          />
                        </td>
                        <td>{user?.name}</td>
                        <td>
                          <button
                            onClick={handleDelete}
                            onFocus={() => setDeleteUser(user)}
                            className="btn h-10 btn-sm btn-secondary"
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          {user?.verified === "true" ? (
                            <button disabled className="btn h-10 btn-sm">
                              Verified
                            </button>
                          ) : (
                            <button
                              onClick={handleVerify}
                              onFocus={() => setVerifyUser(user)}
                              className="btn h-10 btn-sm btn-primary"
                            >
                              Verify
                            </button>
                          )}
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto shadow-lg sellers">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-sm">Buyers</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user) => {
                return (
                  <>
                    {user?.role === "buyer" && (
                      <tr>
                        <td>
                          <img
                            class="w-10 h-10 rounded-full mr-4"
                            src={avatar}
                            alt=""
                          />
                        </td>
                        <td>{user?.name}</td>
                        <td>
                          <button
                            onClick={handleDelete}
                            onFocus={() => setDeleteUser(user)}
                            className="btn h-10 btn-sm btn-secondary"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto shadow-lg buyers">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th className="text-sm">Reported Items</th>
              </tr>
            </thead>
            <tbody>
              {report?.map((item) => {
                return (
                  <tr>
                    <td>
                      <img
                        class="w-10 h-10 rounded-full mr-4"
                        src={itmes}
                        alt=""
                      />
                    </td>
                    <td>{item?.productName}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <Toaster></Toaster>
    </>
  );
};

export default Admin;
