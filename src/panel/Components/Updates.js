import React, { useEffect } from "react";
import "./Update.css";
import { connect } from "react-redux";
import { getUpdates } from "../../redux/actions/UpdatesActions";

const Updates = ({ updates: { updates }, getUpdates }) => {
  useEffect(() => {
    getUpdates();
  }, []);
  return (
    <div className="Update content-section">
      <h1>UPDATES</h1>
      {updates && updates.map((data) => <div> {data.update}</div>)}
    </div>
  );
};
const mapStateToProps = (state) => ({
  updates: state.updates,
});
export default connect(mapStateToProps, { getUpdates })(Updates);
