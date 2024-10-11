/**
 * cek kata terakir
 * 
 * input = array.split(" ")
 * 
 * x=1
 * if(input[input.length-x]=== " "){
 *  x += 1
 * }
 * 
 * return(`kata terakhir adaalh ${input[input.length-x]} dengan panjang karakter ${input[input.length-x].length}`)
 */

const cekKataTerakhir = (input) => {
    const arr = input.split(" ")

    var x = 1

    for (x; x < arr.length; x++) {
        if (arr[arr.length - x] != "") {
            break
        }
    }

    return (`kata terakhir adaalh ${arr[arr.length - x]} dengan panjang karakter ${arr[arr.length - x].length}`)
}

console.log(cekKataTerakhir("Hello wordl  "))
