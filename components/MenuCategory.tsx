import React from "react";
import MenuItem from "./MenuItem";
import { MenuItemType, MenuCategoryType } from "../types/types";

const MenuCategory = ({ category }: { category: MenuCategoryType }) => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl uppercase font-bold text-white bg-fh-blue-700 px-2 py-1 rounded">
        {category.name}
      </h2>
      <p className="text-sm px-2 max-w-prose font-light mt-2">
        {category.info}
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-4">
        {category.items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
