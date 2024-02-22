import getLeague from "./getLeague";

export default function changeScore(item, balance, rocket) {
  const league = getLeague(balance);
  let score;
  if (league === "bronze") {
    if (item.type === 1) {
      if (balance > 400) {
        score = balance - 400;
      } else {
        score = 0;
      }
    } else if (item.type === 2) {
      if (rocket) {
        score = balance + 1000;
      } else {
        score = balance + 500;
      }
    } else {
      score = balance;
    }
  } else if (league === "silver") {
    if (item.type === 1) {
      if (balance > 600) {
        score = balance - 600;
      } else {
        score = 0;
      }
    } else if (item.type === 2) {
      if (rocket) {
        score = balance + 1600;
      } else {
        score = balance + 800;
      }
    } else {
      if (balance > 200) {
        score = balance - 200;
      } else {
        score = 0;
      }
    }
  } else if (league === "gold") {
    if (item.type === 1) {
      if (balance > 1300) {
        score = balance - 1300;
      } else {
        score = 0;
      }
    } else if (item.type === 2) {
      if (rocket) {
        score = balance + 3200;
      } else {
        score = balance + 1600;
      }
    } else {
      if (balance > 300) {
        score = balance - 300;
      } else {
        score = 0;
      }
    }
  } else if (league === "platinum") {
    if (item.type === 1) {
      if (balance > 2800) {
        score = balance - 2800;
      } else {
        score = 0;
      }
    } else if (item.type === 2) {
      if (rocket) {
        score = balance + 6400;
      } else {
        score = balance + 3200;
      }
    } else {
      if (balance > 800) {
        score = balance - 800;
      } else {
        score = 0;
      }
    }
  } else {
    if (item.type === 1) {
      if (balance > 8000) {
        score = balance - 8000;
      } else {
        score = 0;
      }
    } else if (item.type === 2) {
      if (rocket) {
        score = balance + 16000;
      } else {
        score = balance + 8000;
      }
    } else {
      if (balance > 2000) {
        score = balance - 2000;
      } else {
        score = 0;
      }
    }
  }
  return score;
}
