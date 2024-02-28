"use client";

import { signOut } from "next-auth/react";

const UserAccountnav = () => {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn ">
        <div className="  rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
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
        className="  mt-1 z-[1]  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-30"
      >
        <li>
          <a className="mb-3" style={{ fontSize: "17px" }}>
            UpdateStock
          </a>
        </li>
        <li>
          <a
            style={{ fontSize: "17px" }}
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

//  <div className="dropdown dropdown-end">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//           <img alt="photo" src="/img/6271651.jpg" />
//         </div>
//       </div>
//       <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
//         <li><a>UpdateStock</a></li>
//         <li><a onClick={() => signOut({redirect : true,
//         callbackUrl : `${window.location.origin}/`})}> Logout </a></li>
//       </ul>
//     </div>

//  <a
//       className="btn"
//       onClick={() =>
//         signOut({
//           redirect: true,
//           callbackUrl: `${window.location.origin}/`,
//         })
//       }
//     >
//       Logout
//     </a>
