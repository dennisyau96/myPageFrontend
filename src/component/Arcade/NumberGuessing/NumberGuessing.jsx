import { useState, useEffect } from "react";
// import styles from "../Arcade.module.css";
import toast from "react-hot-toast";

function NumberGuessing() {
  const [lifeCount, setLifeCount] = useState(3);
  const [attempt, setAttempt] = useState();
  const [safe, setSafe] = useState(false);
  const [answer, setAnswer] = useState();
  const [ended, setEnded] = useState(false);
  const [exploded, setExploded] = useState(false);
  const [upRange, setUpRange] = useState(20);
  const [downRange, setDownRange] = useState(1);

  useEffect(() => {
    start();
  }, []);

  function start() {
    setAnswer(Math.floor(Math.random() * 20) + 1);
    setAttempt("");
    setLifeCount(3);
    setUpRange(20);
    setDownRange(1);
    setSafe(false);
  }

  function restart() {
    start();
    setExploded(false);
    setEnded(false);
    setSafe(false);
  }

  function guess() {
    //dead
    if (lifeCount < 1) {
      setEnded(true);
      setExploded(true);
    }
    //not dead
    else if (lifeCount > 0) {
      //out range
      if (attempt > upRange) {
        toast.error(
          `Your attempt is too big. Please pick a number within ${downRange} and ${upRange}`
        );
      } else if (attempt < downRange) {
        toast.error(
          `Your attempt is too small. Please pick a number within ${downRange} and ${upRange}`
        );
      }
      //no input
      else if (attempt == null) {
        toast.error(`No input.`);
      }

      //in range
      else if (attempt <= upRange && attempt >= downRange) {
        //correct
        if (attempt == answer) {
          setEnded(true);
          setSafe(true);
        }
        //incorrect
        else if (attempt != answer) {
          //smaller than answer
          if (attempt < answer) {
            setDownRange(attempt);
            toast.error("Wrong number");
          } else if (attempt > answer) {
            setUpRange(attempt);
            toast.error("Wrong number");
          }
          setLifeCount((p) => p - 1);
          if (lifeCount === 0) {
            setEnded(true);
            setExploded(true);
            setSafe(false);
          }
          setAttempt("");
        }
      }
    }
  }

  //
  return (
    <div
      className="border-1 rounded-md px-4 py-3 max-w-72 duration-300 hover:transition-all hover:shadow-lg hover:shadow-sky-300 opacity-90"
      id=""
    >
      <p className="mb-3 text-xl  text-white">
        {!exploded ? "Don't Explode!" : "Exploded"}
      </p>
      <p className="my-3">{" ❤️ ".repeat(lifeCount)}</p>
      {/* testing display */}
      <p className="text-red-300 hidden ">
        ans:{answer}| life:{lifeCount}
        <br></br>
        Down:{downRange}
        <br></br>
        Up:{upRange}
        <br></br>
        attempt:{attempt}
      </p>

      {/* testing display */}
      {!ended ? (
        <div className=" justify-center text-center justify-items-center justify-content-center">
          <p className="flex flex-wrap w-auto text-white justify-center text-center justify-items-center justify-content-center text-md">
            Guess the Secret Code
          </p>

          <div className="justify-center text-center my-2">
            <input
              onChange={(e) => setAttempt(e.target.value)}
              className="form-control border-sky-300 "
              value={attempt}
            ></input>
          </div>
          <div className="text-sm text-gray-400 rounded-lg mt-2 pt-2 max-w-sm">
            Hint:{" "}
            <span className="">
              {downRange} to {upRange}(exclusive)
            </span>
          </div>
          <br />
        </div>
      ) : null}

      {!exploded ? null : (
        <h1 className="text-white text-2xl">BOOOOOOOM!!!!!</h1>
      )}
      {!safe ? null : (
        <div className="text-white text-2xl">
          The secret code is {answer}. You are safe to go.
        </div>
      )}
      <button
        className="bg-slate-200 text-gray-800 p-2 m-3  hover:shadow-lg hover:shadow-gray-500 transition-all ease-in-out cursor-pointer hover:bg-red-300 duration-300  "
        onClick={() => {
          guess();
        }}
      >
        Guess
      </button>
      <button
        onClick={() => restart()}
        className="bg-slate-200 text-gray-800 p-2 m-3  hover:shadow-lg hover:shadow-gray-500 transition-all ease-in-out cursor-pointer hover:bg-green-300 duration-300  "
      >
        Restart
      </button>
    </div>
  );
}

export default NumberGuessing;
