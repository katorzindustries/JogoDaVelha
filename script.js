//var player1 = prompt("Digite seu nome para entrar no jogo");
var posicoes = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];

var PlayerAtual = ""; //1X ou 1O, 2X, 2O
var player1Score = 0;
var player2Score = 0;
var pos;
var ganhou = false;
var cont = 0;
var xizinho = '<h2 class="x">✖</h2>'
var bolinha = '<svg class="o" xmlns="http://www.w3.org/2000/svg" version="1.1"><circle cx="75" cy="80" r="35" stroke="black" stroke-width="13" fill="none" /></svg>"';

function playerVencedor(ganhador) {
    if (ganhador == "1X" || ganhador == "1O") {
        document.getElementById("container").style.backgroundColor = "green";
        player1Score++;
        ganhou = true;
    }
    if (ganhador == "2X" || ganhador == "2O") {
        document.getElementById("container").style.backgroundColor = "red";
        document.getElementById("player2").style.backgroundColor = "green";
        document.getElementById("player2").style.color = "black";
        player2Score++;
        ganhou = true;
    }
}

function verificaJogo() {
    if (posicoes[0] == posicoes[1] && posicoes[1] == posicoes[2]) {
        playerVencedor(posicoes[0]);
        if (posicoes[0] == "1X" || posicoes[0] == "1O") {
            document.getElementById("a1").backgroundColor = "green";
            document.getElementById("a2").backgroundColor = "green";
            document.getElementById("a3").backgroundColor = "green";
        } else {
            document.getElementById("a1").backgroundColor = "red";
            document.getElementById("a2").backgroundColor = "red";
            document.getElementById("a3").backgroundColor = "red";
        }
    } else
    if (posicoes[3] == posicoes[4] && posicoes[4] == posicoes[5]) {
        playerVencedor(posicoes[3]);
        if (posicoes[3] == "1X" || posicoes[3] == "1O") {
            document.getElementById("b1").backgroundColor = "green";
            document.getElementById("b2").backgroundColor = "green";
            document.getElementById("b3").backgroundColor = "green";
        } else {
            document.getElementById("b1").backgroundColor = "red";
            document.getElementById("b2").backgroundColor = "red";
            document.getElementById("b3").backgroundColor = "red";
        }
    } else
    if (posicoes[6] == posicoes[7] && posicoes[7] == posicoes[8]) {
        playerVencedor(posicoes[6]);
        if (posicoes[3] == "1X" || posicoes[3] == "1O") {
            document.getElementById("c1").backgroundColor = "green";
            document.getElementById("c2").backgroundColor = "green";
            document.getElementById("c3").backgroundColor = "green";
        } else {
            document.getElementById("c1").backgroundColor = "red";
            document.getElementById("c2").backgroundColor = "red";
            document.getElementById("c3").backgroundColor = "red";
        }
    } else
    if (posicoes[0] == posicoes[3] && posicoes[3] == posicoes[6]) {
        playerVencedor(posicoes[0]);
        if (posicoes[3] == "1X" || posicoes[3] == "1O") {
            document.getElementById("a1").backgroundColor = "green";
            document.getElementById("b1").backgroundColor = "green";
            document.getElementById("c1").backgroundColor = "green";
        } else {
            document.getElementById("a1").backgroundColor = "red";
            document.getElementById("b1").backgroundColor = "red";
            document.getElementById("c1").backgroundColor = "red";
        }
    } else
    if (posicoes[1] == posicoes[4] && posicoes[4] == posicoes[7]) {
        playerVencedor(posicoes[1]);
        if (posicoes[3] == "1X" || posicoes[3] == "1O") {
            document.getElementById("a2").backgroundColor = "green";
            document.getElementById("b2").backgroundColor = "green";
            document.getElementById("c2").backgroundColor = "green";
        } else {
            document.getElementById("a2").backgroundColor = "red";
            document.getElementById("b2").backgroundColor = "red";
            document.getElementById("c2").backgroundColor = "red";
        }
    } else
    if (posicoes[2] == posicoes[5] && posicoes[5] == posicoes[8]) {
        playerVencedor(posicoes[2]);
        if (posicoes[3] == "1X" || posicoes[3] == "1O") {
            document.getElementById("a3").backgroundColor = "green";
            document.getElementById("b3").backgroundColor = "green";
            document.getElementById("c3").backgroundColor = "green";
        } else {
            document.getElementById("a3").backgroundColor = "red";
            document.getElementById("b3").backgroundColor = "red";
            document.getElementById("c3").backgroundColor = "red";
        }
    } else
    if (posicoes[0] == posicoes[4] && posicoes[4] == posicoes[8]) {
        playerVencedor(posicoes[0]);
        if (posicoes[3] == "1X" || posicoes[3] == "1O") {
            document.getElementById("a1").backgroundColor = "green";
            document.getElementById("b2").backgroundColor = "green";
            document.getElementById("c3").backgroundColor = "green";
        } else {
            document.getElementById("a1").backgroundColor = "red";
            document.getElementById("b2").backgroundColor = "red";
            document.getElementById("c3").backgroundColor = "red";
        }

    } else
    if (posicoes[2] == posicoes[4] && posicoes[4] == posicoes[6]) {
        playerVencedor(posicoes[2]);
        if (posicoes[3] == "1X" || posicoes[3] == "1O") {
            document.getElementById("a3").backgroundColor = "green";
            document.getElementById("b2").backgroundColor = "green";
            document.getElementById("c1").backgroundColor = "green";
        } else {
            document.getElementById("a3").backgroundColor = "red";
            document.getElementById("b2").backgroundColor = "red";
            document.getElementById("c1").backgroundColor = "red";
        }

    } else if (cont == 9) {
        var flag = false;
        for (var i = 0; i < 9; i++) {
            if (!(posicoes[i] == "1X" || posicoes[i] == "2X" || posicoes[i] == "1O" || posicoes[i] == "2O")) {
                flag = true;
            }
        }
        if (flag == false) {
            document.getElementById("container").style.backgroundColor = "yellow";
            setTimeout(function() {
                window.location.href = "index.html";
            }, 600);
        }

    }


}

