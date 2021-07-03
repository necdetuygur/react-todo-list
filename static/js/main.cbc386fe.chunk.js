(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{42:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(10),i=n.n(c),s=n(2),r=n(3),d=n(5),l=n(4),a=n(11),u=n.n(a),j=(n(17),n(18),n(0)),m=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("h5",{className:"card-header d-flex justify-content-between align-items-center",children:[this.props.title,this.props.button]}),Object(j.jsx)("div",{className:"card-body",children:this.props.children})]})}}]),n}(o.Component),p=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsx)("button",{className:"m-1 btn btn-"+this.props.type,onClick:this.props.onClick,children:this.props.text})}}]),n}(o.Component);function h(e,t){return t&&localStorage.setItem(e,JSON.stringify(t)),null!=localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]}var b=h("todos")||[];function f(){h("todos",b)}var O={Add:function(e){var t={id:"TodoID_"+1*new Date,title:e,time:new Date,completed:!1};b.push(t),f()},Remove:function(e){var t=b.map((function(e){return e.id})).indexOf(e);b.splice(t,1),f()},GetAll:function(){return h("todos")},Edit:function(e,t){var n=b.map((function(e){return e.id})).indexOf(e);t&&(b[n].title=t),f()},ToggleComplete:function(e){var t=b.map((function(e){return e.id})).indexOf(e);b[t].completed=!b[t].completed,f()}},x=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).state={todos:[]},o}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.refreshTodos()}},{key:"refreshTodos",value:function(){this.setState({todos:O.GetAll()})}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"container mt-3",children:Object(j.jsx)("div",{className:"row justify-content-md-center",children:Object(j.jsx)("div",{className:"col-lg-6 col-md-8 col-sm-12",children:Object(j.jsx)(m,{title:"React Todo List",button:Object(j.jsx)(p,{type:"primary",onClick:function(){O.Add(window.prompt("Todo Title","")),e.refreshTodos()},text:"Add New"}),children:Object(j.jsx)("div",{className:"list-group list-group-flush",children:this.state.todos.length<1?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:"Your todo list is empty \u2601\ufe0f"}),Object(j.jsx)("div",{children:'Press the "Add New" button to add a new todo \ud83d\ude80'})]}):this.state.todos.map((function(t,n){return Object(j.jsxs)("div",{className:"list-group-item",children:[Object(j.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(j.jsx)("h5",{className:"mb-1",children:t.completed?Object(j.jsx)("del",{children:t.title}):Object(j.jsx)("div",{children:t.title})}),Object(j.jsx)("small",{children:u()(t.time).format("YYYY-MM-DD HH:mm:ss")})]}),Object(j.jsxs)("div",{className:"d-flex w-100 justify-content-center",children:[Object(j.jsx)(p,{type:"secondary",onClick:function(){O.ToggleComplete(t.id),e.refreshTodos()},text:t.completed?"Set Incomplete":"Set Complete"}),Object(j.jsx)(p,{type:"primary",onClick:function(){O.Edit(t.id,prompt("Todo Title",t.title)),e.refreshTodos()},text:"Edit"}),Object(j.jsx)(p,{type:"danger",onClick:function(){window.confirm("Are you sure?")&&(O.Remove(t.id),e.refreshTodos())},text:"Remove"})]})]},n)}))})})})})})}}]),n}(o.Component);i.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.cbc386fe.chunk.js.map