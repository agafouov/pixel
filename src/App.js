import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Fren from "./pages/Fren";
import Earn from "./pages/Earn";
import About from "./pages/About";
import League from "./pages/League";
import PartyKings from "./pages/PartyKings";
import Squad from "./pages/Squad";
import Stats from "./pages/Stats";
import Referral from "./pages/Referral";
import QrCode from "./pages/QrCode";
import WebApp from "@twa-dev/sdk";
import Loader from "./components/Loader";
import { langpack } from "./utils/langpack";
import Compete from "./pages/Compete";

function App() {
  WebApp.expand();
  WebApp.setHeaderColor("#000");
  WebApp.setBackgroundColor("#000");

  var bodyElement = document.body;
  let lang;
  try {
    lang = WebApp.initDataUnsafe.user.language_code;
  } catch {
    lang = "en";
  }
  // const lang = WebApp.initDataUnsafe.user.language_code;
  const platform = WebApp.platform;
  if (platform === "ios" || platform === "macos") {
    bodyElement.classList.add(`apple`);
  } else {
    if (platform !== "unknown") {
      bodyElement.classList.add(`material`);
    } else {
      bodyElement.classList.add(`material`);
    }
  }

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // Проверяем, был ли уже показан preloader в этой сессии
  //   const preloaderShown = sessionStorage.getItem("preloaderShown");
  //   if (!preloaderShown) {
  //     setLoading(true); // Устанавливаем состояние загрузки в true, чтобы показать preloader
  //     const preloaderTimeout = setTimeout(() => {
  //       // Устанавливаем значение в sessionStorage после завершения загрузки
  //       sessionStorage.setItem("preloaderShown", "true");
  //       setLoading(false);
  //     }, 3000); // Имитируем задержку в 3 секунды, чтобы показать preloader

  //     return () => clearTimeout(preloaderTimeout);
  //   } else {
  //     setLoading(false);
  //   }
  // }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Проверяем, был ли уже показан preloader в этой сессии
    const preloaderShown = sessionStorage.getItem("preloaderShown");
    if (!preloaderShown) {
      const preloaderTimeout = setTimeout(() => {
        // Устанавливаем значение в sessionStorage после завершения загрузки
        sessionStorage.setItem("preloaderShown", "true");
        setLoading(false);
      }, 3000); // Имитируем задержку в 3 секунды, чтобы показать preloader
  
      return () => clearTimeout(preloaderTimeout);
    } else {
      setLoading(false);
    }
  }, []);

  const result = langpack(lang)

  const welcome = localStorage.getItem("welcome")
  if (!welcome) {
    localStorage.setItem("welcome", false)
  }

  useEffect(() => {
    // Ваш объект для сохранения в sessionStorage
    const pixelcoinLangpack = {
      main: {
        join_squad: result.main.join_squad,
        bronze: result.main.bronze,
        silver: result.main.silver, 
        gold: result.main.gold,
        platinum: result.main.platinum,
        diamond: result.main.diamond,
        frens: result.main.frens,
        earn: result.main.earn,   
        compete: result.main.compete,     
      },
      squad: {
        title: result.squad.title,
        these_squads_receruiting_now: result.squad.these_squads_receruiting_now,
        do_you_wanna_join: result.squad.do_you_wanna_join,
        empty_squad: result.squad.empty_squad,
        under_maintenance: result.squad.under_maintenance,
      },
      about: {
        join: result.about.join,
        follow: result.about.follow,
        card_title_play: result.about.card_title_play,
        card_text_play: result.about.card_text_play,
        card_title_earn: result.about.card_title_earn,
        card_text_earn: result.about.card_text_earn,
        card_title_league: result.about.card_title_league,
        card_text_league: result.about.card_text_league,
        card_title_rocket: result.about.card_title_rocket,
        card_text_rocket: result.about.card_text_rocket,
        card_title_squad: result.about.card_title_squad,
        card_text_squad: result.about.card_text_squad,
        full_guide: result.about.full_guide,
        play: result.about.play,
      },
      earn: {
        title: result.earn.title,
        about: result.earn.about,
        invite_bonus: result.earn.invite_bonus,
        up_to: result.earn.up_to,
        for_fren: result.earn.for_fren,
        onboarding: result.earn.onboarding,
        invite_five_frens: result.earn.invite_five_frens,
        invite_ten_frens: result.earn.invite_ten_frens,
        join_squad: result.earn.join_squad,
        completed: result.earn.completed,
      },
      stats: {
        balance_text_fiat: result.stats.balance_text_fiat,
        total_players: result.stats.total_players,
        daily_users: result.stats.daily_users,
        online: result.stats.online,
        invite_a_fren: result.stats.invite_a_fren,
      },
      party_kings: {
        title: result.party_kings.title,
        description: result.party_kings.description,
        invite_frens: result.party_kings.invite_frens,
      },
      qr_code: {
        desktop_is_boring: result.qr_code.desktop_is_boring,
        play_on_your_mobile: result.qr_code.play_on_your_mobile,
      },
      referral: {
        title_invite: result.referral.title_invite,
        invite_fren: result.referral.invite_fren,
        for_you_and_fren: result.referral.for_you_and_fren,
        fren_with: result.referral.fren_with,
        telegram_premium: result.referral.telegram_premium,
        title_level: result.referral.title_level,
        level_up: result.referral.level_up,
        regular_fren: result.referral.regular_fren,
        premium: result.referral.premium,
        silver: result.referral.silver,
        gold: result.referral.gold,
        platinum: result.referral.platinum,
        diamonds: result.referral.diamonds,
        invite_a_fren: result.referral.invite_a_fren,
      },
      fren: {
        title: result.fren.title,
        top: result.fren.top,
        leaders: result.fren.leaders,
        title_invite: result.fren.title_invite,
        invite_fren: result.fren.invite_fren,
        for_you_and_fren: result.fren.for_you_and_fren,
        fren_with: result.fren.fren_with,
        telegram_premium: result.fren.telegram_premium,
        open_details: result.fren.open_details,
        title_frens_list: result.fren.title_frens_list,
        empty_frens_list: result.fren.empty_frens_list,
        under_maintenance: result.fren.under_maintenance,
        invite_a_fren: result.fren.invite_a_fren,
      },
      league: {
        pixelcoiners: result.league.pixelcoiners,
        stats: result.league.stats,
        bronze_league: result.league.bronze_league,
        silver_league: result.league.silver_league,
        gold_league: result.league.gold_league,
        platinum_league: result.league.platinum_league,
        diamond_league: result.league.diamond_league,
        miners: result.league.miners,
        squads: result.league.squads,
        empty_list: result.league.empty_list,
        under_maintenance: result.league.under_maintenance,
        you_will_join_leaderboard: result.league.you_will_join_leaderboard,
        in_the_silver_league: result.league.in_the_silver_league,
        leaderboard_is_under_construction: result.league.leaderboard_is_under_construction,
        bronze_miners: result.league.bronze_miners,
        bronze_squads: result.league.bronze_squads,
        silver_miners: result.league.silver_miners,
        silver_squads: result.league.silver_squads,
        gold_miners: result.league.gold_miners,
        gold_squads: result.league.gold_squads,
        platinum_miners: result.league.platinum_miners,
        platinum_squads: result.league.platinum_squads,
        diamond_miners: result.league.diamond_miners,
        diamond_squads: result.league.diamond_squads,
      },
      compete: {
        title: result.compete.title,
        play_tournaments_and_earn_coins: result.compete.play_tournaments_and_earn_coins,
        do_you_wanna_join: result.compete.do_you_wanna_join,
        empty_tournaments: result.compete.empty_tournaments,
        under_maintenance: result.compete.under_maintenance,
      },
      referral_system: {
        play_and_earn: result.referral_system.play_and_earn,
        for_you_and_fren: result.referral_system.for_you_and_fren,
      }
    };

    // Преобразование объекта в строку JSON
    const jsonString = JSON.stringify(pixelcoinLangpack);

    // Сохранение строки JSON в sessionStorage
    sessionStorage.setItem('pixelcoinLangpack', jsonString);
  }, []);

  // if (!localStorage.getItem('welcome')) {
  //   localStorage.setItem('welcome', `false`)
  // } 
  // const welcome = localStorage.getItem('welcome')
  return (
    <Routes>
      {((WebApp.platform === "ios" ||
        WebApp.platform === "android" ||
        WebApp.platform === "android_x" ||
        WebApp.platform === "unknown"
        ) && (
        <>
          {loading ? <Route path="/" Component={Loader} /> : <Route path="/" Component={Main} />}
          <Route path="/earn" Component={Earn} />
          <Route path="/fren" Component={Fren} />
          <Route path="/about" Component={About} />
          <Route path="/league" Component={League} />
          <Route path="/party" Component={PartyKings} />
          <Route path="/squad" Component={Squad} />
          <Route path="/stats" Component={Stats} />
          <Route path="/referral" Component={Referral} />
          <Route path="/compete" Component={Compete} />
        </>
      )) || <Route path="/" Component={QrCode} />}
    </Routes>
  );
}

export default App;
