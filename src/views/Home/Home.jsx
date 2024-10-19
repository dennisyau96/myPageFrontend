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
import LandingPage from "../LandingPage/LandingPage";
import EmailButton from "../../component/EmailButton/EmailButton";
import RestaurantDecide from "../../component/Arcade/RestaurantDecide/RestaurantDecide";
import FloatingBallBG from "../AnimationBG/FloatingBallBG";

//please add one photo to each phrase
export default function Home() {
  // const [deckUrl, setDeckUrl] = useState("../Arcade/CardShuffle/img");

  useEffect(() => {
    // scrollTo(0, 0);
  }, []);

  return (
    <div className="Xcenter homePageDiv" id="homePageDiv">
      <LandingPage />

      <div className="block mb-10 Ycenter align-middle homeP2" id="homeP2">
        <div className="homeP2Main Xcenter text-center">
          <h1
            className="   text-center Xcenter theme4font  flex-wrap homeNameTitle"
            id="homeNameTitle"
          >
            Dennis, Ming Leuk YAU
          </h1>
          <p
            className=" theme2font Xcenter inline-block text-center flex-wrap font-bold homeTitleTitle"
            id="homeTitleTitle"
          >
            Software Developer | Web Developer | IT | Data
          </p>
          <img className=""></img>

          <div className="Xcenter  theme2font text-justify p-4 theme3font block content-center align-middle">
            <div
              className="theme3font flex-wrap text-justify Xcenter content-center  inline-block homeIntroPara"
              id="homeIntroPara"
            >
              I graduated from{" "}
              <span className="text-sky-300 ">Douglas College</span> in August
              2024, Vancouver. During my study, I found myself being interested
              in web and software development. I keep on learning different
              coding and programming skills and technologies to prepare myself
              to become a competitive{" "}
              <span className="text-sky-300 homeWDSpan">Web Developer</span>, or
              any other tech-related positions. Please feel free to leave a
              comment below.
            </div>
          </div>
          <div
            id="homeBtnDiv"
            className="block Xcenter text-center flex-wrap homeBtnDiv"
          >
            <button
              className="   m-2 btn theme4font bg-black border-white hover:border-sky-200 hover:shadow-lg border-0.5 hover:shadow-sky-700 hover:bg-slate-600 hover:text-slate-100 transition-all ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#commentModal"
              type="button"
            >
              Leave a Comment
            </button>

            <div
              className="modal fade transition-all ease-in-out duration-500"
              id="commentModal"
              role="alert"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content bg-slate-600">
                  <button
                    type="button"
                    className=" btn-close p-2 text-white bg-white opacity-30 transition-all ease-in-out duration-500"
                    aria-label="close"
                    data-bs-dismiss="modal"
                  />
                  <Comment />
                </div>
              </div>
            </div>
            <span className=" text-gray-500" id="homeOrSpan">
              or
            </span>

            <EmailButton />
          </div>
        </div>
        <div className="bubblesCollction">
          <div className="bubbleGp1">
            <div className="bubbles">
              <span style={{ "--i": 7 }}></span>
              <span style={{ "--i": 13 }}></span>
              <span style={{ "--i": 21 }}></span>
              <span style={{ "--i": 6 }}></span>
              <span style={{ "--i": 11 }}></span>
              <span style={{ "--i": 19 }}></span>
              <span style={{ "--i": 12 }}></span>
              <span style={{ "--i": 10 }}></span>
              <span style={{ "--i": 31 }}></span>
              <span style={{ "--i": 16 }}></span>
              <span style={{ "--i": 22 }}></span>
              <span style={{ "--i": 8 }}></span>
              <span style={{ "--i": 27 }}></span>
              <span style={{ "--i": 20 }}></span>
              <span style={{ "--i": 13 }}></span>
              <span style={{ "--i": 27 }}></span>
              <span style={{ "--i": 11 }}></span>
              <span style={{ "--i": 17 }}></span>
              <span style={{ "--i": 21 }}></span>
              <span style={{ "--i": 32 }}></span>
              <span style={{ "--i": 7 }}></span>
              <span style={{ "--i": 13 }}></span>
              <span style={{ "--i": 26 }}></span>
            </div>
          </div>
        </div>

        <div
          className="theme3font text-center py-20 home2ArrowDiv"
          id="home2ArrowDiv"
        >
          <a href="#homeP3" className="py-10">
            <i className="fa fa-arrow-down text-gray-500 text-3xl cursor-pointer transition-all ease-in-out hover:animate-bounce hover:motion-reduce:animate-bounce "></i>
          </a>
        </div>
      </div>
      {/* <div className="homeP2GlowBar pb-5"></div> */}

      <div className=" bg-gray-500 text-center block homeP3 " id="homeP3">
        <span className=" text-gray-400 block  text-2xl ">
          Let&apos;s have fun!
        </span>
        <div
          className=" homeArcadeDiv py-5 flex-wrap flex  mx-4 my-4 border-1 border-slate-400  overflow-y-auto  gap-y-10  Xcenter "
          id="homeArcadeDiv"
        >
          <div className="">
            <DiceRoller />
          </div>
          <div className="">{/* <NumberGuessing /> */}</div>
          <div className="">
            <Counter />
          </div>
          <div className="">
            <RestaurantDecide />
          </div>

          <div>{/* <CardShuffle /> */}</div>
        </div>
        <span className="loadingSquare inline-block"></span>
        <div className=" theme3font animate-pulse mb-4">
          More features are coming...
        </div>
      </div>
    </div>
  );
}
