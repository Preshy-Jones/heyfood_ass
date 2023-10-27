import { useState } from "react";

import RestaurantContext from "./restaurant-context";
import { Tag } from "@/types/global";
const RestaurantProvider = ({ children }: { children: React.ReactNode }) => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showOverlay, setOverlay] = useState<boolean>(false);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [sheep, setSheep] = useState<string>("hdhhd");
  return (
    <RestaurantContext.Provider
      value={{
        tags,
        setTags,
        loading,
        setLoading,
        showOverlay,
        setOverlay,
        showSideBar,
        setShowSideBar,
        sheep,
        setSheep,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
