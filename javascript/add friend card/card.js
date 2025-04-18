var h = document.querySelector('button')
var tim = document.querySelector('#status')
var counter = 0;

    h.addEventListener('click', function() {
        if(counter==0){
            var stop=setInterval(() => {
                h.style.backgroundColor = 'black';
                h.style.color = 'white';
                h.innerHTML = 'Wait...';
                tim.innerHTML = 'Request Sending...';
            }, 200);
    
            setTimeout(() => {
                clearInterval(stop);
                h.style.backgroundColor = 'white';
                h.style.color = 'black';
                h.innerHTML = 'Unfriend';
                tim.innerHTML = 'Friends';
            }, 2000);
            counter=1;
        }
        else{
            var stop=setInterval(() => {
                h.style.backgroundColor = 'black';
                h.style.color = 'white';
                h.innerHTML = 'Wait...';
                tim.innerHTML = 'Request Sending...';
            }, 200);
    
            setTimeout(() => {
                clearInterval(stop);
                h.style.backgroundColor = 'white';
                h.style.color = 'black';
                h.innerHTML = 'Add friend';
                tim.innerHTML = 'Stranger';
            }, 2000);
            counter=0;
        }
})


