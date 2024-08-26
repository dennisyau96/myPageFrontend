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
    <div className="bg-gray-800 rounded-xl px-4 py-3 max-w-96 duration-300 hover:transition-all hover:shadow-xl hover:shadow-sky-300 bg-opacity-90">
      <h1 className=" text-xl font-bold text-white">Tally Counter</h1>
      <div className="flex gap-3">
        <div className="">
          <p className="my-2 theme3font">Customize the steps:</p>
          <div>
            <input
              className="w-20 text-center text-2xl rounded-lg bg-slate-600 text-gray-200"
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
      <div className="grid justify-center ">
        <div className="flex justify-center cursor-pointer text-center">
          <div
            className="bg-slate-500 text-gray-200 p-2 m-3 rounded-lg hover:shadow-xl hover:shadow-gray-500 transition-all ease-in-out cursor-pointer hover:bg-gray-600 "
            onClick={() => {
              minusOne();
            }}
          >
            -1
          </div>
          <div
            className="bg-slate-500 text-gray-200 p-2 m-3 rounded-lg hover:shadow-xl hover:shadow-gray-500 transition-all ease-in-out cursor-pointer hover:bg-gray-600"
            onClick={minusStep}
          >
            -{step ? step : "N"}
          </div>
        </div>

        <div
          className=" bg-gray-950 text-white rounded-xl text-center justify-center align-middle p-3 hover:shadow-sky-500 hover:text-gray-700 cursor-pointer hover:bg-gray-300 transition-all ease-in-out duration-500 max-w-36"
          onClick={resetCount}
        >
          <span className="text-center text-4xl block">{count}</span>
          <span className="text-center block text-xs">Click to Reset</span>
        </div>

        <div className="flex justify-center">
          <div
            className="bg-slate-500 text-gray-200 p-2 m-3 rounded-lg hover:shadow-xl transition-all ease-in-out hover:shadow-gray-500 cursor-pointer hover:bg-gray-600"
            onClick={() => {
              plusOne();
            }}
          >
            +1
          </div>
          <div
            className="bg-slate-500 text-gray-200 p-2 m-3 rounded-lg hover:shadow-xl transition-all ease-in-out hover:shadow-gray-500 cursor-pointer hover:bg-gray-600"
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
