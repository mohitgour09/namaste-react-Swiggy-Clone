import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating } = resData.info;
  const { deliveryTime } = resData?.info.sla;
  return (
    <div className="p-4 m-4 w-[280px] h-[400px] rounded-lg bg-green-100 hover:bg-green-200 flex flex-col overflow-hidden">
      <img
        className="rounded-lg h-40 w-full object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="py-2 mt-4 font-bold text-lg truncate">{name}</h3>
      <div className="space-y-3 mt-auto mb-auto  font-medium text-xl ">
      <h4 className="text-sm text-gray-700 overflow-hidden line-clamp-2">
        {cuisines.join(", ")}
      </h4>
        <h4>{avgRating}⭐</h4>
        <h4>{deliveryTime} min</h4>
      </div>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white rounded-r-lg p-2 m-2 ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
