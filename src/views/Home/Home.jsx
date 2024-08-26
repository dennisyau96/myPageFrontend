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

//please add one photo to each phrase
function Home() {
  // const [deckUrl, setDeckUrl] = useState("../Arcade/CardShuffle/img");

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div>
      <LandingPage />
      <div className="container-fluid text-center" id="homeStart">
        <div className="">
          <h1 className="font-bold text-3xl mb-10 pt-40 text-center justify-center theme4font">
            Dennis, Ming Leuk YAU
          </h1>
          <p className="font-bold my-2 text-lg theme2font">
            Software Developer | Web Developer | IT | Data
            <br />
          </p>

          <img className="w-full h-full"></img>
          <div className="container block  justify-center">
            <p className="text-justify  theme3font max-w-screen-sm container">
              I graduated from Douglas College in August 2024, Vancouver. During
              my study, I found myself being interested in web and software
              development. I am trying my best to learn different coding and
              programming skills and technology to prepare myself to become a
              Web Developer, or any other tech-related positions. Please feel
              free to leave a comment below.
            </p>
          </div>

          <div
            id="commentLeavingDiv"
            className="justify-center justify-items-center text-center my-4"
          >
            <button
              className="p-3 rounded-md  border-gray-400 border-2 transition-all  hover:shadow-gray-400 hover:border-4 hover:border-gray-500 text-lg font-mono
          mt-3 cursor-pointer btn text-uppercase theme2 hover:shadow-xl hover:bg-gray-700 hover:text-white font-semibold duration-500 hover:animate-pulse ease-in-out"
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
        </div>

        <div className="text-center font-bold text-4xl theme3font">
          Let&apos;s have some fun!
        </div>
        <a href="#arcadeDiv" className=" scroll-smooth">
          <i className="fa fa-arrow-down mt-10 text-gray-500 text-3xl hover:scale-130 cursor-pointer transition-all ease-in-out hover:animate-bounce hover:motion-reduce:animate-bounce "></i>
        </a>

        <div
          className="fluid justify-center text-center mt-52 pt-24 bg-black"
          id="arcadeDiv"
        >
          <div className=" justify-center border-2 border-slate-400 rounded-md p-4 m-4">
            <div
              id="arcadeDiv"
              className="flex flex-wrap justify-center hover:transition-all hover:duration-300 gap-4 "
            >
              <div className="">
                <DiceRoller />
              </div>
              <div className="">
                <NumberGuessing />
              </div>
              <div className="">
                <Counter />
              </div>
              <div className="">
                <DigitalClock />
              </div>

              <div>{/* <CardShuffle /> */}</div>
            </div>
            <div className="mt-14 theme3font animate-pulse">
              More features are coming...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
