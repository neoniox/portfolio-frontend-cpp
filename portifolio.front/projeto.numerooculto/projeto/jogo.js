const oculto = Math.floor(Math.random() * 100) + 1;
        const maxTentativas = 7;
        let tentativas = 0;

        function checaroculto() {
            tentativas++;
            document.getElementById("tentativas").textContent = `Tentativas restantes: ${maxTentativas - tentativas}`;

            const valor = document.getElementById("adivinhar").value;
            const resultadooculto = document.getElementById("resultado");

            if (valor == oculto) {
                resultadooculto.textContent = "Parabéns! Você acertou!";
            } else if (valor < oculto) {
                resultadooculto.textContent = "O número secreto é maior.";
            } else {
                resultadooculto.textContent = "O número secreto é menor.";
            }

            if (tentativas === maxTentativas) {
                resultadooculto.textContent = `Suas tentativas acabaram. O número secreto era ${oculto}.`;
            }
        }

        function novoJogo() {
            oculto = Math.floor(Math.random() * 100) + 1;
            tentativas = 0;
            document.getElementById("resultado").textContent = "";
            document.getElementById("tentativas").textContent = `Tentativas restantes: ${maxTentativas}`;
        }




