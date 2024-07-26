import Link from "next/link";

const SideBar = () => {
  return (
    <div className="col-md-6 col-lg-4">
      <div id="sidebar">
        <div className="sidebar-title">
          <h3>Search</h3>
          <div className="input-search">
            <input type="text" placeholder="Search"/>
            <div className="search-icon"><i className="bi bi-search"></i></div>
          </div>
        </div>
        <div className="sidebar-title">
          <h3>Category</h3>
          <div className="sidebar-content">
            <ul>
              <li>
                <Link href='#'>Arts <span>(7)</span></Link>
              </li>
              <li>
                <Link href='#'>NFT <span>(8)</span></Link>
              </li>
              <li>
                <Link href='#'>Technology <span>(11)</span></Link>
              </li>
              <li>
                <Link href='#'>Sports <span>(6)</span></Link>
              </li>
              <li>
                <Link href='#'>Photography <span>(7)</span></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-title">
          <h3>Tags</h3>
          <div className="tagcloud">
             <Link href='#'>NFT</Link>
             <Link href='#'>Art</Link>
             <Link href='#'>Creative</Link>
             <Link href='#'>Software</Link>
             <Link href='#'>Crypto</Link>
             <Link href='#'>Agency</Link>
             <Link href='#'>Marketplace</Link>
             <Link href='#'>MetaNFT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;