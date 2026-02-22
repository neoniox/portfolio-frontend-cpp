const saldoEl = document.getElementById("saldo");
const entradasEl = document.getElementById("entradas");
const saidasEl = document.getElementById("saidas");
const listaTransacoesEl = document.getElementById("lista-transacoes");
const receberForm = document.getElementById("receber-form");
const transferirForm = document.getElementById("transferir-form");
const pixArea = document.getElementById("pix-area");
const receberMsg = document.getElementById("receber-msg");
const transferirMsg = document.getElementById("transferir-msg");

let saldo = 0;
let entradas = 0;
let saidas = 0;

document.getElementById("pagar").addEventListener("click", () => {
    alert("Sistema indisponível. Tente novamente mais tarde.");
});

document.getElementById("investir").addEventListener("click", () => {
    alert("Sistema indisponível. Tente novamente mais tarde.");
});

document.getElementById("pix").addEventListener("click", () => {
    pixArea.classList.toggle("hidden");
});

document.getElementById("tab-receber").addEventListener("click", () => {
    receberForm.classList.remove("hidden");
    transferirForm.classList.add("hidden");
});

document.getElementById("tab-transferir").addEventListener("click", () => {
    transferirForm.classList.remove("hidden");
    receberForm.classList.add("hidden");
});

document.getElementById("receber-btn").addEventListener("click", () => {
    const cpfCnpj = document.getElementById("cpf-cnpj").value;
    const valorReceber = parseFloat(document.getElementById("valor-receber").value);

    if (!cpfCnpj || isNaN(valorReceber)) {
        receberMsg.classList.remove("hidden");
        return;
    }

    receberMsg.classList.add("hidden");
    saldo += valorReceber;
    entradas += valorReceber;

    atualizarValores();
    adicionarTransacao("entrada", "Transferência recebida", valorReceber);
    alert("Transação realizada com sucesso.");
});

document.getElementById("transferir-btn").addEventListener("click", () => {
    const chavePix = document.getElementById("chave-pix").value;
    const valorTransferir = parseFloat(document.getElementById("valor-transferir").value);

    if (!chavePix || isNaN(valorTransferir)) {
        transferirMsg.classList.remove("hidden");
        return;
    }

    transferirMsg.classList.add("hidden");

    if (valorTransferir > saldo) {
        alert("Saldo insuficiente!");
        return;
    }

    saldo -= valorTransferir;
    saidas += valorTransferir;

    atualizarValores();
    adicionarTransacao("saída", "Transferência enviada", valorTransferir);
    alert("Transação realizada com sucesso.");
});

function atualizarValores() {
    saldoEl.textContent = `R$ ${saldo.toFixed(2)}`;
    entradasEl.textContent = `R$ ${entradas.toFixed(2)}`;
    saidasEl.textContent = `R$ ${saidas.toFixed(2)}`;
}

function adicionarTransacao(tipo, titulo, valor) {
    const now = new Date();
    const id = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    const dataHora = now.toLocaleString();

    const transacao = document.createElement("li");
    transacao.innerHTML = `
        <strong>${titulo}</strong> (${tipo})
        <br>Data/Hora: ${dataHora}
        <br>Valor: R$ ${valor.toFixed(2)}
        <br>ID: ${id}
    `;

    if (listaTransacoesEl.textContent === "Não constam transações") {
        listaTransacoesEl.innerHTML = "";
    }

    listaTransacoesEl.appendChild(transacao);
}