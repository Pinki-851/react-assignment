const initialState = { cardData: [] };
const CardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARD_DATA":
      return { ...state, cardData: action.payload };
    default:
      return state;
  }
};
export default CardReducer;
