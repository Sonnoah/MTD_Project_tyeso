import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";
import UserAccountnav from "./ui/UserAccountnav";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown"></div>
          <a href="/" className="btn btn-ghost text-xl">
            Tyeso Stock
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="/auth/product"> Product </a>
            </li>
            <li>
              <a href="/auth/stock"> Stock </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          {session?.user ? (
            <div className="flex items-center mr-5">
              <div
                className=" mr-3"
                style={{
                  fontSize: "15px",
                  textTransform: "uppercase",
                  fontWeight: "bold",
                }}
              >
                {session?.user.username}
              </div>
              <UserAccountnav />
            </div>
          ) : (
            <div>
              <a className="btn" href="/auth/signin">
                Login{" "}
              </a>
              <a className="btn" href="/auth/signup">
                Rigister
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
