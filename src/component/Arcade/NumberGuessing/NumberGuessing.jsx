import { useState, useEffect } from "react";
// import styles from "../Arcade.module.css";
import toast from "react-hot-toast";

function NumberGuessing() {
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
    if (lifeCount < 1) {
      setEnded(true);
      setExploded(true);
      setAttempt("");
    }
  }, []);

  //function guess

  // function guess() {
  //   // e.preventDefault();

  //   //case 1: null input
  //   if (attempt == "" || attempt == null) {
  //     return toast.error("Please Enter a Value.");
  //   }
  //   //handling for non integer inout
  //   if (attempt % 1 != 0) {
  //     setAttempt("");
  //     return toast.error("Please Enter a Valid Value.");
  //   }

  //   //case 2: no life left
  //   if (lifeCount < 1) {
  //     toast("BOOM!!!");
  //     setExploded(true);
  //     setEnded(true);
  //     setAttempt("");
  //   }

  //   //case 3: life > 0
  //   if (lifeCount > 0) {
  //     //case 3a --- correct
  //     if (attempt == answer) {
  //       setSafe(true);
  //       setEnded(true);
  //       setAttempt("");
  //       toast.success("Congratulation!");
  //       return;
  //     } else {
  //       //wrong
  //       //case 3bi --- attempt out of range
  //       if (attempt <= downRange || attempt >= upRange) {
  //         toast.error(
  //           `Please Enter a Value between ${downRange} to ${upRange}(inclusive). `
  //         );
  //         setAttempt("");
  //       }
  //       //---case 3bii---in range
  //       else if (attempt > downRange && attempt < upRange) {
  //         //case 3biia --- attempt to be down range(wrong)
  //         if (attempt < answer) {
  //           setDownRange((p) => attempt);
  //           dspLife(lifeCount);
  //           toast.error("Wrong guess... ❤️-1.");
  //           setAttempt("");
  //         }
  //         //case 3biib --- attempt to be up range(wrong)
  //         else if (attempt > answer) {
  //           setUpRange((p) => attempt);
  //           dspLife(lifeCount);
  //           toast.error("Wrong guess... ❤️-1.");
  //           setAttempt("");
  //         }
  //         //case 3b2 --- attempt to be up range(wrong)
  //         if (attempt > answer && attempt < upRange) {
  //           setUpRange(attempt);
  //           setLifeCount((l) => l - 1);
  //           if (lifeCount < 1) {
  //             setExploded(true);
  //             setEnded(true);
  //             toast.error("Wrong guess... ❤️-1.Boom!!!!");
  //             return setAttempt("");
  //           }
  //           dspLife(lifeCount);
  //           toast.error("Wrong guess... ❤️-1.");
  //           setAttempt("");
  //         }
  //       }
  //       dspLife;
  //       return;
  //     }
  //   }
  // }

  function guess() {}

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
      className="border-1 rounded-md px-4 py-3 max-w-72 duration-300 hover:transition-all hover:shadow-lg hover:shadow-sky-300 opacity-90"
      id=""
    >
      <p className="mb-3 text-xl  text-white">
        {!exploded ? "Don't Explode!" : "Exploded"}
      </p>
      <p className="my-3">{lifeDsp}</p>
      {/* testing display */}
      <p className="text-white">
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
          <p className="flex flex-wrap w-auto text-white justify-center text-center justify-items-center justify-content-center">
            Guess the Secret Code
          </p>

          <div className="justify-center text-center my-2">
            <input
              value={attempt}
              onChange={(e) => setAttempt(e.target.value)}
              className="form-control border-sky-300 "
            ></input>
          </div>
          <div className="text-sm text-gray-400 rounded-lg mt-2 pt-2 max-w-sm">
            Hint:
            <span className="">
              {downRange}-{upRange}(inclusive)
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
        onClick={(e) => {
          guess(e);
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
