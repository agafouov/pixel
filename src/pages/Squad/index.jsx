import React from "react";
import Lottie from "lottie-react";
import Disco from "../../assets/animation/Disco.json";
import Duck_think_out from "../../assets/animation/Duck_think_out.json";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./style.scss";
import UsersSkeleton from "../../components/UsersSkeleton";
import { BackButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";
import axios from 'axios';

export default function Squad() {
  const navigate = useNavigate();

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
            <div className="background-influencer"></div>

            <div className="container position-relative">
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
                <div className="sGES">
                  <div onClick={handleButtonClick}>
                    <CSSTransition
                      in={isVisible}
                      timeout={100}
                      className={`slide-down-enter`}
                      unmountOnExit
                    >
                      <div>
                        {/* <Lottie
                          key={animationKey}
                          loop={false}
                          autoPlay={playAnimation}
                          animationData={Disco}
                          isStopped={!playAnimation}
                          className="hhyK"
                        /> */}
                        <div className="JGew disco-big-icon"></div>
                      </div>
                    </CSSTransition>
                  </div>
                </div>
                <div className="IfNG">{parsedData.squad.title}</div>
                <div className="nw2j">
                  {parsedData.squad.these_squads_receruiting_now}
                  <br />
                  {parsedData.squad.do_you_wanna_join}
                </div>
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
                      {parsedData.squad.under_maintenance}
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
