import{a as Pe,b as Je,c as se}from"./chunk-EEKQWI6V.js";import{a as de,b as Te,c as Ae,d as Be,e as Ge}from"./chunk-ACCWHLXM.js";import{A as He,B as Ze,b as xe,c as Fe,i as Ue,l as Ie,m as we,n as me,o as Ne,p as De,q as Re,r as je,s as Me,t as ke,u as Le,v as Ve,w as $e,x as qe,y as Oe,z as ze}from"./chunk-SP2BME5M.js";import{a as Z}from"./chunk-NYOAWLOO.js";import{b as F}from"./chunk-L3OHN5FL.js";import{a as pe}from"./chunk-VKBCP5J6.js";import{b as W,c as f,e as X,f as ee,k as te,l as ie,m as ne,n as re,r as oe,s as le,t as ae,u as Ce,v as Ee}from"./chunk-O6ZXFWJR.js";import{k as Se,m as x,o as ve}from"./chunk-VM527ZQ7.js";import{$b as D,Ba as z,Ca as Y,Kb as s,La as I,Mb as p,Vb as r,Wb as n,Xb as u,Yb as w,Zb as N,cc as U,ec as E,g as G,hc as ye,hd as K,id as H,jb as he,jc as ce,kc as ue,lc as fe,mb as m,mc as ge,nb as h,nc as l,od as be,pc as g,ra as O,sa as Q,ua as T,va as A,wc as _e}from"./chunk-DOLGZFZY.js";function rt(e,i){if(e&1&&(r(0,"td",35),l(1),n()),e&2){let c=i.$implicit;m(),g(" ",c.id," ")}}function ot(e,i){e&1&&(r(0,"th",36),l(1," Photo "),n())}function lt(e,i){if(e&1&&(r(0,"td",35),u(1,"img",37),n()),e&2){let c=i.$implicit;m(),ye("src",c.image?c.image:"assets/images/user/avatar-1.jpg",he)}}function at(e,i){e&1&&(r(0,"th",36),l(1," Firstname "),n())}function mt(e,i){if(e&1&&(r(0,"td",35),l(1),n()),e&2){let c=i.$implicit;m(),g(" ",c.firstname," ")}}function dt(e,i){e&1&&(r(0,"th",36),l(1," Lastname "),n())}function st(e,i){if(e&1&&(r(0,"td",35),l(1),n()),e&2){let c=i.$implicit;m(),g(" ",c.lastname," ")}}function pt(e,i){e&1&&(r(0,"th",36),l(1," Email "),n())}function ct(e,i){if(e&1&&(r(0,"td",35),l(1),n()),e&2){let c=i.$implicit;m(),g(" ",c.email," ")}}function ut(e,i){e&1&&(r(0,"th",36),l(1," Address "),n())}function ft(e,i){if(e&1&&(r(0,"td",35),l(1),n()),e&2){let c=i.$implicit;m(),g(" ",c.address," ")}}function vt(e,i){e&1&&(r(0,"th",36),l(1," Job "),n())}function ht(e,i){if(e&1&&(r(0,"td",35),l(1),n()),e&2){let c=i.$implicit;m(),g(" ",c.job," ")}}function yt(e,i){e&1&&(r(0,"th",36),l(1," Degree "),n())}function gt(e,i){if(e&1&&(r(0,"td",35),l(1),n()),e&2){let c=i.$implicit;m(),g(" ",c.degree," ")}}function _t(e,i){e&1&&(r(0,"th",36),l(1," Actions "),n())}function bt(e,i){if(e&1){let c=D();r(0,"button",40),U("click",function(){T(c);let a=E().$implicit,t=E();return A(t.onEditClick(a.id))}),r(1,"mat-icon"),l(2,"edit"),n()()}}function St(e,i){if(e&1){let c=D();r(0,"button",41),U("click",function(){T(c);let a=E().$implicit,t=E();return A(t.delete(a.id))}),r(1,"mat-icon"),l(2,"delete"),n()()}}function Ct(e,i){if(e&1&&(r(0,"td",35),s(1,bt,3,0,"button",38)(2,St,3,0,"button",39),n()),e&2){let c=E();m(),p("ngIf",c.updateUser),m(),p("ngIf",c.deleteUser)}}function Et(e,i){e&1&&u(0,"tr",42)}function xt(e,i){e&1&&u(0,"tr",43)}function Ft(e,i){if(e&1&&(r(0,"tr",44)(1,"td",45),l(2),n()()),e&2){E();let c=ge(23);m(2),g('No data matching the filter "',c.value,'"')}}var Ut=()=>[5,10,25,100],Ke=(()=>{let i=class i{ngOnInit(){this.getAuthorities(),this.authorities.includes("EDIT::USER")&&(this.updateUser=!0),this.authorities.includes("DELETE::USER")&&(this.deleteUser=!0),this.getUsers()}getAuthorities(){return G(this,null,function*(){try{let o=localStorage.getItem("authorities");this.authorities=yield this.encryptionService.decrypt(o,"2f7")}catch{}})}constructor(o,a,t){this.router=o,this.usersService=a,this.encryptionService=t,this.displayedColumns=["photo","firstname","lastname","email","address","birthday","degree","Actions"],this.authorities="",this.updateUser=!0,this.deleteUser=!0,this.users=0}applyFilter(o){let a=o.target.value;this.dataSource.filter=a.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}getUsers(){this.usersService.getAllUsers().subscribe({next:o=>{o.reverse(),this.users=o.length,this.dataSource=new Ze(o),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator},error:o=>{}})}onEditClick(o){this.router.navigate(["/home/users/update/"+o])}delete(o){this.usersService.deleteUser(o).subscribe({next:a=>{this.getUsers()},error:console.log})}};i.\u0275fac=function(a){return new(a||i)(h(x),h(Z),h(F))},i.\u0275cmp=O({type:i,selectors:[["app-list-user"]],viewQuery:function(a,t){if(a&1&&(ce(me,5),ce(de,5)),a&2){let d;ue(d=fe())&&(t.paginator=d.first),ue(d=fe())&&(t.sort=d.first)}},decls:55,vars:6,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"main-body"],[1,"row"],[1,"col-md-6","col-xl-4"],[1,"card","daily-sales"],[1,"card-block"],[1,"row","d-flex","align-items-center"],[1,"col-12"],[1,"f-w-300","d-flex","align-items-center","m-b-0"],[1,"feather","icon-user","text-c-green","f-40","m-r-20"],[1,"text-c-purple","mb-0"],[1,"text-muted"],[1,"progress","m-t-30",2,"height","7px"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-c-theme",2,"width","100%"],["matInput","","placeholder","Ex. Hedi",3,"keyup"],["input",""],[1,"table-container"],["mat-table","","matSort","",3,"dataSource"],["mat-cell","",4,"matCellDef"],["matColumnDef","photo"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["matColumnDef","firstname"],["matColumnDef","lastname"],["matColumnDef","email"],["matColumnDef","address"],["matColumnDef","birthday"],["matColumnDef","degree"],["matColumnDef","Actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["aria-label","Select page of users",3,"pageSizeOptions"],["mat-cell",""],["mat-header-cell","","mat-sort-header",""],[2,"border-radius","50%","width","30px","height","30px",3,"src"],["mat-icon-button","","color","primary",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","4",1,"mat-cell"]],template:function(a,t){a&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",10)(11,"h3",11),u(12,"i",12),r(13,"h3",13),l(14,"Total employees "),r(15,"span",14),l(16),n()()()()(),r(17,"div",15),u(18,"div",16),n()()()()(),r(19,"mat-form-field")(20,"mat-label"),l(21,"Filter"),n(),r(22,"input",17,18),U("keyup",function(v){return t.applyFilter(v)}),n()(),r(24,"div",19)(25,"table",20),s(26,rt,2,1,"td",21),w(27,22),s(28,ot,2,0,"th",23)(29,lt,2,1,"td",21),N(),w(30,24),s(31,at,2,0,"th",23)(32,mt,2,1,"td",21),N(),w(33,25),s(34,dt,2,0,"th",23)(35,st,2,1,"td",21),N(),w(36,26),s(37,pt,2,0,"th",23)(38,ct,2,1,"td",21),N(),w(39,27),s(40,ut,2,0,"th",23)(41,ft,2,1,"td",21),N(),w(42,28),s(43,vt,2,0,"th",23)(44,ht,2,1,"td",21),N(),w(45,29),s(46,yt,2,0,"th",23)(47,gt,2,1,"td",21),N(),w(48,30),s(49,_t,2,0,"th",23)(50,Ct,3,2,"td",21),N(),s(51,Et,1,0,"tr",31)(52,xt,1,0,"tr",32)(53,Ft,3,1,"tr",33),n(),u(54,"mat-paginator",34),n()()()()()()),a&2&&(m(16),g("\xA0\xA0 ",t.users," "),m(9),p("dataSource",t.dataSource),m(26),p("matHeaderRowDef",t.displayedColumns),m(),p("matRowDefColumns",t.displayedColumns),m(2),p("pageSizeOptions",_e(5,Ut)))},dependencies:[H,De,je,Ve,Me,Re,$e,ke,Le,qe,Oe,ze,me,de,Te,Be,Ie,Ue,Pe,xe]});let e=i;return e})();function Nt(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"firstname must contain only upper and lower case letters."),n()())}function Tt(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"lastname must contain only upper and lower case letters."),n()())}function At(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Job must contain only upper and lower case letters and spaces"),n()())}function Dt(e,i){e&1&&(r(0,"div")(1,"span",45),l(2," Email invalid ."),n()())}function Rt(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Number contain 8-digit positive"),n()())}function jt(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Address invalid."),n()())}function Mt(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Invalid date of birth, age is less than 18 years old."),n()())}function kt(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Degree invalid."),n()())}function Lt(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Number positive"),n()())}function Vt(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Number positive"),n()())}function $t(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Number positive"),n()())}function qt(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Number positive"),n()())}function Ot(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Number positive"),n()())}function zt(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Number positive"),n()())}function Ht(e,i){e&1&&(r(0,"div")(1,"span",45),l(2,"Number positive"),n()())}function Zt(e,i){if(e&1){let c=D();r(0,"div")(1,"label",46)(2,"input",47),U("change",function(a){let d=T(c).$implicit,v=E();return A(v.onroleSelect(d,a))}),n(),l(3),n()()}if(e&2){let c=i.$implicit;m(3),g(" ",c.name," ")}}var We=(()=>{let i=class i{onroleSelect(o,a){if(a.target.checked)this.selectedRole.push(o);else{let t=this.selectedRole.indexOf(o);t!==-1&&this.selectedRole.splice(t,1)}}constructor(o,a,t,d,v){this.fb=o,this.userService=a,this.router=t,this.roleService=d,this.encryptionService=v,this.roles=[],this.selectedRole=[],this.getRoles(),this.myForm=this.fb.group({firstname:["",[f.pattern("[A-Za-z]+"),f.required]],lastname:["",[f.pattern("[A-Za-z]+"),f.required]],email:["",[f.email]],job:["",[f.pattern("[A-Za-z ]*")]],number:["",[f.pattern("^[0-9]{8}$")]],address:["",[f.required]],birthday:["",[this.dateNaissanceValidator(18)]],degree:["",[f.required]],basicSalary:["",[f.pattern("^[0-9]+$")]],offDays:["",[f.pattern("^[0-9]+$")]],familySituation:["",[f.pattern("^[0-9]+$")]],childrenNumber:["",[f.pattern("^[0-9]+$")]],bankrib:["",[f.pattern("^[0-9]+$")]],numCnss:["",[f.pattern("^[0-9]+$")]],cin:["",[f.pattern("^[0-9]+$")]]})}dateNaissanceValidator(o){return a=>{let t=new Date(a.value),d=new Date;return d.setFullYear(d.getFullYear()-o),t>=d?{dateNaissanceInvalid:{value:a.value}}:null}}getRoles(){this.roleService.getRoles().subscribe({next:o=>{this.roles=o},error:o=>{}})}onSubmit(){let o=this.myForm.value,t=this.selectedRole.map(d=>({id:d.id,name:d.name}));o.roles=this.selectedRole,o.password="password",this.userService.addUser(o).subscribe(d=>{let v=localStorage.getItem("authorities");this.encryptionService.decrypt(v,"2f7").includes("READ::USER")?this.router.navigate(["/home/users"]):this.router.navigate(["/home"])},d=>{}),this.myForm.reset()}};i.\u0275fac=function(a){return new(a||i)(h(ae),h(Z),h(x),h(se),h(F))},i.\u0275cmp=O({type:i,selectors:[["app-add-user"]],decls:95,vars:18,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"col-md-6"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstname"],["type","text","id","firstname","formControlName","firstname","pattern","[A-Za-z]+","required","","placeholder","Ex. Hamdi",1,"form-control"],[4,"ngIf"],["for","lastname"],["type","text","id","lastname","formControlName","lastname","pattern","[A-Za-z]+","required","","placeholder","Ex. Hedi",1,"form-control"],["for","job"],["type","job","id","job","formControlName","job","placeholder","Ex. Software Developer",1,"form-control"],["for","email"],["type","email","id","email","formControlName","email","placeholder","Ex. Alex.Alex@company.com",1,"form-control"],["for","number"],["type","number","id","number","formControlName","number","placeholder","Ex. 90777777",1,"form-control"],["for","address"],["type","text","id","address","formControlName","address","placeholder","Ex. Tunis",1,"form-control"],["for","birthday"],["type","date","id","birthday","formControlName","birthday",1,"form-control"],["for","degree"],["type","text","id","degree","formControlName","degree","placeholder","Ex. Master",1,"form-control"],["for","basicSalary"],["type","number","id","basicSalary","formControlName","basicSalary","placeholder","Ex. 777",1,"form-control"],["for","offDays"],["type","number","id","offDays","formControlName","offDays","placeholder","Ex. 777",1,"form-control"],["for","familySituation"],["type","number","id","familySituation","formControlName","familySituation","placeholder","Ex. 0",1,"form-control"],["for","childrenNumber"],["type","number","id","childrenNumber","formControlName","childrenNumber","placeholder","Ex. 0",1,"form-control"],["for","bankrib"],["type","text","id","bankrib","formControlName","bankrib","placeholder","Ex. 0",1,"form-control"],["for","numCnss"],["type","string","id","numCnss","formControlName","numCnss","placeholder","Ex. 0",1,"form-control"],["for","cin"],["type","string","id","cin","formControlName","cin","placeholder","Ex. 0",1,"form-control"],[4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"error-message"],[1,"checkbox-label"],["type","checkbox",1,"styled-checkbox",3,"change"]],template:function(a,t){if(a&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h5"),l(9,"Add Employee"),n()(),r(10,"div",8),u(11,"hr"),r(12,"div",4)(13,"div",9)(14,"form",10),U("ngSubmit",function(){return t.onSubmit()}),r(15,"div",11)(16,"label",12),l(17,"firstname"),n(),u(18,"input",13),s(19,Nt,3,0,"div",14),n(),r(20,"div",11)(21,"label",15),l(22,"lastname"),n(),u(23,"input",16),s(24,Tt,3,0,"div",14),n(),r(25,"div",11)(26,"label",17),l(27,"Job"),n(),u(28,"input",18),s(29,At,3,0,"div",14),n(),r(30,"div",11)(31,"label",19),l(32,"Email"),n(),u(33,"input",20),s(34,Dt,3,0,"div",14),n(),r(35,"div",11)(36,"label",21),l(37,"Phone Number"),n(),u(38,"input",22),s(39,Rt,3,0,"div",14),n(),r(40,"div",11)(41,"label",23),l(42,"Address"),n(),u(43,"input",24),s(44,jt,3,0,"div",14),n(),r(45,"div",11)(46,"label",25),l(47,"birthday"),n(),u(48,"input",26),s(49,Mt,3,0,"div",14),n(),r(50,"div",11)(51,"label",27),l(52,"degree"),n(),u(53,"input",28),s(54,kt,3,0,"div",14),n(),r(55,"div",11)(56,"label",29),l(57,"Basic Salary"),n(),u(58,"input",30),s(59,Lt,3,0,"div",14),n(),r(60,"div",11)(61,"label",31),l(62,"Off Days"),n(),u(63,"input",32),s(64,Vt,3,0,"div",14),n(),r(65,"div",11)(66,"label",33),l(67,"family Situation"),n(),u(68,"input",34),s(69,$t,3,0,"div",14),n(),r(70,"div",11)(71,"label",35),l(72,"Children Number"),n(),u(73,"input",36),s(74,qt,3,0,"div",14),n(),r(75,"div",11)(76,"label",37),l(77,"Bank Rib"),n(),u(78,"input",38),s(79,Ot,3,0,"div",14),n(),r(80,"div",11)(81,"label",39),l(82,"num Cnss"),n(),u(83,"input",40),s(84,zt,3,0,"div",14),n(),r(85,"div",11)(86,"label",41),l(87,"cin"),n(),u(88,"input",42),s(89,Ht,3,0,"div",14),n(),r(90,"label",27),l(91,"Roles"),n(),s(92,Zt,4,1,"div",43),r(93,"button",44),l(94," Add "),n()()()()()()()()()()()()),a&2){let d,v,y,_,b,S,B,C,j,M,k,L,V,$,q;m(14),p("formGroup",t.myForm),m(5),p("ngIf",((d=t.myForm.get("firstname"))==null?null:d.invalid)&&(((d=t.myForm.get("firstname"))==null?null:d.dirty)||((d=t.myForm.get("firstname"))==null?null:d.touched))),m(5),p("ngIf",((v=t.myForm.get("lastname"))==null?null:v.invalid)&&(((v=t.myForm.get("lastname"))==null?null:v.dirty)||((v=t.myForm.get("lastname"))==null?null:v.touched))),m(5),p("ngIf",((y=t.myForm.get("job"))==null?null:y.invalid)&&(((y=t.myForm.get("job"))==null?null:y.dirty)||((y=t.myForm.get("job"))==null?null:y.touched))),m(5),p("ngIf",((_=t.myForm.get("email"))==null?null:_.invalid)&&(((_=t.myForm.get("email"))==null?null:_.dirty)||((_=t.myForm.get("email"))==null?null:_.touched))),m(5),p("ngIf",((b=t.myForm.get("number"))==null?null:b.invalid)&&(((b=t.myForm.get("number"))==null?null:b.dirty)||((b=t.myForm.get("number"))==null?null:b.touched))),m(5),p("ngIf",((S=t.myForm.get("address"))==null?null:S.invalid)&&(((S=t.myForm.get("address"))==null?null:S.dirty)||((S=t.myForm.get("address"))==null?null:S.touched))),m(5),p("ngIf",(B=t.myForm.get("birthday"))==null?null:B.hasError("dateNaissanceInvalid")),m(5),p("ngIf",((C=t.myForm.get("degree"))==null?null:C.invalid)&&(((C=t.myForm.get("degree"))==null?null:C.dirty)||((C=t.myForm.get("degree"))==null?null:C.touched))),m(5),p("ngIf",((j=t.myForm.get("basicSalary"))==null?null:j.invalid)&&(((j=t.myForm.get("basicSalary"))==null?null:j.dirty)||((j=t.myForm.get("basicSalary"))==null?null:j.touched))),m(5),p("ngIf",((M=t.myForm.get("offDays"))==null?null:M.invalid)&&(((M=t.myForm.get("offDays"))==null?null:M.dirty)||((M=t.myForm.get("offDays"))==null?null:M.touched))),m(5),p("ngIf",((k=t.myForm.get("familySituation"))==null?null:k.invalid)&&(((k=t.myForm.get("familySituation"))==null?null:k.dirty)||((k=t.myForm.get("familySituation"))==null?null:k.touched))),m(5),p("ngIf",((L=t.myForm.get("childrenNumber"))==null?null:L.invalid)&&(((L=t.myForm.get("childrenNumber"))==null?null:L.dirty)||((L=t.myForm.get("childrenNumber"))==null?null:L.touched))),m(5),p("ngIf",((V=t.myForm.get("bankrib"))==null?null:V.invalid)&&(((V=t.myForm.get("bankrib"))==null?null:V.dirty)||((V=t.myForm.get("bankrib"))==null?null:V.touched))),m(5),p("ngIf",(($=t.myForm.get("numCnss"))==null?null:$.invalid)&&((($=t.myForm.get("numCnss"))==null?null:$.dirty)||(($=t.myForm.get("numCnss"))==null?null:$.touched))),m(5),p("ngIf",((q=t.myForm.get("cin"))==null?null:q.invalid)&&(((q=t.myForm.get("cin"))==null?null:q.dirty)||((q=t.myForm.get("cin"))==null?null:q.touched))),m(3),p("ngForOf",t.roles),m(),p("disabled",t.myForm.invalid||t.selectedRole.length===0)}},dependencies:[K,H,te,W,ie,X,ee,oe,le,ne,re]});let e=i;return e})();function Bt(e,i){e&1&&(r(0,"div")(1,"span",31),l(2,"firstname must contain only upper and lower case letters."),n()())}function Gt(e,i){e&1&&(r(0,"div")(1,"span",31),l(2,"lastname must contain only upper and lower case letters."),n()())}function Pt(e,i){e&1&&(r(0,"div")(1,"span",31),l(2,"Job must contain only upper and lower case letters and spaces"),n()())}function Jt(e,i){e&1&&(r(0,"div")(1,"span",31),l(2," Email invalid ."),n()())}function Qt(e,i){e&1&&(r(0,"div")(1,"span",31),l(2,"Number contain 8-digit positive"),n()())}function Yt(e,i){e&1&&(r(0,"div")(1,"span",31),l(2,"Address invalid."),n()())}function Kt(e,i){e&1&&(r(0,"div")(1,"span",31),l(2,"Invalid date of birth, age is less than 18 years old."),n()())}function Wt(e,i){e&1&&(r(0,"div")(1,"span",31),l(2,"Degree invalid."),n()())}function Xt(e,i){if(e&1){let c=D();r(0,"div")(1,"label",32)(2,"input",33),U("change",function(a){let d=T(c).$implicit,v=E();return A(v.onroleSelect(d,a))}),n(),l(3),n()()}if(e&2){let c=i.$implicit,o=E();m(2),p("checked",o.isSelectedRole(c)),m(),g(" ",c.name," ")}}var Xe=(()=>{let i=class i{constructor(o,a,t,d,v,y){this.fb=o,this.userService=a,this.router=t,this.encryptionService=d,this.roleService=v,this.route=y,this.roles=[],this.selectedRole=[],this.currentUserEmail="",this.redirection=!1,this.myForm=this.fb.group({id:[""],firstname:["",[f.pattern("[A-Za-z]+"),f.required]],lastname:["",[f.pattern("[A-Za-z]+"),f.required]],email:["",[f.email]],job:["",[f.pattern("[A-Za-z ]*")]],number:["",[f.pattern("^[0-9]{8}$")]],address:["",[f.required]],birthday:["",[this.dateNaissanceValidator(18)]],degree:["",[f.required]]})}isSelectedRole(o){return this.selectedRole.includes(o.id)}onroleSelect(o,a){if(a.target.checked)this.selectedRole.push(o.id);else{let t=this.selectedRole.indexOf(o.id);t!==-1&&this.selectedRole.splice(t,1)}}getRoles(){this.roleService.getRoles().subscribe({next:o=>{this.roles=o},error:o=>{}})}dateNaissanceValidator(o){return a=>{let t=new Date(a.value),d=new Date;return d.setFullYear(d.getFullYear()-o),t>=d?{dateNaissanceInvalid:{value:a.value}}:null}}ngOnInit(){return G(this,null,function*(){let o=yield localStorage.getItem("user");if(o){let t=JSON.parse(o);this.currentUserEmail=t.email}let a=this.route.snapshot.paramMap.get("id");a!==null&&this.getUserById(a),this.getRoles()})}getUserById(o){this.userService.getUserById(o).subscribe({next:a=>{this.user=a,this.selectedRole=this.user.roleId,this.myForm.patchValue({id:this.user.id,firstname:this.user.firstname,lastname:this.user.lastname,email:this.user.email,job:this.user.job,number:this.user.number,address:this.user.address,birthday:this.user.birthday,degree:this.user.degree})},error:a=>{}})}onSubmit(){let o=this.myForm.value;o.roleId=this.selectedRole,this.currentUserEmail===o.email&&(this.redirection=!0,console.log("redirection activated"),console.log(this.redirection)),this.userService.updateUser(o.id,o).subscribe(a=>G(this,null,function*(){let t=localStorage.getItem("authorities"),d=this.encryptionService.decrypt(t,"2f7");this.redirection?this.router.navigate(["/login"]):d.includes("READ::USER")?this.router.navigate(["/home/users"]):this.router.navigate(["/home"])}),a=>{})}};i.\u0275fac=function(a){return new(a||i)(h(ae),h(Z),h(x),h(F),h(se),h(Se))},i.\u0275cmp=O({type:i,selectors:[["app-update-user"]],decls:60,vars:11,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"col-md-6"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","firstname"],["type","text","id","firstname","formControlName","firstname","pattern","[A-Za-z]+","required","","placeholder","Ex. Hamdi",1,"form-control"],[4,"ngIf"],["for","lastname"],["type","text","id","lastname","formControlName","lastname","pattern","[A-Za-z]+","required","","placeholder","Ex. Hedi",1,"form-control"],["for","job"],["type","job","id","job","formControlName","job","placeholder","Ex. Software Developer",1,"form-control"],["for","email"],["type","email","id","email","formControlName","email","placeholder","Ex. Alex.Alex@company.com",1,"form-control"],["for","number"],["type","number","id","number","formControlName","number","placeholder","Ex. 90777777",1,"form-control"],["for","address"],["type","text","id","address","formControlName","address","placeholder","Ex. Tunis",1,"form-control"],["for","birthday"],["type","date","id","birthday","formControlName","birthday",1,"form-control"],["for","degree"],["type","text","id","degree","formControlName","degree","placeholder","Ex. Master",1,"form-control"],[4,"ngFor","ngForOf"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"error-message"],[1,"checkbox-label"],["type","checkbox",1,"styled-checkbox",3,"checked","change"]],template:function(a,t){if(a&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h5"),l(9,"Update Employee"),n()(),r(10,"div",8),u(11,"hr"),r(12,"div",4)(13,"div",9)(14,"form",10),U("ngSubmit",function(){return t.onSubmit()}),r(15,"div",11)(16,"label",12),l(17,"firstname"),n(),u(18,"input",13),s(19,Bt,3,0,"div",14),n(),r(20,"div",11)(21,"label",15),l(22,"lastname"),n(),u(23,"input",16),s(24,Gt,3,0,"div",14),n(),r(25,"div",11)(26,"label",17),l(27,"Job"),n(),u(28,"input",18),s(29,Pt,3,0,"div",14),n(),r(30,"div",11)(31,"label",19),l(32,"Email"),n(),u(33,"input",20),s(34,Jt,3,0,"div",14),n(),r(35,"div",11)(36,"label",21),l(37,"Phone Number"),n(),u(38,"input",22),s(39,Qt,3,0,"div",14),n(),r(40,"div",11)(41,"label",23),l(42,"Address"),n(),u(43,"input",24),s(44,Yt,3,0,"div",14),n(),r(45,"div",11)(46,"label",25),l(47,"birthday"),n(),u(48,"input",26),s(49,Kt,3,0,"div",14),n(),r(50,"div",11)(51,"label",27),l(52,"degree"),n(),u(53,"input",28),s(54,Wt,3,0,"div",14),n(),r(55,"label",27),l(56,"Roles"),n(),s(57,Xt,4,2,"div",29),r(58,"button",30),l(59," Update "),n()()()()()()()()()()()()),a&2){let d,v,y,_,b,S,B,C;m(14),p("formGroup",t.myForm),m(5),p("ngIf",((d=t.myForm.get("firstname"))==null?null:d.invalid)&&(((d=t.myForm.get("firstname"))==null?null:d.dirty)||((d=t.myForm.get("firstname"))==null?null:d.touched))),m(5),p("ngIf",((v=t.myForm.get("lastname"))==null?null:v.invalid)&&(((v=t.myForm.get("lastname"))==null?null:v.dirty)||((v=t.myForm.get("lastname"))==null?null:v.touched))),m(5),p("ngIf",((y=t.myForm.get("job"))==null?null:y.invalid)&&(((y=t.myForm.get("job"))==null?null:y.dirty)||((y=t.myForm.get("job"))==null?null:y.touched))),m(5),p("ngIf",((_=t.myForm.get("email"))==null?null:_.invalid)&&(((_=t.myForm.get("email"))==null?null:_.dirty)||((_=t.myForm.get("email"))==null?null:_.touched))),m(5),p("ngIf",((b=t.myForm.get("number"))==null?null:b.invalid)&&(((b=t.myForm.get("number"))==null?null:b.dirty)||((b=t.myForm.get("number"))==null?null:b.touched))),m(5),p("ngIf",((S=t.myForm.get("address"))==null?null:S.invalid)&&(((S=t.myForm.get("address"))==null?null:S.dirty)||((S=t.myForm.get("address"))==null?null:S.touched))),m(5),p("ngIf",(B=t.myForm.get("birthday"))==null?null:B.hasError("dateNaissanceInvalid")),m(5),p("ngIf",((C=t.myForm.get("degree"))==null?null:C.invalid)&&(((C=t.myForm.get("degree"))==null?null:C.dirty)||((C=t.myForm.get("degree"))==null?null:C.touched))),m(3),p("ngForOf",t.roles),m(),p("disabled",t.myForm.invalid||t.selectedRole.length===0)}},dependencies:[K,H,te,W,ie,X,ee,oe,le,ne,re]});let e=i;return e})();var et=(()=>{let i=class i{constructor(o,a){this.encryptionService=o,this.router=a}canActivate(o,a){let t=localStorage.getItem("authorities");return this.encryptionService.decrypt(t,"2f7").includes("READ::USER")?!0:(this.router.navigate(["/notfound"]),!1)}};i.\u0275fac=function(a){return new(a||i)(I(F),I(x))},i.\u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var tt=(()=>{let i=class i{constructor(o,a){this.encryptionService=o,this.router=a}canActivate(o,a){let t=localStorage.getItem("authorities");return this.encryptionService.decrypt(t,"2f7").includes("ADD::USER")?!0:(this.router.navigate(["/notfound"]),!1)}};i.\u0275fac=function(a){return new(a||i)(I(F),I(x))},i.\u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var it=(()=>{let i=class i{constructor(o,a){this.encryptionService=o,this.router=a}canActivate(o,a){let t=localStorage.getItem("authorities");return this.encryptionService.decrypt(t,"2f7").includes("EDIT::USER")?!0:(this.router.navigate(["/notfound"]),!1)}};i.\u0275fac=function(a){return new(a||i)(I(F),I(x))},i.\u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var ei=[{path:"",component:Ke,canActivate:[pe,et]},{path:"add",component:We,canActivate:[pe,tt]},{path:"update/:id",component:Xe,canActivate:[pe,it]}],nt=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=Q({type:i}),i.\u0275inj=Y({imports:[ve.forChild(ei),ve]});let e=i;return e})();var Gi=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=Q({type:i}),i.\u0275inj=Y({imports:[be,nt,Ce,Ee,He,Ne,Ae,Ge,Je,we,Fe]});let e=i;return e})();export{Gi as a};
