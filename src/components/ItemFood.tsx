import type { itemProps } from "../types/types";


function ItemFood({menu,addMenu}: itemProps ) {
  return (
   <li>
      <button
        className="border p-4 rounded shadow mb-2 w-full text-left hover:bg-gray-100"
        onClick={() => addMenu(menu)}
      >
        <h3 className="text-xl font-semibold">{menu.name}</h3>
        <p className="text-green-600">${menu.price}</p>
      </button>
    </li>
  );
}

export default ItemFood;
