import{a as r,c as h}from"./chunk-VZVTRB5S.js";import{Ba as o,La as n}from"./chunk-OXFVDIXM.js";var f=(()=>{let t=class t{constructor(i){this.http=i,this.URL="20.49.205.136:3000/configs",this.httpOtions={headers:new r({"Content-type":"application/json"})}}addConfig(i){return this.http.post(this.URL,i,this.httpOtions)}getConfig(){return this.http.get(this.URL)}updateConfig(i,s){return this.http.put(this.URL,s,this.httpOtions)}deleteConfig(i){return this.http.delete(this.URL+"/"+i,this.httpOtions)}};t.\u0275fac=function(s){return new(s||t)(n(h))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{f as a};
