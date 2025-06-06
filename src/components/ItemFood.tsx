import type { MenuItem } from "../types/types";

function ItemFood({menu}:{menu: MenuItem}) {
  return (
    <li className="border p-4 rounded shadow mb-2">
      <h3 className="text-xl font-semibold">{menu.name}</h3>
      <p className="text-green-600">${menu.price}</p>
    </li>
  );
}

export default ItemFood;
