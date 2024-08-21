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
    <div
      className="bg-white p-4 mb-4 rounded shadow"
      aria-labelledby={`menu-item-${item.id}`}
    >
      <div className="flex justify-between items-center">
        <h3 id={`menu-item-${item.id}`} className="text-lg font-semibold">
          {item.name}
        </h3>
        {item.price !== undefined && (
          <span className="font-medium">{`£${item.price.toFixed(2)}`}</span>
        )}
      </div>
      {item.sizes && (
        <ul className="mt-2 list-disc list-inside">
          {item.sizes.map((size, index) => (
            <li key={index} className="flex justify-between">
              <span className="text-sm">{size.size}</span>
              <span className="font-medium">{`£${size.price.toFixed(2)}`}</span>
            </li>
          ))}
        </ul>
      )}
      {item.info && (
        <p className="mt-2 text-sm" aria-describedby={`info-${item.id}`}>
          {item.info}
        </p>
      )}
    </div>
  );
};

export default MenuItem;
