import { useEffect, useState } from "react";
import styles from "../Arcade.module.css";

function DigitalClock() {
  //useState
  const [date, setDate] = useState("00");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  let [month, setMonth] = useState("00");
  const [year, setYear] = useState("0000");
  const [apm, setApm] = useState(true);

  //initial dislay when reloading
  useEffect(() => {
    const now = new Date();
    setMonth(now.getMonth());
    setDate(now.getDate());
    setHour(now.getHours());
    setMinute(now.getMinutes());
    setSecond(now.getSeconds());
    setYear(now.getFullYear());
  }, []);

  switch (month) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;

    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
    default:
      var now = new Date();
      month = now.getMonth().toString().padStart(2, 0);
      break;
  }

  function changeTimeDsp() {
    if (apm) {
      setApm((p) => !p);
    } else if (!apm) {
      setApm((p) => !p);
    }
  }

  function updateClock() {
    const now = new Date();
    setMonth(now.getMonth());
    setDate(now.getDate());
    setHour(now.getHours());
    setMinute(now.getMinutes());
    setSecond(now.getSeconds());
    setYear(now.getFullYear());
  }

  setInterval(updateClock, 1000);
  return (
    <div className="theme4font Xcenter" id="digitalClock">
      <span className="block text-gray-700 text-sm">Local Time</span>
      <span className={styles.dateDiv}>
        {month.toUpperCase()} {date},{year}
      </span>

      {apm ? (
        <div className={styles.timeDiv}>
          {hour.toString() > 12 ? (hour - 12).toString().padStart(2, 0) : hour}:
          {minute.toString().padStart(2, 0)}:{second.toString().padStart(2, 0)}{" "}
          {hour > 12 ? "PM" : "AM"}
        </div>
      ) : (
        <div className={styles.timeDiv}>
          {hour.toString().padStart(2, 0)}:{minute.toString().padStart(2, 0)}:
          {second.toString().padStart(2, 0)}{" "}
        </div>
      )}
      <button
        onClick={changeTimeDsp}
        className="btn transition-all ease-in-out text-slate-500 text-xs hover:text-slate-500"
      >
        {apm ? "24-hour format" : "12-hour format"}
      </button>
    </div>
  );
}
export default DigitalClock;
