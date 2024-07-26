import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ item }) => {
  return (
    <div className="row ">
      {item.map((post) => {
        const { id, title, img, user, price, desc } = post;
        return (
          <div key={id} className="col-sm-6 col-md-5 col-lg-4 p-3">
            <div className="nft">
              <div className="nft-thumb">
                <div className="nft-full">
                  <img src={img} alt="" />
                </div>
                <div className="nft-content">
                  <Link className="place" href="#">
                    Place a bid →
                  </Link>
                </div>
              </div>
              <div className="nft-text">
                <div className="nft-titles">
                  <h3>
                    <Link className="title-link" href="#">
                      {title} <i className="bi bi-triangle-fill"></i>
                    </Link>
                  </h3>
                </div>
                <div className="nft-collection">
                  <div className="nft-user">
                    <div className="user-img">
                      <img src={user} alt="" />
                    </div>
                    <div className="user-name">
                      <span>Creator</span>
                      <h4>{desc}</h4>
                    </div>
                  </div>
                  <div className="nft-price">
                    <span>Current Bid</span>
                    <h4>{price}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;