import { useEffect } from "react";
import styles from "./ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const timeout = 2000;

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, timeout);
  });

  return (
    <div id="errorPageDiv" className={styles.errorPage}>
      <h1 className="font-bold text-3xl my-4 theme4font pageTitle errorPageDiv">
        Oops! Somethings went wrong.{" "}
      </h1>
      <p className="theme3font">
        No worries. You will be redirected to the previous page in{" "}
        {timeout / 1000}s
      </p>
    </div>
  );
}
