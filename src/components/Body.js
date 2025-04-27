import { useEffect, useState } from "react";
import RestaurantCard, { WithPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  console.log();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setAllRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const onlineStatus = useOnlineStatus();
  console.log(listOfRestaurant);

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection!
      </h1>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="p-4 m-4 ">
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-solid border-black rounded-md "
          />
          <button
            className="px-4 py-[3px] bg-pink-100 m-2 rounded-md"
            onClick={() => {
              const filterRestaurant = allRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>

          <button
            className="px-4 py-[3px] bg-pink-100 m-2 rounded-md"
            onClick={() => {
              setListOfRestaurant(() =>
                listOfRestaurant.filter((res) => res.info.avgRating > 4.2)
              );
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
