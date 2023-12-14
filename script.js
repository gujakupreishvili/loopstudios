const hamburger = document.querySelector(".hamburger");
const deliverDiv = document.querySelector(".js-div");
const hamburgerMenu= document.querySelector(".hamburger-menu");
const hamburger2 =document.querySelector(".hamburger-rect2")
let menOpen=false
hamburger.addEventListener("click",() =>{
  if (!menOpen){
    hamburger.classList.add('open');
    deliverDiv.style.display="none";
    hamburgerMenu.style.display="block";
    
    menOpen=true;
  }else{
    hamburger.classList.remove('open');
    deliverDiv.style.display="block";
    hamburgerMenu.style.display="none";
    
    menOpen=false;
  }
});
hamburger2.addEventListener("click",() =>{
  if (!menOpen){
    hamburger.classList.add('open');
    deliverDiv.style.display="none";
    hamburgerMenu.style.display="block";
    
    menOpen=true;
  }else{
    hamburger.classList.remove('open');
    deliverDiv.style.display="block";
    hamburgerMenu.style.display="none";
    menOpen=false;
  }
 

})