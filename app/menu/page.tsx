import React from "react";
import { menuItems } from "../../data/menuItems";
import MenuCategory from "../../components/MenuCategory";

const MenuPage = () => {
  return (
    <div className="w-full  text-left px-6  mx-auto bg-neutral-50">
      <div className="bg-neutral-50">
        <h1 className="text-8xl uppercase font-extrabold tracking-wide text-center bg-clip-text text-transparent my-24 bg-[url('../assets/images/fish-in-oil.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
          Our Menu
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto columns-1 md:columns-2 xl:columns-3 mt-8">
        {menuItems.map((category) => (
          <MenuCategory key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
