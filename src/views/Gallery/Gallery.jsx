import styles from "./Gallery.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import qr from "../../../src/assets/gallery/QR.jpg";
import pic1 from "../../../src/assets/gallery/pic1.jpg";
import pic2 from "../../../src/assets/gallery/pic2.jpg";
import pic3 from "../../../src/assets/gallery/pic3.jpg";
import pic4 from "../../../src/assets/gallery/pic4.jpg";
import pic5 from "../../../src/assets/gallery/pic5.jpg";
import pic6 from "../../../src/assets/gallery/pic6.jpg";
import pic7 from "../../../src/assets/gallery/pic7.jpg";
import pic8 from "../../../src/assets/gallery/pic8.jpg";
import pic9 from "../../../src/assets/gallery/pic9.jpg";
import { useNavigate } from "react-router-dom";
export default function Gallery() {
  const navigate = useNavigate();
  const photosSrc = [
    { href: "../../../src/assets/gallery/pic1.jpg", pic: pic1 },
    { href: "../../../src/assets/gallery/pic2.jpg", pic: pic2 },
    { href: "../../../src/assets/gallery/pic3.jpg", pic: pic3 },
    { href: "../../../src/assets/gallery/pic4.jpg", pic: pic4 },
    { href: "../../../src/assets/gallery/pic5.jpg", pic: pic5 },
    { href: "../../../src/assets/gallery/pic6.jpg", pic: pic6 },
    { href: "../../../src/assets/gallery/pic7.jpg", pic: pic7 },
    { href: "../../../src/assets/gallery/pic8.jpg", pic: pic8 },
    { href: "../../../src/assets/gallery/pic9.jpg", pic: pic9 },
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
      <div className="text-center justify-center container justify-items-center justify-self-center grid grid-col-1 w-auto">
        <h1 className="font-bold text-3xl my-4">My Photography Journey</h1>
        {/*carousel */}
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide  w-7/12 my-4 text-center justify-center border-2 border-gray-300 p-1  rounded-xl "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner w-full justify-center ">
            <div className="carousel-item active justify-center">
              <img
                src={photosSrc[index].pic}
                className="d-block w-full rounded-lg"
                alt="0"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev active:bg-slate-200 active:duration-700 "
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
            onClick={prevPhoto}
          >
            <span
              className="carousel-control-prev-icon  "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden z-0">Previous</span>
          </button>

          <button
            className="carousel-control-next active:bg-slate-200 active:duration-700 "
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
            onClick={nextPhoto}
          >
            <span
              className="carousel-control-next-icon  "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Next</span>
          </button>
        </div>
        {/*carousel */}

        <div className="my-4 justify-center text-center">
          Want to see more photo?
          <br /> Please visit{" "}
          <Link
            className="hover:font-bold underline "
            to="https://www.instagram.com/den.y_photography?igsh=djJ6MGR1Ynh4enRt&utm_source=qr"
            target="blank"
          >
            den.y_photography@Instagram
          </Link>
          <div className="">
            <strong>Like, Share and Follow</strong> will be appreciated!
          </div>
          <Link
            to="https://www.instagram.com/den.y_photography?igsh=djJ6MGR1Ynh4enRt&utm_source=qr"
            target="blank"
          >
            <br />
            <div>
              <button className="btn   btn cursor-pointer font-bold bg-orange-400 hover:shadow-xl hover:bg-gray-700 hover:text-white hover:transition-all hover:duration-300 ">
                <Link
                  className="hover:font-bold"
                  to="https://www.instagram.com/den.y_photography?igsh=djJ6MGR1Ynh4enRt&utm_source=qr"
                  target="_blank"
                  onClick={() => {
                    const ctr = confirm(
                      "You will be redirected to the project website"
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
                target="_blank"
                onClick={() => {
                  const ctr = confirm(
                    "You will be redirected to the project website"
                  );
                  if (!ctr) {
                    navigate(0);
                  }
                }}
              ></img>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

{
  /* <h1>Gallery</h1>

     

      <div id="albumDiv" className={styles.albumDiv}>
        <div id="nextBtn" className={styles.nextBtn} onClick={prevPhoto}>
          &lt;
        </div>
        <div className={styles.midDiv}>
          <img
            src={photos[index].pic}
            className={styles.photo}
            alt="photo"
          ></img>
        </div>

        <div id="prevBtn" className={styles.prevBtn} onClick={nextPhoto}>
          &gt;
        </div>
      </div>

      
*/
}
