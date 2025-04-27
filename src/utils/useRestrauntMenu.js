import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  },[]);

  async function fetchData() {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    const restaurantInfo = json?.data;
    setResInfo(restaurantInfo)
  }

  return resInfo;
};

export default useRestrauntMenu;
