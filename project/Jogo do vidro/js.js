let cont = 1;
while (cont <= 3) {

    choicePlayer = prompt("NIVEL:" + cont +" ESCOLHA DE 1 A 3");

    choicePc = Math.floor(Math.random() * 3) + 1;

    if (choicePlayer == choicePc) {
        alert("PERDEU!!! VOCE QUEBROU O VIDRO (VOCE ESOLHEU [" + choicePlayer + "] PC ESCOLHEU [" + choicePc + "]")
        break
    } else {
        alert("PASSOU!! O VIDRO QUEBRADO ESTAVA " + cont)
    }

    cont += 1;
}

if (cont == 4) {
    alert("VOCE GANHOU!!")
}