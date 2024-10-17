function func(selector){
  const button = document.querySelector(selector);

  
  if(button.classList.contains('is-toggled')){
    button.classList.remove('is-toggled')
  }
  else{
    turnOffPreviousButtons();
  button.classList.add('is-toggled');
  }
}
function turnOffPreviousButtons(){
  const previousButton = document.querySelector('.is-toggled');
  if(previousButton){
  previousButton.classList.remove('is-toggled')
  }
}