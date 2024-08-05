import React from "react";
import { menuItems } from "../../data/menuItems";
import MenuCategory from "../../components/MenuCategory";

const MenuPage = () => {
  return (
    <div className="w-full max-w-screen-xl text-left px-6  sm:px-20 mx-auto">
      <h1 className="text-8xl uppercase font-extrabold tracking-wide text-center bg-clip-text text-transparent my-16  bg-[url('../assets/images/fish-in-oil.png')] bg-cover bg-center bg-no-repeat bg-fixed">
        Our Menu
      </h1>
      {menuItems.map((category) => (
        <MenuCategory key={category.name} category={category} />
      ))}
    </div>
  );
};

export default MenuPage;
