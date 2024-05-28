function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "YEY YEY 🎉⛸️🎉⛸️🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "Beleza! Então que tal a gente se encontar lá no shopping de tarde, depois do almoço? Ah eu não consigo ver se você respondeu, então tira um print da tela ou me manda msg, please!"

    
    ;
    showConfetti()
}
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "Já é então!";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "As de vdd eu sei quem são";
    showConfetti()

}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 25000);
  }
  