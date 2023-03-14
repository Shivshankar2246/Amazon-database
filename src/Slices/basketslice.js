import { createSlice } from "@reduxjs/toolkit";
export const increaseQuantity = (itemId) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: {
      itemId: itemId,
    },
  };
};

const initialState = {
  items: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_QUANTITY":
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.itemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

      return {
        ...state,
        items: updatedItems,
      };
    default:
      return state;
  }
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      let newBasket = [...state.items];
      if (index >= 0) {
        // the item exists in the basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "cannot remove the product(id:${action.payload.id})as it's not in basket"
        );
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, items) => total + items.price, 0);

export default basketSlice.reducer;
