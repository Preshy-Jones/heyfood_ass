import { Tag } from "@/types/global";
import { createContext } from "react";

interface RestaurantContextInterface {
  tags: Tag[];
  setTags: (tags: Tag[]) => void;
  loading: boolean;
  setLoading(status: boolean): void;
  showOverlay: boolean;
  setOverlay: (status: boolean) => void;
  showSideBar: boolean;
  setShowSideBar: (status: boolean) => void;
  sheep: string;
  setSheep: (sheep: string) => void;
}

const defaultData = {
  tags: [],
  setTags: () => null,
  loading: false,
  setLoading: () => null,
  setOverlay: () => null,
  showOverlay: false,
  showSideBar: false,
  sheep: "hdhhd",
  setSheep: () => null,
  setShowSideBar: () => null,
};

let RestaurantContext = createContext<RestaurantContextInterface>(defaultData);

export default RestaurantContext;
