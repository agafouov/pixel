import "./style.scss";
import getLeague from "../../utils/getLeague";

export default function ProgressBar(props) {
  const league = getLeague(props.score);
  return (
    <div className="progress-bar">
      <div
        className={`progress-bar-line progress-bar-color_type-${
          props.rocket ? `gold` : props.click ?  `gold` : league === "bronze"
            ? "bronze"
            : league === "silver"
            ? "silver"
            : league === "gold"
            ? "gold"
            : league === "platinum"
            ? "platinum"
            : "diamond"
        }`}
        style={{
          width: `${
            props.rocket
              ? (props.secondsRocket / 30) * 100 : props.click ? (props.secondsClick / 30) * 100
              : league === "bronze"
              ? (props.score  / 30000) * 100
              : league === "silver"
              ? ((props.score - 30000) / 170000) * 100
              : league === "gold"
              ? ((props.score - 200000) / 300000) * 100
              : league === "platinum"
              ? ((props.score - 500000) / 500000) * 100
              : 100
          }%`,
        }}
      ></div>
    </div>
  );
}
