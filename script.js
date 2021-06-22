
 const sub = document.querySelector('.sub');
 const  res = document.querySelector('.res');
const  add = document.querySelector('.add');

 const text = document.querySelector('.value');
 sub.addEventListener('click',decrement)
 res.addEventListener('click',reset)
 add.addEventListener('click',increment)


 let i = 0;

      function decrement(){
        i -= 1 ;
        text.textContent = i;
        colours();
      }

      function reset(){
        i =  0;
        text.textContent = i;
        colours();
        }
        function increment(){
          i +=  1;
          text.textContent = i ;
          colours();
      }

 function colours(){
      if( i > 0){
        text.style.color="green";

      }
 else if( i < 0){
          text.style.color="red";

      }
else{
    text.style.color ="black";
}
 }
