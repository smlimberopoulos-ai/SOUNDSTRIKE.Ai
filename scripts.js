
const sfx = {
  hover: new Audio('assets/ui-hover.wav'),
  click: new Audio('assets/ui-click.wav'),
  logo:  new Audio('assets/ui-logo.wav'),
  name:  new Audio('assets/ui-name.wav'),
  role:  new Audio('assets/ui-role.wav'),
};
for(const k in sfx){ sfx[k].preload='auto'; sfx[k].volume = 0.45; }

let unlocked = false;
function unlock(){
  if(unlocked) return;
  unlocked = true;
  // Attempt to play silent buffer by playing one of the clips at volume 0 then pausing
  try{ sfx.hover.volume = 0.0001; sfx.hover.play().then(()=>{ sfx.hover.pause(); sfx.hover.currentTime = 0; sfx.hover.volume = 0.45; }); }catch(e){}
  window.removeEventListener('pointerdown', unlock);
  window.removeEventListener('keydown', unlock);
}
window.addEventListener('pointerdown', unlock, { once:true });
window.addEventListener('keydown', unlock, { once:true });

function pulse(el){
  if(!el) return;
  el.classList.add('pulse');
  setTimeout(()=>el.classList.remove('pulse'), 220);
}
function bind(el, type='hover'){
  if(!el) return;
  el.addEventListener('mouseenter', ()=>{ try{ sfx[type].currentTime=0; sfx[type].play(); }catch(e){}; pulse(el); });
  el.addEventListener('click', ()=>{ try{ sfx.click.currentTime=0; sfx.click.play(); }catch(e){}; pulse(el); });
}

document.addEventListener('DOMContentLoaded', ()=>{
  bind(document.querySelector('.logo'), 'logo');
  bind(document.querySelector('h1'), 'hover');
  bind(document.querySelector('.btn.studio'), 'hover');
  bind(document.querySelector('.btn.datasets'), 'hover');
  bind(document.querySelector('.name'), 'name');
  bind(document.querySelector('.role'), 'role');
});
