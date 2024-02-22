import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import axios from "axios";
import Lottie from "lottie-react";

import Crystal from "../../assets/animation/Crystal.json";
// import Fire from "../../assets/animation/Fire.json";
import Collision from "../../assets/animation/Collision.json";
import Ghost from "../../assets/animation/Ghost.json";
import getScore from "../../utils/getScore";

const FieldItem = ({ items, item, onClick, rocket }) => {
  const [animationCrystal] = useState(Crystal);
  const [animationFire] = useState(Collision);
  const [animationGhost] = useState(Ghost);

  const [score, setScore] = useState(0);

  // Функция для получения баланса пользователя
  const fetchScore = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/users/36/score`);
      setScore(response.data.score);
    } catch (error) {
      console.error("Error fetching score:", error);
    }
  };

  // Функция для обновления баланса пользователя
  const updateScore = async (newScore) => {
    try {
      const response = await axios.put(`http://localhost:8000/users/36/score`, {
        score: newScore,
      });
      setScore(response.data.score);
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };

  // Вызываем функцию получения баланса при монтировании компонента
  useEffect(() => {
    fetchScore();
  }, []);

  let anData;
  if (item.type === 1) {
    anData = animationFire;
  } else if (item.type === 2) {
    anData = animationCrystal;
  } else if (item.type === 3) {
    anData = animationGhost;
  }

  const className = `field__item js-field-item ${
    item.isOpened ? "active" : ""
  }`;

  const animatedOptions = useMemo(
    () => ({
      className: "item-size",
      loop: true,
      autoPlay: true,
      animationData:
        item.type === 2
          ? animationCrystal
          : item.type === 1
          ? animationFire
          : animationGhost,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        // progressiveLoad: true,
        // cacheImages: true,
        // clearCanvas: false,
        // initialFrame: 30,
        hardwareAcceleration: true,
      },
    }),
    []
  );
  const castomOnClick = (e) => {
    onClick(e);
    const target = e.target.closest(".js-field-item");

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--count-x", x + "px");
    target.style.setProperty("--count-y", y + "px");
  };

  return (
    <div>
      <li
        className={className}
        data-opened={item.isOpened}
        onClick={castomOnClick}
      >
        <div className={`card-front card-${rocket ? `dragon` : `coin`}`}></div>
        <div className="card-back">
          {item.isOpened && (
            <Lottie
              className={animatedOptions.className}
              loop={animatedOptions.loop}
              autoPlay={animatedOptions.autoPlay}
              rendererSettings={animatedOptions.rendererSettings}
              animationData={animatedOptions.animationData}
            />
          )}
        </div>
        {item.type === 2 &&
          item.isOpened &&
          items.filter((item) => (item.type === 2) & item.isOpened).length ===
            1 && (
            <span className="click-amount">{getScore(score, rocket)}</span>
          )}
      </li>
    </div>
  );
};

export default FieldItem;
