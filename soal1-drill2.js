/**
 * player(input) = [70,80,105]
 * var ranked = [100,90,90,80]
 * 
 * sortedRanked = player.concat(ranked).sort((a, b) => b - a)
 * 
 * leaderboard = []
 * rank = 1
 * sortedRanked.forEach((score, index)=>{
 * if (index > 0 && sortedRanked[index-1] !== score ){
 * rank
 * }
 *   rankArray.push(rank);

 * })
 * const playerRanks = player.map(score => rankArray[combined.indexOf(score)]);
 */


const leaderboardRank = (player) => {
    // player = [70, 80, 105]
    const ranked = [100, 90, 90, 80];
    const sortedRanked = player.concat(ranked).sort((a, b) => b - a);
    const leaderboard = [];
    let rank = 1;
    sortedRanked.forEach((score, index) => {
        if (index > 0 && sortedRanked[index - 1] !== score) {
            rank++;
        }
        leaderboard.push(rank);
    });
    const playerRanks = player.map(score => leaderboard[sortedRanked.indexOf(score)]);
    return playerRanks;
};

console.log(leaderboardRank([70, 80, 105]));