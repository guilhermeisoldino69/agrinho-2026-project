// Selecionando os elementos
const btn = document.getElementById('action-btn');
const statusText = document.getElementById('status-text');

// Adicionando o evento de clique
btn.addEventListener('click', () => {
    // Muda o texto
    statusText.innerText = "O script.js está funcionando perfeitamente! 🎉";
    
    // Muda a cor do texto para dar um destaque
    statusText.style.color = "#28a745";
    statusText.style.fontWeight = "bold";

    // Opcional: Alerta no navegador
    console.log("Botão clicado com sucesso.");
});