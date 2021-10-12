import React from "react";
import { connect } from "react-redux";
import "./Loader.css";
const Loader = (props) => {
  console.log(props);
  const { showError } = props;

  return (
    <>
      {" "}
      <div className="loader_container">
        {showError ? (
          <button>retry</button>
        ) : (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    showError: state.cardReducer.showError,
  };
};

export default connect(mapStateToProps)(Loader);
