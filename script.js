let queue=0,autoscaling=true,publicCount=2,privateCount=1;
function refreshUI(){
document.getElementById('queue').innerText=queue;
document.getElementById('pcount').innerText=publicCount;
document.getElementById('prcount').innerText=privateCount;
document.getElementById('autos').innerText=autoscaling?'ON':'OFF';
document.getElementById('autosState').innerText=autoscaling?'ON':'OFF';
}
function sendRequests(n){queue+=n;refreshUI();}
function toggleAuto(){autoscaling=!autoscaling;refreshUI();}
function resetSim(){queue=0;publicCount=2;privateCount=1;autoscaling=true;refreshUI();}
setInterval(()=>{if(queue>0)queue-=Math.min(queue,3);refreshUI();},1500);
refreshUI();
