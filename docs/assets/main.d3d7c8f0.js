import{r as c,j as l,a as u,u as p,c as N,R as B}from"./useReducerWithLocalStorage.bab0426b.js";function y({number:e,dispatch:a,selectedBalls:t,displayOddEven:r}){let s=t.indexOf(e)>-1;const n=e%2,f=t[t.length-1],o=e===f;(r==="odd"&&n===1||r==="even"&&n===0)&&(s=!0);const i=c.exports.useCallback(()=>{(!r||r==="odd"&&n===0||r==="even"&&n===1)&&a(s?{type:"REMOVE_NUMBER",payload:e}:{type:"ADD_NUMBER",payload:e})},[s,a,r,n]);return l("li",{className:"bingo__number",children:l("span",{className:`bingo__number__circle ${s?"bingo__number__circle--selected":""} ${o?"bingo__number__circle--last-selected":""}`,onClick:i,children:e})})}function m({rowNumber:e,dispatch:a,selectedBalls:t,displayOddEven:r}){const s=["B","I","N","G","O"],n=15*e+1,f=s[e],o=Array.from(Array(15)).map((i,_)=>l(y,{number:_+n,dispatch:a,selectedBalls:t,displayOddEven:r},_));return u("div",{className:`bingo__row bingo__row__${e}`,children:[l("div",{className:"bingo__header",children:f}),l("ul",{className:"bingo_numbers",children:o})]})}function v({dispatch:e,selectedBalls:a,displayOddEven:t}){return u("section",{className:"bingo__board",children:[l(m,{rowNumber:0,dispatch:e,selectedBalls:a,displayOddEven:t}),l(m,{rowNumber:1,dispatch:e,selectedBalls:a,displayOddEven:t}),l(m,{rowNumber:2,dispatch:e,selectedBalls:a,displayOddEven:t}),l(m,{rowNumber:3,dispatch:e,selectedBalls:a,displayOddEven:t}),l(m,{rowNumber:4,dispatch:e,selectedBalls:a,displayOddEven:t})]})}function C({ballCount:e,showCountdown:a}){return a?u("h3",{className:"ball_countdown",children:[e," numbers called"]}):null}function E({currentBall:e,dispatch:a,selectedBalls:t}){const r=c.exports.useRef();return c.exports.useEffect(()=>{navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then(s=>{r.current.srcObject=s}).catch(()=>{console.log("Something went wrong!")})},[r.current]),u("div",{className:"bingo__current_ball_container",children:[l("video",{className:"bingo__current_ball",autoPlay:!0,ref:r}),l("p",{className:"bingo__next_ball_text",children:"Next ball"})]})}const S=[{label:"1. 1 Line Any Direction",pattern:[!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1]},{label:"2. 1 Line & 4 Corners",pattern:[!0,!1,!0,!1,!0,!1,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0,!1,!1,!0,!1,!0,!1,!0]},{label:"3. V any Direction",pattern:[!0,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1,!1,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]},{label:"4. Letter X",pattern:[!0,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1,!1,!0,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1,!1,!0]},{label:"5. T any Direction",pattern:[!1,!1,!1,!1,!0,!1,!1,!1,!1,!0,!0,!0,!0,!0,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0]},{label:"6. 2 Lines Any Direction",pattern:[!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1]},{label:"7. 1 Outside Line",pattern:[!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1]},{label:"8. L Any Direction",pattern:[!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0,!1,!1,!1,!1,!0,!0,!0,!0,!0]},{label:"9. Two Postage Stamps",pattern:[!1,!1,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!1]},{label:"10. Any 7 Numbers",pattern:[!0,!1,!1,!0,!1,!1,!1,!1,!1,!0,!1,!0,!1,!1,!1,!1,!1,!1,!0,!1,!0,!1,!0,!1,!1]},{label:"11. 6 Pack",pattern:[!0,!0,!1,!1,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]},{label:"12. Blackout",pattern:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0]},{label:"Special: Odd/Even",pattern:[!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0,!0]},{label:"Special: Lucky Star",pattern:[!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1,!1,!0,!0,!1,!1]}];function d({label:e,onClick:a,selected:t}){return l("div",{className:`bingo__theme__square ${t?"bingo__theme__square--selected":""}`,onClick:a,selected:t,children:e})}function b({dispatch:e,theme:a,themeName:t,onClick:r}){const s=f=>{e&&e({type:"SELECT_THEME_SQUARE",payload:f})},n=Array.from(Array(25)).map((f,o)=>l(d,{selected:a[o]===!0,onClick:()=>s(o)},o));return u("div",{className:"bingo__theme__display__wrapper",children:[l("h3",{className:"bingo__theme__name",children:t}),u("div",{className:"bingo__theme__display",onClick:r,children:[u("div",{className:"theme__display__header",children:[l(d,{label:"B"}),l(d,{label:"I"}),l(d,{label:"N"}),l(d,{label:"G"}),l(d,{label:"O"})]}),l("div",{className:"theme__display__squares",children:n})]})]})}function L(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:l("path",{fill:"#fff",d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}function R({dispatch:e,theme:a,themeName:t,showCountdown:r,displayOddEven:s,show:n,onClose:f}){if(!n)return null;const o=S.map(i=>l("p",{onClick:()=>e({type:"CHANGE_THEME",payload:{pattern:i.pattern,label:i.label}}),children:i.label},i.label));return u("div",{className:"bingo__theme__modal",children:[l("h1",{children:"Winning Patten"}),l("button",{onClick:f,className:"modal__close",children:l(L,{})}),u("div",{className:"theme__modal__container",children:[u("div",{className:"theme__modal__sidebar",children:[l(b,{dispatch:e,theme:a,themeName:t},"theme-display-modal"),u("div",{className:"theme__modal__countdown",children:[l("button",{onClick:()=>e({type:"SHOW_COUNTDOWN",payload:!r}),children:r?"Hide Countdown":"Show Countdown"}),l("button",{onClick:()=>e({type:"TOGGLE_ODD_EVEN",payload:s==="odd"?"even":s==="even"?null:"odd"}),children:s==="odd"?"Showing Odd":s==="even"?"Showing Even":"Showing Neither Odd/Even"})]})]}),l("div",{className:"theme__modal__patterns",children:o})]})]})}function A({dispatch:e,theme:a,themeName:t,showCountdown:r,displayOddEven:s}){const[n,f]=c.exports.useState(!1);return u("div",{className:"bingo__theme",children:[l(b,{theme:a,themeName:t,onClick:()=>f(!0)}),l(R,{dispatch:e,theme:a,themeName:t,show:n,showCountdown:r,displayOddEven:s,onClose:()=>f(!1)})]})}function x(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:l("path",{d:"M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"})})}function D({dispatch:e,currentBall:a,theme:t,themeName:r,showCountdown:s,displayOddEven:n,selectedBalls:f}){const o=c.exports.useCallback(()=>{window.confirm("Are you sure you want to clear the board?")&&e({type:"CLEAR"})},[e]);return u("section",{className:"bingo__sidebar",children:[l("button",{onClick:o,className:"new_game",children:l(x,{})}),l(A,{dispatch:e,theme:t,themeName:r,showCountdown:s,displayOddEven:n}),l(C,{ballCount:f.length,showCountdown:s}),l(E,{currentBall:a,dispatch:e,selectedBalls:f})]})}const H=(e,a)=>{switch(a.type){case"ADD_NUMBER":return{...e,currentBall:a.payload,selectedBalls:[...new Set([...e.selectedBalls,a.payload])]};case"REMOVE_NUMBER":return{...e,currentBall:null,selectedBalls:e.selectedBalls.filter(t=>t!==a.payload)};case"SELECT_THEME_SQUARE":return{...e,theme:e.theme.map((t,r)=>r===a.payload?!t:t),themeName:""};case"CHANGE_THEME":return{...e,theme:a.payload.pattern,themeName:a.payload.label};case"CLEAR":return{currentBall:null,selectedBalls:[],theme:new Array(25).fill(!1),themeName:"No Pattern",showCountdown:!1};case"SHOW_COUNTDOWN":return{...e,showCountdown:a.payload};case"TOGGLE_ODD_EVEN":return{...e,displayOddEven:a.payload};default:return e}},M={currentBall:null,selectedBalls:[],theme:new Array(25).fill(!1),themeName:"No Pattern",showCountdown:!1,displayOddEven:null};function T(){const[e,a]=p(H,M),[t,r]=c.exports.useState(1),s=c.exports.useRef(),n=c.exports.useCallback(()=>{const _=window.innerWidth,h=window.innerHeight,g=s.current.offsetWidth,w=s.current.offsetHeight/g;h/_<w?r(h/720):r(_/1280)},[s.current]);c.exports.useEffect(()=>(n(),window.addEventListener("resize",n),window.onbeforeunload=o=>"Do you want to exit this page?",()=>{window.removeEventListener("resize",n)}),[s.current]);const f={transform:`scale(${t})`};return console.log(e.selectedBalls),l("div",{className:"app",children:u("div",{className:"bingo",ref:s,style:f,children:[l(D,{dispatch:a,currentBall:e.currentBall,theme:e.theme,themeName:e.themeName,showCountdown:e.showCountdown,displayOddEven:e.displayOddEven,selectedBalls:e.selectedBalls}),l(v,{dispatch:a,selectedBalls:e.selectedBalls,displayOddEven:e.displayOddEven})]})})}N.createRoot(document.getElementById("root")).render(l(B.StrictMode,{children:l(T,{})}));
