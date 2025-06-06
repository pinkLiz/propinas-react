import { useState } from "react";
import "./App.css";
import { menuItems } from "./data/db";
import ItemFood from "./components/itemFood";

function App() {
  const [items] = useState(menuItems);

  console.log(items);

  return (
    <>
      <div className="p-4 text-left w-full max-w-md">
        <h1 className="text-3xl text-blue-300 font-bold mb-4 text-left">
          Menu
        </h1>
          <ul className="text-left">
            {items.map((item) => (
              <ItemFood 
                key={item.id} 
                menu={item} 
              />
            ))}
         </ul>
      </div>
    </>
  );
} 

export default App;

