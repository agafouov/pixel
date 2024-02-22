export default function getLeague(balance) {
    const league = balance < 30000 ? `bronze` : balance < 200000 ? `silver` : balance < 500000 ? `gold` : balance < 1000000 ? `platinum` : `diamond`
    return league
}