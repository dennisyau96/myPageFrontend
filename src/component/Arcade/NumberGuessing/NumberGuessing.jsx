import { useState, useEffect } from "react";
import styles from "../Arcade.module.css";
import toast from "react-hot-toast";

export default function NumberGuessing() {
  const [lifeCount, setLifeCount] = useState(5);
  const [attempt, setAttempt] = useState();
  const [safe, setSafe] = useState(false);
  const [answer, setAnswer] = useState();
  const [ended, setEnded] = useState(false);
  const [exploded, setExploded] = useState(false);
  const [upRange, setUpRange] = useState(50);
  const [downRange, setDownRange] = useState(1);
  const [lifeDsp, setLifeDsp] = useState("❤️ ❤️ ❤️ ❤️ ❤️");

  useEffect(() => {
    start();
    if (answer > 49) {
      setAnswer(49);
    } else if (answer < 2) {
      setAnswer(2);
    }
  }, []);

  //function guess

  function guess() {
    // e.preventDefault();

    //case 1: null input
    if (attempt == "" || attempt == null) {
      return toast.error("Please Enter a Value.");
    }
    //handling for non integer inout
    if (attempt % 1 != 0) {
      setAttempt("");
      return toast.error("Please Enter a Valid Value.");
    }

    //case 2: no life left
    if (lifeCount < 1) {
      setExploded(true);
      setEnded(true);
      // setAttempt("");
    }

    //case 3: life > 0
    if (lifeCount > 0) {
      //case 1c --- correct
      if (attempt == answer) {
        setSafe(true);
        setEnded(true);
        setAttempt("");
        toast.success("Congratulation!");
        return;
      }
      //case 3a --- attempt out of range
      if (attempt <= downRange || attempt >= upRange) {
        toast.error(
          `Please Enter a Value between ${downRange} to ${upRange}(inclusive). `
        );
        setAttempt("");

        // setUpRange(upRange);
        // setDownRange(downRange);
      }
      //---case 3b---in range
      else {
        //case 3b1 --- attempt to be down range(wrong)
        if (attempt < answer && attempt > downRange) {
          setDownRange(attempt);
          setLifeCount((l) => lifeCount - 1);
          if (lifeCount < 1) {
            setExploded(true);
            setEnded(true);
            toast.error("Wrong guess... ❤️-1.Boom!!!!");
            return setAttempt("");
          }
          dspLife(lifeCount);
          toast.error("Wrong guess... ❤️-1.");
          setAttempt("");
        }
        //case 3b2 --- attempt to be up range(wrong)
        if (attempt > answer && attempt < upRange) {
          setUpRange(attempt);
          setLifeCount((l) => l - 1);
          if (lifeCount < 1) {
            setExploded(true);
            setEnded(true);
            toast.error("Wrong guess... ❤️-1.Boom!!!!");
            return setAttempt("");
          }
          dspLife(lifeCount);
          toast.error("Wrong guess... ❤️-1.");
          setAttempt("");
        }
      }

      return;
    }
  }

  //--------------------------------------------

  function restart() {
    setAnswer(Math.ceil(Math.random() * 49) + 1);
    if (answer >= 50) {
      setAnswer(49);
    }
    if (answer <= 1) {
      setAnswer(2);
    }
    setAttempt("");
    setUpRange(50);
    setDownRange(1);
    setExploded(false);
    setSafe(false);
    setLifeCount(5);
    setLifeDsp("❤️ ❤️ ❤️ ❤️ ❤️");
    setEnded(false);
    toast.success("Game restarted, secret code regenerated.");
  }

  function start() {
    setAnswer(Math.ceil(Math.random() * 50) + 1);
    if (answer >= 50) {
      setAnswer(49);
    }
    if (answer <= 1) {
      setAnswer(2);
    }
    setAttempt("");
    setUpRange(50);
    setDownRange(1);
    setExploded(false);
    setSafe(false);
    setLifeCount(5);
    setLifeDsp("❤️ ❤️ ❤️ ❤️ ❤️");
    setEnded(false);
  }

  function dspLife(lc) {
    setLifeDsp("");
    for (let i = 1; i < lc; i++) {
      setLifeDsp((l) => l + "❤️ ");
    }
  }
  //
  return (
    <div
      className="bg-slate-800 rounded-xl px-4 py-3 max-w-72 duration-300 hover:transition-all hover:shadow-xl hover:shadow-sky-300 opacity-90"
      id=""
    >
      <p className="mb-3 text-xl font-bold text-white">
        {!exploded ? "Don't explode!" : "Exploded"}
      </p>
      <p className="my-3">{lifeDsp}</p>
      {/* testing display */}
      {/* <p>
        ans:{answer}| life:{lifeCount}
        <br></br>
        Down:{downRange}
        <br></br>
        Up:{upRange}
        <br></br>
        attempt:{attempt}
      </p> */}

      {/* testing display */}
      {!ended ? (
        <div className=" justify-center text-center justify-items-center">
          <p className="flex flex-wrap w-auto text-white">
            You have {lifeCount} chance(s) to guess the secret code.
          </p>
          <div className="text-md bg-white rounded-lg my-2 py-2 max-w-sm">
            Hint:
            <span className="">
              {downRange}-{upRange}(inclusive)
            </span>
          </div>
          <div className="justify-center text-center">
            <input
              value={attempt}
              onChange={(e) => setAttempt(e.target.value)}
              className="form-control border-sky-300 "
            ></input>
          </div>
          <br />
        </div>
      ) : null}
      {!exploded ? null : <h1 className={styles.boomDsp}>BOOOOOOOM!!!!!</h1>}
      {!safe ? null : (
        <div className={styles.safeToGo}>
          The secret code is {answer}. You are safe to go.
        </div>
      )}
      <button
        className="bg-red-200 text-gray-800 p-2 m-3 rounded-lg hover:shadow-xl hover:shadow-gray-500 transition-all ease-in-out cursor-pointer hover:bg-red-600 duration-500  "
        onClick={(e) => {
          guess(e);
        }}
      >
        Guess
      </button>
      <button
        onClick={() => restart()}
        className="bg-green-200 text-gray-800 p-2 m-3 rounded-lg hover:shadow-xl hover:shadow-gray-500 transition-all ease-in-out cursor-pointer hover:bg-green-600 duration-500  "
      >
        Restart
      </button>
    </div>
  );
}
