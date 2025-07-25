function showMood() {
  const mood = document.getElementById("moodInput").value.toLowerCase();
  const result = document.getElementById("result");
  
  const emojis = {
    glücklich: "😊",
    müde: "😴",
    wütend: "😡",
    traurig: "😢",
    überrascht: "😮"
  };

  result.innerHTML = emojis[mood] || "🤔 Ich kenne diese Laune noch nicht!";
}
