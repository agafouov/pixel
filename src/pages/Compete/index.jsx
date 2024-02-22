import React from "react";
import Lottie from "lottie-react";
import axios from 'axios';
import Cup from "../../assets/animation/Cup.json";
import Duck_think_out from "../../assets/animation/Duck_think_out.json";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./style.scss";
import UsersSkeleton from "../../components/UsersSkeleton";
import { BackButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";
import getLeague from "../../utils/getLeague";

export default function Squad() {
  const navigate = useNavigate();

  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users/36/score`);
        setScore(response.data.score);
      } catch (error) {
        console.error('Failed to fetch score:', error);
      }
    };

    fetchScore();

    // Очистка эффекта
    return () => {
      // Если нужно выполнить какие-то действия при размонтировании компонента
    };
  }, []);

  const league = getLeague(score);

  const [playAnimation, setPlayAnimation] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const [userLoaded, setUserLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // setUserLoaded(true);
    }, 5000);
  }, []);

  const handleButtonClick = () => {
    setPlayAnimation(true);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 500); // Задержка перед появлением страницы
  }, []);

  const [isVisible, setIsVisible] = useState(true);

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
      <CSSTransition
        in={showPage}
        timeout={250}
        className="squad-animation"
        unmountOnExit
      >
        <div>
          <div className="page scrolling">
            <div className={`background-league theme-league__${league}`}></div>
            <div className="container position-relative">
              <div className="page__content uY4S">
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
                        className="stars_squad-1 star-glitter"
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
                        className="stars_squad-2 star-glitter"
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
                        className="stars_squad-3 star-glitter"
                      >
                        <path
                          d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </CSSTransition>
                </div>
                <div className="IYES">
                  <div onClick={handleButtonClick}>
                    <CSSTransition
                      in={isVisible}
                      timeout={100}
                      className={`slide-down-enter`}
                      unmountOnExit
                    >
                      <div>
                        <div
                          className={`league-position league-icon__${league}`}
                        ></div>
                      </div>
                    </CSSTransition>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "-12px",
                  }}
                >
                  <div
                    style={{
                      marginTop: "6px",
                      marginRight: "10px",
                    }}
                  >
                    <svg
                      width="14"
                      height="28"
                      viewBox="0 0 14 28"
                      fill="#ffffff80"
                      xmlns="http://www.w3.org/2000/svg"
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
                      fontSize: "32px",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    {parsedData.compete.title}
                  </div>
                  <div
                    style={{
                      marginTop: "6px",
                      marginLeft: "10px",
                    }}
                  >
                    <svg
                      width="14"
                      height="28"
                      viewBox="0 0 14 28"
                      fill="#ffffff80"
                      xmlns="http://www.w3.org/2000/svg"
                      className="_laurelIconReversed_xg9t0_15"
                    >
                      <path
                        d="M11.8779 0.908541C11.8779 0.617669 11.7042 0.443147 11.4146 0.478051C10.5574 0.54786 9.57285 1.00162 8.94736 1.61827C8.33345 2.24655 7.90487 3.23551 7.87012 4.09649C7.85854 4.35246 7.99754 4.51534 8.25237 4.51534C9.16744 4.53861 10.1636 4.09649 10.7775 3.42167C11.3798 2.79339 11.82 1.79279 11.8779 0.908541ZM5.48398 1.58336C5.27548 1.37393 5.03224 1.38557 4.85849 1.60663C4.31408 2.30472 3.96658 3.36349 4.01292 4.24774C4.0245 5.14363 4.49941 6.13259 5.20599 6.71433C5.4029 6.88885 5.63456 6.85395 5.78515 6.65616C6.32956 5.9697 6.66547 4.9342 6.58439 4.06158C6.52647 3.18897 6.08631 2.20001 5.48398 1.58336ZM11.1134 5.89989C10.3605 5.48104 9.29486 5.30651 8.4377 5.4694C7.58054 5.63229 6.66547 6.22567 6.14423 6.94703C6.00523 7.14482 6.05156 7.36588 6.24847 7.5055C6.9898 8.02907 8.06704 8.2385 8.94736 7.98253C9.80452 7.79637 10.7196 7.20299 11.2408 6.5049C11.4146 6.27221 11.3682 6.02787 11.1134 5.89989ZM2.7156 5.55085C2.49552 5.38796 2.24069 5.44613 2.10169 5.69046C1.64994 6.44673 1.47619 7.52877 1.63836 8.38975C1.80052 9.29727 2.40285 10.2164 3.19051 10.6818C3.41059 10.8214 3.6075 10.7633 3.73492 10.5422C4.17508 9.77429 4.34883 8.69225 4.1635 7.85455C3.96658 6.98193 3.38742 6.07441 2.7156 5.55085ZM8.88944 9.02966C8.07862 8.72716 7.00138 8.71552 6.19056 9.00639C5.36815 9.28563 4.53416 9.98372 4.11716 10.7516C4.00133 10.9727 4.08241 11.1937 4.27933 11.2985C5.09015 11.7289 6.19056 11.7871 7.04772 11.4381C7.87012 11.1123 8.70411 10.3909 9.10953 9.59977C9.24852 9.35544 9.15586 9.13438 8.88944 9.02966ZM1.01287 11.089C0.734869 10.996 0.514788 11.1239 0.468455 11.4148C0.317874 12.2758 0.514788 13.3462 0.966533 14.1257C1.40669 14.9169 2.31018 15.5801 3.20209 15.743C3.44534 15.7895 3.63067 15.6615 3.677 15.4172C3.816 14.5679 3.6075 13.4974 3.14418 12.7412C2.7156 12.0315 1.85844 11.3799 1.01287 11.089ZM8.00912 12.2292C7.1288 12.206 6.09789 12.5783 5.46082 13.1251C4.75424 13.6952 4.22141 14.6377 4.11716 15.4986C4.08241 15.743 4.22141 15.9175 4.45308 15.9524C5.35657 16.0571 6.41064 15.7313 7.09405 15.1031C7.76587 14.5213 8.28712 13.5673 8.41453 12.6946C8.4377 12.4038 8.27553 12.2292 8.00912 12.2292ZM8.35662 16.1967C8.33345 15.9175 8.12495 15.7779 7.85854 15.8477C7.01297 16.0455 6.12106 16.6389 5.6114 17.3486C5.10174 18.0699 4.83532 19.1287 4.93957 19.9897C4.95116 20.2457 5.14807 20.3736 5.39132 20.3504C6.30639 20.2108 7.23305 19.629 7.70796 18.8495C8.21762 18.1514 8.48403 17.081 8.35662 16.1967ZM0.815951 16.5341C0.537954 16.5225 0.364206 16.697 0.37579 16.9763C0.456872 17.8605 0.908617 18.8611 1.53411 19.4661C2.1596 20.1293 3.17893 20.5249 4.094 20.4667C4.34883 20.4551 4.49941 20.2806 4.46466 20.0246C4.40674 19.1287 3.93183 18.163 3.29476 17.5929C2.68085 16.9995 1.68469 16.569 0.815951 16.5341ZM9.9551 18.3492C9.8161 18.0932 9.56127 18.0467 9.34119 18.2328C8.68095 18.7448 8.10179 19.6639 7.91646 20.5133C7.71954 21.3742 7.89329 22.4446 8.34503 23.2009C8.46087 23.422 8.69253 23.4801 8.90103 23.3405C9.66552 22.8635 10.291 21.956 10.43 21.0485C10.5922 20.1758 10.3953 19.0938 9.9551 18.3492ZM12.3297 20.6878C12.1212 20.4784 11.8663 20.5016 11.6926 20.7343C11.1945 21.4324 10.8702 22.4563 10.9165 23.3173C10.9744 24.2131 11.403 25.2137 12.0169 25.7955C12.1791 25.97 12.4107 25.97 12.5729 25.7955C13.21 25.1556 13.5806 24.0968 13.4764 23.166C13.4185 22.2934 12.9667 21.3044 12.3297 20.6878ZM7.9512 23.4452C7.55738 22.6541 6.72339 21.9443 5.87781 21.6651C5.07857 21.3859 4.01292 21.3975 3.17893 21.7116C2.91251 21.8164 2.83143 22.0374 2.95884 22.2934C3.38742 23.0729 4.22141 23.8059 5.04382 24.1084C5.86623 24.4575 6.95505 24.3993 7.78904 23.9688C7.99754 23.8525 8.06704 23.6547 7.9512 23.4452ZM11.6926 26.1213C11.0787 25.4697 10.0941 25.0043 9.22536 24.9461C8.39137 24.8763 7.36046 25.1672 6.6423 25.6675C6.42222 25.842 6.38747 26.098 6.58439 26.3074C7.18671 26.9473 8.17129 27.4244 9.04003 27.5058C9.94352 27.6105 10.986 27.2964 11.6694 26.703C11.8547 26.5285 11.8547 26.2958 11.6926 26.1213Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="nw2j">
                  {parsedData.compete.play_tournaments_and_earn_coins}
                  <br />
                  {parsedData.compete.do_you_wanna_join}
                </div>
                {/* <div style={{
                  borderRadius: "12px",
                  padding: "14px",
                  background: "rgba(255, 255, 255, 0.12)",
                }}>
                  <div style={{
                    
                  }}>
                    <div>1</div>
                    
                    <div style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "red",
                    }}></div>
                    
                    <div>Name</div>
                    
                    <div>194,023</div>
                  </div>
                </div> */}
                <div className="IY3l">
                  <div className="lgqO">
                    <div onClick={handleButtonClick} className="JKpY Z5dC">
                      <Lottie
                        key={animationKey}
                        loop={false}
                        autoPlay={playAnimation}
                        animationData={Duck_think_out}
                        // isStopped={!playAnimation}
                      />
                    </div>
                    <div className="OCW2">
                      {parsedData.compete.under_maintenance}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
