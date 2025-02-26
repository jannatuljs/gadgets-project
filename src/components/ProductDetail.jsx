import { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CartContext } from './Context/CartContext'; 
import { addToCartLocalStorage, addToWishlistLocalStorage } from "../../src/components/db/AddToDb.js";

// Import Toastify components
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WishListContext } from './Context/WishlistContext.jsx';

const ProductDetail = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const [showButton, setShowButton] = useState(false);
  const [cart, setCart] = useState([]);
  const product = data.find((product) => product.product_id === product_id);
  const { product_image, product_title, price, description, Specification, rating, availability } = product || {};
   
  // Cart context to update the cart count
  const { cartCount, addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishListContext);
  // Handle add to cart
  const handleAddToCart = (product) => {
    addToCartLocalStorage(product);
    addToCart();

  

    // Show success message using Toastify
    toast.success('Item added to cart successfully!', {
      
      autoClose: 3000, // Hide the toast after 3 seconds
    });
  };
    // handle add to wish list
    const handleAddToWishList = (product) => {
      addToWishlistLocalStorage(product);
      setShowButton(true);
      addToWishList();
    };
 
  return (
    <div className="bg-purple-500 h-52 mb-80">
      <h3 className="text-center text-2xl font-bold mb-2 text-white">Product Details</h3>
      <p className="justify-center text-center text-white mb-2">
        Explore the latest gadgets that will take your experience<br />
        to the next level. From smart devices to the coolest accessories, We have it all!
      </p>

      <div>
        <div className="card card-side bg-base-100 ml-14 mr-14 shadow-xl">
          <figure className="w-80 h-52 mt-14 p-5">
            <img className="rounded-2xl" src={product_image} alt="product" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{product_title}</h2>
            <h3 className="font-semibold">Price: {price}</h3>
            <span className="p-2 text-center border-2 font-bold text-green-500 border-green-300 w-24 rounded-xl bg-lime-100">
              In Stock
            </span>
            <p className="text-gray-500">{description}</p>
            <h2 className="font-bold">Specification:</h2>

            <p className="text-gray-500">
              {Specification && Specification.length > 0 ? (
                <ul className="list-decimal pl-5">
                  {Specification.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              ) : (
                <span>No specifications available</span>
              )}
            </p>

            <h2 className="font-bold">Rating:</h2>
            <p className="text-lg items-center font-bold">
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              {rating}
            </p>

            <div className="card-actions">
              <button
                onClick={() => handleAddToCart(product)}
                className="btn text-lg font-bold text-white bg-purple-400"
              >
                Add to Cart
                 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>

              <a  onClick={() => handleAddToWishList(product)} className="p-3 bg-slate-100 rounded-3xl "> 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>


    </a>
            </div>
          </div>
        </div>
      </div>

      {/* ToastContainer should be added at the root of your component */}
      <ToastContainer />
    </div>
  );
};

export default ProductDetail;
