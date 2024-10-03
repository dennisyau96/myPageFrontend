import React from "react";
import { useEffect, useState } from "react";

function RestaurantDecide() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [tempNew, setTempNew] = useState();

  function addChoice(newChoice) {
    console.log(tempNew);
    setCount((p) => p + 1);
    setList((p) => [...list, newChoice]);
    console.log(tempNew);
  }
  return (
    <>
      <div
        className="border-1 border-gray-600 rounded-md px-2 py-3 max-w-96 duration-300 hover:transition-all ease-in-out hover:shadow-lg hover:shadow-sky-300 bg-opacity-90"
        id="restaurantDecideDiv"
      >
        <h2 className="mb-3 text-xl  text-white">
          Can&apos;t decide where to dine?
        </h2>

        <form>
          <input
            type="text"
            id="newChoiceInput"
            onChange={() => setTempNew(e.target.value)}
          ></input>
          <button
            onClick={() => {
              addChoice(tempNew);
            }}
          >
            Add
          </button>
        </form>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default RestaurantDecide;
