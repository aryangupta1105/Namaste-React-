import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
<<<<<<< HEAD
    } = resData?.data;
=======
    } = resData?.info;
>>>>>>> new
  
    return (
      <div
        className="res-card"
        style={{
          backgroundColor: '#f0f0f0',
        }}
      >
        <img
          className="res-logo"
          // src={
<<<<<<< HEAD
          //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/' +
=======
          //   'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/2b4f62d606d1b2bfba9ba9e5386fabb7' +
>>>>>>> new
          //   resData.data.cloudinaryImageId
          // }
  
          // Concatenated the link with the Image id to fetch image from cdn
          src={ CDN_URL
            +
            cloudinaryImageId
          }
<<<<<<< HEAD
          alt="Biryani"
=======
          alt={name + " image"}
>>>>>>> new
        />
        {/* <h3>{props.resName}</h3>
          <h4>{props.cuisine}</h4> */}
  
        {/* <h3>{resData.data.name}</h3>
        <h4>{resData.data.cuisines.join(', ')}</h4>
        <h4>{resData.data.avgRating} stars</h4>
        <h4>₹{resData.data.costForTwo / 100} FOR TWO</h4>
        <h4>{resData.data.deliveryTime} minutes</h4> */}
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
<<<<<<< HEAD
        <h4>₹{costForTwo / 100} FOR TWO</h4>
=======
        <h4>{costForTwo}</h4>
>>>>>>> new
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };
  

export default RestaurantCard;