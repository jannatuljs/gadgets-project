import React from 'react';
import { CartProvider } from './CartContext';
import { WishlistProvider } from './WishlistContext';

const AppContext = ({ children }) => {
    return (
        <CartProvider>
            <WishlistProvider>
                {children}
            </WishlistProvider>
        </CartProvider>
    );
};

export default AppContext;
