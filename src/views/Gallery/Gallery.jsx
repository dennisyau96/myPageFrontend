import styles from "./Gallery.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
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
  const [photos, setPhotos] = useState([...photosSrc]);

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

  return (
    <>
      <h1>Gallery</h1>

      <p>
        I am a photography hobbist, who love taking landscape, cityscape and
        street photo.
      </p>
      <p>Below are some of my favourite photo taken in recent years.</p>

      <div id="albumDiv" className={styles.albumDiv}>
        {/*  prev Btn */}
        <div id="nextBtn" className={styles.nextBtn} onClick={prevPhoto}>
          &lt;
        </div>
        {/* middle div */}
        <div className={styles.midDiv}>
          <img
            src={photos[index].pic}
            className={styles.photo}
            alt="photo"
          ></img>
        </div>
        {/* next btn */}

        <div id="prevBtn" className={styles.prevBtn} onClick={nextPhoto}>
          &gt;
        </div>
      </div>

      <div>
        Want to see more photo?
        <br />
        <br />
        Please visit{" "}
        <Link
          to="https://www.instagram.com/den.y_photography?igsh=djJ6MGR1Ynh4enRt&utm_source=qr"
          target="blank"
        >
          den.y_photography@Instagram
        </Link>
        <br />
        <br />
        Like, Share and Follow will be appreciated!
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
