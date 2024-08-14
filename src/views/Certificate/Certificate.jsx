import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//imprting all cert objects
import styles from "./Certificate.module.css";
import { certs } from "./certificate";

function Certificate() {
  const [index, setIndex] = useState(0);
  const [certificates, setCertificates] = useState([...certs]);

  useEffect(() => {
    scrollTo(0, 0);
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

  return (
    <>
      <div className="justify-center container container-fluid container-lg">
        <h1 className="font-bold text-3xl my-10 text-center justify-center">
          Certificate{" "}
        </h1>

        {/*carousel */}
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide max-w-screen-lg justify-center text-center mb-6 self-center justify-self-center"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner justify-center text-center">
            <div className="carousel-item active justify-center text-center">
              <img
                src={certificates[index].cert}
                className="d-block w-100"
                alt={certificates[index].title}
              />
            </div>
          </div>
          <div className="text-center  ">
            {index + 1}. {certificates[index].title}
          </div>

          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
            onClick={prevCert}
          >
            <span
              className="carousel-control-prev-icon hover:bg-slate-100 hover:transition-all duration-1000"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
            onClick={nextCert}
          >
            <span
              className="carousel-control-next-icon hover:bg-slate-100 hover:transition-all duration-1000"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Next</span>
          </button>
        </div>
        {/* carousel*/}
      </div>
    </>
  );
}
export default Certificate;
