import MapRoad from "@/components/home/MapRoad";


const RoadMap = () => {
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
          <h3>RoadMap</h3>
        </div>
      </section>
      <MapRoad/>
    </main>
  );
};
export default RoadMap;