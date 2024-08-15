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

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="container-md text-center">
      <h1 className="font-bold text-3xl "> Dennis, Ming Leuk YAU</h1>
      <p className="font-bold my-2 text-lg text-orange-600">
        Software Developer | Web Developer | IT | Data
        <br />
      </p>

      {/* <div className="w-100 h-auto  inline-block my-4 border-black border-1">
        image place holder
      </div> */}
      <img className="w-full h-full"></img>
      <div>
        <p className="text-justify flex ">
          I am graduating in August 2024 from Douglas College, Vancouver. During
          my study, I found myself being interested in Web and software
          Development. I am trying my best to learn different coding and
          programming skills and technology to prepare myself to become a Web
          Developer, or any other tech-related position. Please feel free to
          leave a comment below.
        </p>
      </div>

      <div id="commentLeavingDiv" className="justify-center my-4">
        <button
          className="p-3 rounded-md  border-gray-300 border-2      hover:transition-all  hover:shadow-gray-400 hover:border-4 hover:border-gray-300 text-lg font-mono
          mt-3  btn cursor-pointer font-bold bg-orange-500 hover:shadow-xl hover:bg-gray-700 hover:text-white"
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
            <div>{/* <CardShuffle /> */}</div>
          </div>
          <div>
            <span>More Features are coming...</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
