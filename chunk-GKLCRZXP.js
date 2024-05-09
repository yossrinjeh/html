import{a as P}from"./chunk-NYOAWLOO.js";import{b as et}from"./chunk-L3OHN5FL.js";import{a as lt}from"./chunk-VKBCP5J6.js";import{b as w,e as A,f as N,h as it,j as nt,k as F,m as ot,n as rt,o as D,p as U,q as R,r as L,t as at,u as st,v as dt}from"./chunk-O6ZXFWJR.js";import{a as X,c as Z,k as tt,m as h,o as V}from"./chunk-VM527ZQ7.js";import{$b as y,Ba as T,Ca as W,Kb as f,La as _,M as $,Mb as p,Vb as i,Wb as t,Xb as m,cc as g,ec as S,hd as O,id as I,mb as l,mc as G,nb as u,nc as n,oc as v,od as Q,ra as E,rc as J,sa as z,sc as K,tc as Y,ua as x,v as H,va as b}from"./chunk-DOLGZFZY.js";var k=(()=>{let o=class o{constructor(e){this.http=e,this.URL="http://20.49.205.136:3000/tasks",this.httpOtions={headers:new X({"Content-type":"application/json"})}}getAll(){return this.http.get(this.URL,this.httpOtions)}addTask(e){return this.http.post(this.URL,e,this.httpOtions)}getTaskById(e){return this.http.get(`${this.URL}/${e}`,this.httpOtions).pipe($(r=>(console.error("Error fetching holiday by ID:",r),H(r))))}updateTask(e,r){return this.http.put(`${this.URL}/${e}`,r,this.httpOtions)}deleteTask(e){return this.http.delete(`${this.URL}/${e}`,this.httpOtions)}};o.\u0275fac=function(r){return new(r||o)(_(Z))},o.\u0275prov=T({token:o,factory:o.\u0275fac,providedIn:"root"});let a=o;return a})();function ht(a,o){if(a&1){let c=y();i(0,"tr")(1,"td"),n(2),t(),i(3,"td"),n(4),t(),i(5,"td"),n(6),t(),i(7,"td"),n(8),t(),i(9,"td"),n(10),t(),i(11,"td")(12,"button",15),g("click",function(){let d=x(c).$implicit,s=S();return b(s.navigateToUpdate(d.taskId))}),m(13,"i",16),n(14," Edit "),t(),i(15,"button",17),g("click",function(){let d=x(c).$implicit,s=S();return b(s.onDelete(d.taskId))}),m(16,"i",18),n(17," Delete "),t()()()}if(a&2){let c=o.$implicit;l(2),v(c.title),l(2),v(c.description),l(2),v(c.priority),l(2),v(c.status),l(2),v(c.assignedToEmail)}}var pt=(()=>{let o=class o{constructor(e,r,d){this.taskService=e,this.userService=r,this.router=d,this.tasks=[],this.users=[]}ngOnInit(){this.loadTasks()}loadTasks(){let e=localStorage.getItem("user");if(e){let r=JSON.parse(e);this.email=r.email}this.taskService.getAll().subscribe(r=>{this.tasks=r.filter(d=>d.assignedToEmail===this.email)})}onDelete(e){this.taskService.deleteTask(e).subscribe(()=>{this.loadTasks()},r=>{console.error("Error deleting task:",r)})}navigateToUpdate(e){console.log(e),this.router.navigate(["/home/tasks/UpdateTask/"+e])}navigateToAdd(){this.router.navigate(["/home/tasks/AddTask"])}};o.\u0275fac=function(r){return new(r||o)(u(k),u(P),u(h))},o.\u0275cmp=E({type:o,selectors:[["app-list-task"]],decls:29,vars:1,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"container"],[1,"d-flex","align-items-center","justify-content-end","my-3"],["id","bulk-select-replace-element"],["type","button",1,"btn","btn-primary","btn-sm",3,"click"],[1,"fas","fa-plus","me-1"],["id","tableExample"],[1,"table-responsive"],[1,"table","table-bordered","table-hover"],[1,"table-dark"],["scope","col"],[4,"ngFor","ngForOf"],[1,"btn","btn-success","btn-sm","me-2",3,"click"],[1,"fas","fa-edit"],[1,"btn","btn-danger","btn-sm",3,"click"],[1,"fas","fa-trash-alt"]],template:function(r,d){r&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"button",7),g("click",function(){return d.navigateToAdd()}),m(8,"i",8),n(9," New Task "),t()()(),i(10,"div",9)(11,"div",10)(12,"table",11)(13,"thead",12)(14,"tr")(15,"th",13),n(16,"Title"),t(),i(17,"th",13),n(18,"Description"),t(),i(19,"th",13),n(20,"Priority"),t(),i(21,"th",13),n(22,"Status"),t(),i(23,"th",13),n(24,"Assigned To"),t(),i(25,"th",13),n(26,"Actions"),t()()(),i(27,"tbody"),f(28,ht,18,5,"tr",14),t()()()()()()()()()),r&2&&(l(28),p("ngForOf",d.tasks))},dependencies:[O],styles:[".table-responsive[_ngcontent-%COMP%]{overflow-x:auto}.task-list[_ngcontent-%COMP%]{display:flex;flex-direction:column}.task-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin-bottom:5px;cursor:pointer}.trash[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:80px;width:50px;height:50px}@keyframes _ngcontent-%COMP%_shake{0%{transform:translate(0)}10%,30%,50%,70%,90%{transform:translate(-10px)}20%,40%,60%,80%,to{transform:translate(10px)}}.shake[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_shake .5s infinite}.table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:8px;border:1px solid #dee2e6;text-align:left}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background-color:#a7bdea}.btn[_ngcontent-%COMP%]{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;border:1px solid transparent;border-radius:4px;transition:all .3s ease}.btn-success[_ngcontent-%COMP%]{color:#fff;background-color:#8dc099;border-color:#28a745}.btn-danger[_ngcontent-%COMP%]{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn[_ngcontent-%COMP%]:hover{opacity:.8;transform:translateY(-1px)}.remove[_ngcontent-%COMP%]{background-color:transparent;border:none}.remove[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:middle}"]});let a=o;return a})();var j=class{};function bt(a,o){a&1&&(i(0,"div",39),n(1,"Title is required"),t())}function Et(a,o){a&1&&(i(0,"div",39),n(1,"Priority is required"),t())}function yt(a,o){a&1&&(i(0,"div",39),n(1,"Status is required"),t())}function St(a,o){if(a&1&&(i(0,"option",40),n(1),t()),a&2){let c=o.$implicit;p("value",c.email),l(),v(c.email)}}function kt(a,o){a&1&&(i(0,"div",39),n(1,"Assigned To is required"),t())}function Ct(a,o){a&1&&(i(0,"div",39),n(1,"Created By is required"),t())}function _t(a,o){a&1&&(i(0,"div",39),n(1,"Created At is required"),t())}var mt=(()=>{let o=class o{constructor(e,r,d){this.taskService=e,this.router=r,this.userService=d,this.formValid=!1,this.users=[],this.task=new j,this.assignedToEmail=""}ngOnInit(){this.getUsers()}add(e){if(e.valid){let r={taskId:"",title:e.value.title,description:e.value.description,priority:e.value.priority,status:e.value.status,createBy:e.value.createBy,createdAt:e.value.createdAt,updatedAt:new Date,assignedToEmail:e.value.assignedToEmail};this.taskService.addTask(r).subscribe(()=>{alert("Added Successfully!"),this.router.navigate(["/home/tasks/"])},d=>{console.error(d)})}}getUsers(){this.userService.getAllUsers().subscribe({next:e=>{console.log(e),this.users=e},error:e=>{console.log(e)}})}};o.\u0275fac=function(r){return new(r||o)(u(k),u(h),u(P))},o.\u0275cmp=E({type:o,selectors:[["app-add-task"]],decls:75,vars:9,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"main-body"],[1,"page-wrapper"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"col-md-6"],[3,"ngSubmit"],["addForm","ngForm"],[1,"form-group"],["for","title"],["type","text","id","title","name","title","ngModel","","required","","placeholder","Enter the title",1,"form-control"],["class","text-danger",4,"ngIf"],["for","description"],["type","text","id","description","name","description","ngModel","","placeholder","Enter the description",1,"form-control"],["for","priority"],["id","priority","name","priority","ngModel","","required","",1,"form-control"],["value","","disabled",""],["value","LOW"],["value","MEDIUM"],["value","HIGH"],["for","status"],["id","status","name","status","ngModel","","required","",1,"form-control"],["value","PENDING"],["value","IN_PROGRESS"],["value","COMPLETED"],["for","assignedToEmail"],["id","assignedToEmail","name","assignedToEmail","required","",1,"form-control",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["for","createBy"],["type","text","id","createBy","name","createBy","ngModel","","required","","placeholder","Enter the creator's name",1,"form-control"],["for","createdAt"],["type","datetime-local","id","createdAt","name","createdAt","ngModel","","required","",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"text-danger"],[3,"value"]],template:function(r,d){if(r&1){let s=y();i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"h5"),n(11,"Add a task"),t()(),i(12,"div",10)(13,"h5"),n(14,"Task Form"),t(),m(15,"hr"),i(16,"div",6)(17,"div",11)(18,"form",12,13),g("ngSubmit",function(){x(s);let C=G(19);return b(d.add(C))}),i(20,"div",14)(21,"label",15),n(22,"Title:"),t(),m(23,"input",16),f(24,bt,2,0,"div",17),t(),i(25,"div",14)(26,"label",18),n(27,"Description:"),t(),m(28,"input",19),t(),i(29,"div",14)(30,"label",20),n(31,"Priority:"),t(),i(32,"select",21)(33,"option",22),n(34,"Select priority"),t(),i(35,"option",23),n(36,"Low"),t(),i(37,"option",24),n(38,"Medium"),t(),i(39,"option",25),n(40,"High"),t()(),f(41,Et,2,0,"div",17),t(),i(42,"div",14)(43,"label",26),n(44,"Status:"),t(),i(45,"select",27)(46,"option",22),n(47,"Select status"),t(),i(48,"option",28),n(49,"Pending"),t(),i(50,"option",29),n(51,"In Progress"),t(),i(52,"option",30),n(53,"Completed"),t()(),f(54,yt,2,0,"div",17),t(),i(55,"div",14)(56,"label",31),n(57,"Assigned To:"),t(),i(58,"select",32),Y("ngModelChange",function(C){return K(d.assignedToEmail,C)||(d.assignedToEmail=C),C}),i(59,"option",22),n(60,"Select user"),t(),f(61,St,2,2,"option",33),t(),f(62,kt,2,0,"div",17),t(),i(63,"div",14)(64,"label",34),n(65,"Created By:"),t(),m(66,"input",35),f(67,Ct,2,0,"div",17),t(),i(68,"div",14)(69,"label",36),n(70,"Created At:"),t(),m(71,"input",37),f(72,_t,2,0,"div",17),t(),i(73,"button",38),n(74," Submit "),t()()()()()()()()()()()()()()}if(r&2){let s=G(19);l(24),p("ngIf",s.controls.title.invalid&&(s.controls.title.dirty||s.controls.title.touched)),l(17),p("ngIf",s.controls.priority.invalid&&(s.controls.priority.dirty||s.controls.priority.touched)),l(13),p("ngIf",s.controls.status.invalid&&(s.controls.status.dirty||s.controls.status.touched)),l(4),J("ngModel",d.assignedToEmail),l(3),p("ngForOf",d.users),l(),p("ngIf",s.controls.assignedToEmail.invalid&&(s.controls.assignedToEmail.dirty||s.controls.assignedToEmail.touched)),l(5),p("ngIf",s.controls.createBy.invalid&&(s.controls.createBy.dirty||s.controls.createBy.touched)),l(5),p("ngIf",s.controls.createdAt.invalid&&(s.controls.createdAt.dirty||s.controls.createdAt.touched)),l(),p("disabled",!s.valid)}},dependencies:[O,I,F,U,R,w,D,A,N,L,nt,it],styles:[`.pcoded-main-container[_ngcontent-%COMP%]{background-color:#d0eef1}.card[_ngcontent-%COMP%]{margin-top:20px;box-shadow:0 4px 8px #0000001a;border-radius:10px;background-color:#fff}.card-header[_ngcontent-%COMP%]{background-color:#f8f9fa;padding:20px;border-bottom:1px solid #e9ecef;border-top-left-radius:10px;border-top-right-radius:10px}.card-body[_ngcontent-%COMP%]{padding:30px}.form-group[_ngcontent-%COMP%]{margin-bottom:30px}label[_ngcontent-%COMP%]{font-weight:700;color:#333}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{width:100%;padding:12px;border:1px solid #ced4da;border-radius:5px;box-sizing:border-box;font-size:16px}select[_ngcontent-%COMP%]{appearance:none;background:transparent;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5H7z' fill='%23212121'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 10px top 50%;background-size:20px auto}input[type=text][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:valid, select[_ngcontent-%COMP%]:focus{outline:none;border-color:#007bff}button[type=submit][_ngcontent-%COMP%]{background-color:#ccc;color:#fff;border:none;padding:15px 30px;border-radius:5px;cursor:pointer;font-size:18px;transition:background-color .3s ease}button[type=submit][_ngcontent-%COMP%]:not([disabled]){background-color:#06b5c6}button[type=submit][_ngcontent-%COMP%]:not([disabled]):hover{background-color:#005e68}.text-danger[_ngcontent-%COMP%]{color:#dc3545;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif}h5[_ngcontent-%COMP%]{font-size:22px;color:#333;margin-bottom:15px;padding-bottom:10px}.row[_ngcontent-%COMP%]{margin-left:-15px;margin-right:-15px}.col-md-6[_ngcontent-%COMP%]{padding-left:15px;padding-right:15px}@media (max-width: 768px){.col-md-6[_ngcontent-%COMP%]{width:100%}}`]});let a=o;return a})();function Mt(a,o){if(a&1){let c=y();i(0,"form",13)(1,"div",14)(2,"label",15),n(3,"Title:"),t(),m(4,"input",16),t(),i(5,"div",14)(6,"label",17),n(7,"Description:"),t(),m(8,"input",18),t(),i(9,"div",14)(10,"label",19),n(11,"Priority:"),t(),i(12,"select",20)(13,"option",21),n(14,"Low"),t(),i(15,"option",22),n(16,"Medium"),t(),i(17,"option",23),n(18,"High"),t()()(),i(19,"div",14)(20,"label",24),n(21,"Status:"),t(),i(22,"select",25)(23,"option",26),n(24,"Pending"),t(),i(25,"option",27),n(26,"In Progress"),t(),i(27,"option",28),n(28,"Completed"),t()()(),i(29,"div",14)(30,"label",29),n(31,"Updated At:"),t(),m(32,"input",30),t(),i(33,"button",31),g("click",function(){x(c);let r=S();return b(r.updatetask())}),n(34,"Submit"),t()()}if(a&2){let c=S();p("formGroup",c.updateForm)}}var ut=(()=>{let o=class o{Foyerupdate(){throw new Error("Method not implemented.")}constructor(e,r,d,s){this.route=e,this.router=r,this.formB=d,this.taskService=s}ngOnInit(){if(this.route.paramMap.subscribe(e=>{this.taskId=e.get("id")})){if(this.taskId==null)return;this.taskService.getTaskById(this.taskId).subscribe(e=>{"title"in e&&(console.log(e),this.task=e,this.updateForm=this.formB.group({title:[""],description:[""],priority:[""],status:[""],updatedAt:[""]}),this.updateForm.patchValue(e))})}}updatetask(){this.task.title=this.updateForm.value.title,this.task.description=this.updateForm.value.description,this.task.priority=this.updateForm.value.priority,this.task.status=this.updateForm.value.status,this.task.updatedAt=this.updateForm.value.updatedAt,this.taskService.updateTask(this.task.taskId,this.task).subscribe(e=>{alert("User Updated Successfully!"),console.log(this.task),this.router.navigate(["task/"])},e=>{console.error("Update failed:",e)})}};o.\u0275fac=function(r){return new(r||o)(u(tt),u(h),u(at),u(k))},o.\u0275cmp=E({type:o,selectors:[["app-update-task"]],decls:20,vars:1,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"main-body"],[1,"page-wrapper"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"col-md-6"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],[1,"form-group"],["for","exampleInputEmail1"],["type","text","id","title","name","title","formControlName","title","placeholder","Enter title",1,"form-control"],["for","description"],["type","text","id","description","name","description","formControlName","description","placeholder","Enter description",1,"form-control"],["for","priority"],["id","priority","name","priority","formControlName","priority","required","",1,"form-control"],["value","LOW"],["value","MEDIUM"],["value","HIGH"],["for","status"],["id","status","name","status","formControlName","status","required","",1,"form-control"],["value","PENDING"],["value","IN_PROGRESS"],["value","COMPLETED"],["for","updatedAt"],["type","date","id","updatedAt","name","updatedAt","formControlName","updatedAt","placeholder","Enter updated at",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"click"]],template:function(r,d){r&1&&(i(0,"body")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"h5"),n(12,"Basic Component"),t()(),i(13,"div",10)(14,"h5"),n(15,"Form controls"),t(),m(16,"hr"),i(17,"div",6)(18,"div",11),f(19,Mt,35,1,"form",12),t()()()()()()()()()()()()()),r&2&&(l(19),p("ngIf",d.updateForm))},dependencies:[I,F,U,R,w,D,A,N,L,ot,rt]});let a=o;return a})();var ft=(()=>{let o=class o{constructor(e,r){this.encryptionService=e,this.router=r}canActivate(e,r){let d=localStorage.getItem("authorities");return this.encryptionService.decrypt(d,"2f7").includes("EDIT::TASK")?!0:(this.router.navigate(["/notfound"]),!1)}};o.\u0275fac=function(r){return new(r||o)(_(et),_(h))},o.\u0275prov=T({token:o,factory:o.\u0275fac,providedIn:"root"});let a=o;return a})();var Tt=[{path:"",component:pt,canActivate:[lt,ft]},{path:"AddTask",component:mt},{path:"UpdateTask/:id",component:ut}],zt=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=z({type:o}),o.\u0275inj=W({imports:[Q,V.forChild(Tt),st,dt,V]});let a=o;return a})();export{k as a,zt as b};