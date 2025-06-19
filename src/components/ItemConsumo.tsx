import type { order } from "../types/types";

function ItemConsumo({
  items,
  removeItem,
  propina,
  porcetajePropinas,
  clear,
}: order) {
  if (items.length === 0) {
    return null;
  }

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const precioPropina = subtotal * propina;

  const total = subtotal + precioPropina;

  return (
    <>
      <div className="rounded p-6 w-full max-w-md bg-white shadow">
        <h3 className="text-2xl font-bold mb-4">Orden del Consumo</h3>

        <ul className="mb-4">
          {items.map((item) => (
            <li
              className="flex justify-between items-start border-b py-2"
              key={item.id}
            >
              <div>
                <p className="font-medium">
                  {item.name} - ${item.price}
                </p>
                <p className="text-sm font-bold text-gray-700">
                  Cantidad: {item.quantity} - ${item.price * item.quantity}
                </p>
              </div>
              <button
                className="text-red bg-red-500 hover:bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold"
                onClick={() => removeItem(item.id)}
              >
                {" "}
                x
              </button>
            </li>
          ))}
        </ul>

        <div className="mb-4">
          <h2 className="font-bold mb-2">Propinas</h2>
          <div className="flex flex-col gap-2">
            {[0.1, 0.2, 0.5].map((percent) => (
              <label key={percent} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="tip"
                  value={percent}
                  checked={propina === percent}
                  onChange={() => porcetajePropinas(percent)}
                />
                {percent * 100}%
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3>Precios</h3>
          <p>
            Subtotal: <strong>${subtotal}</strong>
          </p>
          <p>
            Propina: <strong>${precioPropina}</strong>
          </p>
          <p>
            Total: <strong>${total}</strong>
          </p>
        </div>

        <button
          className="bg-green-600 text-black py-2 px-4 w-full rounded hover:bg-green-800"
          onClick={() => clear()}
        >
          GUARDAR ORDEN
        </button>
      </div>
    </>
  );
}

export default ItemConsumo;
