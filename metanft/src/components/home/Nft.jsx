import Link from "next/link";

const Nft = () => {
  return (
    <section
      id="nft" style={{minHeight:'auto'}}
    >
      <div className="container">
        <div className="row g-3 justify-content-center">
          <div className="col-9 col-lg-6">
            <div className="text">
              <h4>Discover More</h4>
              <h3>Explore & Sell Your Awesome NFTs Art</h3>
              <p>
                Dolor repellendus temporibus autem quibusdam et aut officiis
                debitis aut rerum necessitatibus sae eveniet ut et voluptates
                repudiandae sint et moles tiae non recusandae.
              </p>
              <p>
                Ac vulputate ornare donec orci sed gravida senectus. Felis quis
                morbi vivamus est eget sapien magnis quis.
              </p>
              <div className="link-buton">
                <Link href="#" className="explore">
                  {" "}
                   Read More →
                </Link>
              </div>
            </div>
          </div>
          <div className="col-9 col-lg-6">
            <div className="img">
              <img
                src="https://metanft.hasnaanajmi.org/images/about.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Nft;
