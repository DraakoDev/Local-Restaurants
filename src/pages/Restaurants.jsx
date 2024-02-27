import { restaurants } from "../constants/nav";
import RestaurantCard from "../components/RestaurantCard";

function Restaurants() {
  return (
    <div>
      {restaurants.map((info, i) => {
        return (
          <RestaurantCard
            key={i}
            id={info.id}
            name={info.name}
            image={info.image}
            direction={info.direction}
            category={info.category}
          />
        );
      })}
    </div>
  );
}

export default Restaurants;
