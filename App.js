import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating } = resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "234875",
      name: "Adil Hotel",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Rautha Wada",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Biryani", "Tandoor"],
      avgRating: 4.3,
      parentId: "27123",
      avgRatingString: "4.3",
      totalRatingsString: "1.2K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 11.5,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-21 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e0699c77-a85f-4b55-8411-4a17ba92c735",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "151649",
      name: "Hotel Sai Nath & Sai Restaurant",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "railway station",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.3,
      veg: true,
      parentId: "101802",
      avgRatingString: "4.3",
      totalRatingsString: "976",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 10.3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "10.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-20 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e0699c77-a85f-4b55-8411-4a17ba92c735",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "385824",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
      locality: "Sinchai Colony",
      areaName: "Mohan Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.7,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.7",
      totalRatingsString: "301",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 11.2,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "11.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-20 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e0699c77-a85f-4b55-8411-4a17ba92c735",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/the-belgian-waffle-co-sinchai-colony-mohan-nagar-rest385824",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "151518",
      name: "Bakery World",
      cloudinaryImageId: "mt2aggiscfl3yviatwng",
      locality: "Parasia Road",
      areaName: "Parasia Road",
      costForTwo: "₹250 for two",
      cuisines: ["Bakery", "Ice Cream", "Snacks", "Beverages"],
      avgRating: 4.4,
      veg: true,
      parentId: "40363",
      avgRatingString: "4.4",
      totalRatingsString: "259",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 11.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-20 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e0699c77-a85f-4b55-8411-4a17ba92c735",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/bakery-world-parasia-road-rest151518",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "658210",
      name: "The Fusion Lounge",
      cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
      locality: "Triloki nagar",
      areaName: "Railway Station",
      costForTwo: "₹300 for two",
      cuisines: [
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.2,
      parentId: "395453",
      avgRatingString: "4.2",
      totalRatingsString: "326",
      sla: {
        deliveryTime: 61,
        lastMileTravel: 10,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "10.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-20 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e0699c77-a85f-4b55-8411-4a17ba92c735",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/the-fusion-lounge-triloki-nagar-railway-station-rest658210",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "150591",
      name: "Satkar Restaurant",
      cloudinaryImageId: "rvxp5xbniat84r6efku2",
      locality: "Sinchai Colony",
      areaName: "Satkar Chowk",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Indian",
        "Salads",
        "Desserts",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "21553",
      avgRatingString: "4.4",
      totalRatingsString: "2.5K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 11.1,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "11.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-20 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e0699c77-a85f-4b55-8411-4a17ba92c735",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/satkar-restaurant-sinchai-colony-satkar-chowk-rest150591",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "151515",
      name: "Gupta Bhojnalay",
      cloudinaryImageId: "jo9pdipf4elcuch8g55q",
      locality: "fulwara chowk",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food", "Indian", "Beverages"],
      avgRating: 4,
      veg: true,
      parentId: "91635",
      avgRatingString: "4.0",
      totalRatingsString: "447",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 10.8,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "10.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-03-20 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-e0699c77-a85f-4b55-8411-4a17ba92c735",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
      type: "WEBLINK",
    },
  },
];

console.log(resList[0].info.sla.deliveryTime);
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) =>(
            <RestaurantCard key={restaurant.info.id}  resData={restaurant} />
          ))
        }
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

// npm start = npm run start
// npm run build for creating prod build
