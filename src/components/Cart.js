import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const renderedItems = cartItems.map((item) => (
    <div key={item.id} className="flex my-2">
      <h3 className="mr-2">{item.itemName}</h3>
      <h3>{item.price}</h3>
    </div>
  ));
  return (
    <div className="m-3">
      <button onClick={() => handleClearCart()} className="py-2 px-3 bg-red-500 hover:bg-red-600 text-white my-2 rounded-md">Clear Cart</button>
      <h1 className="font-bold text-3xl">Cart</h1>
      {renderedItems}
    </div>
  );
};

export default Cart;
