let openBtn = document.getElementById('open-btn');
let container = document.getElementById('container');

let closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', function(){
  container.style.display = 'block';

});

closeBtn.addEventListener('click', function(){
  container.style.display = 'none'
});

window.addEventListener('click', function(e){
  if(e.target === container){
    container.style.display = 'none';
  }
});
