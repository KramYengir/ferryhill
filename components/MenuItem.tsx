import React from "react";
import { MenuItemType } from "../types/types";

const MenuItem = ({ item }: { item: MenuItemType }) => {
  return (
    <div className="px-2 ">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <span className="text-xl font-bold text-fh-blue-600">
          £{item.price.toFixed(2)}
        </span>
      </div>
      <small className="text-sm text-gray-700">{item.info}</small>
    </div>
  );
};

export default MenuItem;
