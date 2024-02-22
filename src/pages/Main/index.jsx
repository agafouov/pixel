import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./style.scss";
import ProgressBar from "../../components/ProgressBar";
import TabButton from "../../components/TabButton";
import { BackButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";
import addCommas from "../../utils/addCommas";
import getLeague from "../../utils/getLeague";
import Loader from "../../components/Loader";
import { getRandomKey } from "../../utils/getRandomKey";
import { shuffle } from "../../utils/shuffle";
import FieldItem from "../../components/FieldItem";
import changeScore from "../../utils/changeScore";
import Ghost from "../../assets/animation/Ghost.json";
import changeClick from "../../utils/changeClick";
import getClick from "../../utils/getClick";
import randomRocket from "../../utils/randomRocket";
// function Search() {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const startapp = params.get("startapp");
//   return startapp;
// }

const defaultItems = [
  {
    id: getRandomKey(),
    type: 1,
    isOpened: false,
  },
  {
    id: getRandomKey(),
    type: 1,
    isOpened: false,
  },
  {
    id: getRandomKey(),
    type: 1,
    isOpened: false,
  },
  {
    id: getRandomKey(),
    type: 2,
    isOpened: false,
  },
  {
    id: getRandomKey(),
    type: 2,
    isOpened: false,
  },
  {
    id: getRandomKey(),
    type: 2,
    isOpened: false,
  },
  {
    id: getRandomKey(),
    type: 3,
    isOpened: false,
  },
  {
    id: getRandomKey(),
    type: 3,
    isOpened: false,
  },
  {
    id: getRandomKey(),
    type: 3,
    isOpened: false,
  },
];

let shuffledItems = shuffle([...defaultItems]);

export default function Main() {
  const navigate = useNavigate();

  // const [balance, setBalance] = useState(() => {
  //   // При первом запуске компонента проверяем localStorage на наличие баланса
  //   const storedBalance = localStorage.getItem("score");
  //   return storedBalance ? parseFloat(storedBalance) : 0;
  // });

  // useEffect(() => {
  //   // При изменении баланса сохраняем его в localStorage
  //   localStorage.setItem("score", balance.toString());
  // }, [balance]);

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/users/36/balance`
        );
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      }
    };

    fetchBalance();

    // Очистка эффекта
    return () => {
      // Если нужно выполнить какие-то действия при размонтировании компонента
    };
  }, []);

  // const [score, setScore] = useState(0);

  // useEffect(() => {
  //   const fetchScore = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8000/users/36/score`);
  //       setScore(response.data.score);
  //     } catch (error) {
  //       console.error('Failed to fetch score:', error);
  //     }
  //   };

  //   fetchScore();

  //   // Очистка эффекта
  //   return () => {
  //     // Если нужно выполнить какие-то действия при размонтировании компонента
  //   };
  // }, []);

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

  const [touch, setTouch] = useState(0);

  // Функция для получения баланса пользователя
  const fetchTouch = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/users/36/touch`);
      setTouch(response.data.touch);
    } catch (error) {
      console.error("Error fetching touch:", error);
    }
  };

  // Функция для обновления баланса пользователя
  const updateTouch = async (newTouch) => {
    try {
      const response = await axios.put(`http://localhost:8000/users/36/touch`, {
        touch: newTouch,
      });
      setTouch(response.data.touch);
    } catch (error) {
      console.error("Error updating touch:", error);
    }
  };

  // Вызываем функцию получения баланса при монтировании компонента
  useEffect(() => {
    fetchTouch();
  }, []);

  const [rocket, setRocket] = useState(false);

  const [secondsRocket, setSecondsRocket] = useState(30);
  const [isActiveRocket, setIsActiveRocket] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActiveRocket) {
      intervalId = setInterval(() => {
        setSecondsRocket((prevSecondsRocket) => prevSecondsRocket - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActiveRocket]);

  useEffect(() => {
    if (secondsRocket === 0) {
      setIsActiveRocket(false);
      setSecondsRocket(30);
    }
  }, [secondsRocket]);

  const rocketStart = () => {
    setRocket(true);
    setIsActiveRocket(true);
    setTimeout(() => {
      setRocket(false);
    }, 30000);
  };

  const [items, setItems] = useState(shuffledItems);
  // const [disabledBtn, setDisabledBtn] = useState(true);
  // if (sessionStorage.getItem("disabledBtn") == null) {
  //   sessionStorage.setItem("disabledBtn", true);
  // }

  // const [diamondAudio, setDiamondAudio] = useState(null);
  // const [ghostAudio, setGhostAudio] = useState(null);
  // const [fireAudio, setFireAudio] = useState(null);

  // useEffect(() => {
  //   const diamondAudioElement = new Audio(diamond);
  //   const ghostAudioElement = new Audio(ghost);
  //   const fireAudioElement = new Audio(fire);

  //   setDiamondAudio(diamondAudioElement);
  //   setGhostAudio(ghostAudioElement);
  //   setFireAudio(fireAudioElement);

  //   // Убедитесь, что удаляете обработчики или ресурсы, когда компонент размонтируется
  //   return () => {
  //     diamondAudioElement.pause();
  //     diamondAudioElement.removeAttribute("src");
  //     diamondAudioElement.load();
  //     ghostAudioElement.pause();
  //     ghostAudioElement.removeAttribute("src");
  //     ghostAudioElement.load();
  //     fireAudioElement.pause();
  //     fireAudioElement.removeAttribute("src");
  //     fireAudioElement.load();
  //   };
  // }, []);

  // const [diamondAudio] = useState(new Audio(diamond));
  // const [ghostAudio] = useState(new Audio(ghost));
  // const [fireAudio] = useState(new Audio(fire));

  // useEffect(() => {
  //   return () => {
  //     diamondAudio.pause();
  //     ghostAudio.pause();
  //     fireAudio.pause();
  //   };
  // }, [diamondAudio, ghostAudio, fireAudio]);

  const [isClicked, setIsClicked] = useState(false);
  let timeId;
  const open = (item) => {
    if (isClicked) return;
    item.isOpened = true;
    updateTouch(touch + 1);
    const ghostLenght = items.filter(
      (item) => (item.type === 3) & item.isOpened
    ).length;
    updateScore(changeScore(item, score, rocket));
    setItems([...items]);
    if (
      item.type === 1 ||
      item.type === 2 ||
      (item.type === 3) & (ghostLenght === 3)
    ) {
      if (ghostLenght === 3) {
        setTimeout(() => {
          clickStart();
        }, 250);
      }
      setIsClicked(true);
      timeId = setTimeout(() => {
        items.forEach((item) => (item.isOpened = true));
        setItems([...items]);
      }, 500);
      setTimeout(() => {
        restart();
      }, 1750);
    }
  };

  const [secondsClick, setSecondsClick] = useState(30);
  const [isActiveClick, setIsActiveClick] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActiveClick) {
      intervalId = setInterval(() => {
        setSecondsClick((prevSecondsClick) => prevSecondsClick - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActiveClick]);

  useEffect(() => {
    if (secondsClick === 0) {
      setIsActiveClick(false);
      setSecondsClick(30);
    }
  }, [secondsClick]);

  const [click, setClick] = useState(false);

  const clickStart = () => {
    setRocket(false);
    setClick(true);
    setIsActiveClick(true);
    setTimeout(() => {
      setClick(false);
      setIsActiveClick(false);
    }, 30000);
  };

  const restart = () => {
    clearTimeout(timeId);

    shuffledItems = shuffle([...defaultItems]);

    items.forEach((item) => (item.isOpened = false));
    setItems([...items]);

    setTimeout(() => {
      setItems(shuffledItems);
      setIsClicked(false);
    }, 400);
  };

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const preloaderShown = sessionStorage.getItem('preloaderShown');

  //   if (!preloaderShown) {
  //     sessionStorage.setItem('preloaderShown', 'true');
  //     setLoading(true); // Показываем preloader, если это первое посещение в сессии
  //   }

  //   const fetchData = async () => {
  //     try {
  //       // Здесь ваш запрос к API или другому источнику данных
  //       const response = await fetch('https://api.example.com/data');
  //       const data = await response.json();
  //       // После получения данных можно обновить состояние и скрыть preloader
  //       setLoading(false);
  //     } catch (error) {
  //       setLoading(false); // Если произошла ошибка, также скрываем preloader
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const league = getLeague(score);

  const [showCup, setShowCup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCup(true);
    }, 100); // Задержка перед появлением страницы
  }, []);

  const [showRocket, setShowRocket] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowRocket(true);
    }, 1000);
  }, []);

  const savedData = sessionStorage.getItem("pixelcoinLangpack");
  const parsedData = JSON.parse(savedData);

  // const [welcome, setWelcome] = useState(false);

  // useEffect(() => {
  //   const storedWelcome = localStorage.getItem("welcome");
  //   if (storedWelcome === "true") {
  //     setWelcome(true);
  //   }
  // }, [welcome])

  const [welcome, setWelcome] = useState(() => {
    const storedWelcome = localStorage.getItem("welcome");
    return storedWelcome ? storedWelcome : false;
  });

  // const [clickCount, setClickCount] = useState(0);
  // const [lastClickTime, setLastClickTime] = useState(0);

  const handleClick = (e) => {
    // const currentTime = new Date().getTime();
    // const timeSinceLastClick = currentTime - lastClickTime;

    // if (timeSinceLastClick < 300) {
    //   // Примерный интервал для мульти-тапа, можете изменить по своему усмотрению
    //   setClickCount((prevCount) => prevCount + 1);
    // } else {
    //   setClickCount(1);
    // }

    // setLastClickTime(currentTime);
    const target = e.target.closest(".js-big-coin");
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const h = rect.height;
    const w = rect.width;
    const span = document.createElement("span");
    span.classList.add("clicker-amount");
    span.style.setProperty("--count-x", x + "px");
    span.style.setProperty("--count-y", y + "px");
    span.textContent = getClick(score);
    target.append(span);
    // console.log(x, y);
    setTimeout(() => {
      span.remove();
    }, 750);

    updateScore(changeClick(score));
    WebApp.HapticFeedback.impactOccurred(`medium`);
    // Далее вы можете использовать clickCount для отображения количества нажатий
    // console.log("Click count:", clickCount);

    // Ваш код для создания и отображения span элемента
  };

  const [lastAction, setLastAction] = useState(0);

  // Функция для получения баланса пользователя
  const fetchLastAction = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/users/36/last_action`);
      setLastAction(response.data.last_action);
    } catch (error) {
      console.error("Error fetching last_action:", error);
    }
  };

  // Функция для обновления баланса пользователя
  const updateLastAction = async (newLastAction) => {
    try {
      const response = await axios.put(`http://localhost:8000/users/36/last_action`, {
        last_action: newLastAction,
      });
      setLastAction(response.data.last_action);
    } catch (error) {
      console.error("Error updating last_action:", error);
    }
  };

  // Вызываем функцию получения баланса при монтировании компонента
  useEffect(() => {
    fetchLastAction();
  }, []);

  const currentTime = new Date();
  updateLastAction(currentTime.toLocaleString());

  return (
    <>
      {welcome === "false" ? (
        <Navigate to="/about" />
      ) : (
        <div className="page">
          <div
            // className={`background-position background-color__type-${league}`}
            className={`background-position ${
              rocket
                ? `background-color__type-dragon`
                : click
                ? `background-color__type-galleon`
                : `background-color__type-${league}`
            }`}
          ></div>
          <div className="container position-relative">
            <div className="page__content">
              <button
                onClick={() => {
                  navigate("/squad");
                }}
                className="black-transparent-btn"
              >
                <div className="Jh2w">
                  <div className="Li2p">
                    <div className="Po2s">{parsedData.main.join_squad}</div>
                    <div className="Iu3d">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-shrink icon-shrink__arrow"
                      >
                        <path
                          d="m1 1 5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
              <div className="Jh2w Poj3">
                <CSSTransition
                  in={showCup}
                  timeout={500}
                  className="main-enter"
                  unmountOnExit
                >
                  <div>
                    <div className="Li2p">
                      <div className="balance-icon"></div>
                      <div className="kUe3">{addCommas(balance + score)}</div>
                    </div>
                  </div>
                </CSSTransition>
              </div>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                class="styles-D.star"
              >
                <path
                  d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                  fill="white"
                />
              </svg> */}
              <div className="Jh2w">
                <div
                  onClick={() => navigate(`/compete`)}
                  className="Li2p Z5dC Hexc"
                >
                  <CSSTransition
                    in={showCup}
                    timeout={500}
                    className="main-enter"
                    unmountOnExit
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <div>
                          <svg
                            width="14"
                            height="28"
                            viewBox="0 0 14 28"
                            fill="#ffffff80"
                            xmlns="http://www.w3.org/2000/svg"
                            className="IJx3"
                          >
                            <path
                              d="M11.8779 0.908541C11.8779 0.617669 11.7042 0.443147 11.4146 0.478051C10.5574 0.54786 9.57285 1.00162 8.94736 1.61827C8.33345 2.24655 7.90487 3.23551 7.87012 4.09649C7.85854 4.35246 7.99754 4.51534 8.25237 4.51534C9.16744 4.53861 10.1636 4.09649 10.7775 3.42167C11.3798 2.79339 11.82 1.79279 11.8779 0.908541ZM5.48398 1.58336C5.27548 1.37393 5.03224 1.38557 4.85849 1.60663C4.31408 2.30472 3.96658 3.36349 4.01292 4.24774C4.0245 5.14363 4.49941 6.13259 5.20599 6.71433C5.4029 6.88885 5.63456 6.85395 5.78515 6.65616C6.32956 5.9697 6.66547 4.9342 6.58439 4.06158C6.52647 3.18897 6.08631 2.20001 5.48398 1.58336ZM11.1134 5.89989C10.3605 5.48104 9.29486 5.30651 8.4377 5.4694C7.58054 5.63229 6.66547 6.22567 6.14423 6.94703C6.00523 7.14482 6.05156 7.36588 6.24847 7.5055C6.9898 8.02907 8.06704 8.2385 8.94736 7.98253C9.80452 7.79637 10.7196 7.20299 11.2408 6.5049C11.4146 6.27221 11.3682 6.02787 11.1134 5.89989ZM2.7156 5.55085C2.49552 5.38796 2.24069 5.44613 2.10169 5.69046C1.64994 6.44673 1.47619 7.52877 1.63836 8.38975C1.80052 9.29727 2.40285 10.2164 3.19051 10.6818C3.41059 10.8214 3.6075 10.7633 3.73492 10.5422C4.17508 9.77429 4.34883 8.69225 4.1635 7.85455C3.96658 6.98193 3.38742 6.07441 2.7156 5.55085ZM8.88944 9.02966C8.07862 8.72716 7.00138 8.71552 6.19056 9.00639C5.36815 9.28563 4.53416 9.98372 4.11716 10.7516C4.00133 10.9727 4.08241 11.1937 4.27933 11.2985C5.09015 11.7289 6.19056 11.7871 7.04772 11.4381C7.87012 11.1123 8.70411 10.3909 9.10953 9.59977C9.24852 9.35544 9.15586 9.13438 8.88944 9.02966ZM1.01287 11.089C0.734869 10.996 0.514788 11.1239 0.468455 11.4148C0.317874 12.2758 0.514788 13.3462 0.966533 14.1257C1.40669 14.9169 2.31018 15.5801 3.20209 15.743C3.44534 15.7895 3.63067 15.6615 3.677 15.4172C3.816 14.5679 3.6075 13.4974 3.14418 12.7412C2.7156 12.0315 1.85844 11.3799 1.01287 11.089ZM8.00912 12.2292C7.1288 12.206 6.09789 12.5783 5.46082 13.1251C4.75424 13.6952 4.22141 14.6377 4.11716 15.4986C4.08241 15.743 4.22141 15.9175 4.45308 15.9524C5.35657 16.0571 6.41064 15.7313 7.09405 15.1031C7.76587 14.5213 8.28712 13.5673 8.41453 12.6946C8.4377 12.4038 8.27553 12.2292 8.00912 12.2292ZM8.35662 16.1967C8.33345 15.9175 8.12495 15.7779 7.85854 15.8477C7.01297 16.0455 6.12106 16.6389 5.6114 17.3486C5.10174 18.0699 4.83532 19.1287 4.93957 19.9897C4.95116 20.2457 5.14807 20.3736 5.39132 20.3504C6.30639 20.2108 7.23305 19.629 7.70796 18.8495C8.21762 18.1514 8.48403 17.081 8.35662 16.1967ZM0.815951 16.5341C0.537954 16.5225 0.364206 16.697 0.37579 16.9763C0.456872 17.8605 0.908617 18.8611 1.53411 19.4661C2.1596 20.1293 3.17893 20.5249 4.094 20.4667C4.34883 20.4551 4.49941 20.2806 4.46466 20.0246C4.40674 19.1287 3.93183 18.163 3.29476 17.5929C2.68085 16.9995 1.68469 16.569 0.815951 16.5341ZM9.9551 18.3492C9.8161 18.0932 9.56127 18.0467 9.34119 18.2328C8.68095 18.7448 8.10179 19.6639 7.91646 20.5133C7.71954 21.3742 7.89329 22.4446 8.34503 23.2009C8.46087 23.422 8.69253 23.4801 8.90103 23.3405C9.66552 22.8635 10.291 21.956 10.43 21.0485C10.5922 20.1758 10.3953 19.0938 9.9551 18.3492ZM12.3297 20.6878C12.1212 20.4784 11.8663 20.5016 11.6926 20.7343C11.1945 21.4324 10.8702 22.4563 10.9165 23.3173C10.9744 24.2131 11.403 25.2137 12.0169 25.7955C12.1791 25.97 12.4107 25.97 12.5729 25.7955C13.21 25.1556 13.5806 24.0968 13.4764 23.166C13.4185 22.2934 12.9667 21.3044 12.3297 20.6878ZM7.9512 23.4452C7.55738 22.6541 6.72339 21.9443 5.87781 21.6651C5.07857 21.3859 4.01292 21.3975 3.17893 21.7116C2.91251 21.8164 2.83143 22.0374 2.95884 22.2934C3.38742 23.0729 4.22141 23.8059 5.04382 24.1084C5.86623 24.4575 6.95505 24.3993 7.78904 23.9688C7.99754 23.8525 8.06704 23.6547 7.9512 23.4452ZM11.6926 26.1213C11.0787 25.4697 10.0941 25.0043 9.22536 24.9461C8.39137 24.8763 7.36046 25.1672 6.6423 25.6675C6.42222 25.842 6.38747 26.098 6.58439 26.3074C7.18671 26.9473 8.17129 27.4244 9.04003 27.5058C9.94352 27.6105 10.986 27.2964 11.6694 26.703C11.8547 26.5285 11.8547 26.2958 11.6926 26.1213Z"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div
                          style={{
                            color: "#fff",
                            fontSize: "16px",
                            fontWeight: "600",
                            marginTop: "10px",
                            marginRight: "6px",
                            marginLeft: "6px",
                          }}
                        >
                          {parsedData.main.compete}
                        </div>
                        <svg
                          width="14"
                          height="28"
                          viewBox="0 0 14 28"
                          fill="#ffffff80"
                          xmlns="http://www.w3.org/2000/svg"
                          className="_laurelIconReversed_xg9t0_15 IJx3"
                        >
                          <path
                            d="M11.8779 0.908541C11.8779 0.617669 11.7042 0.443147 11.4146 0.478051C10.5574 0.54786 9.57285 1.00162 8.94736 1.61827C8.33345 2.24655 7.90487 3.23551 7.87012 4.09649C7.85854 4.35246 7.99754 4.51534 8.25237 4.51534C9.16744 4.53861 10.1636 4.09649 10.7775 3.42167C11.3798 2.79339 11.82 1.79279 11.8779 0.908541ZM5.48398 1.58336C5.27548 1.37393 5.03224 1.38557 4.85849 1.60663C4.31408 2.30472 3.96658 3.36349 4.01292 4.24774C4.0245 5.14363 4.49941 6.13259 5.20599 6.71433C5.4029 6.88885 5.63456 6.85395 5.78515 6.65616C6.32956 5.9697 6.66547 4.9342 6.58439 4.06158C6.52647 3.18897 6.08631 2.20001 5.48398 1.58336ZM11.1134 5.89989C10.3605 5.48104 9.29486 5.30651 8.4377 5.4694C7.58054 5.63229 6.66547 6.22567 6.14423 6.94703C6.00523 7.14482 6.05156 7.36588 6.24847 7.5055C6.9898 8.02907 8.06704 8.2385 8.94736 7.98253C9.80452 7.79637 10.7196 7.20299 11.2408 6.5049C11.4146 6.27221 11.3682 6.02787 11.1134 5.89989ZM2.7156 5.55085C2.49552 5.38796 2.24069 5.44613 2.10169 5.69046C1.64994 6.44673 1.47619 7.52877 1.63836 8.38975C1.80052 9.29727 2.40285 10.2164 3.19051 10.6818C3.41059 10.8214 3.6075 10.7633 3.73492 10.5422C4.17508 9.77429 4.34883 8.69225 4.1635 7.85455C3.96658 6.98193 3.38742 6.07441 2.7156 5.55085ZM8.88944 9.02966C8.07862 8.72716 7.00138 8.71552 6.19056 9.00639C5.36815 9.28563 4.53416 9.98372 4.11716 10.7516C4.00133 10.9727 4.08241 11.1937 4.27933 11.2985C5.09015 11.7289 6.19056 11.7871 7.04772 11.4381C7.87012 11.1123 8.70411 10.3909 9.10953 9.59977C9.24852 9.35544 9.15586 9.13438 8.88944 9.02966ZM1.01287 11.089C0.734869 10.996 0.514788 11.1239 0.468455 11.4148C0.317874 12.2758 0.514788 13.3462 0.966533 14.1257C1.40669 14.9169 2.31018 15.5801 3.20209 15.743C3.44534 15.7895 3.63067 15.6615 3.677 15.4172C3.816 14.5679 3.6075 13.4974 3.14418 12.7412C2.7156 12.0315 1.85844 11.3799 1.01287 11.089ZM8.00912 12.2292C7.1288 12.206 6.09789 12.5783 5.46082 13.1251C4.75424 13.6952 4.22141 14.6377 4.11716 15.4986C4.08241 15.743 4.22141 15.9175 4.45308 15.9524C5.35657 16.0571 6.41064 15.7313 7.09405 15.1031C7.76587 14.5213 8.28712 13.5673 8.41453 12.6946C8.4377 12.4038 8.27553 12.2292 8.00912 12.2292ZM8.35662 16.1967C8.33345 15.9175 8.12495 15.7779 7.85854 15.8477C7.01297 16.0455 6.12106 16.6389 5.6114 17.3486C5.10174 18.0699 4.83532 19.1287 4.93957 19.9897C4.95116 20.2457 5.14807 20.3736 5.39132 20.3504C6.30639 20.2108 7.23305 19.629 7.70796 18.8495C8.21762 18.1514 8.48403 17.081 8.35662 16.1967ZM0.815951 16.5341C0.537954 16.5225 0.364206 16.697 0.37579 16.9763C0.456872 17.8605 0.908617 18.8611 1.53411 19.4661C2.1596 20.1293 3.17893 20.5249 4.094 20.4667C4.34883 20.4551 4.49941 20.2806 4.46466 20.0246C4.40674 19.1287 3.93183 18.163 3.29476 17.5929C2.68085 16.9995 1.68469 16.569 0.815951 16.5341ZM9.9551 18.3492C9.8161 18.0932 9.56127 18.0467 9.34119 18.2328C8.68095 18.7448 8.10179 19.6639 7.91646 20.5133C7.71954 21.3742 7.89329 22.4446 8.34503 23.2009C8.46087 23.422 8.69253 23.4801 8.90103 23.3405C9.66552 22.8635 10.291 21.956 10.43 21.0485C10.5922 20.1758 10.3953 19.0938 9.9551 18.3492ZM12.3297 20.6878C12.1212 20.4784 11.8663 20.5016 11.6926 20.7343C11.1945 21.4324 10.8702 22.4563 10.9165 23.3173C10.9744 24.2131 11.403 25.2137 12.0169 25.7955C12.1791 25.97 12.4107 25.97 12.5729 25.7955C13.21 25.1556 13.5806 24.0968 13.4764 23.166C13.4185 22.2934 12.9667 21.3044 12.3297 20.6878ZM7.9512 23.4452C7.55738 22.6541 6.72339 21.9443 5.87781 21.6651C5.07857 21.3859 4.01292 21.3975 3.17893 21.7116C2.91251 21.8164 2.83143 22.0374 2.95884 22.2934C3.38742 23.0729 4.22141 23.8059 5.04382 24.1084C5.86623 24.4575 6.95505 24.3993 7.78904 23.9688C7.99754 23.8525 8.06704 23.6547 7.9512 23.4452ZM11.6926 26.1213C11.0787 25.4697 10.0941 25.0043 9.22536 24.9461C8.39137 24.8763 7.36046 25.1672 6.6423 25.6675C6.42222 25.842 6.38747 26.098 6.58439 26.3074C7.18671 26.9473 8.17129 27.4244 9.04003 27.5058C9.94352 27.6105 10.986 27.2964 11.6694 26.703C11.8547 26.5285 11.8547 26.2958 11.6926 26.1213Z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </CSSTransition>
                </div>
                <CSSTransition
                  in={showCup}
                  timeout={500}
                  className="main-enter"
                  unmountOnExit
                >
                  <div>
                    <div
                      style={{
                        color: "#fff",
                        marginLeft: "12px",
                        marginRight: "12px",
                        marginTop: "4px",
                        fontSize: "26px",
                        fontWeight: "600",
                      }}
                    >
                      ·
                    </div>
                  </div>
                </CSSTransition>
                <div
                  onClick={() =>
                    navigate(`/league?assetLeague=${league}&type=miners`)
                  }
                  className="Li2p Z5dC Hexc"
                >
                  <CSSTransition
                    in={showCup}
                    timeout={500}
                    className="main-enter"
                    unmountOnExit
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <div
                          className={`icon-cup-position icon-cup__${league}`}
                        ></div>
                        <div className="KI3d Iu3d">{`${
                          league === "bronze"
                            ? parsedData.main.bronze
                            : league === "silver"
                            ? parsedData.main.silver
                            : league === "gold"
                            ? parsedData.main.gold
                            : league === "platinum"
                            ? parsedData.main.platinum
                            : parsedData.main.diamond
                        }`}</div>
                        <div className="Hexc">
                          <svg
                            width="7"
                            height="12"
                            viewBox="0 0 7 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-shrink icon-shrink__arrow"
                          >
                            <path
                              d="m1 1 5 5-5 5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </CSSTransition>
                </div>
              </div>
              {click ? (
                <CSSTransition
                  in={showCup}
                  timeout={500}
                  className="main-scale-enter"
                  unmountOnExit
                >
                  <div>
                    <div className="Oj3d">
                      {/* <div
                        onClick={(e) => {
                          const target = e.target.closest(".js-big-coin");

                          const rect = target.getBoundingClientRect(); // Получаем координаты элемента относительно окна просмотра
                          const x = e.clientX - rect.left; // Вычисляем y координату относительно элемента
                          const y = e.clientY - rect.top; // Вычисляем x координату относительно элемента
                          const h = rect.height;
                          const w = rect.width;
                          const span = document.createElement("span");
                          span.classList.add("click-amount");
                          span.style.setProperty("--count-x", x + "px");
                          span.style.setProperty("--count-y", y + "px");
                          span.textContent = getClick(balance);
                          target.append(span);

                          setTimeout(() => {
                            span.remove();
                          }, 1005);

                          openClicker();
                          WebApp.HapticFeedback.impactOccurred(`medium`);
                        }}
                        className="clicker js-big-coin"
                      ></div> */}
                      <div
                        onClick={handleClick}
                        className="clicker js-big-coin"
                      ></div>
                    </div>
                  </div>
                </CSSTransition>
              ) : (
                <CSSTransition
                  in={showCup}
                  timeout={500}
                  className="main-scale-enter"
                  unmountOnExit
                >
                  <div>
                    <div className="Oj3d">
                      <div className="field-container">
                        <div>
                          <ul className="field">
                            {items.map((item) => {
                              return (
                                <FieldItem
                                  key={item.id}
                                  items={items}
                                  item={item}
                                  rocket={rocket}
                                  onClick={() => {
                                    open(item);
                                    WebApp.HapticFeedback.impactOccurred(
                                      `medium`
                                    );
                                  }}
                                />
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
              )}
              <div
                style={{
                  position: "fixed",
                  bottom: "0px",
                  left: "0px",
                  marginBottom: "58px",
                  marginLeft: "14px",
                }}
              >
                <div
                  className="icon-lighting"
                  style={{
                    width: "38px",
                    height: "38px",
                  }}
                ></div>
              </div>
              <div
                style={{
                  position: "fixed",
                  bottom: "0px",
                  left: "0px",
                  marginBottom: "72px",
                  marginLeft: "54px",
                }}
              >
                <div
                  style={{
                    color: "#fff",
                    fontSize: "24px",
                    fontWeight: "600",
                    paddingRight: "2px",
                  }}
                >{`${
                  rocket
                    ? secondsRocket
                    : click
                    ? secondsClick
                    : league === "bronze"
                    ? addCommas(score)
                    : league === "silver"
                    ? addCommas(score - 30000)
                    : league === "gold"
                    ? addCommas(score - 200000)
                    : league === "platinum"
                    ? addCommas(score - 500000)
                    : addCommas(score - 1000000)
                }`}</div>
              </div>
              <div
                style={{
                  position: "fixed",
                  bottom: "0px",
                  left: "0px",
                  marginBottom: "58px",
                  marginLeft: "54px",
                }}
              >
                <div
                  style={{
                    color: "var(--palette-dark-5)",
                    fontSize: "12px",
                    fontWeight: "600",
                    paddingTop: "10px",
                  }}
                >{`${
                  rocket
                    ? `/ 30`
                    : click
                    ? `/ 30`
                    : league === "bronze"
                    ? `/ 30,000`
                    : league === "silver"
                    ? `/ 170,000`
                    : league === "gold"
                    ? `/ 300,000`
                    : league === "platinum"
                    ? `/ 500,000`
                    : `/ ∞`
                }`}</div>
              </div>
              <div className="E3dv">
                <div className="Li2p">
                  <TabButton name={"fren"} />
                  <TabButton name={"earn"} />
                </div>
              </div>
              <div className="YecU">
                <ProgressBar
                  score={score}
                  rocket={rocket}
                  click={click}
                  secondsRocket={secondsRocket}
                  secondsClick={secondsClick}
                />
              </div>
              {touch % 50 === 0 ? (
                <button
                  onClick={() => {
                    rocketStart();
                    WebApp.HapticFeedback.impactOccurred(`heavy`);
                  }}
                >
                  <CSSTransition
                    in={showRocket}
                    timeout={1000}
                    className="rocket-show-animation"
                    unmountOnExit
                  >
                    <div>
                      {!rocket ? (
                        <img
                          src={require("../../assets/animation/peepo-rocket.gif")}
                          className={`rocket rocket_child-${randomRocket()}`}
                        />
                      ) : (
                        ``
                      )}
                    </div>
                  </CSSTransition>
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// export default function Main() {
//   return (
//     <div className="container">
//       <Field />
//     </div>
//   );
// }

// <main>
//   <div className="container">
//     <ProgressBar max={10000}/>
//   </div>
// </main>
