const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((acc, obj) => acc + obj.price, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizza = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload]


      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizza,
          totalPrice: getTotalPrice(currentPizza),
        }
      };

      const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
      const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'PLUS_PIZZA':{
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ]
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        },
      }
      
      const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
      const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      }}

    case 'MINUS_PIZZA':{
      const oldItems = state.items[action.payload].items; 
      const newObjItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        },
      }

      const totalCount = Object.keys(newItems).reduce((sum, key) => newItems[key].items.length + sum, 0);
      const totalPrice = Object.keys(newItems).reduce((sum, key) => newItems[key].totalPrice + sum, 0);
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      }}

    case 'CLEAR_CART':
      return {
        ...state,
        items: {},
        totalPrice: 0,
        totalCount: 0,
      }

    case 'REMOVE_PIZZA_FROM_CART':
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload]
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      }

    default:
      return state;
  }
}
export default cart;