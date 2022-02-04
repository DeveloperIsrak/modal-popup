// get element
const button = document.getElementById('apply');
const keep = document.getElementById('keep');
const dis = document.getElementById('discard');
const modal = document.querySelector('.haq_modal');
const mclose = document.querySelector('.haq_modal .close');
const aclose = document.querySelector('.haq_alert .close');
const alert = document.querySelector('.haq_alert');



button.addEventListener('click', function(e){
   e.preventDefault('');

    modal.classList.add('active');
});


mclose.addEventListener('click', function(){

    alert.style.display = 'flex';
});
aclose.addEventListener('click', function(){

    alert.style.display = 'none';
});
keep.addEventListener('click', function(){

    alert.style.display = 'none';
});
dis.addEventListener('click', function(){

    alert.style.display = 'none';
    modal.classList.remove('active');
});

modal.addEventListener('click', function(e){

    if( e.target == this ){

        modal.classList.remove('active'); 

    }
    
});