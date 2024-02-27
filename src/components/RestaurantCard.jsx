import { useState } from "react";
import { Link } from "react-router-dom";
import Highlight from "./Highlight";

function RestaurantCard({ id, direction, type, img }) {
  const [like, setLike] = useState(true);

  return (
    <div className="w-[300px] h-[400px] bg-black-600 p-4 rounded-lg m-4 text-white flex flex-col justify-between">
      <img src="reference.jpg" alt="" />
      <span className="text-2xl font-bold ">Salchipaperia</span>
      <span>
        <Highlight>Direcccion: </Highlight>
      </span>
      <span>
        <Highlight>Categoria: </Highlight>
      </span>

      <div className="flex justify-between mt-2">
        <button className="bg-black-300 p-2 w-3/6 font-bold rounded-xl hover:bg-black-400">
          {" "}
          <Link to={`/restaurante/${id}`}>Comer Aqui</Link>
        </button>
        <button onClick={() => setLike(!like)} className="text-2xl">
          {like ? "💔" : "💖"}
        </button>
      </div>
    </div>
  );
}

export default RestaurantCard;
