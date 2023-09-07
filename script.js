
//Scrol Reveal da pagina :: Config
ScrollReveal().reveal('.reveal', {
    delay: 400, 
   origin: 'top',
   distance: '100px',
   duration: 1800,
 });
// Aparecer video ao clicar no botão
 // Obtém referências aos elementos HTML
const playButton = document.getElementById("playButton");
const videoContainer = document.getElementById("videoContainer");

// Adiciona um evento ao botão
playButton.addEventListener("click", function() {
    // Exibe o contêiner de vídeo quando o botão é clicado
    videoContainer.style.display = "block";
    
    // Inicia a reprodução do vídeo
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.play();
});
// Botão para fechar o video 

// Obtém uma referência ao elemento HTML com o ID "closeButton"
const closeButton = document.getElementById("closeButton");

// Adiciona um ouvinte de evento de clique ao botão
closeButton.addEventListener("click", function() {
    // Quando o botão é clicado, esconde o elemento com o ID "videoContainer"
    videoContainer.style.display = "none";
    
    // Obtém uma referência ao elemento HTML com o ID "videoPlayer"
    const videoPlayer = document.getElementById("videoPlayer");
    
    // Pausa a reprodução do vídeo
    videoPlayer.pause(); // Pausa a reprodução do vídeo ao fechar
});