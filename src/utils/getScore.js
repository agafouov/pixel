import getLeague from "./getLeague";

export default function getScore(balance, rocket) {
  const league = getLeague(balance);
  let score;
  if (league === "bronze") {
    if (rocket) {
      score = 1000;
    } else {
      score = 500;
    }
  } else if (league === "silver") {
    if (rocket) {
      score = 1600;
    } else {
      score = 800;
    }
  } else if (league === "gold") {
    if (rocket) {
      score = 3200;
    } else {
      score = 1600;
    }
  } else if (league === "platinum") {
    if (rocket) {
      score = 6400;
    } else {
      score = 3200;
    }
  } else {
    if (rocket) {
      score = 16000;
    } else {
      score = 8000;
    }
  }
  return score;
}
