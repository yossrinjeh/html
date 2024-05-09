import{a as g}from"./chunk-TWCV4VS3.js";import{a as L}from"./chunk-HAJ3YRHB.js";import{a as B}from"./chunk-KTNC6XIE.js";import{c as O,g as P,h as A,m as I,o as D,p as w,v as y,w as R,x as k}from"./chunk-I7XF2BCB.js";import{k as F,m as M,o as C}from"./chunk-UHIV2YIU.js";import{Ca as b,Kb as S,Mb as s,Vb as n,Wb as i,Xb as m,cc as _,id as E,mb as d,nb as f,nc as r,pc as p,pd as N,ra as u,sa as v}from"./chunk-WHIBKZZI.js";var j=(()=>{let e=class e{constructor(o,a){this.formBuilder=o,this.configService=a}ngOnInit(){this.config&&(this.updateForm=this.formBuilder.group({companyName:[this.config.companyName],address:[this.config.address],payDay:[this.config.payDay],delayBeforePayment:[this.config.delayBeforePayment],cnssAffiliation:[this.config.cnssAffiliation],cnssRate:[this.config.cnssrate],cssRate:[this.config.cssrate]}))}updateConfig(){let o={id:this.config.id,companyName:this.updateForm.value.companyName,address:this.updateForm.value.address,payDay:this.updateForm.value.payDay,delayBeforePayment:this.updateForm.value.delayBeforePayment,cnssAffiliation:this.updateForm.value.cnssAffiliation,cnssrate:this.updateForm.value.cnssRate,cssrate:this.updateForm.value.cssRate,companyLogo:""};this.configService.updateConfig(this.config.id,o).subscribe(()=>{alert("Config updated successfully!")},a=>{console.error("Update failed:",a)})}};e.\u0275fac=function(a){return new(a||e)(f(y),f(g))},e.\u0275cmp=u({type:e,selectors:[["app-update-config"]],inputs:{config:"config"},decls:41,vars:1,consts:[[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","companyName",1,"form-label"],["type","text","id","companyName","formControlName","companyName",1,"form-control"],["for","address",1,"form-label"],["type","text","id","address","formControlName","address",1,"form-control"],["for","payDay",1,"form-label"],["type","text","id","payDay","formControlName","payDay",1,"form-control"],["for","delayBeforePayment",1,"form-label"],["type","text","id","delayBeforePayment","formControlName","delayBeforePayment",1,"form-control"],["for","cnssAffiliation",1,"form-label"],["type","text","id","cnssAffiliation","formControlName","cnssAffiliation",1,"form-control"],["for","cnssRate",1,"form-label"],["type","text","id","cnssRate","formControlName","cnssRate",1,"form-control"],["for","cssRate",1,"form-label"],["type","text","id","cssRate","formControlName","cssRate",1,"form-control"],[1,"modal-footer"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-primary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"]],template:function(a,c){a&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),r(4,"Add Allowance"),i(),m(5,"button",4),i(),n(6,"div",5)(7,"form",6),_("ngSubmit",function(){return c.updateConfig()}),n(8,"div",7)(9,"label",8),r(10,"Company Name"),i(),m(11,"input",9),i(),n(12,"div",7)(13,"label",10),r(14,"Address"),i(),m(15,"input",11),i(),n(16,"div",7)(17,"label",12),r(18,"Pay Day"),i(),m(19,"input",13),i(),n(20,"div",7)(21,"label",14),r(22,"Delay Before Payment"),i(),m(23,"input",15),i(),n(24,"div",7)(25,"label",16),r(26,"CNSS Affiliation"),i(),m(27,"input",17),i(),n(28,"div",7)(29,"label",18),r(30,"CNSS Rate"),i(),m(31,"input",19),i(),n(32,"div",7)(33,"label",20),r(34,"CSS Rate"),i(),m(35,"input",21),i(),n(36,"div",22)(37,"button",23),r(38,"Save"),i(),n(39,"button",24),r(40,"Close"),i()()()()()()),a&2&&(d(7),s("formGroup",c.updateForm))},dependencies:[I,O,P,A,D,w]});let t=e;return t})();function z(t,e){if(t&1&&(n(0,"div",15)(1,"div",16)(2,"div",17)(3,"h1",18),r(4),i()()()()),t&2){let l=e.$implicit;d(4),p("Company: ",l.companyName,"")}}function q(t,e){if(t&1&&(n(0,"div",15)(1,"div",19)(2,"div",17)(3,"h1",18),r(4),i()()()()),t&2){let l=e.$implicit;d(4),p("Address: ",l.address,"")}}function H(t,e){if(t&1&&(n(0,"div",15)(1,"div",20)(2,"div",17)(3,"h1",18),r(4),i()()()()),t&2){let l=e.$implicit;d(4),p("Pay Day: ",l.payDay,"")}}function J(t,e){if(t&1&&(n(0,"div",15)(1,"div",21)(2,"div",17)(3,"h1",18),r(4),i()()()()),t&2){let l=e.$implicit;d(4),p("Delay before Payment: ",l.delayBeforePayment,"")}}function K(t,e){if(t&1&&(n(0,"div",15)(1,"div",16)(2,"div",17)(3,"h1",18),r(4),i()()()()),t&2){let l=e.$implicit;d(4),p("CNSS Affiliation: ",l.cnssAffiliation," ")}}function Q(t,e){if(t&1&&(n(0,"div",15)(1,"div",19)(2,"div",17)(3,"h1",18),r(4),i()()()()),t&2){let l=e.$implicit;d(4),p("CNSS Rate: ",l.cnssrate,"")}}function W(t,e){if(t&1&&(n(0,"div",15)(1,"div",20)(2,"div",17)(3,"h1",18),r(4),i()()()()),t&2){let l=e.$implicit;d(4),p("CSS Rate: ",l.cssrate,"")}}var T=(()=>{let e=class e{constructor(o,a,c,x){this.route=o,this.router=a,this.formB=c,this.configService=x,this.data=[]}ngOnInit(){this.configService.getConfig().subscribe(o=>{console.log(o),this.data=o}),this.configService.getConfig().subscribe(o=>{this.totalAnnouncements=o.length})}deleteAnnCarpooling(o){this.configService.deleteConfig(o).subscribe(a=>{alert(" Announcement deleted Successfully!"),this.ngOnInit()})}};e.\u0275fac=function(a){return new(a||e)(f(F),f(M),f(y),f(g))},e.\u0275cmp=u({type:e,selectors:[["app-list-config"]],decls:23,vars:7,consts:[["href","https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css","rel","stylesheet"],[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"main-body"],[1,"page-wrapper"],[1,"container"],[1,"row","mb-3"],[1,"col-12"],["type","button","data-bs-toggle","modal","data-bs-target","#exampleModalAdd",1,"btn","btn-outline-primary","btn-sm","float-right"],["id","exampleModalAdd","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],["id","exampleModalupdate","role","dialog","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"row"],["class","col-md-4 col-xl-3",4,"ngFor","ngForOf"],[1,"col-md-4","col-xl-3"],[1,"card","bg-c-blue","order-card"],[1,"card-block"],[1,"m-b-20","black-text"],[1,"card","bg-c-green","order-card"],[1,"card","bg-c-yellow","order-card"],[1,"card","bg-c-pink","order-card"]],template:function(a,c){a&1&&(m(0,"link",0),n(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"button",10),r(11,"Edit"),i()(),n(12,"div",11),m(13,"app-update-config"),i(),m(14,"div",12),i(),n(15,"div",13),S(16,z,5,1,"div",14)(17,q,5,1,"div",14)(18,H,5,1,"div",14)(19,J,5,1,"div",14)(20,K,5,1,"div",14)(21,Q,5,1,"div",14)(22,W,5,1,"div",14),i()()()()()()()()),a&2&&(d(16),s("ngForOf",c.data),d(),s("ngForOf",c.data),d(),s("ngForOf",c.data),d(),s("ngForOf",c.data),d(),s("ngForOf",c.data),d(),s("ngForOf",c.data),d(),s("ngForOf",c.data))},dependencies:[E,j],styles:["body[_ngcontent-%COMP%]{margin-top:20px;background:#fafafa}.order-card[_ngcontent-%COMP%]{color:#fff}.bg-c-blue[_ngcontent-%COMP%]{background:linear-gradient(45deg,#4099ff,#73b4ff)}.bg-c-green[_ngcontent-%COMP%]{background:linear-gradient(45deg,#2ed8b6,#59e0c5)}.bg-c-yellow[_ngcontent-%COMP%]{background:linear-gradient(45deg,#ffb64d,#ffcb80)}.bg-c-pink[_ngcontent-%COMP%]{background:linear-gradient(45deg,#ff5370,#ff869a)}.card[_ngcontent-%COMP%]{border-radius:5px;-webkit-box-shadow:0 1px 2.94px .06px rgba(4,26,55,.16);box-shadow:0 1px 2.94px .06px #041a3729;border:none;margin-bottom:30px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.card[_ngcontent-%COMP%]   .card-block[_ngcontent-%COMP%]{padding:25px}.order-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:26px}.f-left[_ngcontent-%COMP%]{float:left}.f-right[_ngcontent-%COMP%]{float:right}.black-text[_ngcontent-%COMP%]{color:#000}"]});let t=e;return t})();var X=[{path:"",component:T,canActivate:[B,L]}],$=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=v({type:e}),e.\u0275inj=b({imports:[C.forChild(X),C]});let t=e;return t})();var ge=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=v({type:e}),e.\u0275inj=b({providers:[g],imports:[N,$,R,k]});let t=e;return t})();export{ge as a};
