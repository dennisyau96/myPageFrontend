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
    <div className="theme2 rounded-xl px-4 py-3 max-w-96 duration-300 hover:transition-all hover:shadow-xl hover:shadow-gray-500">
      <h1 className=" text-xl font-bold text-white">Tally Counter</h1>
      <div className="flex gap-3">
        <div className="">
          <p className="my-2">Customize the steps:</p>
          <div>
            <input
              className="w-20 text-center text-2xl rounded-lg"
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
      <div className="grid ">
        <div className="flex justify-center cursor-pointer">
          <div
            className="bg-white p-2 m-3 rounded-lg hover:shadow-xl hover:shadow-gray-500 transition-all ease-in-out cursor-pointer"
            onClick={() => {
              minusOne();
            }}
          >
            -1
          </div>
          <div
            className="bg-white p-2 m-3 rounded-lg hover:shadow-xl hover:shadow-gray-500 transition-all ease-in-out cursor-pointer"
            onClick={minusStep}
          >
            -{step ? step : "N"}
          </div>
        </div>

        <div
          className=" bg-white rounded-xl text-center justify-center align-middle p-3 hover:shadow-gray-500 hover:shadow-xl cursor-pointer hover:bg-slate-600"
          onClick={resetCount}
        >
          <div className="text-center text-4xl">{count}</div>
          <div className="text-center">Click to Reset</div>
        </div>

        <div className="flex justify-center">
          <div
            className="bg-white p-2 m-3 rounded-lg hover:shadow-xl transition-all ease-in-out hover:shadow-gray-500 cursor-pointer"
            onClick={() => {
              plusOne();
            }}
          >
            +1
          </div>
          <div
            className="bg-white p-2 m-3 rounded-lg hover:shadow-xl transition-all ease-in-outs hover:shadow-gray-500 cursor-pointer"
            onClick={plusStep}
          >
            +{step ? step : "N"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
