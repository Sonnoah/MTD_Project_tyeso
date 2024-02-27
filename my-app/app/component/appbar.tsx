import React from "react";

export default function Narbar() {
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown"></div>
          <a className="btn btn-ghost text-xl">LOGO</a>
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
          <a className="btn" href="/auth/signin">
            Login
          </a>
          <a className="btn" href="/auth/signup">
            Rigister
          </a>
        </div>
      </div>
    </div>
  );
}
