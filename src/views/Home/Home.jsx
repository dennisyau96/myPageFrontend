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
    <div className="w-100 justify-center justify-items-center text-center">
      <LandingPage />
      <div className="text-center w-100" id="homeStart">
        <div className="h-100">
          <h1 className="font-bold text-3xl mb-10 pt-40 text-center justify-center theme4font ">
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
              <span className="text-sky-300"> Web Developer</span>, or any other
              tech-related positions. Please feel free to leave a comment below.
            </p>
          </div>

          <div
            id="commentLeavingDiv"
            className="justify-center justify-items-center text-center my-4 w-100"
          >
            <button
              className="px-3 rounded-sm text   border-2 transition-all  hover:shadow-gray-400 hover:border-1 hover:border-gray-200 text-lg font-mono
          mt-3 cursor-pointer btn text-uppercase theme2 hover:shadow-xl hover:bg-gray-700 hover:text-white font-semibold duration-500 hover:animate-pulse ease-in-out"
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
                    className="btn-close p-2 text-white bg-white opacity-30 transition-all ease-in-out duration-500"
                    aria-label="close"
                    data-bs-dismiss="modal"
                  />
                  <Comment />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center font-bold text-4xl theme3font justify-center w-screen ">
            Let&apos;s have some fun!
            <a
              href="#arcadeDiv"
              className=" block  scroll-smooth pb-20 justify-center justify-items-center"
            >
              <i className="fa fa-arrow-down mt-10 text-gray-500 text-3xl    cursor-pointer transition-all ease-in-out hover:animate-bounce hover:motion-reduce:animate-bounce "></i>
            </a>
          </div>
        </div>

        <div
          className=" justify-center justify-items-center text-center bg-black w-screen block h-100"
          id="arcadeDiv"
        >
          <a
            href="#homeStart"
            className=" block  scroll-smooth text-center pt-20 border-none justify-center justify-items-center"
          >
            <i
              id="arcadeArrow"
              className="text-center fa fa-arrow-up mt-0 text-gray-500 text-3xl  cursor-pointer transition-all ease-in-out hover:animate-bounce hover:motion-reduce:animate-bounce "
            ></i>
          </a>
          <div className=" justify-center justify-items-center justify-content-center text-center rounded-md p-4 m-4 flex ">
            <div
              className="grid grid-cols-1 text-center justify-items-center justify-center justify-content-center hover:transition-all hover:duration-300 gap-4   border-2 border-slate-400 p-5 w-1/2 "
              id="homeArcadeDiv"
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

              <div>{/* <CardShuffle /> */}</div>
              <div className="mt-14 theme3font animate-pulse">
                More features are coming...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
