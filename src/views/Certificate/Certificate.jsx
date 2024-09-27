import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//imprting all cert objects
import styles from "./Certificate.module.css";
import { certs } from "./certificate";
import Loading from "../../component/Loading/Loading";

function Certificate() {
  const [index, setIndex] = useState(0);
  const [certificates, setCertificates] = useState([...certs]);
  const [loading, setLoading] = useState(true);
  const [album, setAblum] = useState(true);
  //http://localhost:5173/assets/certificates/pdf/cert1.pdf
  const openPDF = () => {
    window.open(certificates[index].link, "_blank");
  };

  useEffect(() => {
    scrollTo(0, 0);
    // setCertificates((prev) => certs);
    if (certificates != null) {
      setLoading(false);
    }
    certificates.sort((b, a) => b - a);
  }, []);

  function nextCert() {
    if (index >= certificates.length - 1) {
      setIndex(0);
    } else {
      setIndex((i) => (i += 1));
    }
  }

  function prevCert() {
    if (index <= 0) {
      setIndex(certificates.length - 1);
    } else {
      setIndex((i) => (i -= 1));
    }
  }

  function switchMode() {
    let button = document.getElementById("certModeButton");
    if (album == true) {
      button.textContent = "Album mode";
      setAblum(false);
    } else if (album == false) {
      button.textContent = "List mode";
      setAblum(true);
    }
  }

  return (
    <>
      <div className="text-center justify-center container justify-items-center justify-self-center grid grid-col-1 w-auto ">
        <h1 className="font-bold text-3xl my-4 text-center theme4font">
          Certificate
        </h1>

        <div>
          <button
            id="certModeButton"
            onClick={switchMode}
            className="my-3 p-2 cursor-pointer text-white border-1 hover:text-black hover:shadow-lg hover:bg-gray-600  hover:transition-all hover:duration-200"
          >
            List mode
          </button>
        </div>
        {album ? (
          loading ? (
            <Loading />
          ) : (
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide  w-auto my-4 text-center justify-center border-2 border-gray-300 p-4  rounded-xl hover:shadow-sky-300 hover:shadow-xl transition-all duration-500 ease-in-out"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner justify-center text-center">
                <div className="carousel-item active justify-center text-center">
                  <img
                    src={certificates[index].cert}
                    className="d-block w-100 cursor-pointer"
                    alt={certificates[index].title}
                    onClick={() => openPDF([index])}
                  />
                </div>
              </div>
              <div className="text-center theme4font mt-2 ">
                {index + 1}. {certificates[index].title}
              </div>

              <button
                className="carousel-control-prev hover:bg-slate-100 transition-all hover:opacity-35 ease-in-out duration-300"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
                onClick={prevCert}
              >
                <span
                  className="carousel-control-prev-icon "
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button
                className="carousel-control-next hover:bg-slate-100 transition-all  hover:opacity-35 ease-in-out duration-300"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
                onClick={nextCert}
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          )
        ) : null}

        {!album ? (
          <div className=" border-1  p-3 max-h-96 overflow-auto">
            <span className="text-slate-600 text-sm">Please scroll down</span>
            <ul className="justify-center  border-white flex-row px-4 overflow-auto">
              {certs.map((cert, i) => (
                <li key={i} className="text-gray-400 text-left m-1">
                  {i + 1}. {cert.title}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default Certificate;
