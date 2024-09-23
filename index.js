let heroi = prompt("Digite o nome de seu Heroi");
let xp = prompt("Qual o nivel de xp do seu heroi");
if (xp <= 1000) {
  alert(" O heroi " + heroi + " tem de " + xp + " XP o nivel é Prata");
} else if (xp >= 1001 && xp < 2000) {
  alert(" O heroi " + heroi, " tem de " + xp + " XP o nivel é Bronze");
} else if (xp >= 2001 && xp < 3000) {
  alert(" O heroi " + heroi + " tem de " + xp + " XP o nivel é Ouro");
} else if (xp >= 3001 && xp < 4000) {
  alert(" O heroi " + heroi + " tem de " + xp + " xp o nivel é Platina");
} else {
  alert(" O heroi " + heroi + " tem de " + xp + " XP o nivel é Acendente");
}
