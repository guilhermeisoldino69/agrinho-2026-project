// Lista de curiosidades sobre a produção leiteira
const curiosidades = [
    "Uma vaca produz, em média, 20 a 30 litros de leite por dia!",
    "O Brasil é um dos maiores produtores de leite do mundo.",
    "O leite é rico em cálcio, essencial para o fortalecimento dos ossos.",
    "A tecnologia de ordenha mecânica garante mais conforto para o animal e higiene para o produto.",
    "O bem-estar animal influencia diretamente na qualidade do leite produzido."
];

const btnGerar = document.getElementById('btn-gerar');
const textoCuriosidade = document.getElementById('texto-curiosidade');

// Função para mudar a curiosidade
btnGerar.addEventListener('click', () => {
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    textoCuriosidade.innerText = curiosidades[indiceAleatorio];
    
    // Pequena animação de destaque
    textoCuriosidade.style.color = "#2e7d32";
    setTimeout(() => { textoCuriosidade.style.color = "#333"; }, 500);
});

// Função para os cards (exemplo de interação simples)
function mostrarInfo(etapa) {
    if(etapa === 'manejo') {
        alert("No manejo, cuidamos da dieta das vacas com silagem e pasto de qualidade!");
    } else if(etapa === 'ordenha') {
        alert("A ordenha deve ser feita em ambiente limpo para evitar contaminações.");
    } else if(etapa === 'transporte') {
        alert("O caminhão tanque mantém o leite resfriado até chegar ao laticínio.");
    }
}