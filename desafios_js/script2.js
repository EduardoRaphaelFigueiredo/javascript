//  ✨ ✨ data ✨ ✨ //
const dolphinScore1 = 98;
const dolphinScore2 = 91;
const dolphinScore3 = 91;
const koalaScore1 = 98;
const koalaScore2 = 91;
const koalaScore3 = 91;
// ✨✨ operators ✨✨ //
const dolphinAverageScore = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3
const koalaAverageScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3
// ✨✨ logic ✨✨ //
if (koalaAverageScore > dolphinAverageScore && koalaAverageScore >= 100) {
    console.log("Congrats Koalas!!! #GoKoalas 🐨🐨🐨");
} else if (koalaAverageScore > dolphinAverageScore && koalaAverageScore < 100) {
    console.log("Koalas won the game, but their points are too low for the trophy :(");
} else if (dolphinAverageScore > koalaAverageScore && dolphinAverageScore >= 100) {
    console.log("Congrats Dolphins!!! #GoDolphins 🐬🐬🐬");
} else if (dolphinAverageScore > koalaAverageScore && dolphinAverageScore < 100) {
    console.log("Dolphins won the game, but their points are too low for the trophy :(");
} else if (dolphinAverageScore === koalaAverageScore && koalaAverageScore >= 100) {
    console.log("The Game was a tie, but they're still both up for the trophy! #GoKoalas #GoDolphins");
} else {
    console.log("The Game was a tie and they're both out of the competition for the trophy :(");
}