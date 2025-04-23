// Jogador1 = prompt();
// Jogador2 = prompt();

personagens = ["", "", ""];
viloes = ["", "", ""];

forcaHerois = 0;
forcaVilao = 0;

for (let cont = 1; cont <= 3; cont++) {
    choiceHeroi = prompt("PERSONAGEM Nº" + cont + " Digite o nome do seu personagem:")
    personagens[cont] = choiceHeroi;

    forcaHerois = forcaHerois + Math.floor(Math.random() * 10) + 1;
}

for (let x = 1; x <= 3; x++) {
    choiceViloes = Math.floor(Math.random() * 10);
    viloesNPC = ["DarkHold", "Drayvok", "DarkSide", "Supergirl bizarra", "Superman bizarro"];
    viloes[x] = viloesNPC[choiceViloes];

    forcaVilao += Math.floor(Math.random() * 10) + 1;
}

if (forcaHerois > forcaVilao) {
    alert("SEU TIME É FODA É MAIS FORTE [SUA FORÇA " + forcaHerois + "] x [FORÇA DOS VILOES " + forcaVilao + "]")
} else if (forcaHerois == forcaVilao) {
    alert ("HEROIS E VILOES TEM A MESMA FORÇA  [SUA FORÇA " + forcaHerois + "] x [FORÇA DOS VILOES " + forcaVilao + "]")
} else {
    alert("SEU TIME É FRACO LHE FALTA ODIO [SUA FORÇA " + forcaHerois + "] x [FORÇA DOS VILOES " + forcaVilao + "]")
}