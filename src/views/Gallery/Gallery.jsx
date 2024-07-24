import styles from "./Gallery.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import QR from "./photo/QR.jpg";
import pic1 from "./photo/pic1.jpg";
import pic2 from "./photo/pic2.jpg";
import pic3 from "./photo/pic3.jpg";
import pic4 from "./photo/pic4.jpg";
import pic5 from "./photo/pic5.jpg";
import pic6 from "./photo/pic6.jpg";
import pic7 from "./photo/pic7.jpg";
import pic8 from "./photo/pic8.jpg";
import pic9 from "./photo/pic9.jpg";

export default function Gallery() {
  const photosSrc = [
    { href: "./photo/pic1.jpg", pic: pic1 },
    { href: "./photo/pic2.jpg", pic: pic2 },
    { href: "./photo/pic3.jpg", pic: pic3 },
    { href: "./photo/pic4.jpg", pic: pic4 },
    { href: "./photo/pic5.jpg", pic: pic5 },
    { href: "./photo/pic6.jpg", pic: pic6 },
    { href: "./photo/pic7.jpg", pic: pic7 },
    { href: "./photo/pic8.jpg", pic: pic8 },
    { href: "./photo/pic9.jpg", pic: pic9 },
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
    setPhotos((prev) => photosSrc);
  }, []);

  return (
    <>
      <h1 className="font-bold text-3xl my-4">My Photography Journey</h1>
      {/*carousel */}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide z-1 max-w-96 "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner z-1 w-full">
          <div className="carousel-item active">
            <img
              src={photosSrc[index].pic}
              className="d-block w-full"
              alt="0"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev bg-slate-300 z-1"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          onClick={prevPhoto}
        >
          <span
            className="carousel-control-prev-icon bg-slate-800 z-1"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden z-0">Previous</span>
        </button>

        <button
          className="carousel-control-next bg-slate-300 z-1"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          onClick={nextPhoto}
        >
          <span
            className="carousel-control-next-icon bg-slate-800 z-1"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden z-0">Next</span>
        </button>
      </div>
      {/*carousel */}

      <div>
        Want to see more photo?
        <br /> Please visit{" "}
        <Link
          className="hover:font-bold underline"
          to="https://www.instagram.com/den.y_photography?igsh=djJ6MGR1Ynh4enRt&utm_source=qr"
          target="blank"
        >
          den.y_photography@Instagram
        </Link>
        <div>Like, Share and Follow will be appreciated!</div>
        <Link
          to="https://www.instagram.com/den.y_photography?igsh=djJ6MGR1Ynh4enRt&utm_source=qr"
          target="blank"
        >
          <br />
          <div className={styles.QRFrame}>
            <img className={styles.QRimg} alt="QR" src={QR}></img>
          </div>
        </Link>
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
