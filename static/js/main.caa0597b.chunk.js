(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),s=a(9),r=a(2),c=a(4),o=a(1),l=a(7),d=a.n(l),u=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),m=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],b=a(0),h=m.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:u.find((function(t){return t.id===e.id}))||null})})),p=function(){var e=Object(o.useState)(h),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),l=Object(r.a)(i,2),m=l[0],p=l[1],j=Object(o.useState)(0),g=Object(r.a)(j,2),y=g[0],O=g[1],f=Object(o.useState)(!1),v=Object(r.a)(f,2),x=v[0],S=v[1],k=Object(o.useState)(!1),w=Object(r.a)(k,2),C=w[0],z=w[1],P=Object(o.useState)(!1),N=Object(r.a)(P,2),D=N[0],L=N[1],I=function(e){var t=e.target,a=t.name,n=t.value,i=t.checked;switch(z(!1),L(!1),a){case"title":return p(n.replace(/[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9 ]/g,""));case"selectedUserId":return O(+n);case"completed":return S(i);default:return n}};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Add todo form"}),Object(b.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===m&&0===y)return z(!0),void L(!0);""!==m?0!==y?(!function(){var e={id:Date.now(),userId:y,title:m,completed:x,user:u.find((function(e){return e.id===y}))||null};n([].concat(Object(s.a)(a),[e]))}(),p(""),O(0),S(!1)):L(!0):z(!0)},children:[Object(b.jsxs)("label",{htmlFor:"title",children:["Title: ",Object(b.jsx)("input",{type:"text",id:"title",name:"title",placeholder:"Enter task title",value:m,onChange:I}),C&&Object(b.jsx)("span",{children:"Enter a valid title"})]}),Object(b.jsxs)("label",{htmlFor:"selectedUserId",children:["Select user: ",Object(b.jsxs)("select",{name:"selectedUserId",id:"selectedUserId",value:y,onChange:I,children:[Object(b.jsx)("option",{value:0,disabled:!0,children:"Choose a user"}),u.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),D&&Object(b.jsx)("span",{children:"Select a user"})]}),Object(b.jsxs)("label",{htmlFor:"completed",children:["Status: ",Object(b.jsx)("input",{type:"checkbox",id:"completed",name:"completed",checked:x,onChange:I})]}),Object(b.jsx)("button",{type:"submit",className:"button-form-submit",children:"Create new task"})]}),a.length>0&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Todo list"}),Object(b.jsx)("ul",{children:a.map((function(e){var t,i;return Object(b.jsx)("li",{className:e.completed?"completed":"",children:Object(b.jsxs)("div",{className:"todo-info__container",children:[Object(b.jsxs)("div",{className:"todo-info",children:[Object(b.jsxs)("h1",{children:["Title: ",e.title]}),Object(b.jsxs)("p",{children:["Status: ",e.completed?"Completed":"In progress"]}),Object(b.jsxs)("p",{children:["Name: ",null===(t=e.user)||void 0===t?void 0:t.name]}),Object(b.jsxs)("p",{children:["Email: ",null===(i=e.user)||void 0===i?void 0:i.email]})]}),Object(b.jsxs)("div",{className:"todo-controls",children:[Object(b.jsx)("button",{type:"button",className:d()("button-todo-control","toggle"),onClick:function(){return t=e.id,i=e.completed,void n(a.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{completed:!i}):e})));var t,i},children:"Toggle status"}),Object(b.jsx)("button",{type:"button",className:d()("button-todo-control","remove"),onClick:function(){return t=e.id,void n(a.filter((function(e){return e.id!==t})));var t},children:"Remove task"})]})]})},e.id)}))})]})]})};i.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.caa0597b.chunk.js.map