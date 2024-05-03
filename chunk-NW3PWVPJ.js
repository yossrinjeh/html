import{I as R}from"./chunk-EKMETTBU.js";import{c as C,i as J}from"./chunk-VZVTRB5S.js";import{$c as y,Ba as I,Ca as j,Ea as w,F as T,Gb as k,La as l,Lb as $,M as b,Ma as H,Ob as W,Pb as B,Q as L,Vc as G,W as M,Ya as z,_a as S,ca as U,fc as V,gc as Y,h as A,ib as m,ja as v,nb as g,qa as x,ra as O,sa as D,u as f,v as N,vc as q,ya as P,z as d}from"./chunk-OXFVDIXM.js";var ot=["*"],E;function rt(){if(E===void 0&&(E=null,typeof window<"u")){let r=window;r.trustedTypes!==void 0&&(E=r.trustedTypes.createPolicy("angular#components",{createHTML:s=>s}))}return E}function p(r){return rt()?.createHTML(r)||r}function K(r){return Error(`Unable to find icon with the name "${r}"`)}function st(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function Q(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function X(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}var a=class{constructor(s,et,t){this.url=s,this.svgText=et,this.options=t}},ct=(()=>{let s=class s{constructor(t,e,n,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,i){return this._addSvgIconConfig(t,e,new a(n,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,i){let o=this._sanitizer.sanitize(m.HTML,n);if(!o)throw X(n);let c=p(o);return this._addSvgIconConfig(t,e,new a("",c,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new a(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let i=this._sanitizer.sanitize(m.HTML,e);if(!i)throw X(e);let o=p(i);return this._addSvgIconSetConfig(t,new a("",o,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(m.RESOURCE_URL,t);if(!e)throw Q(t);let n=this._cachedIconsByUrl.get(e);return n?f(F(n)):this._loadSvgIconFromConfig(new a(t,null)).pipe(v(i=>this._cachedIconsByUrl.set(e,i)),d(i=>F(i)))}getNamedSvgIcon(t,e=""){let n=Z(e,t),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(e,t),i)return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);let o=this._iconSetConfigs.get(e);return o?this._getSvgFromIconSetConfigs(t,o):N(K(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?f(F(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(d(e=>F(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return f(n);let i=e.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(b(c=>{let u=`Loading icon set URL: ${this._sanitizer.sanitize(m.RESOURCE_URL,o.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(u)),f(null)})));return T(i).pipe(d(()=>{let o=this._extractIconWithNameFromAnySet(t,e);if(!o)throw K(t);return o}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){let o=this._svgElementFromConfig(i),c=this._extractSvgIconFromSet(o,t,i.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(v(e=>t.svgText=e),d(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?f(null):this._fetchIcon(t).pipe(v(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let i=t.querySelector(`[id="${e}"]`);if(!i)return null;let o=i.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,n);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),n);let c=this._svgElementFromString(p("<svg></svg>"));return c.appendChild(o),this._setSvgAttributes(c,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(p("<svg></svg>")),n=t.attributes;for(let i=0;i<n.length;i++){let{name:o,value:c}=n[i];o!=="id"&&e.setAttribute(o,c)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,i=n?.withCredentials??!1;if(!this._httpClient)throw st();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let o=this._sanitizer.sanitize(m.RESOURCE_URL,e);if(!o)throw Q(e);let c=this._inProgressUrlFetches.get(o);if(c)return c;let h=this._httpClient.get(o,{responseType:"text",withCredentials:i}).pipe(d(u=>p(u)),M(()=>this._inProgressUrlFetches.delete(o)),U());return this._inProgressUrlFetches.set(o,h),h}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(Z(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let i=this._resolvers[n](e,t);if(i)return at(i)?new a(i.url,null,i.options):new a(i,null)}}};s.\u0275fac=function(e){return new(e||s)(l(C,8),l(J),l(y,8),l(S))},s.\u0275prov=I({token:s,factory:s.\u0275fac,providedIn:"root"});let r=s;return r})();function F(r){return r.cloneNode(!0)}function Z(r,s){return r+":"+s}function at(r){return!!(r.url&&r.options)}var lt=new w("MAT_ICON_DEFAULT_OPTIONS"),ht=new w("mat-icon-location",{providedIn:"root",factory:ut});function ut(){let r=H(y),s=r?r.location:null;return{getPathname:()=>s?s.pathname+s.search:""}}var tt=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ft=tt.map(r=>`[${r}]`).join(", "),dt=/^url\(['"]?#(.*?)['"]?\)$/,bt=(()=>{let s=class s{get color(){return this._color||this._defaultColor}set color(t){this._color=t}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,n,i,o,c){this._elementRef=t,this._iconRegistry=e,this._location=i,this._errorHandler=o,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=A.EMPTY,c&&(c.color&&(this.color=this._defaultColor=c.color),c.fontSet&&(this.fontSet=c.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,i)=>{n.forEach(o=>{i.setAttribute(o.name,`url('${t}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ft),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<e.length;i++)tt.forEach(o=>{let c=e[i],h=c.getAttribute(o),u=h?h.match(dt):null;if(u){let _=n.get(c);_||(_=[],n.set(c,_)),_.push({name:o,value:u[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(L(1)).subscribe(i=>this._setSvgElement(i),i=>{let o=`Error retrieving icon ${e}:${n}! ${i.message}`;this._errorHandler.handleError(new Error(o))})}}};s.\u0275fac=function(e){return new(e||s)(g(P),g(ct),z("aria-hidden"),g(ht),g(S),g(lt,8))},s.\u0275cmp=O({type:s,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&($("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),B(n.color?"mat-"+n.color:""),W("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[x.HasDecoratorInputTransform,"inline","inline",G],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[k,q],ngContentSelectors:ot,decls:1,vars:0,template:function(e,n){e&1&&(V(),Y(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let r=s;return r})(),Lt=(()=>{let s=class s{};s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=D({type:s}),s.\u0275inj=j({imports:[R,R]});let r=s;return r})();var Ut=(()=>{let s=class s{constructor(t){this._http=t,this.URL="20.49.205.136:3000/roles"}getRoles(){return this._http.get(this.URL)}getRoleById(t){return this._http.get(this.URL+`/${t}`)}addRole(t){return this._http.post(this.URL,t)}updateRole(t,e){return this._http.patch(this.URL+`/${t}`,e)}deleteRole(t){return this._http.delete(this.URL+`/${t}`)}};s.\u0275fac=function(e){return new(e||s)(l(C))},s.\u0275prov=I({token:s,factory:s.\u0275fac,providedIn:"root"});let r=s;return r})();export{bt as a,Lt as b,Ut as c};
