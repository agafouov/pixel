import getLeague from "./getLeague";

export default function changeClick(balance) {
    const league = getLeague(balance);
    let score;
    if (league === "bronze") {
        score = balance + 10
    } else if (league === "silver") {
        score = balance + 20
    } else if (league === "gold") {
        score = balance + 40
    } else if (league === "platinum") {
        score = balance + 70
    } else {
        score = balance + 100
    }
    return score
}