import React from "react";
import styles from "./Card.module.css";

console.log("style ", styles);
const InfoCard = ({ title = "(No Title)", content, author = "Anonymous" }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author : {author}</p>
    </div>
  );
};
// const InfoCard = (props) => {
//   console.log("style ", styles);

//   return (
//     <div className={styles.card}>
//       <h2>{props.title}</h2>
//       <p>{props.content}</p>
//       <p>Author : {props.author}</p>
//     </div>
//   );
// };

export default InfoCard;
