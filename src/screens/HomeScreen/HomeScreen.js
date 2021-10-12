import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { getCardData } from "../../store/Action/Action";
import "./HomeScreen.css";

const HomeScreen = (props) => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await props.getCardData();
  };
  const { cardData, loadingState } = props;

  return (
    <>
      <div className="homescreen_container">
        <h1 className="page_heading">just random cards</h1>
        <p
          style={{
            width: "100%",
            backgroundColor: "#000",
            textAlign: "center",
            position: "absolute",
            top: "9%",
            color: "#fff",
          }}
        >
          please try again
        </p>

        {loadingState ? (
          <Loader />
        ) : (
          <>
            <div className="card_container">
              {cardData.map((val) => {
                return <Card key={val.id} cardData={val} />;
              })}
              <div className="extra_card"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cardData: state.cardReducer.cardData,
    loadingState: state.cardReducer.loadingState,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCardData: () => dispatch(getCardData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
