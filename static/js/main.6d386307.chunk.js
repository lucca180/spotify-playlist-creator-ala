(this["webpackJsonpprojeto-ala"]=this["webpackJsonpprojeto-ala"]||[]).push([[0],{46:function(e,t,a){},69:function(e,t,a){e.exports=a(80)},74:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),s=a.n(l),c=(a(74),a(26)),o=a(27),i=a(29),u=a(28),d=a(30),p=a(43),m=a(25),h=a.n(m),f=a(42),y=a(55),g=a(129),v=a(127),E=a(121),b=a(120),k=a(126),j=a(114),w=a(118),O=a(119),C=a(47),A=(a(46),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this))).state={},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.track.id!==e.track.id||this.props.selected!==e.selected}},{key:"render",value:function(){var e=this.props,t=e.track,a=e.index,n=e.playAudio,l=e.selected,s=e.selFunction;return r.a.createElement(j.a,{className:"songCard "+(l?"selected":"")},r.a.createElement(w.a,{onClick:function(){return s(a)},className:"cardMedia",image:t.album.images[1].url}),r.a.createElement(O.a,{className:"cardContent"},r.a.createElement("div",{className:"playButton"},r.a.createElement(b.a,{disabled:null==t.preview_url,onClick:function(){return n(t.preview_url)}},r.a.createElement(E.a,null,"play_arrow"))),r.a.createElement("div",{className:"info"},r.a.createElement(C.a,{variant:"body2"},t.name),r.a.createElement(C.a,{variant:"body2",color:"textSecondary"},t.artists[0].name))))}}]),t}(n.Component)),D=a(58),x=a(132),R=a(125),S=a(123),I=a(124),N=a(122);function T(e){var t=Object(n.useState)(""),a=Object(D.a)(t,2),l=a[0],s=a[1],c=0!==e.playlist.length;return Object(n.useEffect)((function(){0!==e.playlist.length&&function(e){var t=e.map((function(e){return e.id}));s(JSON.stringify(t))}(e.playlist),c=0!==e.playlist.length})),r.a.createElement("div",null,r.a.createElement(x.a,{open:e.open,onClose:e.toggle,"aria-labelledby":"form-dialog-title"},r.a.createElement(N.a,{id:"form-dialog-title"},!c&&"Inserir IDs"," ",c&&"Copiar IDs"),r.a.createElement(S.a,null,r.a.createElement(I.a,null,!c&&"Insira as IDs das musicas para visualizar"," ",c&&"Copie as IDs das musicas e analise no Colab"),r.a.createElement(g.a,{style:{minWidth:350},autoFocus:!0,variant:"outlined",margin:"dense",id:"idList",label:"Lista de IDS",type:"text",onChange:function(e){s(e.target.value)},fullWidth:!0,value:l,disabled:0!==e.playlist.length})),r.a.createElement(R.a,null,r.a.createElement(k.a,{onClick:e.toggle,color:"primary"},"Fechar"),!c&&r.a.createElement(k.a,{onClick:function(){return e.load(l)},color:"primary"},"Enviar"))))}var _=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this))).playAudio=function(e){a.audio.pause(),a.audio=new Audio(e),a.audio.play()},a.onChange=function(e){""===e.target.value?a.setState({searchText:"",searchResult:null,selectedArr:[]}):a.setState({searchText:e.target.value})},a.search=Object(f.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t=a.state.searchText)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,a.spotify.search(t,["track"],{limit:5});case 5:n=e.sent,a.setState({searchResult:n.tracks});case 7:case"end":return e.stop()}}),e)}))),a.catchReturn=function(e){"Enter"===e.key&&(e.preventDefault(),a.search())},a.addToPlaylist=function(){var e=a.state,t=e.selectedArr,n=e.searchResult,r=e.playlist,l=t.map((function(e){return n.items[e]}));l=[].concat(Object(p.a)(l),Object(p.a)(r)),a.setState({playlist:l,searchResult:null,selectedArr:[],searchText:""}),console.log(l)},a.select=function(e){var t=a.state.selectedArr;if(t.includes(e)){var n=t.indexOf(e);n>-1&&t.splice(n,1)}else t.push(e);a.setState({selectedArr:t})},a.analyse=Object(f.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.state.playlist,n=t.map((function(e){return e.id})),console.log("LISTA DE TRACKS ------\x3e ",JSON.stringify(n));case 3:case"end":return e.stop()}}),e)}))),a.loadIds=function(){var e=Object(f.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(t),e.next=4,a.spotify.getTracks(t);case 4:n=e.sent,a.setState({playlist:Object(p.a)(n.tracks),openDialog:!1}),console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),a.RenderSearch=function(){var e=a.state.searchResult.items,t=a.state.selectedArr;return e.map((function(e,n){return r.a.createElement(A,{key:e.id,index:n,playAudio:a.playAudio,selected:t.includes(n),selFunction:a.select,track:e})}))},a.RenderPlaylist=function(){return a.state.playlist.map((function(e,t){return r.a.createElement(A,{key:e.id,index:t,playAudio:a.playAudio,selFunction:function(){},track:e})}))},a.toggleDialog=function(){a.setState({openDialog:!a.state.openDialog})},a.state={searchText:"",searchResult:null,selectedArr:[],playlist:[],openDialog:!1},a.spotify=new y,a.spotify.setAccessToken(e.token),a.audio=new Audio,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.RenderSearch,t=this.RenderPlaylist,a=this.state,n=a.selectedArr,l=a.searchText,s=a.playlist,c=a.openDialog,o=a.searchResult;return r.a.createElement("div",{className:"content"},r.a.createElement(T,{open:c,toggle:this.toggleDialog,playlist:s,load:this.loadIds}),r.a.createElement("div",{className:"search"},r.a.createElement(g.a,{className:"searchInput",label:"Pesquisar M\xfasica",margin:"normal",variant:"outlined",onKeyPress:this.catchReturn,onChange:this.onChange,value:l,InputProps:{endAdornment:r.a.createElement(v.a,{position:"end"},r.a.createElement(b.a,{onClick:this.search},r.a.createElement(E.a,null,"search")))}}),n.length>0&&r.a.createElement(k.a,{variant:"contained",className:"addButton",onClick:this.addToPlaylist,color:"primary"},n.length," Adicionar \xe0 playlist"),!o&&s.length>0&&r.a.createElement(k.a,{variant:"contained",className:"addButton",onClick:this.toggleDialog,color:"primary"},"Analisar Playlist"),!o&&0===s.length&&r.a.createElement(k.a,{variant:"contained",className:"addButton",onClick:this.toggleDialog,color:"primary"},"Inserir IDs")),r.a.createElement("div",{className:"searchResult"},this.state.searchResult&&r.a.createElement(e,null),!this.state.searchResult&&r.a.createElement(t,null)))}}]),t}(n.Component),B=a(57),P=a(130),q=a(128),z=Object(B.a)({palette:{type:"dark",primary:{main:"#1DB954"}}}),J=["user-read-currently-playing","user-read-playback-state"],L=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{});window.location.hash="";var W=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={token:"BQBj4vDz_EdLee8PA-ASRqp6rsCf_Z28yNywITEg5LrtjTXZemv7ttJ69RDILnRQhoWmYVUqw6f0vBj81Oqgaz9jsolP24SsLSf70Wv0z3th3x6mCTK6zqi9tl8a4UJaUTK_QTntw9-z6wQ9wyroqApWDEGIC0ZKRwTc5VeHIcmbHDg"},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=L.access_token;e&&(this.setState({token:e}),console.log(e))}},{key:"render",value:function(){return r.a.createElement(P.b,{injectFirst:!0},r.a.createElement(q.a,{theme:z},r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Monte uma playlist e diremos que tipo de pessoa voc\xea \xe9"),r.a.createElement("h2",null,"de uma forma ",r.a.createElement("i",null,"totalmente")," cient\xedfica"),!this.state.token&&r.a.createElement("a",{className:"btn-login",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("a0bd3685465a4548aceeb4be27de1550","&redirect_uri=").concat("http://localhost:3000","&scope=").concat(J.join("%20"),"&response_type=token&show_dialog=true")},"Conectar ao Spotify")),this.state.token&&r.a.createElement(_,{token:this.state.token}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[69,1,2]]]);
//# sourceMappingURL=main.6d386307.chunk.js.map