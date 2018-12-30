(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(141),i=a.n(l);t.a=function(e){var t=null,a=null,n=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&(n.push(i.a.Invalid),a=r.a.createElement("p",null,"Please enter a valid value!")),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label},e.label),t,a)}},141:function(e,t,a){e.exports={Input:"Input_Input__1-o_J",Label:"Input_Label__2ULE2",InputElement:"Input_InputElement__13O-A",Invalid:"Input_Invalid___u62G"}},143:function(e,t,a){},145:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__14qaV"}},156:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),l=a(9),i=a(8),o=a(10),c=a(0),u=a.n(c),d=a(157),s=a(98),p=a(22),m=a(62),h=a(46),v=a(143),g=a.n(v),f=function(e){return u.a.createElement("div",{className:g.a.CheckoutSummary},u.a.createElement("h1",null,"We hope it tastes well !"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(m.a,{ingredients:e.ingredients})),u.a.createElement(h.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),u.a.createElement(h.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},b=a(35),C=a(53),y=a(145),E=a.n(y),k=a(38),O=a(140),j=a(54),I=a(23),_=a(12),T=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"text",placeholder:"Your E-Mail"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",valid:!0,validation:{}}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputChangedHandler=function(e,t){var n=Object(_.b)(a.state.orderForm[t],{value:e.target.value,valid:Object(_.a)(e.target.value,a.state.orderForm[t].validation),touched:!0}),r=Object(_.b)(a.state.orderForm,Object(b.a)({},t,n)),l=!0;for(var i in r)l=r[i].valid&&l;a.setState({orderForm:r,formIsValid:l})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=u.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return u.a.createElement(O.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(a){return e.inputChangedHandler(a,t.id)}})}),u.a.createElement(h.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(n=u.a.createElement(C.a,null)),u.a.createElement("div",{className:E.a.ContactData},u.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),t}(c.Component),N=Object(p.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,a){return e(I.g(t,a))}}})(Object(j.a)(T,k.a)),w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(d.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?u.a.createElement(d.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(f,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),u.a.createElement(s.a,{path:this.props.match.path+"/contact-data",component:N}))}return e}}]),t}(c.Component);t.default=Object(p.b)(function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(w)}}]);
//# sourceMappingURL=1.996f79e1.chunk.js.map