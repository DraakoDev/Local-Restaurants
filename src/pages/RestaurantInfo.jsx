import { useParams } from "react-router-dom";
import { restaurants } from "../constants/nav";

const RestaurantInfo = () => {
  const { id } = useParams();

  const current = restaurants[id - 1];

  return (
    <div className="h-screen w-full bg-black-600 flex justify-center items-center text-white">
      <div className="w-[60%] h-[66%] mt-[5%] flex justify-center items-center flex-col bg-black-800 rounded-[2rem] gap-y-8">
        <div className="flex flex-col text-4xl font-extrabold justify-center items-center mb-6">
          <p>Hola :D, nosotros somos </p>
          <span className="text-black-400">{current.name}</span>
        </div>
        <div className="flex px-20">
          <img
            className="aspect-square h-auto w-[50%] object-cover rounded-[1.5rem]"
            src="/reference.jpg"
            alt={current.name}
          />
          <div className="w-[85%] h-auto px-8 overflow-y-scroll">
            <ul className="list-none text-2xl">
              <li>Somos un {current.category}.</li>
              <li className="mb-4">Estamos ubicados en {current.direction}.</li>
              <li>Esos somos nosotros:</li>
              <hr className="mt-4" />
              <li className="text-xl mt-8">{current.description}.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
