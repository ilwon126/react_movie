(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(28)},18:function(e,t,n){},21:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),s=n.n(r),i=(n(18),n(1)),c=n.n(i),l=n(5),u=n(6),m=n(7),v=n(10),p=n(8),d=n(11),f=(n(21),n(22),n(2)),g=n.n(f),_=(n(25),n(9)),h=n.n(_);function w(e){var t=e.poster,n=e.alt;return o.a.createElement("img",{src:t,alt:n,title:n,className:"Movie__Poster"})}function y(e){var t=e.genre;return o.a.createElement("span",{className:"Movie__Genre"},t," ")}w.prototypes={poster:g.a.string.isRequired,alt:g.a.string.isRequired};var E=function(e){var t=e.title,n=e.poster,a=e.genres,r=e.synopsis;return o.a.createElement("div",{className:"Movie"},o.a.createElement("div",{className:"Movie__Colums"},o.a.createElement(w,{poster:n,alt:t})),o.a.createElement("div",{className:"Movie__Colums"},o.a.createElement("h1",null,t),o.a.createElement("div",{className:"Movie__Genres"},a.map(function(e,t){return o.a.createElement(y,{genre:e,key:t})})),o.a.createElement("p",{className:"Movie__Synopsis"},o.a.createElement(h.a,{text:r,maxLine:"3",ellipsis:" ...",trimRight:!0,baseOn:"letters"}))))},M=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n.state={},n._renderMovies=function(){return n.state.movies.map(function(e){return console.log(e),o.a.createElement(E,{title:e.title_english,poster:e.medium_cover_image,key:e.id,genres:e.genres,synopsis:e.synopsis})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){console.log("WillMount")}},{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){console.log("did render");var e=this.state.movies;return o.a.createElement("div",{className:e?"App":"App--loading"},e?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.459e947d.chunk.js.map