import React from "react";
import MenuItem from "./MenuItem";

interface MenuCategoryProps {
  category: {
    name: string;
    info?: string;
    items: {
      id: number;
      name: string;
      price?: number;
      sizes?: { size: string; price: number }[];
      info?: string;
    }[];
  };
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl uppercase font-bold text-white bg-fh-blue-700 px-2 py-1 rounded">
        {category.name}
      </h2>
      {category.info && (
        <p className="text-sm px-2 max-w-prose font-light mt-2">
          {category.info}
        </p>
      )}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-4">
        {category.items.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              {item.price !== undefined && (
                <span className="text-lg font-semibold">{`£${item.price.toFixed(
                  2
                )}`}</span>
              )}
            </div>
            {item.sizes && (
              <ul className="mt-2">
                {item.sizes.map((size, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{size.size}</span>
                    <span className="text-lg font-semibold">{`£${size.price.toFixed(
                      2
                    )}`}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.info && <p className="mt-2 text-sm">{item.info}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
