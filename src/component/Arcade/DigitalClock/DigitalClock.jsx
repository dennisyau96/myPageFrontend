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
    <div className={(styles.digitalClockDiv, styles.boxyWH)}>
      {/* <p className={styles.clockTitle}>The Time Now is</p> */}
      <div className={styles.dateDiv}>
        {month.toUpperCase()} {date},{year}
      </div>
      <div className={styles.timeDiv}>
        {hour.toString() > 12 ? (hour - 12).toString().padStart(2, 0) : hour}:
        {minute.toString().padStart(2, 0)}:{second.toString().padStart(2, 0)}{" "}
        {hour > 12 ? "PM" : "AM"}
      </div>
    </div>
  );
}
export default DigitalClock;
