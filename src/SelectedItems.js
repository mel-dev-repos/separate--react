import React, { useContext } from "react";
import { myContext } from "./Context";
import { PropTypes } from "prop-types";
const Selecteditems = (props) => {
  const { uniqueId } = props;
  const value = useContext(myContext);
  return (
    <>
      <li key={uniqueId}>{value}</li>
    </>
  );
};
Selecteditems.propTypes = {
  uniqueId: PropTypes.func,
};
export default Selecteditems;
