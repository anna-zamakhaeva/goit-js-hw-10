import"./assets/styles-D1xHJ92j.js";import{f,i as y}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("button"),u=document.querySelector("#datetime-picker");r.disabled=!0;let h;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(console.log(t[0]),t[0]<Date.now()){y.error({title:"Error",message:"Please choose a date in the future",position:"topRight"});return}r.disabled=!1,h=t[0]}};f(u,p);let m;r.addEventListener("click",b);function b(t){m=setInterval(()=>{const o=Date.now(),e=h-o;e>0?(v(e),r.disabled=!0,u.setAttribute("disabled","")):e<=0&&(clearInterval(m),u.removeAttribute("disabled"))},1e3)}function S(t){const s=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),c=Math.floor(t%864e5%36e5/6e4),i=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:a,minutes:c,seconds:i}}const n=t=>String(t).padStart(2,"0");function v(t){const{days:o,hours:e,minutes:d,seconds:l}=S(t),s=document.querySelector("[data-days]"),a=document.querySelector("[data-hours]"),c=document.querySelector("[data-minutes]"),i=document.querySelector("[data-seconds]");s.textContent=n(o),a.textContent=n(e),c.textContent=n(d),i.textContent=n(l)}
//# sourceMappingURL=1-timer.js.map
