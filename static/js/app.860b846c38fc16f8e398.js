webpackJsonp([1],{0:function(t,e){},Gu4l:function(t,e){},HDAX:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwMCIgaGVpZ2h0PSIyNTAwIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCI+PGcgZmlsbD0iI0NGMjcyRCI+PHBhdGggZD0iTTEyNy44NiAyMjIuMzA0Yy01Mi4wMDUgMC05NC4xNjQtNDIuMTU5LTk0LjE2NC05NC4xNjMgMC01Mi4wMDUgNDIuMTU5LTk0LjE2MyA5NC4xNjQtOTQuMTYzIDUyLjAwNCAwIDk0LjE2MiA0Mi4xNTggOTQuMTYyIDk0LjE2MyAwIDUyLjAwNC00Mi4xNTggOTQuMTYzLTk0LjE2MiA5NC4xNjN6bTAtMjIyLjAyM0M1Ny4yNDUuMjgxIDAgNTcuNTI3IDAgMTI4LjE0MSAwIDE5OC43NTYgNTcuMjQ1IDI1NiAxMjcuODYgMjU2YzcwLjYxNCAwIDEyNy44NTktNTcuMjQ0IDEyNy44NTktMTI3Ljg1OSAwLTcwLjYxNC01Ny4yNDUtMTI3Ljg2LTEyNy44Ni0xMjcuODZ6Ii8+PHBhdGggZD0iTTEzMy4xMTYgOTYuMjk3YzAtMTQuNjgyIDExLjkwMy0yNi41ODUgMjYuNTg2LTI2LjU4NSAxNC42ODMgMCAyNi41ODUgMTEuOTAzIDI2LjU4NSAyNi41ODUgMCAxNC42ODQtMTEuOTAyIDI2LjU4Ni0yNi41ODUgMjYuNTg2LTE0LjY4MyAwLTI2LjU4Ni0xMS45MDItMjYuNTg2LTI2LjU4Nk0xMzMuMTE2IDE1OS45ODNjMC0xNC42ODIgMTEuOTAzLTI2LjU4NiAyNi41ODYtMjYuNTg2IDE0LjY4MyAwIDI2LjU4NSAxMS45MDQgMjYuNTg1IDI2LjU4NiAwIDE0LjY4My0xMS45MDIgMjYuNTg2LTI2LjU4NSAyNi41ODYtMTQuNjgzIDAtMjYuNTg2LTExLjkwMy0yNi41ODYtMjYuNTg2TTY5LjQzMSAxNTkuOTgzYzAtMTQuNjgyIDExLjkwNC0yNi41ODYgMjYuNTg2LTI2LjU4NiAxNC42ODMgMCAyNi41ODYgMTEuOTA0IDI2LjU4NiAyNi41ODYgMCAxNC42ODMtMTEuOTAzIDI2LjU4Ni0yNi41ODYgMjYuNTg2LTE0LjY4MiAwLTI2LjU4Ni0xMS45MDMtMjYuNTg2LTI2LjU4Nk02OS40MzEgOTYuMjk4YzAtMTQuNjgzIDExLjkwNC0yNi41ODUgMjYuNTg2LTI2LjU4NSAxNC42ODMgMCAyNi41ODYgMTEuOTAyIDI2LjU4NiAyNi41ODUgMCAxNC42ODQtMTEuOTAzIDI2LjU4Ni0yNi41ODYgMjYuNTg2LTE0LjY4MiAwLTI2LjU4Ni0xMS45MDItMjYuNTg2LTI2LjU4NiIvPjwvZz48L3N2Zz4="},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("div",{staticClass:"nav-wrapper rgb(242, 47, 70)"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("\n                Invoice Manager\n            ")])],1)])])},staticRenderFns:[]},n={name:"App",components:{NavBar:a("VU/8")({name:"nav-bar",data:function(){return{}}},s,!1,null,null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("NavBar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]},d=a("VU/8")(n,o,!1,null,null,null).exports,l=a("/ocq"),r=a("kxiW"),c=a.n(r),u=(a("881v"),a("cWbj"),c.a.initializeApp({apiKey:"AIzaSyBaLszGDSoX7OvG-muSms2BPaMWna7UgX8",authDomain:"vuefs-prod-1859a.firebaseapp.com",databaseURL:"https://vuefs-prod-1859a.firebaseio.com",projectId:"vuefs-prod-1859a",storageBucket:"vuefs-prod-1859a.appspot.com",messagingSenderId:"300206822368",appId:"1:300206822368:web:263c3936981f10fc"})),v={name:"dashboard",data:function(){return{invoices:[]}},created:function(){var t=this;u.firestore().collection("invoices").orderBy("id").get().then(function(e){e.forEach(function(e){console.log(e.data());var a=e.data().date_issued.seconds,i=new Date(0);i.setUTCSeconds(a);var s=i.toLocaleDateString(),n=e.data().due_date.seconds,o=new Date(0);o.setUTCSeconds(n);var d=o.toLocaleDateString(),l={id:e.id,billed_amount:e.data().billed_amount,date_issued:s,due_amount:e.data().due_amount,due_date:d,int_id:e.data().id,msisdn:e.data().msisdn,paid_amount:e.data().paid_amount,reference:e.data().reference,recipient:e.data().recipient,status:e.data().status};t.invoices.push(l)})})}},_=(new Vue({el:"#firstTable",data:{rows:[{id:1,name:"Chandler Bing",phone:"305-917-1301",profession:"IT Manager"},{id:2,name:"Ross Geller",phone:"210-684-8953",profession:"Paleontologist"},{id:3,name:"Rachel Green",phone:"765-338-0312",profession:"Waitress"},{id:4,name:"Monica Geller",phone:"714-541-3336",profession:"Head Chef"},{id:5,name:"Joey Tribbiani",phone:"972-297-6037",profession:"Actor"},{id:6,name:"Phoebe Buffay",phone:"760-318-8376",profession:"Masseuse"}]}}),{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{margin:"30px"},attrs:{id:"dashboard"}},[t._m(0),t._v(" "),a("table",{staticClass:"table table-bordered table-sm table-striped  margin: 10px; ",attrs:{id:"firstTable"}},[t._m(1),t._v(" "),a("tbody",t._l(t.invoices,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.int_id))]),t._v(" "),a("td",[t._v(t._s(e.date_issued))]),t._v(" "),a("td",[t._v(t._s(e.due_date))]),t._v(" "),a("td",[t._v(t._s(e.reference))]),t._v(" "),a("td",[t._v(t._s(e.recipient))]),t._v(" "),a("td",[t._v(t._s(e.msisdn))]),t._v(" "),a("td",[t._v(t._s(e.billed_amount))]),t._v(" "),a("td",[t._v(t._s(e.due_amount))]),t._v(" "),a("td",[t._v(t._s(e.paid_amount))]),t._v(" "),a("td",[t._v(t._s(e.status))]),t._v(" "),a("td",[a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-invoice",params:{id:e.int_id}}}},[a("i",{staticClass:"fa fa-eye"})])],1)])}),0)]),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new-invoice"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{margin:"40px"}},[e("img",{staticStyle:{height:"200px",width:"200px",float:"left"},attrs:{src:a("HDAX")}}),this._v(" "),e("h1",{staticStyle:{float:"left","margin-left":"20px","margin-bottom":"140px",color:"rgb(242, 47, 70)"}},[this._v("Invoices")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("Issued Date")]),t._v(" "),a("th",[t._v("Due Date")]),t._v(" "),a("th",[t._v("Reference")]),t._v(" "),a("th",[t._v("Recipient")]),t._v(" "),a("th",[t._v("MSISDN")]),t._v(" "),a("th",[t._v("Billed")]),t._v(" "),a("th",[t._v("Due ")]),t._v(" "),a("th",[t._v("Paid")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Action")])])])}]}),m=a("VU/8")(v,_,!1,null,null,null).exports,p={name:"new-invoice",data:function(){return{billed_amount:null,date_issued:timestamp,due_amount:null,due_date:null,id:null,msisdn:null,paid_amount:null,reference:null,recipient:null}},methods:{saveInvoice:function(){var t=this.due_date;console.log("--------------------------------------"),console.log(t)}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-invoice"}},[a("h3",[t._v("New Invoice")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveInvoice(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text",required:""},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}}),t._v(" "),a("label",[t._v("Invoice ID#")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.date_issued,expression:"date_issued"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:t.date_issued},on:{input:function(e){e.target.composing||(t.date_issued=e.target.value)}}}),t._v(" "),a("label",[t._v("Issued Date")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.due_date,expression:"due_date"}],attrs:{type:"date",required:""},domProps:{value:t.due_date},on:{input:function(e){e.target.composing||(t.due_date=e.target.value)}}}),t._v(" "),a("label",[t._v("Due Date")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.reference,expression:"reference"}],attrs:{type:"text",required:""},domProps:{value:t.reference},on:{input:function(e){e.target.composing||(t.reference=e.target.value)}}}),t._v(" "),a("label",[t._v("Reference")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.msisdn,expression:"msisdn"}],attrs:{type:"text",required:""},domProps:{value:t.msisdn},on:{input:function(e){e.target.composing||(t.msisdn=e.target.value)}}}),t._v(" "),a("label",[t._v("MSISDN")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.billed_amount,expression:"billed_amount"}],attrs:{type:"text",required:""},domProps:{value:t.billed_amount},on:{input:function(e){e.target.composing||(t.billed_amount=e.target.value)}}}),t._v(" "),a("label",[t._v("Billed Amount")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.due_amount,expression:"due_amount"}],attrs:{type:"text",required:""},domProps:{value:t.due_amount},on:{input:function(e){e.target.composing||(t.due_amount=e.target.value)}}}),t._v(" "),a("label",[t._v("Amount Due")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paid_amount,expression:"paid_amount"}],attrs:{type:"text",required:""},domProps:{value:t.paid_amount},on:{input:function(e){e.target.composing||(t.paid_amount=e.target.value)}}}),t._v(" "),a("label",[t._v("Amount Paid")])])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},g=a("VU/8")(p,f,!1,null,null,null).exports,h=a("bOdI"),C=a.n(h),b={name:"view-invoice",data:function(){var t;return t={id:null,billed_amount:null,date_issued:null,due_amount:null,due_date:null},C()(t,"id",null),C()(t,"msisdn",null),C()(t,"paid_amount",null),C()(t,"reference",null),C()(t,"recipient",null),t},beforeRouteEnter:function(t,e,a){u.firestore().collection("invoices").where("id","==",t.params.id).get().then(function(t){t.forEach(function(t){a(function(e){var a=t.data().date_issued.seconds,i=new Date(0);i.setUTCSeconds(a);var s=i.toLocaleDateString(),n=t.data().due_date.seconds,o=new Date(0);o.setUTCSeconds(n);var d=o.toLocaleDateString();e.id=t.data().id,e.billed_amount=t.data().billed_amount,e.date_issued=s,e.due_amount=t.data().due_amount,e.due_date=d,e.id=t.data().id,e.msisdn=t.data().msisdn,e.paid_amount=t.data().paid_amount,e.reference=t.data().reference,e.recipient=t.data().recipient})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;u.firestore().collection("invoices").where("id","==",this.$route.params.id).get().then(function(e){e.forEach(function(e){t.id=e.data().id,t.billed_amount=e.data().billed_amount,t.date_issued=e.data().date_issued,t.due_amount=e.data().due_amount,t.due_date=e.data().due_date,t.id=e.data().id,t.msisdn=e.data().msisdn,t.paid_amount=e.data().paid_amount,t.reference=e.data().reference,t.recipient=e.data().recipient})})},deleteEmployee:function(){var t=this;confirm("Are you sure?")&&u.firestore().collection("invoices").where("id","==",this.$route.params.id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6",staticStyle:{margin:"0 auto","margin-top":"50px"}},[a("div",{staticClass:"card",attrs:{id:"invoice"}},[a("div",{staticClass:"card-body p-0"},[a("div",[a("h4",{staticClass:"item",staticStyle:{"border-bottom":"none","margin-bottom":"40px"}},[t._v(t._s(t.reference))])]),t._v(" "),a("div",{staticClass:"item"},[t._v("Invoice ID#:       "),a("span",{staticStyle:{"margin-left":"20px"}},[t._v("  "+t._s(t.id)+"  ")])]),t._v(" "),a("div",{staticClass:"item"},[t._v("Issued Date:       "),a("span",{staticStyle:{"margin-left":"20px"}},[t._v("   "+t._s(t.date_issued)+" ")])]),t._v(" "),a("div",{staticClass:"item"},[t._v("Due Date:          "),a("span",{staticStyle:{"margin-left":"20px"}},[t._v("   "+t._s(t.due_date)+" ")])]),t._v(" "),a("div",{staticClass:"item"},[t._v("Reference:         "),a("span",{staticStyle:{"margin-left":"20px"}},[t._v("   "+t._s(t.reference)+" ")])]),t._v(" "),a("div",{staticClass:"item"},[t._v("MSISDN:            "),a("span",{staticStyle:{"margin-left":"20px"}},[t._v("   "+t._s(t.msisdn)+" ")])]),t._v(" "),a("div",{staticClass:"item"},[t._v("Billed Amount:     "),a("span",{staticStyle:{"margin-left":"20px"}},[t._v("  "+t._s(t.billed_amount)+" ")])]),t._v(" "),a("div",{staticClass:"item"},[t._v("Amount Due:        "),a("span",{staticStyle:{"margin-left":"20px"}},[t._v("  "+t._s(t.due_amount)+" ")])]),t._v(" "),a("div",{staticClass:"item",staticStyle:{"margin-bottom":"30px"}},[t._v("Amount Paid:     "),a("span",{staticStyle:{"margin-left":"20px"}},[t._v("     "+t._s(t.paid_amount)+" ")])])])]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Back")]),t._v(" "),a("button",{staticClass:"btn red",on:{click:t.deleteEmployee}},[t._v("Delete")])],1),t._v(" "),a("div",{staticClass:"fixed-action-btn",staticStyle:{"margin-bottom":"70px"}},[a("router-link",{staticClass:"btn-floating btn-large black",attrs:{to:{name:"invoice-item",params:{id:t.id}}}},[a("i",{staticClass:"fa fa-print"})])],1),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-invoice",params:{id:t.id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)])])},staticRenderFns:[]};var x=a("VU/8")(b,w,!1,function(t){a("Gu4l")},null,null).exports,y={name:"edit-invoice",data:function(){return{id:null,billed_amount:null,date_issued:null,due_amount:null,due_date:null,msisdn:null,paid_amount:null,reference:null,recipient:null}},beforeRouteEnter:function(t,e,a){u.firestore().collection("invoices").where("id","==",t.params.id).get().then(function(t){t.forEach(function(t){a(function(e){var a=t.data().date_issued.seconds,i=new Date(0);i.setUTCSeconds(a);var s=i.toLocaleDateString(),n=t.data().due_date.seconds,o=new Date(0);o.setUTCSeconds(n);var d=o.toLocaleDateString();e.id=t.data().id,e.billed_amount=t.data().billed_amount,e.date_issued=s,e.due_amount=t.data().due_amount,e.due_date=d,e.id=t.data().id,e.msisdn=t.data().msisdn,e.paid_amount=t.data().paid_amount,e.reference=t.data().reference,e.recipient=t.data().recipient})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;u.firestore().collection("invoices").where("id","==",this.$$route.params.id).get().then(function(e){e.forEach(function(e){t.id=e.data().id,t.billed_amount=e.data().billed_amount,t.date_issued=e.data().date_issued,t.due_amount=e.data().due_amount,t.due_date=e.data().due_date,t.id=e.data().id,t.msisdn=e.data().msisdn,t.paid_amount=e.data().paid_amount,t.reference=e.data().reference,t.recipient=e.data().recipient})})},updateEmployee:function(){var t=this;u.firestore().collection("invoices").where("id","==",this.$route.params.id).get().then(function(e){e.forEach(function(e){var a;e.ref.update((a={id:t.id,billed_amount:t.billed_amount,date_issued:t.date_issued,due_amount:t.due_amount,due_date:t.due_date},C()(a,"id",t.id),C()(a,"msisdn",t.msisdn),C()(a,"paid_amount",t.paid_amount),C()(a,"reference",t.reference),C()(a,"recipient",t.recipient),a)).then(function(){t.$router.push({name:"view-invoice",params:{id:t.id}})})})})}}},D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit-invoice"}},[a("h3",[t._v("Edit Employee")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",staticStyle:{margin:"70px"},on:{submit:function(e){return e.preventDefault(),t.updateEmployee(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{type:"text",required:""},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.billed_amount,expression:"billed_amount"}],attrs:{type:"text",required:""},domProps:{value:t.billed_amount},on:{input:function(e){e.target.composing||(t.billed_amount=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.date_issued,expression:"date_issued"}],attrs:{type:"text",required:""},domProps:{value:t.date_issued},on:{input:function(e){e.target.composing||(t.date_issued=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.due_amount,expression:"due_amount"}],attrs:{type:"text",required:""},domProps:{value:t.due_amount},on:{input:function(e){e.target.composing||(t.due_amount=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.due_date,expression:"due_date"}],attrs:{type:"text",required:""},domProps:{value:t.due_date},on:{input:function(e){e.target.composing||(t.due_date=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.msisdn,expression:"msisdn"}],attrs:{type:"text",required:""},domProps:{value:t.msisdn},on:{input:function(e){e.target.composing||(t.msisdn=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.paid_amount,expression:"paid_amount"}],attrs:{type:"text",required:""},domProps:{value:t.paid_amount},on:{input:function(e){e.target.composing||(t.paid_amount=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.reference,expression:"reference"}],attrs:{type:"text",required:""},domProps:{value:t.reference},on:{input:function(e){e.target.composing||(t.reference=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.recipient,expression:"recipient"}],attrs:{type:"text",required:""},domProps:{value:t.recipient},on:{input:function(e){e.target.composing||(t.recipient=e.target.value)}}})])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},N=a("VU/8")(y,D,!1,null,null,null).exports,T=a("c/Tr"),M=a.n(T),I=a("eMjc"),A=a.n(I),j=a("l9mu"),L={name:"invoice-item",data:function(){var t;return t={id:null,billed_amount:null,date_issued:null,due_amount:null,due_date:null},C()(t,"id",null),C()(t,"msisdn",null),C()(t,"paid_amount",null),C()(t,"reference",null),C()(t,"recipient",null),C()(t,"uploading",!1),C()(t,"uploadEnd",!1),C()(t,"downloadURL",""),C()(t,"progress",null),C()(t,"local_png_url",null),C()(t,"localpdf_url",null),t},beforeRouteEnter:function(t,e,a){u.firestore().collection("invoices").where("id","==",t.params.id).get().then(function(t){t.forEach(function(t){a(function(e){var a=t.data().date_issued.seconds,i=new Date(0);i.setUTCSeconds(a);var s=i.toLocaleDateString(),n=t.data().due_date.seconds,o=new Date(0);o.setUTCSeconds(n);var d=o.toLocaleDateString();e.id=t.data().id,e.billed_amount=t.data().billed_amount,e.date_issued=s,e.due_amount=t.data().due_amount,e.due_date=d,e.id=t.data().id,e.msisdn=t.data().msisdn,e.paid_amount=t.data().paid_amount,e.reference=t.data().reference,e.recipient=t.data().recipient})})})},watch:{$route:"fetchData"},methods:{postInvoice:function(t,e){Vue.http.post("http://onekoechflask.herokuapp.com/invoice",{phone_number:this.msisdn,customer_name:this.recipient,invoice_amount:this.due_amount,invoice_number:this.reference,png_url:t,pdf_url:e}).then(function(t){console.log(t.body),alert("invoice sent to "+phone_number)}).catch(function(t){return console.log(t)})},fetchData:function(){var t=this;u.firestore().collection("invoices").where("id","==",this.$route.params.id).get().then(function(e){e.forEach(function(e){t.id=e.data().id,t.billed_amount=e.data().billed_amount,t.date_issued=e.data().date_issued,t.due_amount=e.data().due_amount,t.due_date=e.data().due_date,t.id=e.data().id,t.msisdn=e.data().msisdn,t.paid_amount=e.data().paid_amount,t.reference=e.data().reference,t.recipient=e.data().recipient})})},deleteEmployee:function(){var t=this;confirm("Are you sure?")&&u.firestore().collection("invoices").where("id","==",this.$route.params.id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})},print:function(){A()(document.querySelector("invoice")).then(function(t){var e=new jsPDF("p","mm","a4");e.addImage(t.toDataURL("image/png"),"PNG",0,0,211,298),e.save("reciept.pdf")})},showCaptureRef:function(){console.log("this.$refs.capture: "+this.$refs.capture);return this.$refs.capture},downloadVisualReport:function(){console.log("campaign-view#downloadVisualReport"),window.html2canvas(this.showCaptureRef()).then(function(t){document.body.appendChild(t)}).catch(function(t){console.log("Erorr descargando reporte visual",t)})},download:function(){var t=this,e=this.reference;A()(document.querySelector("#invoice",{scale:4}),{imageTimeout:5e3,useCORS:!0}).then(function(a){document.getElementById("invoice");var i=a.toDataURL("image/png"),s=new j("portrait","mm","a4");s.addImage(i,"JPEG",5,5,200,287);s.save(t.reference+".pdf");var n=s.output("blob");console.log(n);var o=i.split(";"),d=o[0].split(":")[1],l=o[1].split(",")[1],r=t.b64toBlob(l,d);console.log(r),t.fileupload(n,r,e)})},fileupload:function(t,e,a){console.log(" this is the invoice number ::",a);var i=u.storage().ref("invoices/"+a+".pdf"),s=this.postInvoice,n=i.put(t);n.on("state_changed",function(t){var e=t.bytesTransferred/t.totalBytes;this.progress=e,console.log("Upload is "+100*e+"% done")},function(t){console.log(t)},function(){n.snapshot.ref.getDownloadURL().then(function(t){console.log("File local_pdf_url at",t);var i=t,n=u.storage().ref("invoices/"+a+".png").put(e);n.on("state_changed",function(t){var e=t.bytesTransferred/t.totalBytes;this.progress=e,console.log("Upload is "+100*e+"% done"),1===e&&console.log(" the second file uploaded")},function(t){console.log(t)},function(){n.snapshot.ref.getDownloadURL().then(function(t){console.log("File file_image at",t),s(i,t)})})})})},processFile:function(t){this.someData=t.target.files[0],this.fileupload(this.someData),console.log(this.someData)},selectFile:function(){this.$refs.uploadInput.click()},detectFiles:function(t){var e=this,a=t.target.files||t.dataTransfer.files;M()(Array(a.length).keys()).map(function(t){e.upload(a[t])})},upload:function(t){this.fileName=t.name,this.uploading=!0,this.uploadTask=firestorage.ref("images/"+t.name).put(t)},deleteImage:function(){var t=this;firestorage.ref("images/"+this.fileName).delete().then(function(){t.uploading=!1,t.uploadEnd=!1,t.downloadURL=""}).catch(function(t){console.error("file delete error occured: "+t)})},b64toBlob:function(t,e,a){e=e||"",a=a||512;for(var i=atob(t),s=[],n=0;n<i.length;n+=a){for(var o=i.slice(n,n+a),d=new Array(o.length),l=0;l<o.length;l++)d[l]=o.charCodeAt(l);var r=new Uint8Array(d);s.push(r)}return new Blob(s,{type:e})}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card",attrs:{id:"invoice"}},[a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"row p-5"},[t._m(0),t._v(" "),a("div",{staticClass:"col-md-6 text-right"},[a("p",{staticClass:"font-weight-bold mb-1"},[t._v("Invoice "+t._s(t.reference))]),t._v(" "),a("p",{staticClass:"text-muted"},[t._v("Due to: "+t._s(t.due_date))])])]),t._v(" "),a("div",{staticClass:"row pb-5 p-5"},[a("div",{staticClass:"col-md-6"},[a("p",{staticClass:"font-weight-bold mb-4"},[t._v("Client Information")]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v(t._s(t.recipient))]),t._v(" "),a("p",[t._v("Parent")]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v("Buruburu, Nairobi")]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v(t._s(t.msisdn))])]),t._v(" "),a("div",{staticClass:"col-md-6 text-right"},[a("p",{staticClass:"font-weight-bold mb-4"},[t._v("Payment Details")]),t._v(" "),a("p",{staticClass:"mb-1"},[a("span",{staticClass:"text-muted"},[t._v("Billed Amount: ")]),t._v(" "+t._s(t.billed_amount))]),t._v(" "),a("p",{staticClass:"mb-1"},[a("span",{staticClass:"text-muted"},[t._v("Paid Amount: ")]),t._v("  "+t._s(t.paid_amount))]),t._v(" "),a("p",{staticClass:"mb-1"},[a("span",{staticClass:"text-muted"},[t._v("Amount Due: ")]),t._v("  "+t._s(t.due_amount))]),t._v(" "),a("p",{staticClass:"mb-1"},[a("span",{staticClass:"text-muted"},[t._v("Name: ")]),t._v(" "+t._s(t.recipient))])])]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"d-flex flex-row-reverse bg-dark text-white p-4"},[a("div",{staticClass:"py-3 px-5 text-right"},[a("div",{staticClass:"mb-2"},[t._v("Billed Amount")]),t._v(" "),a("div",{staticClass:"h2 font-weight-light"},[t._v(t._s(t.billed_amount))])]),t._v(" "),a("div",{staticClass:"py-3 px-5 text-right"},[a("div",{staticClass:"mb-2"},[t._v("Paid Amount")]),t._v(" "),a("div",{staticClass:"h2 font-weight-light"},[t._v(t._s(t.paid_amount))])]),t._v(" "),a("div",{staticClass:"py-3 px-5 text-right"},[a("div",{staticClass:"mb-2"},[t._v("Due Amount")]),t._v(" "),a("div",{staticClass:"h2 font-weight-light"},[t._v(t._s(t.due_amount))])])])])])])]),t._v(" "),a("div",{staticClass:"fixed-action-btn  btn-floating btn-large #25D366",on:{click:t.download}},[a("i",{staticClass:"fa fa-whatsapp"})])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-6"},[e("img",{staticStyle:{height:"200px",width:"200px",float:"left"},attrs:{src:a("HDAX")}}),this._v(" "),e("h1",{staticStyle:{float:"left","margin-left":"20px","margin-bottom":"140px",color:"rgb(242, 47, 70)"}},[this._v("Invoices")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row p-5"},[a("div",{staticClass:"col-md-12"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("ID")]),t._v(" "),a("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("Item")]),t._v(" "),a("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("Description")]),t._v(" "),a("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("Quantity")]),t._v(" "),a("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("Unit Cost")]),t._v(" "),a("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("Total")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("Tuition")]),t._v(" "),a("td",[t._v("Adm No. 4262")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("10")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("Lunch")]),t._v(" "),a("td",[t._v("Adm No. 4262")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("10")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("Transport")]),t._v(" "),a("td",[t._v("Adm No. 4262")]),t._v(" "),a("td",[t._v("1")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("5")])])])])])])}]};var E=a("VU/8")(L,S,!1,function(t){a("sYSx")},null,null).exports,U={name:"home",methods:{download:function(){A()(document.querySelector("#invoice"),{imageTimeout:5e3,useCORS:!0}).then(function(t){document.getElementById("invoice").appendChild(t);var e=t.toDataURL("image/png"),a=new j("portrait","mm","a4");a.addImage(e,"JPEG",5,5,200,287),a.save("relatorio-remoto.pdf")})}}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("div",{staticClass:"fixed-action-btn  btn-floating btn-large black",on:{click:this.download}},[e("i",{staticClass:"fa fa-print"})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"card",attrs:{id:"invoice"}},[i("div",{staticClass:"card-body p-0"},[i("div",{staticClass:"row p-5"},[i("div",{staticClass:"col-md-6"},[i("img",{staticStyle:{height:"200px",width:"200px"},attrs:{src:a("HDAX")}})]),t._v(" "),i("div",{staticClass:"col-md-6 text-right"},[i("p",{staticClass:"font-weight-bold mb-1"},[t._v("Invoice #550")]),t._v(" "),i("p",{staticClass:"text-muted"},[t._v("Due to: 4 Dec, 2019")])])]),t._v(" "),i("hr",{staticClass:"my-5"}),t._v(" "),i("div",{staticClass:"row pb-5 p-5"},[i("div",{staticClass:"col-md-6"},[i("p",{staticClass:"font-weight-bold mb-4"},[t._v("Client Information")]),t._v(" "),i("p",{staticClass:"mb-1"},[t._v("John Doe, Mrs Emma Downson")]),t._v(" "),i("p",[t._v("Acme Inc")]),t._v(" "),i("p",{staticClass:"mb-1"},[t._v("Berlin, Germany")]),t._v(" "),i("p",{staticClass:"mb-1"},[t._v("6781 45P")])]),t._v(" "),i("div",{staticClass:"col-md-6 text-right"},[i("p",{staticClass:"font-weight-bold mb-4"},[t._v("Payment Details")]),t._v(" "),i("p",{staticClass:"mb-1"},[i("span",{staticClass:"text-muted"},[t._v("VAT: ")]),t._v(" 1425782")]),t._v(" "),i("p",{staticClass:"mb-1"},[i("span",{staticClass:"text-muted"},[t._v("VAT ID: ")]),t._v(" 10253642")]),t._v(" "),i("p",{staticClass:"mb-1"},[i("span",{staticClass:"text-muted"},[t._v("Payment Type: ")]),t._v(" Root")]),t._v(" "),i("p",{staticClass:"mb-1"},[i("span",{staticClass:"text-muted"},[t._v("Name: ")]),t._v(" John Doe")])])]),t._v(" "),i("div",{staticClass:"row p-5"},[i("div",{staticClass:"col-md-12"},[i("table",{staticClass:"table"},[i("thead",[i("tr",[i("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("ID")]),t._v(" "),i("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("Item")]),t._v(" "),i("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("Description")]),t._v(" "),i("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("Quantity")]),t._v(" "),i("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("Unit Cost")]),t._v(" "),i("th",{staticClass:"border-0 text-uppercase small font-weight-bold"},[t._v("Total")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("1")]),t._v(" "),i("td",[t._v("Software")]),t._v(" "),i("td",[t._v("LTS Versions")]),t._v(" "),i("td",[t._v("21")]),t._v(" "),i("td",[t._v("$321")]),t._v(" "),i("td",[t._v("$3452")])]),t._v(" "),i("tr",[i("td",[t._v("1")]),t._v(" "),i("td",[t._v("Software")]),t._v(" "),i("td",[t._v("Support")]),t._v(" "),i("td",[t._v("234")]),t._v(" "),i("td",[t._v("$6356")]),t._v(" "),i("td",[t._v("$23423")])]),t._v(" "),i("tr",[i("td",[t._v("1")]),t._v(" "),i("td",[t._v("Software")]),t._v(" "),i("td",[t._v("Sofware Collection")]),t._v(" "),i("td",[t._v("4534")]),t._v(" "),i("td",[t._v("$354")]),t._v(" "),i("td",[t._v("$23434")])])])])])]),t._v(" "),i("div",{staticClass:"d-flex flex-row-reverse bg-dark text-white p-4"},[i("div",{staticClass:"py-3 px-5 text-right"},[i("div",{staticClass:"mb-2"},[t._v("Grand Total")]),t._v(" "),i("div",{staticClass:"h2 font-weight-light"},[t._v("$234,234")])]),t._v(" "),i("div",{staticClass:"py-3 px-5 text-right"},[i("div",{staticClass:"mb-2"},[t._v("Discount")]),t._v(" "),i("div",{staticClass:"h2 font-weight-light"},[t._v("10%")])]),t._v(" "),i("div",{staticClass:"py-3 px-5 text-right"},[i("div",{staticClass:"mb-2"},[t._v("Sub - Total amount")]),t._v(" "),i("div",{staticClass:"h2 font-weight-light"},[t._v("$32,432")])])])])])])])}]};var Y=a("VU/8")(U,O,!1,function(t){a("dVpN")},null,null).exports,k=a("8+8L");i.a.use(l.a,k.a);var P=new l.a({routes:[{path:"/",name:"dashboard",component:m},{path:"/new-invoice",name:"new-invoice",component:g},{path:"/:id",name:"view-invoice",component:x},{path:"/edit/:id",name:"edit-invoice",component:N},{path:"/item/:id",name:"invoice-item",component:E},{path:"/home/:test",name:"home",component:Y}]}),$=a("mtWM"),R=a.n($),B=a("Rf8U"),z=a.n(B);i.a.use(k.a,z.a,R.a),i.a.prototype.$axios=window.axios,i.a.config.productionTip=!1,new i.a({el:"#app",router:P,VueResource:k.a,components:{App:d},template:"<App/>"})},dVpN:function(t,e){},sYSx:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.860b846c38fc16f8e398.js.map