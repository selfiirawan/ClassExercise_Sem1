import { useState } from "react";
import "./main.css";

function App() {
  const items = [
    { id: 1, name: "T-shirt", price: 20, onSale: true },
    { id: 2, name: "Jeans", price: 50, onSale: false },
    { id: 3, name: "Socks", price: 5, onSale: true },
    { id: 4, name: "Hat", price: 15, onSale: false },
    { id: 5, name: "Shoes", price: 65, onSale: true },
  ];

  const [onSale, setOnSale] = useState(false);

  const displayedItems = onSale ? items.filter((item) => item.onSale) : items;

  const handleOnSaleClick = () => {
    setOnSale(!onSale);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>

      <button onClick={handleOnSaleClick}>
        {onSale ? "Show All Items" : "Show Sale Items Only"}
      </button>

      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.onSale ? "On Sale" : ""}
            {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
