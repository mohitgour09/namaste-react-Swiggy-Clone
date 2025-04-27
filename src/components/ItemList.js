import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={`${item?.card?.info?.id}-${index}`}
          className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="text-lg font-medium py-2 ">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="wrap-break-word">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12  p-4">
            <div className="absolute">
              <button
                className="bg-black mx-7 sticky text-white rounded-lg p-[2px] shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-auto rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
