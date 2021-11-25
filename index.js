var h2 = document.querySelector('h2')
var button = document.querySelector('button')
var cancelBtn = document.querySelector('.cancel');
var continueBtn = document.querySelector('.continue');
var cancelCounter = document.querySelector('.cancelCounter');
var continueCounter = document.querySelector('.continueCounter');
var cancelDisplay = 0;
var continueDisplay = 0;
var submit = document.querySelector('#submit');
submit.addEventListener('click', msg)
function msg(e){
    if(cancelDisplay > continueDisplay){
        h2.textContent ='YOU ARE LAZY !!!';
        cancelDisplay = 0;
        continueDisplay = 0;
        h2.classList.add('redcolor');
        
    }else if(continueDisplay > cancelDisplay){
            h2.textContent ='EXCELLENT !!!';
        }
        cancelCounter.textContent = 0;
        continueCounter.textContent = 0;
        cancelDisplay = 0;
        continueDisplay = 0;
        cancelCounter.classList.remove('redcolor');
        continueCounter.classList.remove('greencolor');

    
}


cancelBtn.addEventListener('click', Addccl);
function Addccl(e){
    e.preventDefault();
        cancelDisplay+= 1;
        cancelCounter.textContent = cancelDisplay;
        cancelCounter.classList.add('redcolor')
      
};
continueBtn.addEventListener('click', Addcont);
function Addcont(e){
    e.preventDefault();
        continueDisplay+= 1;
        continueCounter.textContent = continueDisplay;
        continueCounter.classList.add('greencolor')
      
};