import React from "react";

interface MenuItemProps {
  item: {
    id: number;
    name: string;
    price?: number;
    sizes?: { size: string; price: number }[];
    info?: string;
  };
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="bg-white p-4 mb-4 rounded shadow">
      <div className="flex justify-between items-center">
        <h3>{item.name}</h3>
        {item.price !== undefined && <span>{`£${item.price.toFixed(2)}`}</span>}
      </div>
      {item.sizes && (
        <ul className="mt-2">
          {item.sizes.map((size, index) => (
            <li key={index} className="flex justify-between">
              <span>{size.size}</span>
              <span>{`£${size.price.toFixed(2)}`}</span>
            </li>
          ))}
        </ul>
      )}
      {item.info && <p className="mt-2 text-sm">{item.info}</p>}
    </div>
  );
};

export default MenuItem;
