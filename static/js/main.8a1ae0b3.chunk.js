(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(4),l=n(5),i=n(6),o=n(9),s=n(7),u=n(10),p=n(0),m=n.n(p),b=n(8),d=n.n(b),v=n(1),f=function(e){var t=Object(p.useState)(!1),n=Object(v.a)(t,2),a=n[0],r=n[1];return m.a.createElement(m.a.Fragment,null,m.a.createElement("button",{className:"accordion-Btn btn paper-raise",onClick:function(){return r(!a)}},e.header,m.a.createElement("svg",{className:a||e.expanded?"icon animateIcon":"icon"},m.a.createElement("use",{xlinkHref:"/arrow.svg#icon-chevron-small-down"}))),m.a.createElement("article",{className:a||e.expanded?"section show":"section"},e.links&&e.links.map(function(t,n){return m.a.createElement(m.a.Fragment,null,m.a.createElement("a",{href:"".concat(e.linkServer).concat(Object.values(t)),key:n,className:"section-title btn paper paper-curl-right-side"},"".concat(e.linkServer).concat(Object.values(t))),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null),m.a.createElement("br",null))})))},h=function(e){var t=Object(p.useState)(!1),n=Object(v.a)(t,2),a=n[0],r=n[1];return m.a.createElement("div",{className:"accordion-wrapper"},m.a.createElement("button",{className:"accordion-Btn expandAll-btn",onClick:function(){return r(!a)}},"Expand All"),e.grabbedData&&e.grabbedData.map(function(t,n){return m.a.createElement(f,{linkServer:e.linkServer,key:n,header:t.text,links:t.links,expanded:a})}))},k=(n(18),"http://3.133.61.166:3000/"),g=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={linkServer:k,grabbedData:[]},n.fixData=function(e){return e.texts.reduce(function(t,n,a){var r=e.links.filter(function(e,t){return Object.keys(e)[0]==a});return t.push({text:n,links:r}),t},[])},n.updateInputValue=function(e){n.setState({linkServer:e.target.value})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark(function e(){var t,n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("internalTools")||"https://services-staging.allyo.com")&&this.setState({linkServer:t}),e.next=4,fetch("".concat(k,"/api/internal_tools"));case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,this.setState({grabbedData:this.fixData(a)});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillMount",value:function(){localStorage.setItem("internalTools",this.state.linkServer)}},{key:"render",value:function(){return m.a.createElement("div",{className:"App"},m.a.createElement("h1",null,"Internal Tools"),m.a.createElement("input",{onChange:this.updateInputValue,defaultValue:this.state.linkServer}),m.a.createElement(h,{linkServer:"https://services-staging.allyo.com",grabbedData:this.state.grabbedData}))}}]),t}(p.Component),E=document.getElementById("root");d.a.render(m.a.createElement(g,null),E)}},[[11,1,2]]]);
//# sourceMappingURL=main.8a1ae0b3.chunk.js.map