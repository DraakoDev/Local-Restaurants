import { useState } from "react";
import { Link } from "react-router-dom";
import Highlight from "./Highlight";

function RestaurantCard({ id, direction, category, image, name, page }) {
  const [like, setLike] = useState(true);

  return (
    <div className="w-[300px] h-[400px] bg-black-600 p-4 rounded-lg m-4 text-white flex flex-col justify-between">
      <img src={image} alt="" />
      <span className="text-2xl font-bold ">{name}</span>
      <span>
        <Highlight>Direcccion: </Highlight>
        {direction}
      </span>
      <span>
        <Highlight>Categoria: </Highlight> {category}
      </span>
      <span>
        <Highlight>Pagina: </Highlight> {page}
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
