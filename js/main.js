var elModalOpenButton = document.querySelector(".remember-link");
var elModal = document.querySelector(".modal");

elModalOpenButton.addEventListener("click", function(){
    elModal.classList.add("modal-show");
})


var elModalCloseButton = document.querySelector(".modal-close-button");
var elModalWindnow=document.querySelector(".modal-window")

elModalCloseButton.addEventListener("click" , function (){
  // `  // elModalWindnow.classList.add("modal-window-close");
    elModal.classList.remove("modal-show");
})


var elModalSymbol=document.querySelector(".modal-close-button-symbol");

elModalSymbol.addEventListener("click",function(){
  elModal.classList.remove("modal-show");
})
