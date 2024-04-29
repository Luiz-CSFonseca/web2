// Função para listar as vagas
function listarVagas(reservas) {
    // Verificar se estamos na página listagem.html antes de exibir a listagem de vagas
    if (document.title === "Listagem de Vagas") {
        const tabelaVagas = document.getElementById('tabelaVagas');
        tabelaVagas.innerHTML = ''; // Limpar tabela

        reservas.forEach(reserva => {
            const linha = tabelaVagas.insertRow();
            linha.insertCell().textContent = reserva.placa;
            linha.insertCell().textContent = reserva.nomeProprietario;
            linha.insertCell().textContent = reserva.numeroApartamento;
            linha.insertCell().textContent = reserva.modeloVeiculo;
            linha.insertCell().textContent = reserva.corVeiculo;
            linha.insertCell().textContent = reserva.vaga;
        });

        // Exibir status das vagas
        exibirStatusVagas(reservas);
    }
}

// Função para exibir o status das vagas (ocupadas e vazias)
function exibirStatusVagas(reservas) {
    const vagasTotais = 10; // Suponha que você tenha 10 vagas no total
    let vagasOcupadas = 0;

    // Contar vagas ocupadas
    reservas.forEach(reserva => {
        if (reserva.placa) {
            vagasOcupadas++;
        }
    });

    // Calcular vagas vazias
    const vagasVazias = vagasTotais - vagasOcupadas;

    // Exibir na tela
    const statusVagasElement = document.getElementById('statusVagas');
    statusVagasElement.innerHTML = `Vagas ocupadas: ${vagasOcupadas} / Vagas vazias: ${vagasVazias}`;
}

// Limpar tabela de vagas na página de cadastro
function limparTabelaVagas() {
    const tabelaVagas = document.getElementById('tabelaVagas');
    tabelaVagas.innerHTML = ''; // Limpar tabela
}
