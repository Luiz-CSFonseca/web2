// Verificar se estamos na página listagem.html antes de exibir a listagem de vagas
if (document.title === "Listagem de Vagas") {
    // Carregar e listar as vagas ao carregar a página
    let reservas = localStorage.getItem('reservas') ? JSON.parse(localStorage.getItem('reservas')) : [];
    listarVagas(reservas);
}

// Função para salvar nova reserva no localStorage
function salvarReserva() {
    // Obter valores dos campos do formulário
    const placa = document.getElementById('placa').value;
    const nomeProprietario = document.getElementById('nomeProprietario').value;
    const numeroApartamento = document.getElementById('numeroApartamento').value;
    const blocoApartamento = document.getElementById('blocoApartamento').value;
    const modeloVeiculo = document.getElementById('modeloVeiculo').value;
    const corVeiculo = document.getElementById('corVeiculo').value;
    const vaga = document.getElementById('vaga').value;

    // Criar objeto Reserva
    const novaReserva = new Reserva(placa, nomeProprietario, numeroApartamento, blocoApartamento, modeloVeiculo, corVeiculo, vaga);

    // Obter reservas do localStorage
    let reservas = localStorage.getItem('reservas') ? JSON.parse(localStorage.getItem('reservas')) : [];

    // Adicionar a reserva ao array reservas
    reservas.push(novaReserva);

    // Salvar reservas no localStorage
    localStorage.setItem('reservas', JSON.stringify(reservas));

    // Exibir mensagem de confirmação
    console.log('Reserva salva:', novaReserva);
    alert('Reserva cadastrada com sucesso!');

    // Limpar formulário
    formularioReserva.reset();

    // Atualizar a listagem de vagas
    listarVagas(reservas);
}


// Função para listar as vagas ao carregar a página
function listarVagasAoCarregarPagina() {
    let reservas = localStorage.getItem('reservas') ? JSON.parse(localStorage.getItem('reservas')) : [];
    listarVagas(reservas);
}

// Controlador de eventos do formulário 
formularioReserva.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evitar envio nativo do formulário
    salvarReserva();
});

// Populando o localStorage com reservas fictícias (para visualização)
const reservasFicticias = [
    new Reserva('ABC123', 'João Silva', '101', 'A', 'Sedan', 'Azul', '1'),
    new Reserva('DEF456', 'Maria Souza', '202', 'B', 'Hatch', 'Vermelho', '3'),
    new Reserva('GHI789', 'José Santos', '303', 'C', 'SUV', 'Preto', '5')
];

// Adicionando reservas fictícias ao localStorage
localStorage.setItem('reservas', JSON.stringify(reservasFicticias));

// Chamando a função para listar as vagas ao carregar a página
listarVagasAoCarregarPagina();
