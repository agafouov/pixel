import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.scss";
import { BackButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";
import getLeague from "../../utils/getLeague";
import axios from 'axios';

export default function Referral() {
  const navigate = useNavigate();

  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users/36/score`);
        setScore(response.data.score);
      } catch (error) {
        console.error("Failed to fetch score:", error);
      }
    };

    fetchScore();

    // Очистка эффекта
    return () => {
      // Если нужно выполнить какие-то действия при размонтировании компонента
    };
  }, []);
  const league = getLeague(score);

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 50); // Задержка перед появлением страницы
  }, []);

  const savedData = sessionStorage.getItem("pixelcoinLangpack");
  const parsedData = JSON.parse(savedData);

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
      <BackButton onClick={() => navigate("/fren")} />
      <div className="page">
        <div className="background-yellow theme-yellow"></div>
        <div className="container position-relative scrolling">
          <div className="page__content uY4S">
            <CSSTransition
              in={showPage}
              timeout={50}
              className="referral-animation"
              unmountOnExit
            >
              <div>
                <div className="iosW">{parsedData.referral.title_invite}</div>
                <div>
                  <div className="B0WY">
                    <div className="LIcp">
                      <div className="referral-icon referral-icon__pixelcoin-icon"></div>
                    </div>
                    <div className="LIcp">
                      <div className="nnot">
                        {parsedData.referral.invite_fren}
                        <br />
                        <div className="Li2p">
                          <div className="penny-icon vBwQ bv0r"></div>
                          <div className="R35h JG3Z bv0r">
                            {league === "bronze"
                              ? `20,000`
                              : league === "silver"
                              ? `40,000`
                              : league === "gold"
                              ? `60,000`
                              : league === "platinum"
                              ? `80,000`
                              : `100,000`}
                          </div>{" "}
                          {parsedData.referral.for_you_and_fren}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="B0WY">
                    <div className="IY3i">
                      <div className="referral-icon referral-icon__prem-icon"></div>
                    </div>
                    <div className="IY3i">
                      <div className="nnot">
                        {parsedData.referral.fren_with}{" "}
                        <a
                          onClick={() => {
                            WebApp.openTelegramLink("https://t.me/premium");
                          }}
                          className="prem-link"
                        >
                          {parsedData.referral.telegram_premium}
                        </a>
                        <br />
                        <div className="lDtF nnot">
                          <div className="Li2p">
                            <div className="penny-icon vBwQ bv0r"></div>
                            <div className="R35h JG3Z bv0r">
                              {league === "bronze"
                                ? `30,000`
                                : league === "silver"
                                ? `50,000`
                                : league === "gold"
                                ? `70,000`
                                : league === "platinum"
                                ? `90,000`
                                : `120,000`}
                            </div>{" "}
                            {parsedData.referral.for_you_and_fren}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Gc12">{parsedData.referral.title_level}</div>
                <div className="position-relative">
                  <div>
                    <div className="sJs1 IYwx">
                      {parsedData.referral.level_up}
                    </div>
                    <div className="IUec JHe8">
                      {parsedData.referral.regular_fren}
                    </div>
                    <div className="IUec Khw3">
                      {parsedData.referral.premium}
                    </div>
                  </div>
                  <div>
                    <div className="JG3Z">
                      <div className="referral-league-icon referral-league-icon__silver ebYk"></div>
                      <div className="Ibf1">{parsedData.referral.silver}</div>
                    </div>
                    <div>
                      <div className="LpsI">
                        <div className="YRj2 R35h">+40,000</div>
                      </div>
                      <div className="IYw2">
                        <div className="YRj2 R35h">+50,000</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="JG3Z">
                      <div className="referral-league-icon referral-league-icon__gold IUxe"></div>
                      <div className="Ld9i">{parsedData.referral.gold}</div>
                    </div>
                    <div>
                      <div className="Jw4e">
                        <div className="YRj2 R35h">+60,000</div>
                      </div>
                      <div className="UKn3">
                        <div className="YRj2 R35h">+70,000</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="JG3Z">
                      <div className="referral-league-icon referral-league-icon__platinum Jwn3"></div>
                      <div className="Khe8">{parsedData.referral.platinum}</div>
                    </div>
                    <div>
                      <div className="U0ex">
                        <div className="YRj2 R35h">+80,000</div>
                      </div>
                      <div className="Ieo1">
                        <div className="YRj2 R35h">+90,000</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="JG3Z">
                      <div className="referral-league-icon referral-league-icon__diamond JUYe"></div>
                      <div className="Khd1">{parsedData.referral.diamonds}</div>
                    </div>
                    <div>
                      <div className="GFwe">
                        <div className="YRj2 R35h">+100,000</div>
                      </div>
                      <div className="Usyw">
                        <div className="YRj2 R35h">+120,000</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    WebApp.openTelegramLink(
                      `https://t.me/share/url?text=${
                        parsedData.referral_system.play_and_earn
                      }${
                        league === "bronze"
                          ? `20%2C000`
                          : league === "silver"
                          ? `40%2C000`
                          : league === "gold"
                          ? `60%2C000`
                          : league === "platinum"
                          ? `80%2C000`
                          : `100%2C000`
                      }${
                        parsedData.referral_system.for_you_and_fren
                      }&url=https://t.me/pixelcoinbot?start=rp_5668476910`
                    );
                  }}
                  className="fren-footer-btn"
                >
                  <div className="Jh2w">
                    <div className="Li2p">
                      <div className="Iy4o">
                        {parsedData.referral.invite_a_fren}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </>
  );
}
