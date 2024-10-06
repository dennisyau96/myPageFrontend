import { useEffect, useState } from "react";
import styles from "../../Arcade/Arcade.module.css";
import toast from "react-hot-toast";

function DiceRoller() {
  const [diceNumber, setDiceNumber] = useState(0);
  const [rolled, setRolled] = useState(false);
  const [result, setResult] = useState([]);
  const [rolling, setRolling] = useState(false);

  function rollDice(e) {
    e.preventDefault();
    setRolled(false);
    setResult([]);

    if (diceNumber == 0) {
      return toast.error("You don't have any die on hand.");
      // window.alert("You don't have any die on hand.");
    } else {
      setRolling(true);
      setTimeout(() => {
        setRolling(false);
      }, 2000);
      if (!rolling) {
        setTimeout(() => {
          setRolled(true);
        }, 2000);
      }

      for (let i = 0; i <= diceNumber - 1; i++) {
        let dice = Math.floor(Math.random() * 6) + 1;
        setResult((r) => [...r, dice]);
      }
    }
  }

  function lessDie() {
    if (diceNumber == 0) {
      return toast.error("You have no die to reduce.");
    } else {
      setDiceNumber((d) => d - 1);
    }
  }

  function moreDie() {
    if (diceNumber >= 6) {
      return toast.error("We only have six dice here.");
      // window.alert("We only have six dice here.");
    } else {
      setDiceNumber((d) => d + 1);
    }
  }

  return (
    <div className=" border-gray-600 border-1 rounded-md px-2 py-3 max-w-96 duration-300 hover:transition-all ease-in-out hover:shadow-lg hover:shadow-sky-300 bg-opacity-90 inline-block">
      <h2 className="mb-3 text-xl  text-white">Dice Roller</h2>
      <div className="flex flex-auto justify-center items-center ease-in-out ">
        <button
          className="bg-slate-800 text-gray-200 p-2 m-3 rounded-lg hover:shadow-xl hover:shadow-gray-500 transition-all ease-in-out cursor-pointer hover:bg-gray-600 "
          onClick={() => lessDie()}
        >
          -1
        </button>
        <div className={styles.dieCounter}>{diceNumber}</div>
        <button
          className="bg-slate-400 text-gray-900 p-2 m-3 rounded-lg hover:shadow-xl hover:shadow-gray-500 transition-all ease-in-out cursor-pointer hover:bg-gray-600"
          onClick={() => moreDie()}
        >
          +1
        </button>
      </div>

      <br />
      <button
        className="bg-slate-200 text-gray-800 p-2 m-3  hover:shadow-lg hover:shadow-gray-500 transition-all ease-in-out cursor-pointer hover:bg-red-300 duration-500 "
        onClick={(e) => {
          rollDice(e);
        }}
      >
        {diceNumber != 0 ? `Roll ${diceNumber} dice` : "No Dice"}{" "}
      </button>

      <button
        className="bg-slate-200 text-gray-800 p-2 m-3  hover:shadow-lg hover:shadow-gray-500 transition-all ease-in-out cursor-pointer hover:bg-green-300 duration-500"
        onClick={() => {
          setDiceNumber(0);
          setResult([]);
          setRolled(false);
          toast.success("The dice were given back to me.");
        }}
      >
        Restart
      </button>
      <div
        className="text-white transition-all duration-200 ease-in-out"
        id="diceDisplay"
      >
        {rolling ? (
          <div id="rollingDiv">
            <p className="text-white">
              The dice are beening rolled...{" "}
              <svg
                className="animate-spin h-5 w-5 mr-3"
                viewBox="0 0 24 24"
              ></svg>
            </p>
          </div>
        ) : null}

        {rolled ? (
          <div id="resultDiv">
            <p className={styles.rollingMsg}>The result is:</p>
            {result.map((r, index) => (
              <div className={styles.dice} key={index}>
                <span>{r} </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default DiceRoller;
