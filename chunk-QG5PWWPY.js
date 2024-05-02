import{a as H}from"./chunk-X4RXAOJJ.js";import{t as V}from"./chunk-O6ZXFWJR.js";import{a as j,c as k,k as R,m as T,o as L}from"./chunk-VM527ZQ7.js";import{$b as I,Ac as f,Ba as F,Ca as D,Cc as y,Kb as E,La as O,Mb as x,Vb as n,Wb as r,Xb as u,cc as b,ec as M,hd as P,mb as c,md as C,nb as h,nc as o,nd as B,oc as m,od as N,ra as S,sa as g,ua as v,va as w}from"./chunk-DOLGZFZY.js";var A=(()=>{let i=class i{constructor(t){this.http=t,this.URL="http://localhost:3000/payrolls",this.httpOptions={headers:new j({"Content-Type":"application/json"})}}createPayroll(t){return this.http.post(this.URL,t,this.httpOptions)}getAllPayrolls(){return this.http.get(this.URL,this.httpOptions)}getPayrollsByMonth(t){return this.http.get(`${this.URL}/month/${t}`,this.httpOptions)}getPayrollsByUserId(t){return this.http.get(`${this.URL}/user/${t}`,this.httpOptions)}getUserIdByEmail(t){return this.http.get(`${this.URL}/getUserByEmail/${t}`,this.httpOptions)}getAllUsers(){return this.http.get(`${this.URL}/getAllUsers`,this.httpOptions)}};i.\u0275fac=function(e){return new(e||i)(O(k))},i.\u0275prov=F({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();function G(s,i){if(s&1){let d=I();n(0,"tr")(1,"td"),o(2),f(3,"date"),r(),n(4,"td"),o(5),r(),n(6,"td"),o(7),r(),n(8,"td"),o(9),f(10,"number"),r(),n(11,"td"),o(12),f(13,"number"),r(),n(14,"td")(15,"button",17),b("click",function(){let l=v(d).$implicit,a=M();return w(a.print(l))}),u(16,"i",18),o(17," Print "),r()()()}if(s&2){let d=i.$implicit;c(2),m(y(3,5,d.month,"MMM d, yyyy")),c(3),m(d.user==null?null:d.user.firstname),c(2),m(d.user==null?null:d.user.lastname),c(2),m(y(10,8,d.user==null?null:d.user.basicSalary,"1.0-0")),c(3),m(y(13,11,d.netSalary,"1.0-0"))}}var W=(()=>{let i=class i{constructor(t,e,l,a,p){this.route=t,this.router=e,this.formB=l,this.payrollService=a,this.configService=p,this.currMonth=new Date().getMonth()+1,this.data=[],this.isDate=!1}ngOnInit(){let t,e=new Date,l=e.getMonth()+1;this.configService.getConfig().subscribe(a=>{this.cssr=a[0].cssrate,this.cnssr=a[0].cnssrate;let p=Number(a[0].payDay),_=new Date().getFullYear();t=new Date(_,l-1,p)}),this.payrollService.getAllPayrolls().subscribe(a=>{this.data=a;let p=new Date(a[a.length-1].month);console.log("last ",p),console.log("paydate",t),console.log("current date",e),console.log("current month",l),p.getMonth()+1!==l&&e>=t?this.isDate=!1:this.isDate=!0})}getDataByDate(t){let e=t.target.value,l;if(e){let a=new Date(e),p=a.getFullYear(),U=a.getMonth()+1;l=`${p}-${U.toString().padStart(2,"0")}`,this.payrollService.getPayrollsByMonth(l).subscribe(_=>{this.data=_})}else this.payrollService.getAllPayrolls().subscribe(a=>{this.data=a})}pay(){this.payrollService.getAllUsers().subscribe(t=>{for(let e of t){this.totalAllowances=0,this.totalDeductions=0;for(let a of e.allowances)new Date(a.date).getMonth()+1===this.currMonth&&(this.totalAllowances+=a.amount);for(let a of e.deductions)new Date(a.date).getMonth()+1===this.currMonth&&(this.totalDeductions+=a.amount);this.taxableS=(e.basicSalary+this.totalAllowances-this.totalDeductions)*(1-this.cnssr),this.taxableBase=this.taxableS*12-2e3,e.familySituation==1&&(this.taxableBase-=300,this.taxableBase-=e.childrenNumber*100),this.taxAmount=0,this.taxableBase<=5e3?this.taxAmount=0:this.taxableBase<=2e4?this.taxAmount=(this.taxableBase-5e3)*.26:this.taxableBase<=3e4?this.taxAmount=3900+(this.taxableBase-2e4)*.28:this.taxableBase<=5e4?this.taxAmount=5600+(this.taxableBase-3e4)*.32:this.taxAmount=11920+(this.taxableBase-5e4)*.35,this.css=this.taxableBase*this.cssr/12;let l={id:"",userId:e.id,month:new Date().toISOString(),taxableSalary:this.taxableS,cnssdeduction:(e.basicSalary+this.totalAllowances-this.totalDeductions)*this.cnssr,irpp:this.taxAmount/12,css:this.css,netSalary:this.taxableS-this.taxAmount/12-this.css};this.payrollService.createPayroll(l).subscribe(()=>{console.log("Payroll created successfully for user: ",e.id)},a=>{console.error("Error creating payroll for user: ",e.id,a)})}})}print(t){let e=window.open("","_blank");e?(e.document.write(`
        <html>
          <head>
            <title>Payroll Details</title>
            <style>
              body {
                font-family: Arial, sans-serif;
              }
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th, td {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
              }
              th {
                background-color: #f2f2f2;
              }
            </style>
          </head>
          <body>
            <h2>Payroll Details</h2>
            <table>
              <tr>
                <th>Attribute</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>User ID</td>
                <td>${t.userId}</td>
              </tr>
              <tr>
                <td>Month</td>
                <td>${new Date(t.month).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td>Taxable Salary</td>
                <td>${t.taxableSalary}</td>
              </tr>
              <tr>
                <td>CNSS Deduction</td>
                <td>${t.cnssdeduction}</td>
              </tr>
              <tr>
                <td>IRPP</td>
                <td>${t.irpp}</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>${t.css}</td>
              </tr>
              <tr>
                <td>Net Salary</td>
                <td>${t.netSalary}</td>
              </tr>
            </table>
          </body>
        </html>
      `),e.document.close(),e.print()):console.error("Failed to open print window.")}};i.\u0275fac=function(e){return new(e||i)(h(R),h(T),h(V),h(A),h(H))},i.\u0275cmp=S({type:i,selectors:[["app-list-payroll"]],decls:37,vars:2,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"main-body"],[1,"page-wrapper"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-header"],[1,"btn","btn-primary","btn-sm","float-right",3,"hidden","click"],["type","month",1,"form-control",3,"change"],[1,"card-body"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"btn","btn-success","btn-sm",3,"click"],[1,"fas","fa-print"]],template:function(e,l){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"h5"),o(11,"Payroll"),r(),n(12,"button",10),b("click",function(){return l.pay()}),o(13,"Add"),r()(),n(14,"input",11),b("change",function(p){return l.getDataByDate(p)}),r(),n(15,"div",12),u(16,"h5")(17,"hr"),n(18,"table",13)(19,"thead")(20,"tr")(21,"th",14),o(22,"Month"),r(),n(23,"th",14),o(24,"First Name"),r(),n(25,"th",14),o(26,"Last Name"),r(),n(27,"th",14),o(28,"Basic Salary"),r(),n(29,"th",14),o(30,"Net Salary"),r(),n(31,"th",14),o(32,"Actions"),r()()(),n(33,"tbody"),E(34,G,18,14,"tr",15),r()(),u(35,"hr")(36,"div",16),r()()()()()()()()()()),e&2&&(c(12),x("hidden",l.isDate),c(22),x("ngForOf",l.data))},dependencies:[P,B,C],styles:[".styled-input[_ngcontent-%COMP%]{padding:8px 12px;border:1px solid #ccc;border-radius:5px;font-size:16px;outline:none}.styled-input[_ngcontent-%COMP%]:focus{border-color:#007bff}"]});let s=i;return s})();function K(s,i){if(s&1){let d=I();n(0,"tr")(1,"td"),o(2),f(3,"date"),r(),n(4,"td"),o(5),r(),n(6,"td"),o(7),r(),n(8,"td"),o(9),f(10,"number"),r(),n(11,"td"),o(12),f(13,"number"),r(),n(14,"td")(15,"button",14),b("click",function(){let l=v(d).$implicit,a=M();return w(a.print(l))}),u(16,"i",15),o(17," Print "),r()()()}if(s&2){let d=i.$implicit;c(2),m(y(3,5,d.month,"MMM d, yyyy")),c(3),m(d.user==null?null:d.user.firstname),c(2),m(d.user==null?null:d.user.lastname),c(2),m(y(10,8,d.user==null?null:d.user.basicSalary,"1.0-0")),c(3),m(y(13,11,d.netSalary,"1.0-0"))}}var z=(()=>{let i=class i{constructor(t){this.payrollService=t}ngOnInit(){let t=localStorage.getItem("user");if(t){let e=JSON.parse(t).email;this.payrollService.getUserIdByEmail(e).subscribe(l=>{this.id=l.id,this.getDataByUser(this.id)})}}getDataByUser(t){this.payrollService.getPayrollsByUserId(t).subscribe(e=>{this.data=e})}print(t){let e=window.open("","_blank");e?(e.document.write(`
        <html>
          <head>
            <title>Payroll Details</title>
            <style>
              body {
                font-family: Arial, sans-serif;
              }
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th, td {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
              }
              th {
                background-color: #f2f2f2;
              }
            </style>
          </head>
          <body>
            <h2>Payroll Details</h2>
            <table>
              <tr>
                <th>Attribute</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>User ID</td>
                <td>${t.userId}</td>
              </tr>
              <tr>
                <td>Month</td>
                <td>${new Date(t.month).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td>Taxable Salary</td>
                <td>${t.taxableSalary}</td>
              </tr>
              <tr>
                <td>CNSS Deduction</td>
                <td>${t.cnssdeduction}</td>
              </tr>
              <tr>
                <td>IRPP</td>
                <td>${t.irpp}</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>${t.css}</td>
              </tr>
              <tr>
                <td>Net Salary</td>
                <td>${t.netSalary}</td>
              </tr>
            </table>
          </body>
        </html>
      `),e.document.close(),e.print()):console.error("Failed to open print window.")}};i.\u0275fac=function(e){return new(e||i)(h(A))},i.\u0275cmp=S({type:i,selectors:[["app-list-user-payroll"]],decls:31,vars:1,consts:[[1,"pcoded-main-container"],[1,"pcoded-wrapper"],[1,"pcoded-content"],[1,"pcoded-inner-content"],[1,"main-body"],[1,"page-wrapper"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"btn","btn-success","btn-sm",3,"click"],[1,"fas","fa-print"]],template:function(e,l){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9),u(10,"h5")(11,"hr"),n(12,"table",10)(13,"thead")(14,"tr")(15,"th",11),o(16,"Month"),r(),n(17,"th",11),o(18,"First Name"),r(),n(19,"th",11),o(20,"Last Name"),r(),n(21,"th",11),o(22,"Basic Salary"),r(),n(23,"th",11),o(24,"Net Salary"),r(),n(25,"th",11),o(26,"Actions"),r()()(),n(27,"tbody"),E(28,K,18,14,"tr",12),r()(),u(29,"hr")(30,"div",13),r()()()()()()()()()()),e&2&&(c(28),x("ngForOf",l.data))},dependencies:[P,B,C]});let s=i;return s})();var Q=[{path:"",component:W},{path:"payslip",component:z}],J=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=g({type:i}),i.\u0275inj=D({imports:[L.forChild(Q),L]});let s=i;return s})();var ft=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=g({type:i}),i.\u0275inj=D({imports:[N,J]});let s=i;return s})();export{A as a,ft as b};