function player2() {
    if (ganhou) {
        setTimeout(function() {
            window.location.href = "index.html";
        }, 400);

    } else {
        if (PlayerAtual == "2X") {
            verificaJogo();
            pos = Math.floor((Math.random() * 9) - 1) + "";
            while (posicoes[pos] == "1X" || posicoes[pos] == "1O" || posicoes[pos] == "2O" || posicoes[pos] == "2X" || pos < 0) {
                pos = Math.round((Math.random() * 9) - 1) + "";
                if (cont == 9) {
                    break;
                }

            }
            document.getElementById(posicoes[pos]).innerHTML = xizinho;
            posicoes[pos] = "2X";
            PlayerAtual = "1O";
            cont++;
            verificaJogo();
        }

        if (PlayerAtual == "2O") {
            verificaJogo();
            pos = Math.floor((Math.random() * 9) - 1);
            while (posicoes[pos] == "1X" || posicoes[pos] == "1O" || posicoes[pos] == "2O" || posicoes[pos] == "2X" || pos < 0) {
                pos = Math.round((Math.random() * 9) - 1);
                if (cont == 9) {
                    break;
                }

            }

            document.getElementById(posicoes[pos]).innerHTML = bolinha;
            posicoes[pos] = "2O";
            PlayerAtual = "1X";
            cont++;
            verificaJogo();
        }
        setTimeout(function() {
            document.getElementById("quadro").style.borderColor = "blue";

        }, 400);

    }

}

function pegaClick(e) {

    if (ganhou) {
        window.location.href = "index.html";
    } else {


        if (PlayerAtual == "1X") {
            verificaJogo();
            document.getElementById("quadro").style.borderColor = "blue";
            pos = e.target.id;
            var teste = false;
            for (var i = 0; i < 9; i++) {
                if (posicoes[i] == pos) {
                    teste = true;
                }
            }
            if (teste == true) {

                PlayerAtual = "2O";
                document.getElementById(pos).innerHTML = xizinho;
                for (var i = 0; i < 9; i++) {
                    if (posicoes[i] == pos) {
                        posicoes[i] = "1X";
                    }
                }
                cont++;

                setTimeout(function() {
                    document.getElementById("quadro").style.borderColor = "red";

                }, 400);
                verificaJogo();
                setTimeout(function() {

                    player2();

                }, 1000);
            }

        }
        if (PlayerAtual == "1O") {
            verificaJogo();
            document.getElementById("quadro").style.borderColor = "blue";
            pos = e.target.id;
            var teste = false;
            for (var i = 0; i < 9; i++) {
                if (posicoes[i] == pos) {
                    teste = true;
                }
            }
            if (teste == true) {
                PlayerAtual = "2X";

                document.getElementById(pos).innerHTML = bolinha;
                for (var i = 0; i < 9; i++) {
                    if (posicoes[i] == pos) {
                        posicoes[i] = "1O";
                    }
                }
                cont++;
                setTimeout(function() {
                    document.getElementById("quadro").style.borderColor = "red";

                }, 400);
                verificaJogo();
                setTimeout(function() {

                    player2();

                }, 1000);

            }
            verificaJogo();
        }
    }

}

function iniciaJogo() {
    document.getElementById("X1").style.display = "none";
    document.getElementById("O2").style.display = "none";
    document.getElementById("X2").style.display = "none";
    document.getElementById("O1").style.display = "none";
    cont = 0;
    PlayerAtual = "";
    posicoes = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];
    if (Math.floor((Math.random() * 100) + 1) < 50) {
        document.getElementById("X1").style.display = "inline";
        document.getElementById("O2").style.display = "inline";
        PlayerAtual = "1X"
        document.getElementById("quadro").style.borderColor = "blue";

    } else {
        document.getElementById("X2").style.display = "inline";
        document.getElementById("O1").style.display = "inline";
        PlayerAtual = "2X"
        document.getElementById("quadro").style.borderColor = "red";
    }
    setTimeout(function() {
        player2();
    }, 1000);

}

window.onload = function() {
    iniciaJogo();
};