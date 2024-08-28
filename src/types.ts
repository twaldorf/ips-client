// TODO These must correspond to the Schema
export enum ColumnName {
	NAME="Name",
	PRICE="Cost",
	YDG45="Ydg, 45",
	YDG60="Ydg, 60",
	SIZE="Sizes",
}

export interface SearchBundle {
  query: string,
  filterBundle: Object,
}

export interface SearchContextType {
  searchBundle: SearchBundle;
  setSearchBundle: (Object) => void;
}