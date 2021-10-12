import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "../../components/Card/Card";
import { getCardData } from "../../store/Action/Action";
import "./HomeScreen.css";

const HomeScreen = (props) => {
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await props.getCardData();
  };
  const { cardData } = props;

  return (
    <div className="homescreen_container">
      <h1 className="page_heading">just random cards</h1>
      <div className="card_container">
        {cardData.map((val) => {
          return <Card key={val.id} cardData={val} />;
        })}
        <div className="extra_card"></div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { cardData: state.cardReducer.cardData };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCardData: () => dispatch(getCardData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
