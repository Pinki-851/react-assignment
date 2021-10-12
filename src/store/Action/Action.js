import axios from "axios";

export const getCardData = () => async (dispatch, getState) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((res) => {
      // console.log("success",res);
      dispatch({ type: "GET_CARD_DATA", payload: res.data });
    })
    .catch((err) => {
      // console.log("err");
      dispatch({ type: "ERR_CARD_DATA", payload: err });
    });
};
