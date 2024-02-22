import "./style.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import BlackTransparent from "../../components/BlackTransparent";
import { CSSTransition } from "react-transition-group";
import addCommas from "../../utils/addCommas";
import { BackButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";
import getLeague from "../../utils/getLeague";
import Pigeon from "../../assets/animation/Pigeon.json";
import Chick_out from "../../assets/animation/Chick_out.json";
import Chick_stnd from "../../assets/animation/Chick_stnd.json";
import Chick from "../../assets/animation/Chick.json";

export default function Earn() {
  const navigate = useNavigate();

  const [balance, setBalance] = useState(0);

  // Функция для получения баланса пользователя
  const fetchBalance = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/users/36/balance`);
      setBalance(response.data.balance);
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  // Функция для обновления баланса пользователя
  const updateBalance = async (newBalance) => {
    try {
      const response = await axios.put(`http://localhost:8000/users/36/balance`, {
        balance: newBalance,
      });
      setBalance(response.data.balance);
    } catch (error) {
      console.error("Error updating balance:", error);
    }
  };

  // Вызываем функцию получения баланса при монтировании компонента
  useEffect(() => {
    fetchBalance();
  }, []);

  const [frens, setFrens] = useState([]);

  useEffect(() => {
    const fetchFrens = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/users/36/frens`
        );
        setFrens(response.data.frens);
      } catch (error) {
        console.error("Failed to fetch frens:", error);
      }
    };

    fetchFrens();

    // Очистка эффекта
    return () => {
      // Если нужно выполнить какие-то действия при размонтировании компонента
    };
  }, []);

  const [squad, setSquad] = useState("");

  useEffect(() => {
    const fetchSquad = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/users/36/squad`
        );
        setSquad(response.data.squad);
      } catch (error) {
        console.error("Failed to fetch squad:", error);
      }
    };

    fetchSquad();

    // Очистка эффекта
    return () => {
      // Если нужно выполнить какие-то действия при размонтировании компонента
    };
  }, []);

  // useEffect(() => {
  //   const fetchFiveFrens = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:8000/users/36/five_frens`);
  //       setFiveFrens(response.data.five_frens);
  //     } catch (error) {
  //       console.error("Failed to fetch five frens:", error);
  //     }
  //   };

  //   fetchFiveFrens();

  //   // Очистка эффекта
  //   return () => {
  //     // Если нужно выполнить какие-то действия при размонтировании компонента
  //   };
  // }, []);

  const [fiveFrens, setFiveFrens] = useState(false);

  // Функция для получения баланса пользователя
  const fetchFiveFrens = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/users/36/five_frens`);
      setFiveFrens(response.data.five_frens);
    } catch (error) {
      console.error("Error fetching five_frens:", error);
    }
  };

  // Функция для обновления баланса пользователя
  const updateFiveFrens = async (newFiveFrens) => {
    try {
      const response = await axios.put(`http://localhost:8000/users/36/five_frens`, {
        five_frens: newFiveFrens,
      });
      setFiveFrens(response.data.five_frens);
    } catch (error) {
      console.error("Error updating five_frens:", error);
    }
  };

  // Вызываем функцию получения баланса при монтировании компонента
  useEffect(() => {
    fetchFiveFrens();
  }, []);

  const [tenFrens, setTenFrens] = useState(false);

  // Функция для получения баланса пользователя
  const fetchTenFrens = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/users/36/ten_frens`);
      setTenFrens(response.data.ten_frens);
    } catch (error) {
      console.error("Error fetching ten_frens:", error);
    }
  };

  // Функция для обновления баланса пользователя
  const updateTenFrens = async (newTenFrens) => {
    try {
      const response = await axios.put(`http://localhost:8000/users/36/ten_frens`, {
        ten_frens: newTenFrens,
      });
      setTenFrens(response.data.ten_frens);
    } catch (error) {
      console.error("Error updating ten_frens:", error);
    }
  };

  // Вызываем функцию получения баланса при монтировании компонента
  useEffect(() => {
    fetchTenFrens();
  }, []);

  const [joinSquad, setJoinSquad] = useState(false);

  // Функция для получения баланса пользователя
  const fetchJoinSquad = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/users/36/join_squad`);
      setJoinSquad(response.data.join_squad);
    } catch (error) {
      console.error("Error fetching join_squad:", error);
    }
  };

  // Функция для обновления баланса пользователя
  const updateJoinSquad = async (newJoinSquad) => {
    try {
      const response = await axios.put(`http://localhost:8000/users/36/join_squad`, {
        join_squad: newJoinSquad,
      });
      setJoinSquad(response.data.join_squad);
    } catch (error) {
      console.error("Error updating join_squad:", error);
    }
  };

  // Вызываем функцию получения баланса при монтировании компонента
  useEffect(() => {
    fetchJoinSquad();
  }, []);

  const [playAnimation1, setPlayAnimation1] = useState(false);
  const [animationKey1, setAnimationKey1] = useState(0);

  const handleButtonClick1 = () => {
    setPlayAnimation1(true);
    setAnimationKey1((prevKey) => prevKey + 1);
  };

  const [playAnimation2, setPlayAnimation2] = useState(false);
  const [animationKey2, setAnimationKey2] = useState(0);

  const handleButtonClick2 = () => {
    setPlayAnimation2(true);
    setAnimationKey2((prevKey) => prevKey + 1);
  };

  const [playAnimation3, setPlayAnimation3] = useState(false);
  const [animationKey3, setAnimationKey3] = useState(0);

  const handleButtonClick3 = () => {
    setPlayAnimation3(true);
    setAnimationKey3((prevKey) => prevKey + 1);
  };

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 50); // Задержка перед появлением страницы
  }, []);

  const [itemFirst, setItemFirst] = useState(false);

  const funcFirst = () => {
    setItemFirst(true);
    setTimeout(() => {
      setItemFirst(false);
      if (frens.length >= 5) {
        if (!fiveFrens) {
          updateBalance(balance + 200000)
        }
        setFiveFrens(true);
        updateFiveFrens(true);
      } else {
        navigate("/fren");
      }
    }, 2000);
  };

  const [itemSecond, setItemSecond] = useState(false);

  const funcSecond = () => {
    setItemSecond(true);
    setTimeout(() => {
      setItemSecond(false);
      if (frens.length >= 10) {
        if (!tenFrens) {
          updateBalance(balance + 500000)
        }
        setTenFrens(true);
        updateTenFrens(true);
      } else {
        navigate("/fren");
      }
    }, 2000);
  };

  const [itemThird, setItemThird] = useState(false);

  const funcThird = () => {
    setItemThird(true);
    setTimeout(() => {
      setItemThird(false);
      if (squad != "") {
        if (!joinSquad) {
          updateBalance(balance + 30000)
        }
        setJoinSquad(true);
        updateJoinSquad(true);
      } else {
        navigate("/squad");
      }
    }, 2000);
  };

  const savedData = sessionStorage.getItem("pixelcoinLangpack");
  const parsedData = JSON.parse(savedData);

  const [starFirst, setStarFirst] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStarFirst(true);
    }, 800);
  }, []);

  const [starSecond, setStarSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStarSecond(true);
    }, 1200);
  }, []);

  const [starThird, setStarThird] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStarThird(true);
    }, 1200);
  }, []);

  const [starFourth, setStarFourth] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStarFourth(true);
    }, 1200);
  }, []);

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
      <BackButton onClick={() => navigate("/")} />
      <div className="page">
        <div className="background-yellow theme-yellow"></div>
        <div className="container position-relative scrolling">
          <div className="page__content">
            <div
              style={{
                position: "relative",
              }}
            >
              <CSSTransition
                in={starFirst}
                timeout={800}
                className="star-animation"
                unmountOnExit
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    className="stars_earn-1 star-glitter"
                  >
                    <path
                      d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </CSSTransition>
              <CSSTransition
                in={starSecond}
                timeout={1200}
                className="star-animation"
                unmountOnExit
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    className="stars_earn-2 star-glitter"
                  >
                    <path
                      d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </CSSTransition>
              <CSSTransition
                in={starThird}
                timeout={1200}
                className="star-animation"
                unmountOnExit
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    className="stars_earn-3 star-glitter"
                  >
                    <path
                      d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </CSSTransition>
              <CSSTransition
                in={starFourth}
                timeout={1200}
                className="star-animation"
                unmountOnExit
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="11"
                    viewBox="0 0 10 11"
                    fill="none"
                    className="stars_earn-4 star-glitter"
                  >
                    <path
                      d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </CSSTransition>
            </div>
            <CSSTransition
              in={showPage}
              timeout={50}
              className="earn-animation"
              unmountOnExit
            >
              <div>
                <div className="Jh2w">
                  <div className="Li2p">
                    <div className="earn-icon"></div>
                  </div>
                </div>
                <div
                  className="Jh2w"
                  style={{
                    marginTop: "12px",
                  }}
                >
                  <div className="Li2p">
                    <div
                      style={{
                        fontSize: "32px",
                        fontWeight: "700",
                        color: "#fff",
                        textAlign: "center",
                      }}
                    >
                      {parsedData.earn.title}
                    </div>
                  </div>
                </div>
                <div
                  className="Jh2w"
                  style={{
                    marginTop: "4px",
                  }}
                >
                  <div
                    onClick={() => {
                      navigate("/about");
                    }}
                    className="Li2p Z5dC"
                  >
                    <div className="KH5k">{parsedData.earn.about}</div>
                  </div>
                </div>
                <div
                  className="earn-transparent-div earn-transparent-div_first"
                  style={{
                    marginTop: "50px",
                  }}
                >
                  <button
                    className="earn-transparent-btn earn-transparent-btn_first"
                    onClick={() => {
                      navigate("/fren");
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        paddingTop: "10px",
                        paddingLeft: "16px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          width: "70px",
                          height: "70px",
                          backgroundColor:
                            "var(--palette-transparent-white-05)",
                          borderRadius: "12px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <div>
                            <Lottie
                              loop={false}
                              animationData={Pigeon}
                              className="hUYa"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          paddingTop: "12px",
                          paddingLeft: "86px",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "left",
                            fontSize: "17px",
                            fontWeight: "500",
                            color: "#d4d4d4",
                          }}
                        >
                          {parsedData.earn.invite_bonus}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            textAlign: "left",
                            paddingTop: "4px",
                            fontSize: "15px",
                            fontWeight: "600",
                            color: "#fff",
                          }}
                        >
                          {parsedData.earn.up_to}
                          <div
                            className="penny-icon"
                            style={{
                              width: "16px",
                              height: "16px",
                              marginLeft: "4px",
                              marginTop: "1px",
                              marginRight: "2px",
                            }}
                          ></div>
                          <div
                            style={{
                              color: "#d4d4d4",
                              fontWeight: "500",
                              marginLeft: "4px",
                            }}
                          >
                            {parsedData.earn.for_fren}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        paddingTop: "38px",
                        paddingRight: "20px",
                        color: "rgba(235, 235, 245, 0.3)",
                      }}
                    >
                      <svg
                        width="16px"
                        height="16px"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
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
                  </button>
                </div>
                <div className="UJxo">{parsedData.earn.onboarding}</div>
                <div className="earn-transparent-div earn-transparent-div_second">
                  <button
                    className={`earn-transparent-btn${
                      itemFirst ? `_block` : ``
                    } earn-transparent-btn_second ${fiveFrens ? `none` : ``}`}
                    onClick={() => {
                      {
                        !itemFirst && funcFirst();
                      }
                      handleButtonClick1();
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        paddingTop: "10px",
                        paddingLeft: "16px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          width: "70px",
                          height: "70px",
                          backgroundColor:
                            "var(--palette-transparent-white-05)",
                          borderRadius: "12px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <div>
                            <Lottie
                              key={animationKey1}
                              loop={false}
                              autoPlay={playAnimation1}
                              animationData={Chick_out}
                              // isStopped={!playAnimation1}
                              className="hUYa"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          paddingTop: "12px",
                          paddingLeft: "86px",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            fontSize: "17px",
                            fontWeight: "500",
                            color: "#d4d4d4",
                          }}
                        >
                          {parsedData.earn.invite_five_frens}
                        </div>
                        {fiveFrens ? (
                          <div
                            style={{
                              display: "flex",
                              textAlign: "left",
                              paddingTop: "4px",
                              fontSize: "15px",
                              fontWeight: "600",
                              color: "#d4d4d4",
                            }}
                          >
                            {parsedData.earn.completed}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              textAlign: "left",
                              paddingTop: "4px",
                              fontSize: "15px",
                              fontWeight: "600",
                              color: "#fff",
                            }}
                          >
                            +200,000
                            <div
                              className="penny-icon"
                              style={{
                                width: "16px",
                                height: "16px",
                                marginLeft: "4px",
                                marginTop: "1px",
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        paddingTop: "38px",
                        paddingRight: "20px",
                        color: "rgba(235, 235, 245, 0.3)",
                      }}
                    >
                      {itemFirst ? (
                        <div className="task-loader"></div>
                      ) : (
                        <svg
                          width="16px"
                          height="16px"
                          viewBox="0 0 7 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m1 1 5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </button>
                  <button
                    className={`earn-transparent-btn${
                      itemSecond ? `_block` : ``
                    } earn-transparent-btn_third ${tenFrens ? `none` : ``}`}
                    onClick={() => {
                      {
                        !itemSecond && funcSecond();
                      }
                      handleButtonClick2();
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        paddingTop: "10px",
                        paddingLeft: "16px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          width: "70px",
                          height: "70px",
                          backgroundColor:
                            "var(--palette-transparent-white-05)",
                          borderRadius: "12px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <div>
                            <Lottie
                              key={animationKey2}
                              loop={false}
                              autoPlay={playAnimation2}
                              animationData={Chick_stnd}
                              // isStopped={!playAnimation2}
                              className="hUYa"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          paddingTop: "12px",
                          paddingLeft: "86px",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            fontSize: "17px",
                            fontWeight: "500",
                            color: "#d4d4d4",
                          }}
                        >
                          {parsedData.earn.invite_ten_frens}
                        </div>
                        {tenFrens ? (
                          <div
                            style={{
                              display: "flex",
                              textAlign: "left",
                              paddingTop: "4px",
                              fontSize: "15px",
                              fontWeight: "600",
                              color: "#d4d4d4",
                            }}
                          >
                            {parsedData.earn.completed}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              textAlign: "left",
                              paddingTop: "4px",
                              fontSize: "15px",
                              fontWeight: "600",
                              color: "#fff",
                            }}
                          >
                            +500,000
                            <div
                              className="penny-icon"
                              style={{
                                width: "16px",
                                height: "16px",
                                marginLeft: "4px",
                                marginTop: "1px",
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        paddingTop: "38px",
                        paddingRight: "20px",
                        color: "rgba(235, 235, 245, 0.3)",
                      }}
                    >
                      {itemSecond ? (
                        <div className="task-loader"></div>
                      ) : (
                        <svg
                          width="16px"
                          height="16px"
                          viewBox="0 0 7 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m1 1 5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </button>
                  <button
                    className={`earn-transparent-btn${
                      itemThird ? `_block` : ``
                    } earn-transparent-btn_fourth ${joinSquad ? `none` : ``}`}
                    onClick={() => {
                      {
                        !itemThird && funcThird();
                      }
                      handleButtonClick3();
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: "0px",
                        top: "0px",
                        paddingTop: "10px",
                        paddingLeft: "16px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          width: "70px",
                          height: "70px",
                          backgroundColor:
                            "var(--palette-transparent-white-05)",
                          borderRadius: "12px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: "36px",
                            }}
                          >
                            <Lottie
                              key={animationKey3}
                              loop={false}
                              autoPlay={playAnimation3}
                              animationData={Chick}
                              // isStopped={!playAnimation3}
                              className="hUYa"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          paddingTop: "12px",
                          paddingLeft: "86px",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            fontSize: "17px",
                            fontWeight: "500",
                            color: "#d4d4d4",
                          }}
                        >
                          {parsedData.earn.join_squad}
                        </div>
                        {joinSquad ? (
                          <div
                            style={{
                              display: "flex",
                              textAlign: "left",
                              paddingTop: "4px",
                              fontSize: "15px",
                              fontWeight: "600",
                              color: "#d4d4d4",
                            }}
                          >
                            {parsedData.earn.completed}
                          </div>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              textAlign: "left",
                              paddingTop: "4px",
                              fontSize: "15px",
                              fontWeight: "600",
                              color: "#fff",
                            }}
                          >
                            +30,000
                            <div
                              className="penny-icon"
                              style={{
                                width: "16px",
                                height: "16px",
                                marginLeft: "4px",
                                marginTop: "1px",
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                        paddingTop: "38px",
                        paddingRight: "20px",
                        color: "rgba(235, 235, 245, 0.3)",
                      }}
                    >
                      {itemThird ? (
                        <div className="task-loader"></div>
                      ) : (
                        <svg
                          width="16px"
                          height="16px"
                          viewBox="0 0 7 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m1 1 5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                        // <svg
                        //   xmlns="http://www.w3.org/2000/svg"
                        //   width={28}
                        //   height={28}
                        //   viewBox="0 0 28 28"
                        //   fill="none"
                        // >
                        //   <path
                        //     d="M7.5 15.5L11.8318 20.7944C11.9147 20.8958 12.0726 20.8866 12.1432 20.7762L20 8.5"
                        //     stroke="#007AFF"
                        //     strokeOpacity={0.3}
                        //     strokeWidth={2}
                        //     strokeLinecap="round"
                        //     strokeLinejoin="round"
                        //   />
                        // </svg>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </>
  );
}
