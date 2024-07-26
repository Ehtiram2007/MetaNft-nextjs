import Nft from "@/components/home/Nft";
import MapRoad from "@/components/home/MapRoad";


const About = () => {
  return (
    <main>
      <section
        id="back_img"
        style={{
          backgroundImage:
            "url(https://metanft.hasnaanajmi.org/images/footer-animation-bg.svg)",
        }}
      >
        <div className="container">
          <h3>About Us</h3>
        </div>
      </section>
      <Nft/>
      <MapRoad/>
    </main>
  );
};
export default About;