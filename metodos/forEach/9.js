let txts = ["eu", "amo", "voce"];
let newTxt = ''

txts.forEach(function(txt) {
    newTxt += txt + " ";
})

console.log(newTxt.trim())