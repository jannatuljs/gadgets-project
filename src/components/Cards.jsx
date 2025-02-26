import { useState, useEffect } from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProductFilter() {
  const [items, setItems] = useState([]); // Empty array initially
  const [products, setProducts] = useState([]); // Store full data

  // Fetch JSON on component mount
  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // Store full data
        setItems(data); // Default view: show all products
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Function to filter products based on category
  const filterItems = (catItem) => {
    if (catItem === "All") {
      setItems(products);
    } else {
      const updateItems = products.filter((curItem) => curItem.category === catItem);
      setItems(updateItems);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Sidebar for Filter Buttons */}
      <div className="col-span-3 space-y-2">
        <button className="btn btn-danger w-full" onClick={() => filterItems("All")}>All Products</button>
        <button className="btn btn-danger w-full" onClick={() => filterItems("Phones")}>Phones</button>
        <button className="btn btn-danger w-full" onClick={() => filterItems("Accessories")}>Accessories</button>
        <button className="btn btn-danger w-full" onClick={() => filterItems("MacBook")}>MacBook</button>
        <button className="btn btn-danger w-full" onClick={() => filterItems("Laptops")}>Laptops</button>
        <button className="btn btn-danger w-full" onClick={() => filterItems("SmartWatch")}>SmartWatch</button>
      </div>

      {/* Main Content for Product Cards */}
      <div className="col-span-9">
        <div className="grid grid-cols-3 gap-4">
          {items.length > 0 ? (
            items.map((val) => (
              <div key={val.product_id} className="card bg-base-100 h-[500px] shadow-xl">
                <figure>
                  <img className="h-52 w-52 pt-4" src={val.product_image} alt={val.product_title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{val.product_title}</h2>
                  <p>Category: {val.category}</p>
                  <p>Price: ${val.price}</p>
                  <p>
                    Rating:
                    <Rating
                      initialRating={val.rating}
                      readonly
                      fullSymbol={<FaStar color="gold" />}
                      emptySymbol={<FaRegStar color="gray" />}
                      fractions={2}
                    />
                    {val.rating}
                  </p>
                  <p>Description: {val.description.substring(0, 35)}...</p>
                  <div className="card-actions justify-center">
                    <Link to={`/product/${val.product_id}`} className="btn btn-outline">See Details</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
}
