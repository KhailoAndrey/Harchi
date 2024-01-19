import{j as e,L as h,r as f,O as g}from"./index-6nt7A42e.js";import{u as i,h as o}from"./styled-components.browser.esm-QCijHHS6.js";const b="#4fa94d",m={"aria-busy":!0,role:"progressbar"},u=i.div`
  display: ${a=>a.$visible?"flex":"none"};
`,y="http://www.w3.org/2000/svg",t=242.776657104492,k=1.6,j=o`
12.5% {
  stroke-dasharray: ${t*.14}px, ${t}px;
  stroke-dashoffset: -${t*.11}px;
}
43.75% {
  stroke-dasharray: ${t*.35}px, ${t}px;
  stroke-dashoffset: -${t*.35}px;
}
100% {
  stroke-dasharray: ${t*.01}px, ${t}px;
  stroke-dashoffset: -${t*.99}px;
}
`;i.path`
  stroke-dasharray: ${t*.01}px, ${t};
  stroke-dashoffset: 0;
  animation: ${j} ${k}s linear infinite;
`;const v=o`
to {
   transform: rotate(360deg);
 }
`;i.svg`
  animation: ${v} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;i.polyline`
  stroke-width: ${a=>a.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const C=({height:a=80,width:s=80,radius:n=9,color:d=b,ariaLabel:c="three-dots-loading",wrapperStyle:l,wrapperClass:p,visible:x=!0})=>e.jsx(u,{style:l,$visible:x,className:p,"data-testid":"three-dots-loading","aria-label":c,...m,children:e.jsxs("svg",{width:s,height:a,viewBox:"0 0 120 30",xmlns:y,fill:d,"data-testid":"three-dots-svg",children:[e.jsxs("circle",{cx:"15",cy:"15",r:Number(n)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"60",cy:"15",r:n,attributeName:"fill-opacity",from:"1",to:"0.3",children:[e.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),e.jsxs("circle",{cx:"105",cy:"15",r:Number(n)+6,children:[e.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),e.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),A=o`
to {
   stroke-dashoffset: 136;
 }
`;i.polygon`
  stroke-dasharray: 17;
  animation: ${A} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;i.svg`
  transform-origin: 50% 65%;
`;const R=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
`,N=()=>e.jsx(R,{children:e.jsx(C,{height:"30",width:"180",radius:"10",color:"var(--main-clr-blue)",ariaLabel:"three-dots-loading",visible:!0})}),E=i.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
height: 98px;
background-color: #F5F1EC;
position: fixed;
top: 0;
z-index: 50;

`,H=i.div`
  gap: 48px;
  width: 1440px;
  height: 100%;
  padding: 16px 80px;
  

  @media screen and (min-width: 768px) {
    /* height: 68px;
    padding: 0 32px; */
  }

  @media screen and (min-width: 1280px) {
    /* padding: 0 16px; */
  }
`;var w="data:image/png;base64,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";const K=i(h)`
  text-decoration: none;
  display: block;
  width: 58px;
  height: 66px;
  background-repeat: no-repeat;
  /* background-size: 20px 20px; */
  background-image: url(${w});

  &:hover {
    box-shadow: rgba(116, 177, 232, 0.24);
    scale: 1.1;
  }
`,r=()=>e.jsx(e.Fragment,{children:e.jsx(K,{to:"/"})});function M(){return e.jsx(E,{children:e.jsx(H,{children:e.jsx(r,{})})})}const G=i.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 236px;
  width: 100vw;
  padding: 30px 80px;
  background-color: #1E261E;
  /* position: fixed;
  bottom: 0;
  z-index: 50; */


  @media screen and (min-width: 768px) {
    /* height: 68px;
    padding: 0 32px; */
  }

  @media screen and (min-width: 1280px) {
    /* padding: 0 16px; */
  }
`;function I(){return e.jsx(G,{children:e.jsx(r,{})})}function U(){return e.jsxs(e.Fragment,{children:[e.jsx(M,{}),e.jsx(f.Suspense,{fallback:e.jsx(N,{}),children:e.jsx(g,{})}),e.jsx(I,{})]})}export{U as default};
