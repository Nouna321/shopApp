import { ADD_TO_CART } from "../actions/cart";
import Cart from "../../models/cart";

const initalState = {
  items: {},
  totalAmount: 0,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.addProduct;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      let newUpdateCart;

      if (state.items[addedProduct.id]) {
        //already have item
        newUpdateCart = new Cart(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        newUpdateCart = new Cart(1, prodPrice, prodTitle);
        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: newUpdateCart },
          totalAmount: state.totalAmount + prodPrice,
        };
      }
  }
  return state;
};
