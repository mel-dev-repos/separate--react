import React from "react";
import { useEffect, useState } from "react";
import "./index.css";
import Selecteditems from "./SelectedItems";
import { myContext } from "./Context";
const Allitems = () => {
  const [data, setData] = useState("");

  const [checkedState, setCheckedState] = useState([]);
  useEffect(() => {
    fetch("https://624adb6171e21eebbce84dd9.mockapi.io/Country")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setData(result);
        if (result.length) {
          setCheckedState(new Array(result.length).fill(false));
        }
      });
  }, []);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map(
      (item, index) => (index === position ? !item : item)
      //برای حذف و اضافه
    );

    setCheckedState(updatedCheckedState);
  };
  return (
    <div style={{ display: "flex" }}>
      <ul className="all">
        <h2> All items:</h2>
        {Object.values(data).map(
          (country, key) => (
            console.log(country),
            (
              // console.log(checkedState[key]), //true if its checked and false if unchecked
              <div style={{ display: "flex" }}>
                <input
                  type="checkbox"
                  name={`checkBox${key}`}
                  checked={checkedState[key]}
                  onChange={() => handleOnChange(key)}
                />
                <li key={key}>{country.name}</li>
              </div>
            )
          )
        )}
      </ul>
      <ul className="selectedItems">
        <h2>Selected items:</h2>
        {Object.values(data).map((country, key) => (
          <myContext.Provider
            value={checkedState[key] === true ? country.name : ""}
          >
            <Selecteditems uniqueId={() => Math.random()} />
          </myContext.Provider>
        ))}
      </ul>
    </div>
  );
};

export default Allitems;
