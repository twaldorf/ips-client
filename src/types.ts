// TODO These must correspond to the Schema
export enum ColumnName {
	NAME="Name",
	PRICE="Cost",
	YDG45="Ydg, 45",
	YDG60="Ydg, 60",
	SIZE="Sizes",
}

export const categories = ["Garment", "Gear", "Decor"];

export interface SearchBundle {
  query: string,
  filterBundle: FilterBundle,
}

export interface SearchContextType {
  searchBundle: SearchBundle;
  setSearchBundle: (Object) => void;
}

export interface FilterBundle {
	category?: "Garment" | "Gear" | "Decor" | "Plushie";
	sort_by?: "Price";
	style_tags?: Array<string>;
}