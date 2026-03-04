import { atom, computed } from "nanostores";
import type { Product } from "../data";

export interface CartItem extends Product {
  quantity: number;
}

export const $cart = atom<CartItem[]>([]);
export const $isCartOpen = atom(false);
export const $isMenuOpen = atom(false);

export const addToCart = (product: Product) => {
  const currentCart = $cart.get();
  const existingItem = currentCart.find((item) => item.id === product.id);

  if (existingItem) {
    $cart.set(
      currentCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  } else {
    $cart.set([...currentCart, { ...product, quantity: 1 }]);
  }
  // Optional: open cart when adding
  $isCartOpen.set(true);
};

export const removeFromCart = (productId: number) => {
  $cart.set($cart.get().filter((item) => item.id !== productId));
};

export const clearCart = () => {
  $cart.set([]);
};

export const $cartCount = computed($cart, (items) =>
  items.reduce((count, item) => count + item.quantity, 0),
);

export const $cartTotal = computed($cart, (items) =>
  items.reduce((total, item) => total + item.priceNumber * item.quantity, 0),
);
