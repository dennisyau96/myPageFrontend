import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//imprting all cert objects
import styles from "./Certificate.module.css";
import { certs } from "./certificates";
import Loading from "../../component/Loading/Loading";

function Certificate() {
  const [index, setIndex] = useState(0);
  const [certificates, setCertificates] = useState([...certs]);
  const [loading, setLoading] = useState(true);
  const [cert, setCert] = useState(true);
  //http://localhost:5173/assets/certificates/pdf/cert1.pdf
  // const openPDF = (index) => {
  //   window.open(certificates[index], "_blank");
  // };

  useEffect(() => {
    scrollTo(0, 0);
    setCertificates((prev) => certs);

    if (certificates != null) {
      setLoading(false);
    }
    certificates.sort((a, b) => b.cert - a.cert);
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
    if (cert == true) {
      button.textContent = "Album mode";
      setCert(false);
    } else if (cert == false) {
      button.textContent = "List mode";
      setCert(true);
    }
  }

  return (
    <>
      <div className="text-center Xcenter certPageDiv" id="certPageDiv">
        <h1 className="font-bold text-3xl my-4 text-center theme4font pageTitle">
          Certificate
        </h1>

        <div className="certOuterDiv">
          <button
            id="certModeButton"
            onClick={switchMode}
            className="certModeButton my-3 p-2 cursor-pointer text-white border-1  hover:text-black hover:shadow-lg hover:bg-gray-600  hover:transition-all hover:duration-200"
            //
          >
            List mode
          </button>
        </div>
        <div className="certDiv">
          {cert ? (
            loading ? (
              <Loading />
            ) : (
              <div
                id="carouselExampleAutoplaying"
                className=" certCarousel carousel slide m-4 text-center Xcenter justify-center border-2 border-gray-300 py-4  hover:shadow-sky-300 hover:shadow-xl w-auto "
                data-bs-ride="carousel"
              >
                <div className="carousel-inner Xcenter  text-center">
                  <div className="carousel-item active Xcenter text-center">
                    <img
                      src={certificates[index].cert}
                      className="d-block Xcenter w-100"
                      alt={certificates[index].title}
                      // onClick={() => openPDF([index])}
                    />
                  </div>
                </div>
                <div className="text-center Xcenter theme4font mt-2 ">
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

          {!cert ? (
            <div
              className=" border-1  overflow-auto listModeCertDiv"
              id="listModeCertDiv"
            >
              <span className="text-slate-600 text-sm">Please scroll down</span>
              <ul className="justify-center  border-white flex-row px-4 overflow-auto ">
                {certs.map((cert, i) => (
                  <li
                    key={i}
                    className="text-gray-400 text-left my-2 grid grid-cols-10 "
                  >
                    <span className="col-span-1 theme2font">{i + 1}. </span>
                    <span className="col-span-9 theme4font">{cert.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
export default Certificate;
