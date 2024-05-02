import{b as D,e as _,f as C,h as z,j as J,k as E,m as P,n as K,p as Q,q as W,r as X,t as Y,u as ee,v as te}from"./chunk-O6ZXFWJR.js";import{a as Z,c as q,k as y,m as x,o as V}from"./chunk-VM527ZQ7.js";import{$b as b,Ba as T,Ca as U,Kb as B,La as R,M as j,Mb as k,Tb as L,Ub as O,Vb as r,Wb as n,Xb as d,cc as c,ec as g,id as G,mb as v,mc as $,nb as l,nc as a,oc as I,od as H,ra as f,sa as A,ua as u,v as N,va as h,wa as M}from"./chunk-DOLGZFZY.js";var S=(()=>{let t=class t{constructor(e){this.http=e,this.URL="http://localhost:3000/department-management",this.httpOtions={headers:new Z({"Content-type":"application/json"})}}getAll(){return this.http.get(this.URL,this.httpOtions)}addDepartment(e){return this.http.post(this.URL,e,this.httpOtions)}getDepartmentById(e){return this.http.get(`${this.URL}/${e}`,this.httpOtions).pipe(j(i=>(console.error("Error fetching Department by ID:",i),N(i))))}updateDepartment(e,i){return this.http.put(`${this.URL}/${e}`,i,this.httpOtions)}deleteDepartment(e){return this.http.delete(`${this.URL}/${e}`,this.httpOtions)}};t.\u0275fac=function(i){return new(i||t)(R(q))},t.\u0275prov=T({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var re=(()=>{let t=class t{constructor(e,i){this.departmentservice=e,this.router=i}add(e){if(e.valid){let i={id:"",name:e.value.name,Detail_department:e.value.Detail_department};this.departmentservice.addDepartment(i).subscribe(()=>{alert("Added Successfully!"),this.router.navigate(["home/department"])},m=>{console.error(m)})}}};t.\u0275fac=function(i){return new(i||t)(l(S),l(x))},t.\u0275cmp=f({type:t,selectors:[["app-add-departement"]],decls:33,vars:0,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"main-body"],[1,"page-wrapper"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"col-md-6"],[3,"ngSubmit"],["addForm","ngForm"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","name","name","name","ngModel","","required","","placeholder","Tapez le nom",1,"form-control"],["fn","ngModel"],["type","text","id","Detail_department","name","Detail_department","ngModel","","required","","placeholder","Tapez le Detail_department",1,"form-control"],["type","submit",1,"btn","btn-primary"]],template:function(i,m){if(i&1){let s=b();r(0,"body")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"h5"),a(12,"Basic Componant"),n()(),r(13,"div",10)(14,"h5"),a(15,"Form controls"),n(),d(16,"hr"),r(17,"div",6)(18,"div",11)(19,"form",12,13),c("ngSubmit",function(){u(s);let me=$(20);return h(m.add(me))}),r(21,"div",14)(22,"label",15),a(23,"Name :"),n(),d(24,"input",16,17),n(),r(26,"div",14)(27,"label",15),a(28,"Detail_department :"),n(),d(29,"input",18,17),n(),r(31,"button",19),a(32,"Submit"),n()()()()()()()()()()()()()()()}},dependencies:[E,D,_,C,X,J,z]});let o=t;return o})();function de(o,t){return this.departments}function le(o,t){if(o&1){let p=b();r(0,"tr")(1,"td",26)(2,"div",21),d(3,"input",27),n()(),r(4,"td",28),a(5),n(),r(6,"td",28),a(7),n(),r(8,"td")(9,"button",29),c("click",function(){let m=u(p).$implicit,s=g();return h(s.navigateToUpdate(m.id))}),d(10,"i",30),n()(),r(11,"td")(12,"button",31),c("click",function(){let m=u(p).$implicit,s=g();return h(s.onDelete(m.id))}),M(),r(13,"svg",32),d(14,"path",33)(15,"path",34),n()()()()}if(o&2){let p=t.$implicit;v(5),I(p==null?null:p.name),v(2),I(p==null?null:p.Detail_department)}}var oe=(()=>{let t=class t{onDelete(e){this.departmentService.deleteDepartment(e).subscribe(i=>{this.ngOnInit()})}navigateToUpdate(e){console.log(e),this.router.navigateByUrl("home/department/UpdateDepartment/"+e)}constructor(e,i,m){this.departmentService=e,this.route=i,this.router=m,this.departments=[]}navigatetoAdd(){this.router.navigateByUrl("home/department/AddDepartment")}ngOnInit(){this.departmentService.getAll().subscribe(e=>{console.log(e),this.departments=e})}};t.\u0275fac=function(i){return new(i||t)(l(S),l(y),l(x))},t.\u0275cmp=f({type:t,selectors:[["app-list-departement"]],decls:39,vars:0,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"container"],[1,"d-flex","align-items-center","justify-content-end","my-3"],["id","bulk-select-replace-element"],["type","button",1,"btn","btn-phoenix-success","btn-sm",3,"click"],["data-fa-transform","shrink-3 down-2",1,"fas","fa-plus"],[1,"ms-1"],["id","bulk-select-actions",1,"d-none","ms-3"],[1,"d-flex"],["aria-label","Bulk actions",1,"form-select","form-select-sm"],["selected",""],["value","Delete"],["value","Archive"],["type","button",1,"btn","btn-phoenix-danger","btn-sm","ms-2"],["id","tableExample","data-list",'{"valueNames":["id","name","job","date","status","reason","shift"],"page":5,"pagination":true}'],[1,"table-responsive","mx-n1","px-1"],[1,"table","table-sm","border-top","border-200","fs--1","mb-0"],[1,"white-space-nowrap","fs--1","align-middle","ps-0",2,"max-width","20px","width","18px"],[1,"form-check","mb-0","fs-0"],["id","bulk-select-example","type","checkbox","data-bulk-select",'{"body":"bulk-select-body","actions":"bulk-select-actions","replacedElement":"bulk-select-replace-element"}',1,"form-check-input"],["data-sort","name",1,"sort","align-middle"],["scope","col",1,"sort","text-end","align-middle","pe-0"],["id","bulk-select-body",1,"list"],[1,"fs--1","align-middle"],["type","checkbox","data-bulk-select-row",'{"id":"1","name":"John Doe","job":"Software Engineer","date":"2024-03-05","status":"Present","reason":"","shift":"Full Day"}',1,"form-check-input"],[1,"align-middle","name"],["type","button","data-toggle","tooltip","data-placement","top","title","Edit",1,"btn","btn-success","btn-sm","rounded-0",3,"click"],[1,"fa","fa-edit"],["type","button",1,"remove",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-trash"],["d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"],["d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"]],template:function(i,m){i&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"button",7),c("click",function(){return m.navigatetoAdd()}),d(8,"span",8),r(9,"span",9),a(10,"New"),n()()(),r(11,"div",10)(12,"div",11)(13,"select",12)(14,"option",13),a(15,"Bulk actions"),n(),r(16,"option",14),a(17,"Delete"),n(),r(18,"option",15),a(19,"Archive"),n()(),r(20,"button",16),a(21," Apply "),n()()()(),r(22,"div",17)(23,"div",18)(24,"table",19)(25,"thead")(26,"tr")(27,"th",20)(28,"div",21),d(29,"input",22),n()(),r(30,"th",23),a(31,"Name"),n(),r(32,"th",23),a(33,"Detail_department"),n(),r(34,"th",24),a(35," ACTION "),n()()(),r(36,"tbody",25),L(37,le,16,2,"tr",null,de,!0),n()()()()()()()()()),i&2&&(v(37),O(m.departments))},dependencies:[Q,W]});let o=t;return o})();function pe(o,t){if(o&1){let p=b();r(0,"form",13)(1,"div",14)(2,"label",15),a(3,"Name :"),n(),d(4,"input",16),n(),r(5,"div",14)(6,"label",15),a(7,"Detail_department :"),n(),d(8,"input",16),n(),r(9,"button",17),c("click",function(){u(p);let i=g();return h(i.updatedepartment())}),a(10,"Submit"),n()()}if(o&2){let p=g();k("formGroup",p.updateForm)}}var ae=(()=>{let t=class t{constructor(e,i,m,s){this.route=e,this.router=i,this.formB=m,this.departmentService=s}ngOnInit(){if(this.route.paramMap.subscribe(e=>{this.id=e.get("id")})){if(this.id==null)return;this.departmentService.getDepartmentById(this.id).subscribe(e=>{"name"in e&&(console.log(e),this.department=e,this.updateForm=this.formB.group({name:[""]}),this.updateForm.patchValue(e))})}}updatedepartment(){this.department.name=this.updateForm.value.name,this.departmentService.updateDepartment(this.department.id,this.department).subscribe(e=>{alert("department Updated Successfully!"),console.log(this.department),this.router.navigate(["home/department/"])},e=>{console.error("Update failed:",e)})}};t.\u0275fac=function(i){return new(i||t)(l(y),l(x),l(Y),l(S))},t.\u0275cmp=f({type:t,selectors:[["app-update-departement"]],decls:20,vars:1,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"main-body"],[1,"page-wrapper"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"col-md-6"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","value","","id","name","name","name","formControlName","name","placeholder","Tapez le nom",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"click"]],template:function(i,m){i&1&&(r(0,"body")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"h5"),a(12,"Basic Componant"),n()(),r(13,"div",10)(14,"h5"),a(15,"Form controls"),n(),d(16,"hr"),r(17,"div",6)(18,"div",11),B(19,pe,11,1,"form",12),n()()()()()()()()()()()()()),i&2&&(v(19),k("ngIf",m.updateForm))},dependencies:[G,E,D,_,C,P,K]});let o=t;return o})();var se=[{path:"",component:oe},{path:"AddDepartment",component:re},{path:"UpdateDepartment/:id",component:ae}],we=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=A({type:t}),t.\u0275inj=U({imports:[H,V.forChild(se),ee,te,V]});let o=t;return o})();export{we as a};
