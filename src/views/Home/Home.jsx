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
    <div className="container-md text-center">
      <h1 className="font-bold text-3xl "> Dennis, Ming Leuk YAU</h1>
      <p className="font-bold">
        Full Stack Web Developer
        <br />
      </p>

      <div className="w-60 h-60  inline-block my-4 border-black border-1">
        image place holder
      </div>
      <img className="w-full h-full"></img>
      <div>
        <p className="text-justify flex ">
          I am currently a full-time student in Douglas College, Vancouver.
          During my study, I found myself being interested in Web Development. I
          am trying my best to learn different coding and programming skills and
          technology to prepare myself to become a Web Developer. Please leave a
          comment below.
        </p>
      </div>

      <div id="commentLeavingDiv" className="justify-center my-4">
        <button
          className="p-2 rounded-md bg-slate-100 border-black border-0  hover:bg-slate-400  hover:text-white font-bold hover:transition-all hover:shadow-xl hover:border-4 hover:border-black"
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

      <div className="fluid justify-center " id="arcadeDiv">
        <div className="text-center font-bold text-4xl">Let have some fun!</div>
        <div className="container justify-center">
          <div id="arcadeDiv" className="flex flex-wrap justify-center">
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
