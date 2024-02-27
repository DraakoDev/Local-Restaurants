import { restaurants } from "../constants/nav";
import RestaurantCard from "../components/RestaurantCard";

function Restaurants() {
  return (
    <div className="h-auto mb-10 flex justify-center items-center gap-x-16 flex-wrap bg-black-500">
      {restaurants.map((info, i) => {
        return (
          <RestaurantCard
            key={i}
            id={info.id}
            name={info.name}
            image={"/reference.jpg"}
            direction={info.direction}
            category={info.category}
            page={info.page}
          />
        );
      })}
    </div>
  );
}

export default Restaurants;
