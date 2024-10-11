/**
 * input nilai 0-100
 * pengecekan nilai <40 return gagal
 * 
 * pembulatan 
 *  if(input>38){
 *      if(input%5 < 3){
 *      math.ceil(input/5)*5
 *  }
 * }
 * 
 */

const Pembulatan = (score) => {
    score.forEach((element, index) => {
        if(element < 0 || element > 100){
            score[index] = "Input nilai tidak valid";
            return score;
        }
    });

    score.forEach((element, index) => {
        if(element>=38){
            if(element%5 > 2){
                score[index] = Math.ceil(element/5)*5
            }
        }
    })
    return score

}
console.log(Pembulatan([73,67,38,33,84]))
