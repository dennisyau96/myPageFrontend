// import styles from "./style.css";

function Card({ card }) {
  return (
    <>
      <div className="card">
        <img src={card.src} />
        <div>{card.id}</div>
      </div>
    </>
  );
}

export default Card;
