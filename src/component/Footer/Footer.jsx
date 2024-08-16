import liicon from "../../assets/icon/liicon.svg";
import igicon from "../../assets/icon/igicon.svg";
import fbicon from "../../assets/icon/fbicon.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer bottom-0 h-10/12 w-full theme1 m-0 p-6">
      <div className="h-1/6  ">
        <p className="justify-self-start text-white">Dennis Yau</p>
        <div className="flex flex-wrap ">
          {/* <Link to="/">
            <img
              src={fbicon}
              className="h-10 my-2 mx-2 hover:bg-orange-500 hover:rounded-lg"
              alt="FB"
            />
          </Link> */}
          <Link
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
            <img
              src={igicon}
              className="h-10 my-2 mx-2   hover:transition-all hover:motion-reduce:animate-pulse "
              alt="INSTA"
            />
          </Link>
          <Link
            target="_blank"
            onClick={() => {
              const ctr = confirm(
                "You will be redirected to the LinkedIn website"
              );
              if (!ctr) {
                navigate(0);
              }
            }}
            to="https://www.linkedin.com/in/dennis-yau-314755248/"
          >
            <img
              src={liicon}
              className=" h-10 my-2 mx-2    hover:transition-all hover:motion-reduce:animate-pulse"
              alt="LinkedIn"
            ></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
