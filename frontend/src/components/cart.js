import { Link } from 'react-router-dom';
import { useCart } from '../contex/CartContext';
import Navbar from './navbar';

function Cart() {
  const { cartItems, updateQuantity ,removeFromCart} = useCart();

  // Function to calculate the total price for each item
  const itemTotal = (price, quantity) => price * quantity;

  // Function to calculate the total bill amount
  const calculateTotalBill = () => {
    return cartItems.reduce((total, item) => total + itemTotal(item.price, item.quantity), 0);
  };

  const handleQuantityChange = (event, book) => {
    const newQuantity = parseInt(event.target.value, 10);
    updateQuantity(book.id, newQuantity);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20 p-6 bg-white text-black shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-8">Your Shopping Cart</h1>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Book Name</th>
                <th className="px-4 py-2">Quantity</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Total</th>
                <th className="px-4 py-2">Action</th>

              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      value={item.quantity || 1}
                      onChange={(event) => handleQuantityChange(event, item)}
                      min="1"
                      className="input input-bordered w-20 bg-white text-black"
                    />
                  </td>
                  <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                  <td className="px-4 py-2">${itemTotal(item.price, item.quantity).toFixed(2)}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => removeFromCart(item.id)} className="btn btn-error btn-sm">
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-8 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold">Total Bill Amount:</h2>
          <p className="text-xl">${calculateTotalBill().toFixed(2)}</p>
        </div>
        <div className="flex justify-center mt-6">
          <Link to="/checkout" className="btn btn-primary btn-lg">Proceed to Checkout</Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
