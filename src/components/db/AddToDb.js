import { toast } from "react-toastify";

// Carts section start
// Get cart
  const getToCartLocalStorage = () => {
  const products = localStorage.getItem("products");

  if (products) {
    return JSON.parse(products);
  } else {
    return [];
  }
};

// Add to cart
 const addToCartLocalStorage = (product) => {
  const products = getToCartLocalStorage();

  const exists = products?.find(
    (item) => item?.product_id === product?.product_id
  );

  if (exists) {
    return toast.error("This item has been added to cart already 😈");
  } else {
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    toast.success("Item added to cart");
  }
};

// Delete from cart
const deleteToCartLocalStorage = (id) => {
  const products = getToCartLocalStorage();

  const filtered = products.filter((product) => product?.product_id !== id);

  localStorage.setItem("products", JSON.stringify(filtered));
  toast.error("This item deleted from cart");
};

// Clear cart
const clearToCartLocalStorage = () => {
  localStorage.removeItem("products");
};
// Carts section end

// Wishlist section start
// Get wish list
const getToWishlistLocalStorage = () => {
  const products = localStorage.getItem("wishlist");

  if (products) {
    return JSON.parse(products);
  } else {
    return [];
  }
};

// Add to wishlist
const addToWishlistLocalStorage = (product) => {
  const products = getToWishlistLocalStorage();

  const exists = products?.find(
    (item) => item?.product_id === product?.product_id
  );

  if (exists) {
    return alert("This item has been added to Wish list already😈");
  } else {
    products.push(product);
    localStorage.setItem("wishlist", JSON.stringify(products));
    toast.success("Item added to Wish list");
  }
};

// Delete from wishlist
const deleteToWishlistLocalStorage = (id) => {
  const products = getToWishlistLocalStorage();

  const filtered = products.filter((product) => product?.product_id !== id);

  localStorage.setItem("wishlist", JSON.stringify(filtered));
  toast.error("This item deleted from Wish List");
};
// Wishlist section end

// Export all functions as a default export
export  {
  addToCartLocalStorage,
  addToWishlistLocalStorage,
  clearToCartLocalStorage,
  deleteToCartLocalStorage,
  deleteToWishlistLocalStorage,
  getToCartLocalStorage,
  getToWishlistLocalStorage,
};
