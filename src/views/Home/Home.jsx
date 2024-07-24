import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
//import Arcade game
import DigitalClock from "../../component/Arcade/DigitalClock/DigitalClock";
import Comment from "../../component/Arcade/Comment/Comment";
import DiceRoller from "../../component/Arcade/DiceRoller/DiceRoller";
import NumberGuessing from "../../component/Arcade/NumberGuessing/NumberGuessing";
import Counter from "../../component/Arcade/Counter/Counter";
import CardShuffle from "../../component/Arcade/CardShuffle/CardShuffle";

//please add one photo to each phrase
function Home() {
  // const [deckUrl, setDeckUrl] = useState("../Arcade/CardShuffle/img");

  useEffect(() => {}, []);

  return (
    <div>
      <h1 className="font-bold text-3xl my-4"> Ming Leuk YAU,Dennis</h1>
      <p className="font-bold">Full Time Student(graduate in August 2024)</p>

      <div className="w-60 h-60 bg-slate-400 inline-block m-4">
        image place holder
      </div>
      <img className="w-full h-full"></img>
      <div>
        <p className="text-justify flex my-6">
          I am currently a full-time student in Douglas College, Vancouver.
          During my study, I found myself being interested in Web Development. I
          am trying my best to learn different coding and programming skills and
          technology to prepare myself to become a Web Developer. Please leave a
          comment below.
        </p>
      </div>

      <div id="commentLeavingDiv" className="m-2">
        <button
          className="btn bg-slate-300 border-black border-b-2 border-r-2 hover:bg-slate-400  hover:text-white font-bold hover:transition-all hover:shadow-xl"
          data-bs-toggle="modal"
          data-bs-target="#commentModal"
        >
          Leave a Comment
        </button>

        <div className="modal fade" id="commentModal" role="alert">
          <div className="modal-dialog">
            <div className="modal-content">
              <button
                className="btn-close"
                aria-label="close"
                data-bs-dismiss="modal"
              />
              <Comment />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 mt-20" id="arcadeDiv">
        <div className="text-center font-bold text-4xl">Let have some fun!</div>
        <div className="container p-10">
          {/*carousel */}

          {/*carousel */}

          <div id="arcadeDiv" className="flex flex-wrap">
            <div className="">
              <DigitalClock />
            </div>
            <div className="">
              <DiceRoller />
            </div>
            <div className="">
              <NumberGuessing />
            </div>
            <div className="">
              <Counter />
            </div>
          </div>

          <CardShuffle />
        </div>
      </div>
    </div>
  );
}
export default Home;
