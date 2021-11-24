const buttonA = document.getElementById('button');
const buttonB = document.getElementById('buttonClose');
const buttonC = document.getElementById('buttonCloseOne');
const share = document.querySelector('.share');

buttonA.addEventListener('click', ()=>{
    buttonA.style.display = 'none';
    share.classList.add('active');
    buttonB.style.display = 'inline-block';
});

buttonB.addEventListener('click', ()=>{
    buttonB.style.display = 'none';
    buttonA.style.display = "inline-block";
    share.classList.remove("active");
});

buttonC.addEventListener("click", () => {
  buttonB.style.display = "none";
  buttonA.style.display = "inline-block";
  share.classList.remove("active");
});
