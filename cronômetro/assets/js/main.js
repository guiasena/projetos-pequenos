function getTimeFromSeconds(seconds) { 
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}
console.log(getTimeFromSeconds(10));
const clock = document.querySelector('.clock');
let seconds = 0;
let timer;
function startClock() {
  timer = setInterval(function() {
    seconds++;
    clock.innerHTML = getTimeFromSeconds(seconds);
  }, 1000)
}
document.addEventListener('click', function(e){
  const el = e.target;
  if(el.classList.contains('zero')) {
  clearInterval(timer);
  clock.classList.remove('paused');
  clock.innerHTML = '00:00:00';
  seconds = 0;
  }
  if(el.classList.contains('pause')) {
  clearInterval(timer);
  clock.classList.add('paused');
  }
  if(el.classList.contains('start')) {
  clock.classList.remove('paused');
  clearInterval(timer);
  startClock();
  }
})