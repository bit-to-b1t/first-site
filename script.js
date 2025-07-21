document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  
  if (!email.includes("@")){
    alert("Введите корректный email");
    return;
  }
  alert(`Спасибо за сообщение, ${name}!`);
  this.reset();
})

document.getElementById("toggleTheme").addEventListener("click", function(){
  document.body.classList.toggle("dark-theme");
});

document.getElementById("addTextBtn").addEventListener("click", function () {
const newPara = document.createElement("p");
  newPara.textContent = "Новый абзац!";
  newPara.style.color = "#333";

  document.getElementById("textContainer").appendChild(newPara);
});
