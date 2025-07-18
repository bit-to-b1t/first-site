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
