import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    const restaurantInfo = json?.data;
    console.log("Name:", restaurantInfo);
    setResInfo(restaurantInfo);
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  // console.log(name)

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.itemCards;
  // console.log("itemCards", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <ul>
        {itemCards.map((menu) => (
          <li key={menu?.card?.info?.id}>
            {menu?.card?.info?.name} - {"Rs."}
            {menu?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
