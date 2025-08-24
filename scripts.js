// Neon UI interactions + simple digits rain layer
const sfx = {
  hover:new Audio('assets/ui-hover.wav'),
  click:new Audio('assets/ui-click.wav'),
  title:new Audio('assets/ui-title.wav'),
  logo:new Audio('assets/ui-logo.wav'),
  role:new Audio('assets/ui-role.wav'),
};
Object.values(sfx).forEach(a=>{a.volume=0.55});

document.querySelectorAll('[data-sfx="hover"]').forEach(el=>{
  el.addEventListener('mouseenter', ()=>{ sfx.hover.currentTime=0; sfx.hover.play(); });
});
document.querySelectorAll('[data-sfx="click"]').forEach(el=>{
  el.addEventListener('click', (e)=>{ e.preventDefault(); sfx.click.currentTime=0; sfx.click.play(); });
});

const logo = document.querySelector('.logo');
logo.addEventListener('mouseenter', ()=>{ sfx.logo.currentTime=0; sfx.logo.play(); });

const title = document.querySelector('.title');
title.classList.add('pulse');
title.addEventListener('mouseenter', ()=>{ sfx.title.currentTime=0; sfx.title.play(); });

const nameBtn = document.querySelector('.name');
nameBtn.addEventListener('mouseenter', ()=>{ sfx.role.currentTime=0; sfx.role.play(); });

// digits rain
const cvs = document.getElementById('digits'), ctx = cvs.getContext('2d');
function resize(){ cvs.width = innerWidth; cvs.height = innerHeight; }
addEventListener('resize', resize); resize();
const cols = ()=> Math.floor(cvs.width/16);
let drops = new Array(cols()).fill(0).map(()=>Math.random()*cvs.height);
function step(){
  ctx.fillStyle='rgba(0,0,0,0.08)'; ctx.fillRect(0,0,cvs.width,cvs.height);
  ctx.fillStyle='rgba(255,40,80,0.7)';
  ctx.font='16px monospace';
  for(let i=0;i<drops.length;i++){
    const text = Math.random()<.5? (Math.random()*10|0) : '·';
    ctx.fillText(text, i*16, drops[i]);
    drops[i] += 16 + Math.random()*8;
    if(drops[i] > cvs.height) drops[i] = -Math.random()*200;
  }
  requestAnimationFrame(step);
}
step();
