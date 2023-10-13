function calcularNivel(vitorias, derrotas) {
    vitorias = parseInt(prompt('digite o valor de suas vitórias !'));
    derrotas = parseInt(prompt('digite o valor de suas derrotas !'));
    nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    alert(`O Herói tem um saldo de ${vitorias} vitórias  e seu saldo de derrota é ${derrotas} e está no nível de ${nivel}`);
}
calcularNivel();