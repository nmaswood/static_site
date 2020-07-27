import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => (
  <div className="Navbar--container">
    <div className="Navbar--name">Nasr Maswood</div>
    <ul className="Navbar--nav-items">
      <li className="Navbar--nav-item">
        <Link href="/">
          <a>About Me</a>
        </Link>
      </li>
      <li className="Navbar--nav-item">
        <Link href="/technical">
          <a>Technical</a>
        </Link>
      </li>
      <li className="Navbar--nav-item">
        <Link href="/personal">
          <a>Personal</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
