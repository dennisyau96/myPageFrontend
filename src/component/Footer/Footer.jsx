import liicon from "../../assets/icon/liicon.svg";
import igicon from "../../assets/icon/igicon.svg";
import fbicon from "../../assets/icon/fbicon.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div
      className="botton-0    text-center justify-center  h-10/12 w-screen theme1 m-0 p-6 footer "
      id="footerDiv"
    >
      <div className="h-1/6 ">
        <p className="justify-self-start text-white">
          <Link to="/">Dennis Yau</Link>
        </p>
        <div className="flex flex-wrap text-center justify-center">
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
            <i className="fa fa-instagram m-2 text-white"></i>
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
            <i className="fa fa-linkedin m-2 text-white"></i>
          </Link>

          <Link
            target="_blank"
            onClick={() => {
              const ctr = confirm(
                "You will be redirected to the GitHub website"
              );
              if (!ctr) {
                navigate(0);
              }
            }}
            to="https://github.com/dennisyau96"
          >
            <i className="fa fa-github m-2 text-white"></i>
          </Link>
        </div>
        <div className="text-right h-fit">
          <a href="#" className="text-xs text-white">
            Back to top
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
