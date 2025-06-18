import { useState } from "react";
import "./App.css";
import { menuItems } from "./data/db";
import ItemFood from "./components/ItemFood";
import ItemConsumo from "./components/ItemConsumo";
import type { MenuItem, addItem } from "./types/types";

function App() {
  const [items] = useState(menuItems);
  const [orderItems, setOrderItems] = useState<addItem[]>([]);
  const [propina, setPropina] = useState(0.1);

  const addMenu = (item: MenuItem) => {
    setOrderItems((prev) => {
      const exist = prev.find((i) => i.id === item.id);
      if (exist) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const remove = (id: number) => {
    setOrderItems((prev) => prev.filter((i) => i.id !== id));
  };

  const propinas = (porcentaje: number) => {
    setPropina(porcentaje);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 justify-center">
      <div className="p-4 text-left w-full max-w-md">
        <h1 className="text-3xl text-blue-300 font-bold mb-4 text-left">
          Menú
        </h1>
        <ul className="text-left">
          {items.map((item) => (
            <ItemFood 
              key={item.id} 
              menu={item}
              addMenu={addMenu} />
          ))}
        </ul>
      </div>

      <ItemConsumo
        items={orderItems}
        removeItem={remove}
        propina={propina}
        porcetajePropinas={propinas}
      />
    </div>
  );
}

export default App;
