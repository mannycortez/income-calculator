"use strict";(()=>{var r=(o=document)=>{var n;let e="Last Published:";for(let t of o.childNodes)if(t.nodeType===Node.COMMENT_NODE&&((n=t.textContent)!=null&&n.includes(e))){let s=t.textContent.trim().split(e)[1];if(s)return new Date(s)}};var l=o=>{let e=r();console.log(`Hello ${o}!`),console.log(`This site was last published on ${e==null?void 0:e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"2-digit"})}.`)};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{l("John Doe"),document.body.style.backgroundColor="red"});})();
