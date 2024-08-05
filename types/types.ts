export interface MenuItemType {
  id: number;
  name: string;
  info?: string;
  price: number;
}

export interface MenuCategoryType {
  name: string;
  info?: string;
  items: MenuItemType[];
}
