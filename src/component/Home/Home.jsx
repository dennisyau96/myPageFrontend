import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import styles from "./Home.module.css";
//import Arcade game
import DigitalClock from "../Arcade/DigitalClock/DigitalClock";
import Comment from "../Arcade/Comment/Comment";
import DiceRoller from "../Arcade/DiceRoller/DiceRoller";
import NumberGuessing from "../Arcade/NumberGuessing/NumberGuessing";
import Counter from "../Arcade/Counter/Counter";
import CardShuffle from "../Arcade/CardShuffle/CardShuffle";

//please add one photo to each phrase
function Home() {
  return (
    <>
      <h1>Ming Leuk YAU,Dennis</h1>
      <p>Full Time Student</p>

      <div>image place holder</div>
      <div>
        <p>
          I am currently a full-time student in Douglas College, Vancouver.
          During my study, I found myself being interested in Web Development. I
          am trying my best to learn different coding and programming skills and
          technology to prepare myself to become a Web Developer. Feel free to
          try the arcade below.
        </p>
      </div>
      <div>
        <button
          className={"btn"}
          data-bs-toggle="modal"
          data-bs-target="#commentModal"
        >
          Leave a Comment
        </button>
      </div>
      <div className="modal fade" id="commentModal" role="alert">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <button
              className="btn-close"
              aria-label="close"
              data-bs-dismiss="alert"
            /> */}
            <Comment />
          </div>
        </div>
      </div>

      <div className={""}>
        <div>Let have some fun!</div>
        <div className="grid grid-cols-12 gap-4">
          <DigitalClock className="col-span-3" />
          {/* <Comment /> */}
          <DiceRoller className="col-span-3" />
          <NumberGuessing className="col-span-3" />
        </div>
        <div className="grid">
          <Counter className="col-span-3" />
        </div>

        {/* <CardShuffle /> */}
      </div>
    </>
  );
}
export default Home;
