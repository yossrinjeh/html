import{a as r,c as h}from"./chunk-VM527ZQ7.js";import{Ba as s,La as n}from"./chunk-DOLGZFZY.js";var f=(()=>{let t=class t{constructor(i){this.http=i,this.URL="http://localhost:3000/configs",this.httpOtions={headers:new r({"Content-type":"application/json"})}}addConfig(i){return this.http.post(this.URL,i,this.httpOtions)}getConfig(){return this.http.get(this.URL)}updateConfig(i,o){return this.http.put(this.URL,o,this.httpOtions)}deleteConfig(i){return this.http.delete(this.URL+"/"+i,this.httpOtions)}};t.\u0275fac=function(o){return new(o||t)(n(h))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{f as a};