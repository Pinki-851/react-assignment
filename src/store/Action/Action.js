import axios from "axios";

export const getCardData = () => async (dispatch, getState) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  // console.log(data);
  dispatch({ type: "GET_CARD_DATA", payload: data });
};
