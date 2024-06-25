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
  const [downRange, setdownRange] = useState(1);
  const [lifeDsp, setLifeDsp] = useState("❤️ ❤️ ❤️ ❤️ ❤️");

  // const [countDown, setCountDown] = useState(60);

  // var lifeDisplay = [
  //   "❤️",
  //   "❤️",
  //   "❤️",
  //   "❤️",
  //   "❤️",

  // ];
  useEffect(() => {
    setAnswer(Math.floor(Math.random() * 50) + 1);
    if (answer >= 50) {
      setAnswer(49);
    } else if (answer <= 1) {
      setAnswer(2);
    }
  }, []);

  // setInterval(updateCountDown, 1000);
  // function updateCountDown() {
  //   setCountDown((c) => c - 1);
  // }

  //function guess

  function guess(e) {
    // if (attempt == answer) {
    //   setSafe(true);
    //   setEnded(true);
    //   toast.success("Congratulation!");
    // } else {
    //   if (attempt > upRange || attempt < downRange) {
    //     return toast.error(
    //       `Please guess a number within ${downRange} and ${upRange}`
    //     );
    //   } else {
    //     if (attempt > answer) {
    //       setUpRange(attempt);
    //     } else if (attempt < answer) {
    //       setdownRange(attempt);
    //     }
    //     setAttempt("");
    //     setLifeCount((l) => l - 1);
    //     dspLife(lifeCount);
    //     toast.error("Wrong guess, ❤️-1 ");
    //     if (lifeCount <= 1) {
    //       setExploded(true);
    //       setEnded(true);
    //     }
    //   }
    // if (attempt > upRange || attempt < downRange) {
    //   return toast.error(
    //     `Please guess a number within ${downRange} and ${upRange}.`
    //   );
    // } else {
    // }
    e.preventDefault();
    if (lifeCount <= 0) {
      setExploded(true);
      setEnded(true);
      setAttempt("");
    }

    if (attempt == "" || attempt == null) {
      return toast.error("Please Enter a Value.");
    }

    //case 1 --- life > 0
    if (lifeCount > 0) {
      //case 1c --- correct
      if (attempt == answer) {
        setSafe(true);
        setEnded(true);
        setAttempt("");
        toast.success("Congratulation!");
        return;
      }
      //case 1a --- attempt out of range
      if (attempt <= downRange || attempt >= upRange) {
        setAttempt("");
        toast.error(
          `Please Enter a Value between ${downRange} to ${upRange}(inclusive). `
        );
      }
      //---case 1b---in range
      else {
        //case 1b1 --- attempt to be down range(wrong)
        if (attempt < answer) {
          setdownRange(attempt);
          setLifeCount((l) => l - 1);
          if (lifeCount < 1) {
            setExploded(true);
            toast.error("Wrong guess... ❤️-1.Boom!!!!");
            return setAttempt("");
          }
          dspLife(lifeCount);
          toast.error("Wrong guess... ❤️-1.");
          setAttempt("");
        }
        //case 1b2 --- attempt to be up range(wrong)
        if (attempt > answer) {
          setUpRange(attempt);
          setLifeCount((l) => l - 1);
          if (lifeCount < 1) {
            setExploded(true);
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
    setAnswer(Math.ceil(Math.random() * 50) + 1);
    if (answer >= 50) {
      setAnswer(49);
    }
    if (answer <= 1) {
      setAnswer(2);
    }
    toast.success("Game restarted, secret code regenerated.");
    setAttempt("");
    setUpRange(50);
    setdownRange(1);
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
    <div className={(styles.numberGuessingDiv, styles.boxyBK)}>
      <p className={styles.numGuessTitle}>
        {!exploded ? "Don't explode!" : "Exploded"}
      </p>
      <p>{lifeDsp}</p>
      <p>
        {answer}| {lifeCount}
      </p>
      {!ended ? (
        <div className={styles.numberGuessingDiv}>
          <p className={styles.boomLifeCountMessage}>
            The bomb will go off if you <u>CANNOT</u> guess the secret code in{" "}
            {lifeCount} more times.
          </p>
          <div className={styles.numGuessHint}>
            Hint: choose the number between {downRange}-{upRange}(inclusive).
          </div>
          <div className="input-group" z-index="0">
            <input
              value={attempt}
              onChange={(e) => setAttempt(e.target.value)}
              className={(styles.numberGuessingInput, "form-control")}
            ></input>
            <button
              className={(styles.guessBtn, "input-group-text")}
              onClick={(e) => guess(e)}
            >
              Make a Guess
            </button>
          </div>
          <br />
        </div>
      ) : null}
      {!exploded ? null : <h1 className={styles.boomDsp}>BOOOOOOOM!!!!!</h1>}
      {!safe ? null : (
        <div className={styles.safeToGo}>You are safe to go.</div>
      )}
      <button onClick={() => restart()} className={styles.restartBtn}>
        Restart
      </button>
    </div>
  );
}
