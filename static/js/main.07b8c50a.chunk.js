(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var i=c(6),a=c.n(i),s=(c(13),c(8)),n=c(2),l=c(1),r=(c(14),c(15),c(16),c(0)),d=Object(l.memo)((function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})})),o=Object(l.memo)((function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(d,{movie:e},e.imdbId)}))})})),j=c(7),m=c.n(j);c(18);var b=Object(l.memo)((function(e){var t=e.addMovie,c=Object(l.useState)(null),i=Object(n.a)(c,2),a=i[0],s=i[1],o=Object(l.useState)(""),j=Object(n.a)(o,2),b=j[0],u=j[1],O=Object(l.useState)(!1),h=Object(n.a)(O,2),v=h[0],x=h[1],f=Object(l.useState)(!1),p=Object(n.a)(f,2),N=p[0],g=p[1],y=Object(l.useCallback)((function(e){var t;e.preventDefault(),x(!0),(t=b,fetch("".concat("http://www.omdbapi.com/?i=tt3896198&apikey=86116733","&t=").concat(t)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))).then((function(e){return"Error"in e?g(!0):s({title:e.Title,description:e.Plot,imgUrl:"N/A"!==e.Poster?e.Poster:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID})})).finally((function(){return x(!1)}))}),[b]),w=Object(l.useCallback)((function(e){u(e.target.value),g(!1)}),[b,N]),C=Object(l.useCallback)((function(){a&&t(a),s(null),u("")}),[a,t]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:y,children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:b,onChange:w})}),N&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is -light",{"is-loading":v}),disabled:!b,children:a?"Search again":"Find a movie"})}),a&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:C,children:"Add to the list"})})]})]}),a&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(d,{movie:a})]})]})})),u=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1],a=Object(l.useCallback)((function(e){c.find((function(t){return e.imdbId===t.imdbId}))||i((function(t){return[].concat(Object(s.a)(t),[e])}))}),[c]);return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{addMovie:a})})]})};a.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.07b8c50a.chunk.js.map