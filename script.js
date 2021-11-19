var cen = 00
var seg = 00
var min = 00
var interval

function start(){
   interval = setInterval(time,10) 
}
function pause(){
    clearInterval(interval)
}
pause()

function reset(){
    pause()
   cen = 00
   seg = 00
   min = 00
   document.getElementById('time').innerText = `00:00:00`
}
reset()

function complete0(numero){
    return ("00" + numero).slice(-2)

}

function time(){
   cen++
   if(cen == 99){
    seg++
    cen = 00
   }
   document.getElementById('time').innerText = `${complete0(min)}:${complete0(seg)}:${cen}`
  
   if(seg == 60){
       min++
       seg = 00
   }
   document.getElementById('time').innerText =  `${complete0(min)}:${complete0(seg)}:${cen}`
   
   if(min == 60){
       min=00
   }
    document.getElementById('time').innerText =  `${complete0(min)}:${complete0(seg)}:${cen}`
}