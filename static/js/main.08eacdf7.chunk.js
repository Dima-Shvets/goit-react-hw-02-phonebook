(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports={"contact-form":"ContactForm_contact-form__37SR9","name-label":"ContactForm_name-label__HqLHU","number-label":"ContactForm_number-label__WWzTG","number-input":"ContactForm_number-input__3h2e0"}},,function(t,e,n){t.exports={element:"ContactList_element__2CXFc",button:"ContactList_button__1ITkN"}},function(t,e,n){t.exports={label:"Filter_label__3ZVhN",input:"Filter_input__3U2Ki"}},,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),o=(n(18),n(11)),s=n(2),l=n(3),u=n(5),b=n(4),d=n(13),m=n(6),p=n(7),h=n.n(p),j=n(0),f=Object(m.a)(),O=Object(m.a)(),C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.inputHandler=function(e){var n=e.target,a=n.value,r=n.name;t.setState(Object(d.a)({},r,a))},t.submitHandler=function(e){e.preventDefault(),t.props.addContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsxs)("form",{className:h.a["contact-form"],onSubmit:this.submitHandler,children:[Object(j.jsx)("label",{htmlFor:f,className:h.a["name-label"],children:"Name"}),Object(j.jsx)("input",{id:f,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:e,onChange:this.inputHandler}),Object(j.jsx)("label",{htmlFor:O,className:h.a["number-label"],children:"Number"}),Object(j.jsx)("input",{id:O,className:h.a["number-input"],type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n,onChange:this.inputHandler}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=n(9),x=n.n(v),_=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsx)("ul",{children:this.props.filteredContacts.map((function(e){var n=e.id,a=e.name,r=e.number;return Object(j.jsxs)("li",{className:x.a.element,children:[a,": ",r,Object(j.jsx)("button",{className:x.a.button,type:"button",onClick:function(){return t.props.deleteContact(n)},children:"Delete"})]},n)}))})}}]),n}(a.Component),F=n(10),y=n.n(F),g=Object(m.a)(),N=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).filterHandler=function(e){var n=e.target.value;t.props.updateFilter(n)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:y.a.label,htmlFor:g,children:"Find contacts by name"}),Object(j.jsx)("input",{className:y.a.input,id:g,type:"text",name:"filter",value:this.props.filter,onChange:this.filterHandler})]})}}]),n}(a.Component),k=(n(20),n(21),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,r=t.state.contacts.find((function(t){return t.name===n}));if(r)alert("".concat(n," is already in contacts"));else{var c={id:Object(m.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))}},t.deleteContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.setState({contacts:Object(o.a)(n)})},t.filterContacts=function(){var e=t.state,n=e.filter,a=e.contacts,r=n.toLocaleLowerCase();return a.filter((function(t){return t.name.toLocaleLowerCase().includes(r)}))},t.updateFilter=function(e){t.setState({filter:e})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(C,{addContact:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(N,{filter:this.state.filter,updateFilter:this.updateFilter}),Object(j.jsx)(_,{filteredContacts:this.filterContacts(),deleteContact:this.deleteContact})]})}}]),n}(a.Component)),w=k,A=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),A()}],[[22,1,2]]]);
//# sourceMappingURL=main.08eacdf7.chunk.js.map