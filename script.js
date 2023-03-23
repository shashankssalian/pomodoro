/* 25:00
24:59
24:58
*/
let min = 25;
let sec =00;
 
function start()
{  
    interval = setInterval( ()=>{
        sec--;
        if(sec<0){
            sec=59;
            min--;
        }
if(min==0 && sec==0) {
  clearInterval(interval);
    alert('time is up!! take a break');}
    document.getElementsByClassName("display")[0].innerHTML = `${min}:${sec}`;
},1000);
}

function stop()
{
    clearInterval(interval);
}

function reset()
{
    clearInterval(interval);
    min = 25;
    sec = 00;
    document.getElementsByClassName("display")[0].innerHTML = `${min}:00`

}
    

