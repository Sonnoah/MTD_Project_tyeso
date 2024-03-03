"use client";

import { signOut } from "next-auth/react";

const UserAccountnav = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn ">
        <div className="w-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="  mtw-3 z-[1]  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-30"
      >
        <li>
          <a
            className="mb-3  font-medium text-gray-700 text-sm"
            style={{ fontSize: "15px", whiteSpace: "nowrap" }}
            href="/auth/updatestock"
          >
            Update Stock
          </a>
        </li>
        <li>
          <a
            className="mb-3  font-medium text-gray-700 text-sm"
            style={{ fontSize: "15px", whiteSpace: "nowrap" }}
            href="/auth/add_product"
          >
            Add Product
          </a>
        </li>
        <li>
          <a
            className="mb-3 font-medium text-gray-700 text-sm"
            style={{ fontSize: "15px" }}
            onClick={() =>
              signOut({
                redirect: true,
                callbackUrl: `${window.location.origin}/`,
              })
            }
          >
            {" "}
            Logout{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserAccountnav;
