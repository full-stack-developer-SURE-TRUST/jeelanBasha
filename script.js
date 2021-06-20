
const colors = ["#F08080","#FA8072","#E9967A","#FFA07A" ,"#ff4000","#40ff00","#0040ff"];
const btn = document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener("click",function(){
  const randonNumber= getradomNumber();

  document.body.style.background = colors[randonNumber];
  color.textContent = colors[randonNumber];
});

function getradomNumber() {
  return Math.floor(Math.random()*colors.length);
}
