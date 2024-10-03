import styles from "./Gallery.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import qr from "../../../src/assets/gallery/QR.jpg";
import pic1 from "../../../src/assets/gallery/pic1.jpg";
// import pic2 from "../../../src/assets/gallery/pic2.jpg";
// import pic3 from "../../../src/assets/gallery/pic3.jpg";
import pic4 from "../../../src/assets/gallery/pic4.jpg";
import pic5 from "../../../src/assets/gallery/pic5.jpg";
// import pic6 from "../../../src/assets/gallery/pic6.jpg";
// import pic7 from "../../../src/assets/gallery/pic7.jpg";
import pic8 from "../../../src/assets/gallery/pic8.jpg";
import pic9 from "../../../src/assets/gallery/pic9.jpg";
import pic10 from "../../../src/assets/gallery/pic10.jpg";
import pic11 from "../../../src/assets/gallery/pic11.jpg";
import pic12 from "../../../src/assets/gallery/pic12.jpg";
import pic13 from "../../../src/assets/gallery/pic13.jpg";
import pic14 from "../../../src/assets/gallery/pic14.jpg";
import pic15 from "../../../src/assets/gallery/pic15.jpg";
import pic16 from "../../../src/assets/gallery/pic16.jpg";
// import pic18 from "../../../src/assets/gallery/pic8.jpg";
// import pic19 from "../../../src/assets/gallery/pic9.jpg";

import { useNavigate } from "react-router-dom";
export default function Gallery() {
  const navigate = useNavigate();
  const photosSrc = [
    { href: "../../../src/assets/gallery/pic1.jpg", pic: pic1 },
    // { href: "../../../src/assets/gallery/pic2.jpg", pic: pic2 },
    // { href: "../../../src/assets/gallery/pic3.jpg", pic: pic3 },
    { href: "../../../src/assets/gallery/pic4.jpg", pic: pic4 },
    { href: "../../../src/assets/gallery/pic5.jpg", pic: pic5 },
    // { href: "../../../src/assets/gallery/pic6.jpg", pic: pic6 },
    // { href: "../../../src/assets/gallery/pic7.jpg", pic: pic7 },
    { href: "../../../src/assets/gallery/pic8.jpg", pic: pic8 },
    { href: "../../../src/assets/gallery/pic9.jpg", pic: pic9 },
    { href: "../../../src/assets/gallery/pic10.jpg", pic: pic10 },
    { href: "../../../src/assets/gallery/pic11.jpg", pic: pic11 },
    { href: "../../../src/assets/gallery/pic12.jpg", pic: pic12 },
    { href: "../../../src/assets/gallery/pic13.jpg", pic: pic13 },
    { href: "../../../src/assets/gallery/pic14.jpg", pic: pic14 },
    { href: "../../../src/assets/gallery/pic15.jpg", pic: pic15 },
    { href: "../../../src/assets/gallery/pic16.jpg", pic: pic16 },
  ];

  const [index, setIndex] = useState(0);
  const [photos, setPhotos] = useState([]);

  function nextPhoto() {
    if (index >= photos.length - 1) {
      setIndex(0);
    } else {
      setIndex((i) => (i += 1));
    }
  }
  function prevPhoto() {
    if (index <= 0) {
      setIndex(photos.length - 1);
    } else {
      setIndex((i) => (i -= 1));
    }
  }

  useEffect(() => {
    scrollTo(0, 0);
    setPhotos((prev) => photosSrc);
  }, []);

  return (
    <>
      <div className="text-center justify-center container justify-items-center justify-self-center grid grid-col-1 w-auto transition-all duration-500 ease-in-out">
        <h1 className="font-bold text-3xl my-4 theme4font">Gallery</h1>
        {/*carousel */}
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide  carousel-fade w-6/12  my-4 text-center justify-center border-2 border-gray-300 py-10 hover:shadow-sky-300 hover:shadow-md duration-500 ease-in-out transition-all max-h-1/2"
          data-bs-ride="carousel"
          data-ride="carousel"
          data-pause="false"
          data-interval="1000"
        >
          <div className="carousel-inner w-full justify-center ">
            <div className="carousel-item active justify-center transition-all duration-500 ease-in-out">
              <img
                src={photosSrc[index].pic}
                className="d-block w-full  transition-all duration-300 ease-in-out "
                alt=""
              />
            </div>
            <button
              className="carousel-control-prev hover:bg-gray-100 hover:opacity-35 transition-all ease-in-out duration-300"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
              onClick={prevPhoto}
            >
              <span
                className="carousel-control-prev-icon "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next hover:bg-gray-100 hover:opacity-35 transition-all ease-in-out duration-300"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
              onClick={nextPhoto}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/*carousel */}

        <div className="my-4 justify-center text-center">
          <span className="theme3font">
            Want to see more photo?
            <br /> Please visit{" "}
            <Link
              className="hover:text-slate-300 underline transition-all duration-500 ease-in-out "
              to="https://www.instagram.com/den.y_photography?igsh=djJ6MGR1Ynh4enRt&utm_source=qr"
              target="blank"
              onClick={() => {
                const ctr = confirm(
                  "You will be redirected to the project website"
                );
                if (!ctr) {
                  navigate(0);
                }
              }}
            >
              den.y_photography@Instagram
            </Link>
          </span>

          <div className="">
            <strong className="theme4font">Like, Share and Follow</strong>
          </div>

          <br />
          <div>
            <button className=" my-3 p-2 cursor-pointer text-white border-1 hover:text-black hover:shadow-lg hover:bg-gray-600  hover:transition-all hover:duration-200">
              <Link
                className=""
                to="https://www.instagram.com/den.y_photography?igsh=djJ6MGR1Ynh4enRt&utm_source=qr"
                target="_blank"
                onClick={() => {
                  const ctr = confirm(
                    "You will be redirected to the Instagram website"
                  );
                  if (!ctr) {
                    navigate(0);
                  }
                }}
              >
                Visit
              </Link>
            </button>
          </div>
          <div className={styles.QRFrame}>
            <img
              className={styles.QRimg}
              alt="QR"
              src={qr}
              to="https://www.instagram.com/den.y_photography?igsh=djJ6MGR1Ynh4enRt&utm_source=qr"
              target="_blank"
              onClick={() => {
                const ctr = confirm(
                  "You will be redirected to the Instagram website"
                );
                if (!ctr) {
                  navigate(0);
                }
              }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
