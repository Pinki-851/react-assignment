const initialState = { cardData: [], loadingState: true, showError: false };
const CardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARD_DATA":
      return { ...state, cardData: action.payload, loadingState: false };
    case "ERR_CARD_DATA":
      return {
        ...state,
        cardData: action.payload,
        loadingState: true,
        showError: true,
      };
    default:
      return state;
  }
};
export default CardReducer;
