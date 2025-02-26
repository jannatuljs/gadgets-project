import { useState } from 'react';
import product from '../../public/products.json';
import Rating from 'react-rating';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 

export default function ProductFilter() {
  const [items, setItems] = useState(product);
 

  

  // Function to filter products based on category
  const filterItems = (catItem) => {
    const updateItems = product.filter((curItem) => curItem.category === catItem);
    setItems(updateItems);
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Sidebar for Filter Buttons */}
      <div className="col-span-3">
         
        <div className="space-y-2">
          <button className="btn btn-danger w-full" onClick={() => setItems(product)}>
            All Products
          </button>
          <button className="btn btn-danger w-full" onClick={() => filterItems("Phones")}>
            Phones
          </button>
          <button className="btn btn-danger w-full" onClick={() => filterItems("Accessories")}>
            Accessories
          </button>
          <button className="btn btn-danger w-full" onClick={() => filterItems("MacBook")}>
            MacBook
          </button>
          <button className="btn btn-danger w-full" onClick={() => filterItems("Laptops")}>
            Laptops
          </button>
          <button className="btn btn-danger w-full" onClick={() => filterItems("SmartWatch")}>
            SmartWatch
          </button>
        </div>
      </div>

      {/* Main Content for Product Cards */}
      <div className="col-span-9">
        <div className="grid grid-cols-3   gap-4">
          {items.map((val) => (
            <div key={val.product_id} > 
              <div className="card bg-base-100 h-[500px]  shadow-xl">
                <figure>
                  <img className="h-52 w-52 pt-4" src={val.product_image} alt={val.product_title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{val.product_title}</h2>
                  <p>Category: {`${val.category}`}</p>
                  <p>Price: {`$${val.price}`}</p>
                  <p>
                    Rating:
                    <Rating
                      initialRating={val.rating}  // Set initial rating based on val.rating
                      readonly  // Make it read-only
                      fullSymbol={<FaStar color="gold" />}  // Full star symbol
                      emptySymbol={<FaRegStar color="gray" />}  // Empty star symbol
                      fractions={2}  // Allow half-star ratings
                    />
                    {val.rating}
                  </p>
                  <p> Description:  {val.description.substring(0, 35)}...</p>
                  <div className="card-actions justify-center">
                    <Link to= {`/product/${val.product_id}`} className="btn btn-outline">See Details</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
