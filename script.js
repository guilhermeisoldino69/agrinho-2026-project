let saude = 50;
let higiene = 50;
let producao = 0;

function acao(tipo) {
    const feedback = document.getElementById('feedback-msg');
    
    if (tipo === 'alimentar') {
        saude = Math.min(saude + 15, 100);
        feedback.innerText = "As vacas adoraram o pasto novo! A saúde subiu.";
    } else if (tipo === 'limpar') {
        higiene = Math.min(higiene + 20, 100);
        feedback.innerText = "Ambiente limpo evita doenças e melhora o leite.";
    } else if (tipo === 'vacinar') {
        saude = Math.min(saude + 25, 100);
        feedback.innerText = "Prevenção é a chave da produtividade!";
    }

    atualizarSimulador();
}

function atualizarSimulador() {
    // Lógica Inteligente: A produção é o resultado da média entre saúde e higiene
    producao = (saude * 0.7) + (higiene * 0.3);
    
    // Atualizar interface
    document.getElementById('leite-total').innerText = `${producao.toFixed(1)} L/dia`;
    document.getElementById('saude-status').innerText = `${saude}%`;
    
    // Atualizar barras
    document.getElementById('barra-leite').style.width = `${producao}%`;
    document.getElementById('barra-saude').style.width = `${saude}%`;

    // Mudar cor da barra se estiver ruim
    const barraLeite = document.getElementById('barra-leite');
    if (producao < 40) {
        barraLeite.style.background = "#e53935"; // Vermelho
    } else if (producao < 80) {
        barraLeite.style.background = "#fb8c00"; // Laranja
    } else {
        barraLeite.style.background = "#2e7d32"; // Verde
    }
}

function resetar() {
    saude = 50;
    higiene = 50;
    producao = 0;
    document.getElementById('feedback-msg').innerText = "Ciclo reiniciado. Vamos produzir!";
    atualizarSimulador();
}

// Inicializar
atualizarSimulador();