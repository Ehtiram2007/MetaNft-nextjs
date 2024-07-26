import Link from "next/link";
import MobileMenu from "../layout/MobileMenu";

const Header = () => {
  return (
    <header id="head">
      <div className="container">
       <div className="row aling-items-center">
       <div className="nav-flex">
          <div className="logo">
            <Link href="/">
              <img
                src="https://metanft.hasnaanajmi.org/images/logo.png"
                alt=""
              />
            </Link>
          </div>
          <nav className="menu">
            <ul className="list-menu">
              <li>
                <Link href="#">Home <i className="bi bi-caret-down-fill"></i></Link>
                <ul className="nav_hover">
                  <li> 
                    <Link href="/Home">Home 1</Link>
                  </li>
                  <li> 
                    <Link href="#">Home 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#">About <i className="bi bi-caret-down-fill"></i></Link>
                <ul className="nav_hover">
                  <li> 
                    <Link href="/About">About</Link>
                  </li>
                  <li> 
                    <Link href="#">Our Team</Link>
                  </li>
                  <li> 
                    <Link href="#">Faq</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#" >Nft <i className="bi bi-caret-down-fill"></i></Link>
                <ul className="nav_hover">
                  <li> 
                    <Link href="#">Our Shop</Link>
                  </li>
                  <li> 
                    <Link href="#">Collections</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/MapRoad" >road map</Link>
              </li>
              <li>
                <Link href="#" >blog <i className="bi bi-caret-down-fill"></i></Link>
                <ul className="nav_hover">
                  <li> 
                    <Link href="/blog">Blog Grid</Link>
                  </li>
                  <li> 
                    <Link href="#">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#" >contact</Link>
              </li>
            </ul>
          </nav>
          <div className="log" style={{display:'flex', alignItems:'center',gap:'20px'}}>
          <Link href='#' className="header-btn">JOIN DISCORD <i className="bi bi-discord"></i></Link>
            <MobileMenu/>
          </div>
        </div>
       </div>
      </div>
    </header>
  );
};  
export default Header;