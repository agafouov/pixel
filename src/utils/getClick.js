import getLeague from "./getLeague";

export default function getClick(balance) {
    const league = getLeague(balance);
    let score;
    if (league === "bronze") {
        score = 10
    } else if (league === "silver") {
        score = 20
    } else if (league === "gold") {
        score = 40
    } else if (league === "platinum") {
        score = 70
    } else {
        score = 100
    }
    return score
}