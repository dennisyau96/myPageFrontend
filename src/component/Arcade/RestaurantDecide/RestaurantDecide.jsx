import React from "react";
import { useEffect, useState } from "react";

function RestaurantDecide() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [tempNew, setTempNew] = useState();
  const [tempProposer, setTempProposer] = useState();
  const [before, setBefore] = useState(true);
  const [random, setRandom] = useState(0);

  useEffect(() => {
    setTempNew();
    setTempProposer();
  }, []);

  function reset() {
    setCount((p) => 0);
    setList((p) => []);
    setBefore(true);
    setRandom((p) => 0);
  }

  function resetInput() {
    setTempNew();
    document.getElementById("newChoiceInput").value = null;
    setTempProposer();
    document.getElementById("proposerInput").value = null;
  }
  function addChoice(newChoice) {
    if (list.length >= 10) {
      alert("Maximum 10 restaurants / cuisines");
    } else {
      setCount((p) => p + 1);
      setList((p) => [...p, newChoice]);
    }
  }

  const deleteItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
    setCount((p) => p - 1);
  };

  return (
    <>
      <div
        className="border-1 border-gray-600 rounded-md px-3 py-3 mx-3 duration-300 hover:transition-all ease-in-out hover:shadow-lg hover:shadow-sky-300 bg-opacity-90  inline-block"
        id="restaurantDecideDiv"
      >
        <h2 className="mb-3 text-xl  text-white">
          Can&apos;t decide where to dine?
        </h2>
        {before ? (
          <form className=" grid grid-cols-1 justify-center justify-items-center">
            <input
              className="text-md smPlaceholder  m-1 rounded-sm w-72"
              type="text"
              id="newChoiceInput"
              placeholder="Restaurant/Cuisine name"
              value={tempNew}
              onChange={(e) => {
                setTempNew(e.target.value.toUpperCase());
              }}
            ></input>
            <input
              className="text-md smPlaceholder w-auto m-1 rounded-sm"
              type="text"
              id="proposerInput"
              placeholder="Who proposed?"
              value={tempProposer}
              onChange={(e) => {
                //   e.preventDefault();
                setTempProposer(e.target.value.toUpperCase());
              }}
            ></input>
            <button
              className="btn text-gray-200 bg-slate-600 rounded-sm py-1 px-2 m-2 hover:text-white hover:bg-slate-800 w-1/6"
              onClick={(e) => {
                e.preventDefault();
                if (tempNew === "" || tempNew == null) {
                  alert("Please input the name of restaurant / cuisine");
                } else if (tempProposer == null || tempProposer == "") {
                  addChoice({
                    choice: tempNew,
                    pp: "Random guy",
                  });
                  resetInput();
                } else {
                  addChoice({
                    choice: tempNew,
                    pp: tempProposer,
                  });
                  resetInput();
                }
              }}
            >
              Add
            </button>
          </form>
        ) : (
          <div></div>
        )}

        {before ? (
          <div>
            {count > 0 ? (
              <div className="text-gray-400">{count} choices</div>
            ) : null}
            <ul
              className="p-2 overflow-auto max-h-96 block"
              id="choiceListBefore"
            >
              {list.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-200 border-1 border-gray-400 rounded-sm px-3 py-1 my-2"
                >
                  <span className=" text-blue-200"> {item.choice}</span>{" "}
                  <span className="text-sm text-gray-400">proposed by</span>{" "}
                  <span className="text-red-200 text-sm">{item.pp}</span>{" "}
                  <button
                    className="btn  border-1 bg-gray-400  m-1 px-2 py-0 hover:bg-red-400 hover:text-white"
                    onClick={() => {
                      deleteItem(index);
                    }}
                  >
                    -
                  </button>
                </li>
              ))}
            </ul>
            <button
              className=" btn text-gray-200 bg-slate-600 rounded-sm py-1 px-2 m-2 hover:text-gray-700 hover:bg-green-300 "
              onClick={() => {
                if (count < 1) {
                  alert("There is no option.");
                } else if (count == 1) {
                  setBefore(false);
                } else {
                  let randomNum = Math.floor(Math.random(count)) + 1;
                  setRandom(randomNum);
                  setBefore(false);
                }
              }}
            >
              Choose
            </button>
            <button
              className="btn text-gray-200 bg-slate-600 rounded-sm py-1 px-2 m-2 hover:text-gray-700 hover:bg-red-300 "
              onClick={() => {
                reset();
                setBefore(true);
              }}
            >
              Reset
            </button>
          </div>
        ) : (
          <>
            <div className="text-gray-200 text-lg">
              {count > 1 ? (
                <>{list[0].choice} !!!</>
              ) : (
                <div>{list[random].choice} for sure !!!</div>
              )}
            </div>
            <button
              className="btn text-gray-200 bg-slate-600 rounded-sm py-1 px-2 m-2 hover:text-gray-500 hover:bg-slate-800 "
              onClick={() => {
                reset();
                setBefore(true);
              }}
            >
              Reset
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default RestaurantDecide;
