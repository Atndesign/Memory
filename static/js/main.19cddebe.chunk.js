(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),c=a.n(i),s=(a(12),a(1)),o=a(2),l=a(4),p=a(3),d=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{"data-card":this.props.data,className:"flip-card",style:{width:this.props.width+"px",height:this.props.height+"px",margin:this.props.spacing+"px"},onClick:function(t){return e.props.handleCardFlip(t)}},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement("div",{className:"flip-card-front"},r.a.createElement("b",{className:"question-mark"},"?")),r.a.createElement("div",{className:"flip-card-back",style:{backgroundImage:"url('https://picsum.photos/".concat(this.props.width,"/").concat(this.props.height,"?random=").concat(this.props.img,"')")}})))}}]),a}(n.Component),u=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).init=function(){document.querySelectorAll(".flip-card").forEach((function(e){e.classList.remove("won","flipped")})),n.cards=[],n.currentFlipped=[],n.pairs=[],n.found=[],setTimeout((function(){n.generateCardsArr()}),100)},n.generateCardsArr=function(){for(var e=0;e<n.nbrPairs;e++)n.pairs.push(e,e);n.shuffleArr(),n.generateCards()},n.shuffleArr=function(){n.pairs=n.pairs.sort((function(){return.5-Math.random()}))},n.generateCards=function(){for(var e=0;e<n.pairs.length;e++)n.cards.push(r.a.createElement(d,{data:n.pairs[e],width:n.state.gameSize.containerX/n.state.gameSize.x-2*n.state.gameSize.spacing,height:n.state.gameSize.containerY/n.state.gameSize.y-2*n.state.gameSize.spacing,spacing:n.state.gameSize.spacing,handleCardFlip:n.handleCardFlip,isFlipped:n.state.isFlipped,img:n.pairs[e]}));n.setState({cards:n.cards})},n.checkCards=function(e){e.length>1&&(e[0].dataset.card===e[1].dataset.card?(n.currentFlipped=[],n.found.push(e[0].dataset.card),document.querySelectorAll(".flip-card[data-card = '".concat(e[0].dataset.card,"']")).forEach((function(e){e.classList.add("won")}))):setTimeout((function(){document.querySelectorAll(".flip-card").forEach((function(e){e.classList.contains("won")||(e.children[0].classList.remove("flipped"),n.currentFlipped=[])}))}),700),n.checkWin())},n.checkWin=function(){n.found.length===n.pairs.length/2&&console.log("WON!")},n.handleCardFlip=function(e){var t=e.currentTarget.children[0];e.currentTarget.classList.contains("won")||(t.classList.add("flipped"),n.currentFlipped.push(e.currentTarget),n.checkCards(n.currentFlipped))},n.handleNewSize=function(e){var t=parseInt(e.target.value.split("x")[0]),a=parseInt(e.target.value.split("x")[1]);n.setState({gameSize:{x:a,y:t,containerX:600,containerY:600,spacing:16}}),n.nbrPairs=a*t/2,n.init()},n.state={gameSize:{x:2,y:2,containerX:600,containerY:600,spacing:16},cards:0,nbrFlipped:0,flipped:[]},n.nbrPairs=2,n.cards=[],n.currentFlipped=[],n.pairs=[],n.found=[],n}return Object(o.a)(a,[{key:"componentWillMount",value:function(){this.init()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("header",null,r.a.createElement("h1",{className:"title"},"Memory"),r.a.createElement("select",{className:"form-control",name:"",id:"",onChange:function(t){return e.handleNewSize(t)}},r.a.createElement("option",{value:"2x2"},"2x2"),r.a.createElement("option",{value:"3x2"},"3x2"),r.a.createElement("option",{value:"4x2"},"2x4"),r.a.createElement("option",{value:"4x3"},"3x4"),r.a.createElement("option",{value:"4x4"},"4x4"))),r.a.createElement("div",{style:{width:this.state.gameSize.containerX+"px",height:this.state.gameSize.containerY+"px"},className:"cards-container"},this.cards.map((function(e){return e})))))}}]),a}(n.Component);var m=function(){return r.a.createElement(u,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.19cddebe.chunk.js.map