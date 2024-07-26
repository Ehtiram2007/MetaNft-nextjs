import Card from "./Card";

const Cards = ({ item }) => {
  return (
    <section id="cart">
      <div className="container">
        <div className="text">
        <h3>Trending</h3>
        </div>
        <Card item={item.slice(0, 3)} />
      </div>
    </section>
  );
};
export default Cards;