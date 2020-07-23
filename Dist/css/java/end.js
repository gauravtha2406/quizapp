let name=sessionStorage.getItem('name');

document.querySelector('.user-name').innerHTML=name;
let time=sessionStorage.getItem('timers');
document.querySelector('.user-timer').innerHTML=time;