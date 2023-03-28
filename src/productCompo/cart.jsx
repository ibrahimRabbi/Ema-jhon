export default function Cart({items,price}) {
  
    return (
      <div className="cart">
            <h3>order summary</h3>
            <div>
                <p>Selected Items : {items.length}</p>
                <p>Total price :{price} </p>
                <p>total shipping charge : </p>
                <p>Tax : </p>
                <h4>Grand Total : </h4>
            </div>
            <button>clear Cart</button>
            <button>review order</button>
      </div>
    );
}