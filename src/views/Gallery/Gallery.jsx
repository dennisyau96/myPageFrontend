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
import pic17 from "../../../src/assets/gallery/pic17.jpg";

// import pic18 from "../../../src/assets/gallery/pic8.jpg";
// import pic19 from "../../../src/assets/gallery/pic9.jpg";

import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();
  const photosSrc = [
    { href: "../../../src/assets/gallery/pic1.jpg", pic: pic1, code: 1 },
    // { href: "../../../src/assets/gallery/pic2.jpg", pic: pic2 },
    // { href: "../../../src/assets/gallery/pic3.jpg", pic: pic3 },
    { href: "../../../src/assets/gallery/pic4.jpg", pic: pic4, code: 4 },
    { href: "../../../src/assets/gallery/pic5.jpg", pic: pic5, code: 5 },
    // { href: "../../../src/assets/gallery/pic6.jpg", pic: pic6 },
    // { href: "../../../src/assets/gallery/pic7.jpg", pic: pic7 },
    { href: "../../../src/assets/gallery/pic8.jpg", pic: pic8, code: 8 },
    { href: "../../../src/assets/gallery/pic9.jpg", pic: pic9, code: 9 },
    { href: "../../../src/assets/gallery/pic10.jpg", pic: pic10, code: 10 },
    { href: "../../../src/assets/gallery/pic11.jpg", pic: pic11, code: 11 },
    { href: "../../../src/assets/gallery/pic12.jpg", pic: pic12, code: 12 },
    { href: "../../../src/assets/gallery/pic13.jpg", pic: pic13, code: 13 },
    { href: "../../../src/assets/gallery/pic14.jpg", pic: pic14, code: 14 },
    { href: "../../../src/assets/gallery/pic15.jpg", pic: pic15, code: 15 },
    { href: "../../../src/assets/gallery/pic16.jpg", pic: pic16, code: 16 },
    { href: "../../../src/assets/gallery/pic17.jpg", pic: pic17, code: 17 },
  ];

  const [index, setIndex] = useState(0);
  const [photos, setPhotos] = useState([
    ...photosSrc.sort((a, b) => b.code - a.code),
  ]);

  function nextPhoto() {
    if (index >= photosSrc.length - 1) {
      setIndex(0);
    } else {
      setIndex((i) => (i += 1));
    }
  }
  function prevPhoto() {
    if (index <= 0) {
      setIndex(photosSrc.length - 1);
    } else {
      setIndex((i) => (i -= 1));
    }
  }

  useEffect(() => {
    scrollTo(0, 0);
    photosSrc.sort((a, b) => b.code - a.code);
    setPhotos((prev) => photosSrc);
  }, []);

  return (
    <>
      <div className="text-center justify-center justify-items-center justify-self-center  ">
        <h1 className="font-bold text-3xl my-4 theme4font">Gallery</h1>

        <div
          className="inline-block justify-center text-center justify-items-center w-2/5"
          id="galleryCarousel"
        >
          {/*carousel */}
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide  carousel-fade   text-center justify-items-center justify-center border-2 border-gray-300  hover:shadow-sky-300 hover:shadow-md duration-500 ease-in-out transition-all max-h-1/2 block"
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
        </div>

        <div className="my-2 justify-center text-center">
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

{
  /* <button className=" my-3 p-2 cursor-pointer text-white border-1 hover:text-black hover:shadow-lg hover:bg-gray-600  hover:transition-all hover:duration-200">
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
            </button> */
}

{
  /* <span className="theme3font">
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

          <br /> */
}
