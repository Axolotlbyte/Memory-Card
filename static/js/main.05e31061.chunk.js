(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{131:function(e,t,c){},133:function(e,t,c){},429:function(e,t,c){},430:function(e,t,c){},431:function(e,t,c){"use strict";c.r(t);var i=c(3),r=c.n(i),n=c(15),s=c.n(n),a=c(23),o=c(127),d=(c(131),c(1)),m=function(e){var t=Object(i.useState)(!1),c=Object(a.a)(t,2),r=c[0],n=c[1],s=e.handleChange,o=e.card,m=e.reset,u=e.score;return Object(i.useEffect)((function(){0===u&&n(!1)}),[u]),Object(d.jsxs)("div",{className:"card",onClick:function(){if(!r)return s(),n(!0);m()},children:[Object(d.jsx)("div",{className:"char-img",children:Object(d.jsx)("img",{src:o.src})}),Object(d.jsx)("p",{className:"title",children:o.title}),Object(d.jsx)("p",{className:"desc",children:o.description})]})};c(133);var u=function(e){var t=e.score,c=e.highscore,r=e.handleScore,n=e.reset,s=e.cardContent,u=Object(i.useState)(s),l=Object(a.a)(u,2),h=l[0],p=l[1];return Object(i.useEffect)((function(){var e=Object(o.a)(h);!function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*t),i=[e[t],e[c]];e[c]=i[0],e[t]=i[1]}}(e),p(e)}),[t,c]),Object(d.jsx)("div",{className:"container",children:h.map((function(e){return Object(d.jsx)(m,{card:e,score:t,handleChange:r,reset:n},e.num)}))})},l=(c(134),c.p+"static/media/logo.de13d484.png"),h=(c(429),function(e){var t=e.score,c=e.highscore;return Object(d.jsxs)("div",{className:"head-cont",children:[Object(d.jsx)("div",{className:"logo-head",children:Object(d.jsx)("img",{src:l,className:"logo-img"})}),Object(d.jsxs)("div",{className:"scoreboard",children:[Object(d.jsxs)("p",{children:["Score: ",t]}),Object(d.jsxs)("p",{children:["Highscore: ",c]})]})]})}),p=(c(430),c.p+"static/media/Abradolf_Lincler.fe831376.png"),b=c.p+"static/media/Beth.6744f853.png",f=c.p+"static/media/Birdperson.364a3760.png",j=c.p+"static/media/cromulons.ff7ca99c.png",g=c.p+"static/media/doofy.9fd65ce3.png",O=c.p+"static/media/squanchy.383d6bbb.png",y=c.p+"static/media/morty.210d2bf3.png",S=c.p+"static/media/Scary-Terry.a82bd1d4.png",v=c.p+"static/media/summer.b1fe78d8.png",x=c.p+"static/media/Jerry_Smith.4e2f3932.png",k=c.p+"static/media/meeseeks.86f4979f.png",N=c.p+"static/media/Nimbus.097d8bf3.png",M=c.p+"static/media/Rick_Sanchez.ed220032.png",w=c.p+"static/media/mr_poopybutthole.15bff2a5.png";var C=function(){var e=Object(i.useState)(0),t=Object(a.a)(e,2),c=t[0],r=t[1],n=Object(i.useState)(0),s=Object(a.a)(n,2),o=s[0],m=s[1],l=[{num:1,title:"Abradolf Lincler",description:" \u201cPrepare to be emancipated from your own inferior genes!\u201d ",src:p},{num:2,title:"Squanchy",description:" \u201cRick Sanchez! You psycho bag of squanch!\u201d ",src:O},{num:3,title:"Beth Smith",description:" \u201cWhat? I do. I squanch my family.\u201d ",src:b},{num:4,title:"Jerry Smith",description:'"Nobody\'s killing me until after i catch my wife with another man"',src:x},{num:5,title:"Rick Sanchez",description:' "Wubba lubba dub dub!"',src:M},{num:6,title:"Mr. Poopybutthole",description:' "Oooohwee!" ',src:w},{num:7,title:"Doofus Rick",description:' "Hey! I don\'t eat poop! Y-you guys are always so mean to me!" ',src:g},{num:8,title:"Mr. Meeseeks",description:'  "I\'m Mr. Meeseeks, look at me!" ',src:k},{num:9,title:"Cromulons",description:' "Show me whatchu got" ',src:j},{num:10,title:"Mr. Nimbus",description:' "I am Mr. Nimbus" ',src:N},{num:11,title:"Birdperson",description:"  \u201cIn bird culture, this is considered a dick move.\u201d ",src:f},{num:12,title:"Summer Smith",description:'"Losers Look Stuff Up While The Rest Of Us Are Carpin\' All Them Diems."',src:v},{num:13,title:"Scary Terry",description:' "You can run but you cannot hide, Bitch! " ',src:S},{num:14,title:"Morty Smith",description:' "You\u2019re like Hitler but even Hitler cared about Germany or something!\u201d',src:y}],C=function(){m(c),r(0)};return Object(i.useEffect)((function(){c===l.length&&(alert("You're a Genius, You moron! "),C())}),[c]),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(h,{score:c,highscore:o})}),Object(d.jsx)(u,{cardContent:l,score:c,highscore:o,handleScore:function(){var e=c;e++,r(e)},reset:C})]})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[431,1,2]]]);
//# sourceMappingURL=main.05e31061.chunk.js.map