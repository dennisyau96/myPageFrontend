import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//imprting all cert objects
import styles from "./Certificate.module.css";
import cert1 from "../../assets/certificates/cert1.pdf";
import cert2 from "../../assets/certificates/cert2.pdf";
import cert3 from "../../assets/certificates/cert3.pdf";
import cert4 from "../../assets/certificates/cert4.pdf";
import cert5 from "../../assets/certificates/cert5.pdf";
import cert6 from "../../assets/certificates/cert6.pdf";
import cert7 from "../../assets/certificates/cert7.pdf";
import cert8 from "../../assets/certificates/cert8.pdf";
import cert9 from "../../assets/certificates/cert9.pdf";
import cert10 from "../../assets/certificates/cert10.pdf";
import cert11 from "../../assets/certificates/cert11.pdf";
import cert12 from "../../assets/certificates/cert12.pdf";
import cert13 from "../../assets/certificates/cert13.pdf";
import cert14 from "../../assets/certificates/cert14.pdf";
import cert15 from "../../assets/certificates/cert15.pdf";
import cert16 from "../../assets/certificates/cert16.pdf";
import cert17 from "../../assets/certificates/cert17.pdf";
import cert18 from "../../assets/certificates/cert18.pdf";
import cert19 from "../../assets/certificates/cert19.pdf";
import cert20 from "../../assets/certificates/cert20.pdf";
import cert21 from "../../assets/certificates/cert21.pdf";
import cert22 from "../../assets/certificates/cert22.pdf";

function Certificate() {
  const certs = [
    { cert: cert1, title: "Learning Node.js" },
    { cert: cert2, title: "MERN Essential Training" },
    {
      cert: cert3,
      title: "Node.js Essential Training",
    },
    {
      cert: cert4,
      title: "Node.js: Web Servers, Tests, and Deployment",
    },
    { cert: cert5, title: "React: Working with APIs" },
    {
      cert: cert6,
      title: "React.js Essential Training",
    },
    {
      cert: cert7,
      title: "Succeeding in Web Development: Full Stack and Front End",
    },
    {
      cert: cert8,
      title: "Web Programming Foundations",
    },
    {
      cert: cert9,
      title: "Introduction to Generative AI",
    },
    {
      cert: cert10,
      title: "Build a free website with WordPress",
    },
    {
      cert: cert11,
      title: "Express Essentials: Build Powerful Web Apps with Node.js",
    },
    {
      cert: cert12,
      title: "Fundamentals of digital marketing",
    },
    {
      cert: cert13,
      title: "Java 8 Essential Training",
    },
    {
      cert: cert14,
      title: "Java Essential Training: Objects and APIs",
    },
    {
      cert: cert15,
      title: "Java Essential Training: Syntax and Structure",
    },
    {
      cert: cert16,
      title: "JavaScript Essential Training",
    },
    {
      cert: cert17,
      title: "JavaScript for Web Designers",
    },
    { cert: cert18, title: "Learning Java 17" },
    { cert: cert19, title: "学习 SQL (Learning SQL)" },
    { cert: cert20, title: "Adobe Illustrator CC" },
    { cert: cert21, title: "Git Essential Training" },
    { cert: cert22, title: "Kotlin Essential Training" },
  ];
  const [index, setIndex] = useState(0);
  const [certificates, setCertificates] = useState([...certs]);

  useEffect(() => {
    certificates.sort((b, a) => b - a);
  }, []);

  // function loadData() {
  //   setCertificates([]);
  // }

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
      <h1 className="font-bold text-3xl my-10">Certificate </h1>
      <div className={styles.certDiv}>
        <div className={styles.prevBtn} onClick={prevCert}>
          &lt;
        </div>
        <div className={styles.certMidDiv}>
          <div className={styles.cert}>
            <img src={certificates[index].cert} className={styles.pdf}></img>
          </div>
          <div className={styles.caption}>
            {index + 1}. {certificates[index].title}
          </div>
        </div>
        <div className={styles.nextBtn} onClick={nextCert}>
          &gt;
        </div>
      </div>
      {/* </div> end of certdiv */}
    </>
  );
}
export default Certificate;
