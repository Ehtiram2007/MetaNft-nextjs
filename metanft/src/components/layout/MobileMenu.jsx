import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [active, setActive] = useState(false);
  return (
    <div id="navbar">
      <div className={active ? "mobielnav" : "nav-active"}>
        <ul className="menu">
          <li className="menu-item">
            <Link href="#">Home</Link>
          </li>
          <li className="menu-item">
            <Link href="#">About</Link>
          </li>
          <li className="menu-item">
            <Link href="#">Nft</Link>
          </li>
          <li className="menu-item">
            <Link href="#">RoadMap</Link>
          </li>
          <li className="menu-item">
            <Link href="#">Blog</Link>
          </li>
          <li className="menu-item">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
      <button onClick={() =>setActive(!active)} className={active ? "open" : "close"  }>
        <span></span>
      </button>
    </div>
  );
};

export default MobileMenu;
