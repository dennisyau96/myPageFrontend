import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DigitalClock from "../../component/Arcade/DigitalClock/DigitalClock";
// import ParticlesBG from "../../component/ParticlesBG/ParticleBG";
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-black Xcenter Ycenter text-center " id="landingPage">
      <div className="Xcenter">
        <DigitalClock />
      </div>

      <div
        id="homeIntroBox"
        className=" border-1 Xcenter Ycenter text-center p-5 inline-block bg-black opacity-90"
      >
        <h1 className="text-white">I am Dennis</h1>
        <span className="text-white">I am a Full Stack Developer.</span>
        <span className="block">
          <Link
            className=""
            target="_blank"
            onClick={() => {
              const ctr = confirm(
                "You will be redirected to the Instagram website"
              );
              if (!ctr) {
                navigate(0);
              }
            }}
            to="https://www.instagram.com/den.y_photography/?igsh=djJ6MGR1Ynh4enRt&utm_source=qr"
          >
            <i className="fa fa-instagram m-2 text-xl hover:scale-110 duration-300 transition-all text-fuchsia-400 ease-in-out opacity-75 hover:opacity-100"></i>
          </Link>
          <Link
            className=""
            target="_blank"
            onClick={() => {
              const ctr = confirm(
                "You will be redirected to the LinkedIn website"
              );
              if (!ctr) {
                //   navigate(0);
              }
            }}
            to="https://www.linkedin.com/in/dennis-yau-314755248/"
          >
            <i className="fa fa-linkedin m-2 transition-all text-xl hover:scale-110 duration-300 text-sky-600 ease-in-out opacity-75 hover:opacity-100"></i>
          </Link>
          <Link
            className=""
            target="_blank"
            onClick={() => {
              const ctr = confirm(
                "You will be redirected to the GitHub website"
              );
              if (!ctr) {
                //   navigate(0);
              }
            }}
            to="https://github.com/dennisyau96"
          >
            <i className="fa fa-github m-2 transition-all text-xl hover:scale-110 duration-300 text-white ease-in-out opacity-75 hover:opacity-100"></i>
          </Link>
        </span>

        <a href="#homeP2" className=" block  scroll-smooth pb-auto inset-0">
          <i className="fa fa-arrow-down mt-1 text-gray-500 text-3xl  hover:scale-120  cursor-pointer transition-all ease-in-out hover:animate-bounce hover:motion-reduce:animate-bounce "></i>
        </a>
      </div>
    </div>
  );
}
