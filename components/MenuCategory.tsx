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
    <section
      className="mb-16 break-inside-avoid"
      aria-labelledby={`category-${category.name.replace(/\s+/g, "-")}`}
    >
      <h2
        id={`category-${category.name.replace(/\s+/g, "-")}`}
        className="text-2xl uppercase font-bold text-white bg-fh-blue-900 px-2 py-1 rounded"
      >
        {category.name}
      </h2>
      {category.info && (
        <p
          className="text-sm px-2 max-w-prose font-light mt-2"
          aria-describedby={`info-${category.name.replace(/\s+/g, "-")}`}
        >
          {category.info}
        </p>
      )}

      <div className="mt-4">
        {category.items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            aria-labelledby={`item-${item.id}`}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
