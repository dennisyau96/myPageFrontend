import styles from "../Arcade.module.css";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(2);
  function plusOne() {
    setCount((c) => c + 1);
  }
  function minusOne() {
    setCount((c) => c - 1);
  }
  function plusStep() {
    setCount((c) => parseInt(c) + parseInt(step));
  }
  function minusStep() {
    setCount((c) => c - step);
  }
  function resetCount() {
    if (count == 0) {
      setStep(2);
      return toast.success("The counter has already been reset.");
    } else {
      setCount(0);
      setStep(2);
      toast.success("The counter was reset.");
    }
  }
  return (
    <div className={(styles.counterDiv, styles.boxyBK)}>
      <h1 className="mb-3 text-xl font-bold">Tally Counter</h1>
      <div className="flex gap-3">
        <div>
          Customize the steps:
          <div>
            <input
              className={styles.numOfStep}
              type="number"
              min={2}
              max={20}
              value={step}
              onChange={(e) => {
                setStep(e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className={styles.counterBtn} onClick={minusStep}>
            -{step ? step : "N"}
          </div>
          <div
            className={styles.counterBtn}
            onClick={() => {
              minusOne();
            }}
          >
            -1
          </div>
        </div>

        <div className={styles.counterDisplay} onClick={resetCount}>
          <div>{count}</div>
          <div className={styles.countHint}>Click to Reset</div>
        </div>

        <div>
          {" "}
          <div
            className={styles.counterBtn}
            onClick={() => {
              plusOne();
            }}
          >
            +1
          </div>
          <div className={styles.counterBtn} onClick={plusStep}>
            +{step ? step : "N"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
