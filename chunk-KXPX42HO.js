import{c as p}from"./chunk-UHIV2YIU.js";import{Ba as r,La as h}from"./chunk-WHIBKZZI.js";var u=(()=>{let e=class e{constructor(t){this._http=t,this.URL="http://20.49.205.136:3000/users"}getSettings(t){return this._http.get(this.URL+`/settings/${t}`)}setSettings(t,s){return this._http.patch(this.URL+`/settings/${t}`,s)}getUser(t){return this._http.get(this.URL+"/UserPrivilegesByEmail/"+t)}getAllUsers(){return this._http.get(this.URL)}addUser(t){return this._http.post(this.URL,t)}deleteUser(t){return this._http.delete(this.URL+`/${t}`)}getUserByEmail(t){return this._http.get(this.URL+`/email/${t}`)}getUserById(t){return this._http.get(this.URL+`/${t}`)}updateUser(t,s){return this._http.patch(this.URL+`/${t}`,s)}uploadImage(t){return this._http.post(this.URL+"/upload",t)}uploadProfileImage(t,s){let n={image:s};return this._http.patch(this.URL+`/uploadImage/${t}`,n)}};e.\u0275fac=function(s){return new(s||e)(h(p))},e.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();export{u as a};
