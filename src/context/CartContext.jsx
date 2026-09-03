import { createContext, useState, useEffect, useContext } from "react";
import { teachers } from "../data/TeacherData.js" 
import { getDiscountedFee } from "../utils/discount.js"

const CartContext = createContext();

const validateCart = (rawCart) => {
    return rawCart
        .map((item) => {
            const teacher = teachers.find(
                (t) => t.name === item.teacherName && t.subject === item.subject
            );

            // Drop items whose teacher/subject/level no longer exists
            if (!teacher || !teacher.pricing[item.level]) {
                return null;
            }

            const trustedFee = teacher.pricing[item.level].monthlyFee;
            const trustedDiscountedFee = getDiscountedFee(trustedFee);

            return {
                ...item,
                fee: trustedFee,
                discountedFee: trustedDiscountedFee
            };
        })
        .filter(Boolean);
};

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        const raw = localStorage.getItem('cart');
        const storedCart = raw ? JSON.parse(raw) : [];
        return validateCart(storedCart);
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}