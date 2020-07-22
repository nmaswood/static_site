import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="Navbar--container">
      <div className="Navbar--name">Nasr Maswood</div>
      <ul className="Navbar--nav-items">
        <li className="Navbar--nav-item">
          <Link href="/">
            <a>Technical Thoughts</a>
          </Link>
        </li>
        <li className="Navbar--nav-item">
          <Link href="/">
            <a>Personal Thoughts</a>
          </Link>
        </li>
        <li className="Navbar--nav-item">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
