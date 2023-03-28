
import {useEffect, useState} from 'react'
import Cart from "./cart";
import ProductCard from "./productCard"
export default function Wrap() {
    const [produdct, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartTotal, setTotal] = useState(0);

    useEffect(() => {
    fetch("../../public/products.json")
      .then((res) => res.json())
      .then((res) => setProduct(res));
    }, []);
    
    
    const buttonClick = (data) => {
        const newarry = [...cart,data]
        setCart(newarry)
        setTotal((pre)=>pre+data.price)
    }

    return (
      <section className="productSection">
         
            <div className="productContainer">
              {produdct.slice(0, 9).map((v) => {
                return <ProductCard obj={v} event={buttonClick} key={v.id} />;
              })}
            </div>
            <Cart items={cart} />

      </section>
    );
}