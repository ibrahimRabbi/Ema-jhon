import "./product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({obj,event}) {
  const { name, img, seller, price, stock } = obj;
  
  return (
    <div className="productCard">
      <img src={img} alt="" srcSet="" />

      <div className="cardBody">
        <h4>{name}</h4>
        <h5> price$ : {price}</h5>
        <div className="span">
          <span>manufacture : {seller}</span> <br />
          <span>stock :{stock}</span>
        </div>
      </div>

      <button onClick={() => event(obj)}>
        <FontAwesomeIcon icon={faShoppingCart} />
        Add to a cart
      </button>
    </div>
  );
}
