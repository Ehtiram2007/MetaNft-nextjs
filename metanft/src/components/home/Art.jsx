import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const Art = () => {
    return(
        <section id="art" style={{backgroundImage: 'url(https://metanft.hasnaanajmi.org/images/footer-animation-bg.svg)'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-7 col-lg-6">
                        <div className="text">
                            <h1>Rare digital art & <br /> <span>NFTs </span> Collection.</h1>
                            <p>Create a Beautiful NFT products. Explore the best collection from <br /> popular creative & digital Artists.</p>
                            <div className="link-buton">
                                <Link href='#' className="explore"><i className="bi bi-rocket-takeoff-fill"></i> Explore items</Link>
                                <Link href='#' className="more">learn more  <i className="bi bi-arrow-right"></i></Link>
                            </div>
                            <div className="facts">
                                <ul>
                                    <li>
                                        <span className="number">40K+</span> 
                                        <span>Art Works</span>
                                    </li>
                                    <li>
                                        <span className="number">175K+</span> 
                                        <span>Auctions</span>
                                    </li>
                                    <li>
                                        <span className="number">16K+</span>
                                        <span>Artists</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 col-lg-6">
                        <div className="img">
                            <img src="https://metanft.hasnaanajmi.org/images/home.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Art;