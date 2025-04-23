
var idade = prompt ("quantos anos voce tem?")

if (idade >= 18) {
    alert("Voce pode JOGAR jokenpo!! " + idade)
} else {
    alert("Que pena, voce é menor idade nao pode jogar jokenpo " + idade)
}


if (idade >= 18) {
   var choicePlayer = prompt("O QUE VOCE ESCOLHE [1 - PEDRA] - [2 - PAPEL] [3 - TESOURA]")
   var choicePc = Math.floor(Math.random() * 3) + 1

   if (choicePlayer == choicePc) {
    alert ("EMPATE VOCE JOGOU [" + choicePlayer +"] E PC JOGOU [" + choicePc + "]")
   } 
   if (choicePlayer == 1) {
        if (choicePc == 2) {
            alert ("VOCE PERDEU!!! JOGOU PEDRA E PC JOGOU PAPEL")
        } 
        if (choicePc == 3) {
            alert ("VOCE GANHOU!! JOGOU PEDRA E PC JOGOU TESOURA ")
        }

   } if (choicePlayer == 2) {
        if (choicePc == 1) {
            alert("VOCE GANHOU!! JOGOU PAPEL E PC JOGOU PEDRA")
        } if (choicePc == 3) {
            alert("VOCE PERDEU!!! JOGOU PAPEL E PC JOGOU TESOURA")
        }
   } if (choicePlayer == 3) {
        if (choicePc == 1) {
            alert ("VOCE PERDEU!! JOGOU TESOURA E PC JOGOU PEDRA")
        } if (choicePc == 2) {
            alert("VOCE GANHOU!! JOGOU TESOURA E PC JOGOU PAPEL")
        }
   } else {
    alert ("JOGUE UM NUMERO VALIDO ENTRE 1 A 3")
   }
} 