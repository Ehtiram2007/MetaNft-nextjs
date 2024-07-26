import Link from "next/link";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-img" style={{backgroundImage:'url(https://metanft.hasnaanajmi.org/images/footer-animation-bg.svg)'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="logo">
                                <Link href='/'>
                                    <img src="https://metanft.hasnaanajmi.org/images/logo.png" alt="" />
                                </Link>
                            </div>
                            <p>Dolor repellendus temporibus autem quibus dam et aut officiis debitis aut rerum necessita tibus saepe tempo incidunt labore...</p>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-2">
                            <h4>Site Map</h4>
                            <ul>
                                <li>
                                    <Link href='/'><i className="bi bi-caret-right"></i>Home</Link>
                                </li>
                                <li>
                                    <Link href='/About'><i className="bi bi-caret-right"></i>About us</Link>
                                </li>
                                <li>
                                    <Link href='/MapRoad'><i className="bi bi-caret-right"></i>Roadmap</Link>
                                </li>
                                <li>
                                    <Link href='/blog'><i className="bi bi-caret-right"></i>Blog</Link>
                                </li>
                                <li>
                                    <Link href='/'><i className="bi bi-caret-right"></i>FAQ</Link>
                                </li>
                                <li>
                                    <Link href='/'><i className="bi bi-caret-right"></i>Articles</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-2">
                            <h4>Company</h4>
                            <ul>
                                <li>
                                    <Link href='/'><i className="bi bi-caret-right"></i>Help & Support</Link>
                                </li>
                                <li>
                                    <Link href='/'><i className="bi bi-caret-right"></i>Terms Canditions</Link>
                                </li>
                                <li>
                                    <Link href='/'><i className="bi bi-caret-right"></i>Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer