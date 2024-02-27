import { restaurants } from "../constants/nav";
import RestaurantCard from "../components/RestaurantCard";

function Restaurants() {
  return (
    <div className="w-full flex-col gap-y-10 h-screen bg-black-700 flex justify-center items-center text-white">
        {/* <h1 className="text-4xl font-bold">Estos son los restaurantes :D</h1> */}
      <div className="w-[80%] h-auto mb-10 flex justify-center items-center gap-x-16 flex-wrap">
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
    </div>
  );
}

export default Restaurants;
