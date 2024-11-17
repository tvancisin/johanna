(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const ke=!1;var xe=Array.isArray,Ne=Array.from,Fe=Object.defineProperty,le=Object.getOwnPropertyDescriptor;function Ge(e){for(var n=0;n<e.length;n++)e[n]()}const w=2,he=4,W=8,ae=16,D=32,$=64,B=128,H=256,b=512,I=1024,O=2048,pe=4096,J=8192,Be=16384,Oe=1<<18,Je=1<<19;function Ve(e){return e===this.v}function ze(e,n){return e!=e?n==n:e!==n||e!==null&&typeof e=="object"||typeof e=="function"}function je(e){return!ze(e,this.v)}function He(){throw new Error("effect_update_depth_exceeded")}function Ke(){throw new Error("state_unsafe_local_read")}function We(){throw new Error("state_unsafe_mutation")}function me(e){return{f:0,v:e,reactions:null,equals:Ve,version:0}}function $e(e,n=!1){var a;const t=me(e);return n||(t.equals=je),m!==null&&m.l!==null&&((a=m.l).s??(a.s=[])).push(t),t}function Ye(e,n=!1){return Ze($e(e,n))}function Ze(e){return h!==null&&h.f&w&&(y===null?hn([e]):y.push(e)),e}function M(e,n){return h!==null&&re()&&h.f&(w|ae)&&(y===null||!y.includes(e))&&We(),Xe(e,n)}function Xe(e,n){return e.equals(n)||(e.v=n,e.version=De(),ge(e,I),re()&&c!==null&&c.f&b&&!(c.f&D)&&(p!==null&&p.includes(e)?(C(c,I),Z(c)):E===null?pn([e]):E.push(e))),n}function ge(e,n){var t=e.reactions;if(t!==null)for(var a=re(),r=t.length,i=0;i<r;i++){var s=t[i],o=s.f;o&I||!a&&s===c||(C(s,n),o&(b|B)&&(o&w?ge(s,O):Z(s)))}}const Qe=2;let en=!1;var ce,be,_e;function nn(){if(ce===void 0){ce=window;var e=Element.prototype,n=Node.prototype;be=le(n,"firstChild").get,_e=le(n,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function tn(e=""){return document.createTextNode(e)}function ye(e){return be.call(e)}function Ce(e){return _e.call(e)}function U(e,n){return ye(e)}function A(e,n=1,t=!1){let a=e;for(;n--;)a=Ce(a);return a}function Pe(e){var n=e.children;if(n!==null){e.children=null;for(var t=0;t<n.length;t+=1){var a=n[t];a.f&w?ie(a):z(a)}}}function Ae(e){var n,t=c;S(e.parent);try{Pe(e),n=Me(e)}finally{S(t)}return n}function Ee(e){var n=Ae(e),t=(k||e.f&B)&&e.deps!==null?O:b;C(e,t),e.equals(n)||(e.v=n,e.version=De())}function ie(e){Pe(e),G(e,0),C(e,J),e.v=e.children=e.deps=e.ctx=e.reactions=null}function an(e,n){var t=n.last;t===null?n.last=n.first=e:(t.next=e,e.prev=t,n.last=e)}function V(e,n,t,a=!0){var r=(e&$)!==0,i=c,s={ctx:m,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|I,first:null,fn:n,last:null,next:null,parent:r?null:i,prev:null,teardown:null,transitions:null,version:0};if(t){var o=x;try{ue(!0),se(s),s.f|=Be}catch(u){throw z(s),u}finally{ue(o)}}else n!==null&&Z(s);var f=t&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&Je)===0;if(!f&&!r&&a&&(i!==null&&an(s,i),h!==null&&h.f&w)){var d=h;(d.children??(d.children=[])).push(s)}return s}function rn(e){const n=V(W,null,!1);return C(n,b),n.teardown=e,n}function sn(e){const n=V($,e,!0);return()=>{z(n)}}function on(e){return V(he,e,!1)}function ln(e){return cn(e)}function cn(e,n=0){return V(W|ae|n,e,!0)}function un(e,n=!0){return V(W|D,e,!0,n)}function qe(e){var n=e.teardown;if(n!==null){const t=h;q(null);try{n.call(null)}finally{q(t)}}}function Se(e){var n=e.deriveds;if(n!==null){e.deriveds=null;for(var t=0;t<n.length;t+=1)ie(n[t])}}function Re(e,n=!1){var t=e.first;for(e.first=e.last=null;t!==null;){var a=t.next;z(t,n),t=a}}function fn(e){for(var n=e.first;n!==null;){var t=n.next;n.f&D||z(n),n=t}}function z(e,n=!0){var t=!1;if((n||e.f&Oe)&&e.nodes_start!==null){for(var a=e.nodes_start,r=e.nodes_end;a!==null;){var i=a===r?null:Ce(a);a.remove(),a=i}t=!0}Re(e,n&&!t),Se(e),G(e,0),C(e,J);var s=e.transitions;if(s!==null)for(const f of s)f.stop();qe(e);var o=e.parent;o!==null&&o.first!==null&&Ie(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.parent=e.fn=e.nodes_start=e.nodes_end=null}function Ie(e){var n=e.parent,t=e.prev,a=e.next;t!==null&&(t.next=a),a!==null&&(a.prev=t),n!==null&&(n.first===e&&(n.first=a),n.last===e&&(n.last=t))}let ee=!1,ne=[];function dn(){ee=!1;const e=ne.slice();ne=[],Ge(e)}function vn(e){ee||(ee=!0,queueMicrotask(dn)),ne.push(e)}let K=!1,x=!1;function ue(e){x=e}let te=[],F=0;let h=null;function q(e){h=e}let c=null;function S(e){c=e}let y=null;function hn(e){y=e}let p=null,_=0,E=null;function pn(e){E=e}let we=0,k=!1,m=null;function De(){return++we}function re(){return m!==null&&m.l===null}function Y(e){var s,o;var n=e.f;if(n&I)return!0;if(n&O){var t=e.deps,a=(n&B)!==0;if(t!==null){var r;if(n&H){for(r=0;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e);e.f^=H}for(r=0;r<t.length;r++){var i=t[r];if(Y(i)&&Ee(i),a&&c!==null&&!k&&!((o=i==null?void 0:i.reactions)!=null&&o.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}a||C(e,b)}return!1}function mn(e,n,t){throw e}function Me(e){var v;var n=p,t=_,a=E,r=h,i=k,s=y,o=m,f=e.f;p=null,_=0,E=null,h=f&(D|$)?null:e,k=!x&&(f&B)!==0,y=null,m=e.ctx;try{var d=(0,e.fn)(),u=e.deps;if(p!==null){var l;if(G(e,_),u!==null&&_>0)for(u.length=_+p.length,l=0;l<p.length;l++)u[_+l]=p[l];else e.deps=u=p;if(!k)for(l=_;l<u.length;l++)((v=u[l]).reactions??(v.reactions=[])).push(e)}else u!==null&&_<u.length&&(G(e,_),u.length=_);return d}finally{p=n,_=t,E=a,h=r,k=i,y=s,m=o}}function gn(e,n){let t=n.reactions;if(t!==null){var a=t.indexOf(e);if(a!==-1){var r=t.length-1;r===0?t=n.reactions=null:(t[a]=t[r],t.pop())}}t===null&&n.f&w&&(p===null||!p.includes(n))&&(C(n,O),n.f&(B|H)||(n.f^=H),G(n,0))}function G(e,n){var t=e.deps;if(t!==null)for(var a=n;a<t.length;a++)gn(e,t[a])}function se(e){var n=e.f;if(!(n&J)){C(e,b);var t=c;c=e;try{n&ae?fn(e):Re(e),Se(e),qe(e);var a=Me(e);e.teardown=typeof a=="function"?a:null,e.version=we}catch(r){mn(r)}finally{c=t}}}function bn(){F>1e3&&(F=0,He()),F++}function _n(e){var n=e.length;if(n!==0){bn();var t=x;x=!0;try{for(var a=0;a<n;a++){var r=e[a];r.f&b||(r.f^=b);var i=[];Te(r,i),yn(i)}}finally{x=t}}}function yn(e){var n=e.length;if(n!==0)for(var t=0;t<n;t++){var a=e[t];!(a.f&(J|pe))&&Y(a)&&(se(a),a.deps===null&&a.first===null&&a.nodes_start===null&&(a.teardown===null?Ie(a):a.fn=null))}}function Cn(){if(K=!1,F>1001)return;const e=te;te=[],_n(e),K||(F=0)}function Z(e){K||(K=!0,queueMicrotask(Cn));for(var n=e;n.parent!==null;){n=n.parent;var t=n.f;if(t&($|D)){if(!(t&b))return;n.f^=b}}te.push(n)}function Te(e,n){var t=e.first,a=[];e:for(;t!==null;){var r=t.f,i=(r&D)!==0,s=i&&(r&b)!==0;if(!s&&!(r&pe))if(r&W){i?t.f^=b:Y(t)&&se(t);var o=t.first;if(o!==null){t=o;continue}}else r&he&&a.push(t);var f=t.next;if(f===null){let l=t.parent;for(;l!==null;){if(e===l)break e;var d=l.next;if(d!==null){t=d;continue e}l=l.parent}}t=f}for(var u=0;u<a.length;u++)o=a[u],n.push(o),Te(o,n)}function fe(e){var o;var n=e.f,t=(n&w)!==0;if(t&&n&J){var a=Ae(e);return ie(e),a}if(h!==null){y!==null&&y.includes(e)&&Ke();var r=h.deps;p===null&&r!==null&&r[_]===e?_++:p===null?p=[e]:p.push(e),E!==null&&c!==null&&c.f&b&&!(c.f&D)&&E.includes(e)&&(C(c,I),Z(c))}else if(t&&e.deps===null){var i=e,s=i.parent;s!==null&&!((o=s.deriveds)!=null&&o.includes(i))&&(s.deriveds??(s.deriveds=[])).push(i)}return t&&(i=e,Y(i)&&Ee(i)),e.v}const Pn=~(I|O|b);function C(e,n){e.f=e.f&Pn|n}function An(e,n=!1,t){m={p:m,c:null,e:null,m:!1,s:e,x:null,l:null},n||(m.l={s:null,u:null,r1:[],r2:me(!1)})}function En(e){const n=m;if(n!==null){const s=n.e;if(s!==null){var t=c,a=h;n.e=null;try{for(var r=0;r<s.length;r++){var i=s[r];S(i.effect),q(i.reaction),on(i.fn)}}finally{S(t),q(a)}}m=n.p,n.m=!0}return{}}const qn=new Set,de=new Set;function Sn(e,n,t,a){function r(i){if(a.capture||N.call(n,i),!i.cancelBubble){var s=h,o=c;q(null),S(null);try{return t.call(this,i)}finally{q(s),S(o)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?vn(()=>{n.addEventListener(e,r,a)}):n.addEventListener(e,r,a),r}function T(e,n,t,a,r){var i={capture:a,passive:r},s=Sn(e,n,t,i);(n===document.body||n===window||n===document)&&rn(()=>{n.removeEventListener(e,s,i)})}function N(e){var oe;var n=this,t=n.ownerDocument,a=e.type,r=((oe=e.composedPath)==null?void 0:oe.call(e))||[],i=r[0]||e.target,s=0,o=e.__root;if(o){var f=r.indexOf(o);if(f!==-1&&(n===document||n===window)){e.__root=n;return}var d=r.indexOf(n);if(d===-1)return;f<=d&&(s=f)}if(i=r[s]||e.target,i!==n){Fe(e,"currentTarget",{configurable:!0,get(){return i||t}});var u=h,l=c;q(null),S(null);try{for(var v,g=[];i!==null;){var P=i.assignedSlot||i.parentNode||i.host||null;try{var R=i["__"+a];if(R!==void 0&&!i.disabled)if(xe(R)){var[Le,...Ue]=R;Le.apply(i,[e,...Ue])}else R.call(i,e)}catch(j){v?g.push(j):v=j}if(e.cancelBubble||P===n||P===null)break;i=P}if(v){for(let j of g)queueMicrotask(()=>{throw j});throw v}}finally{e.__root=n,delete e.currentTarget,q(u),S(l)}}}function Rn(e){var n=document.createElement("template");return n.innerHTML=e,n.content}function In(e,n){var t=c;t.nodes_start===null&&(t.nodes_start=e,t.nodes_end=n)}function X(e,n){var t=(n&Qe)!==0,a,r=!e.startsWith("<!>");return()=>{a===void 0&&(a=Rn(r?e:"<!>"+e),a=ye(a));var i=t?document.importNode(a,!0):a.cloneNode(!0);return In(i,i),i}}function Q(e,n){e!==null&&e.before(n)}const wn=["touchstart","touchmove"];function Dn(e){return wn.includes(e)}function Mn(e,n){return Tn(e,n)}const L=new Map;function Tn(e,{target:n,anchor:t,props:a={},events:r,context:i,intro:s=!0}){nn();var o=new Set,f=l=>{for(var v=0;v<l.length;v++){var g=l[v];if(!o.has(g)){o.add(g);var P=Dn(g);n.addEventListener(g,N,{passive:P});var R=L.get(g);R===void 0?(document.addEventListener(g,N,{passive:P}),L.set(g,1)):L.set(g,R+1)}}};f(Ne(qn)),de.add(f);var d=void 0,u=sn(()=>{var l=t??n.appendChild(tn());return un(()=>{if(i){An({});var v=m;v.c=i}r&&(a.$$events=r),d=e(l,a)||{},i&&En()}),()=>{var P;for(var v of o){n.removeEventListener(v,N);var g=L.get(v);--g===0?(document.removeEventListener(v,N),L.delete(v)):L.set(v,g)}de.delete(f),ve.delete(d),l!==t&&((P=l.parentNode)==null||P.removeChild(l))}});return ve.set(d,u),d}let ve=new WeakMap;function Ln(e,n){var t=e.__className,a=Un(n);(t!==a||en)&&(n==null?e.removeAttribute("class"):e.className=a,e.__className=a)}function Un(e){return e??""}const kn="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(kn);var xn=X('<nav class="svelte-nbsayr"><div>Dr Johanna Amaya-Panche</div> <div class="menu-icon svelte-nbsayr">☰</div> <div><a href="#about" class="link svelte-nbsayr">About</a> <a href="#research" class="link svelte-nbsayr">Research</a> <a href="#grants" class="link svelte-nbsayr">Grants</a> <a href="#teaching" class="link svelte-nbsayr">Teaching</a> <a href="#public" class="link svelte-nbsayr">Public</a></div></nav>');function Nn(e){let n=Ye(!1);function t(){M(n,!fe(n))}var a=xn(),r=A(U(a),2),i=A(r,2),s=U(i),o=A(s,2),f=A(o,2),d=A(f,2),u=A(d,2);ln(()=>Ln(i,`links ${(fe(n)?"open":"")??""} svelte-nbsayr`)),T("click",r,t),T("click",s,()=>M(n,!1)),T("click",o,()=>M(n,!1)),T("click",f,()=>M(n,!1)),T("click",d,()=>M(n,!1)),T("click",u,()=>M(n,!1)),Q(e,a)}var Fn=X('<div class="image-container svelte-a0lofu"><div class="title svelte-a0lofu">Dr Johanna Amaya-Panche</div> <img src="./img.PNG" alt="Profile Image" class="svelte-a0lofu"> <div class="icons svelte-a0lofu"><img class="icon svelte-a0lofu" src="./src/assets/github.png" alt="Svelte Icon" style="height: 2em;"> <img class="icon svelte-a0lofu" src="./src/assets/link.png" alt="Svelte Icon" style="height: 2em;"> <img class="icon svelte-a0lofu" src="./src/assets/orcid.png" alt="Svelte Icon" style="height: 2em;"> <img class="icon svelte-a0lofu" src="./src/assets/google.png" alt="Svelte Icon" style="height: 2em;"> <img class="icon svelte-a0lofu" src="./src/assets/res.png" alt="Svelte Icon" style="height: 2em;"> <img class="icon svelte-a0lofu" src="./src/assets/x.png" alt="Svelte Icon" style="height: 2em;"></div></div>');function Gn(e){var n=Fn();Q(e,n)}var Bn=X(`<div class="content-container svelte-gbeqca"><section id="about" class="svelte-gbeqca"><h2 class="svelte-gbeqca">About Me</h2> <p class="svelte-gbeqca">I am a Postdoctoral Researcher at the University of Edinburgh. I am
            an Honorary Research Fellow at the Institute of the Americas,
            University College London, where I served as Lecturer and Director
            of the Master's Program in Latin American Studies. Additionally, I
            am part of the Conflict & Change Cluster within the UCL Department
            of Political Science. I earned my PhD in Government from the
            University of Essex in the United Kingdom under the supervision of
            Professor Kristian Skrede Gledistch and Dr Brian Phillips. I have a
            Master of Research in Latin American Studies and a Bachelor of
            Honours in Political Science and International Relations from
            Pontificia Universidad Javeriana in Colombia. My research interests
            are at the crossroads of International Relations, Political
            Behaviour, and Political Science. My particular focus centres on the
            impact of international actors upon the intricate local dynamics of
            collective action strategies initiated by civil society agents to
            foster peace, resilience, and reconciliation amidst armed conflicts,
            focusing on gender and ethnic issues. My primary sphere of interest
            encompasses Latin America, Colombia, and the Global South, which are
            of special significance to my work. In addition to these core
            concerns, my academic curiosity extends to interlinked subjects.
            This encompasses exploring transitional justice, multiculturalism,
            ethnicity, equality, diversity, and the inclusion of diverse
            populations and an inquiry into research methodologies that underpin
            our comprehension of intertwined global and local phenomena. I've
            also undertaken roles as a researcher and policy analyst for
            international organizations, including the European Union, the
            United States Agency for International Development (USAID), the
            Global Survivors Fund, and the United Nations Development Programme
            (UNDP) Fund. The projects I have been involved in have received
            funding from diverse sources, such as The European Union, the Global
            Challenges Research Fund (GCRF), and the USAID. My research has been
            discussed through media platforms such as France 24, The Dialogue,
            The Canning House, and the Interetnich Committee for implementing
            the Peace Agreement in Colombia. I am a proud first-generation,
            mixed-race female scholar from the Global South with a working-class
            family background. Before starting my PhD, I was an associate
            professor and consultant in Colombia, focusing on collective action
            for diversity, inclusion, peace-building, and community resilience.
            Outside work, I enjoy various sports and dances, including weight
            lifting, HIIT, salsa, contemporary dance, and Zumba.</p></section> <hr class="svelte-gbeqca"> <section id="research" class="svelte-gbeqca"><h2 class="svelte-gbeqca">Research</h2> <h3 class="svelte-gbeqca">Articles in Revision & Resubmission</h3> <p class="svelte-gbeqca">Amaya-Panche, J. Can Foreign Aid Foster Reconciliation? Evidence of
            the European Union Aid in Colombia. Cooperation and Conflict. <br> Amaya-Panche; J. Pino, J.F..; Méndez, N. Religiosity, tolerance, and
            willingness to reconcile in post-conflict contexts: Evidence from
            Colombia. Journal of Conflict Resolution. <br></p> <h3 class="svelte-gbeqca">Articles in Peer-Reviewed Journals</h3> <p class="svelte-gbeqca">Oidor, C. A., Mendoza, C. U., Amaya-Panche, J., Velazco, A. I.,
            Sáez, F. A., & Velásquez, D. A. B. (2019). Reconciliation and the
            territorial peacebuilding in Colombia: The case of the Nasa
            community. Revista CIDOB d’Afers Internacionals. (121), 91–112. <br> Pino, J. F., Amaya-Panche, J., & Diaz Aguirre, C. F. (2017). La
            teoría y la realidad del discurso de protección ambiental y las
            políticas extractivas en Bolivia. International Journal of
            Cooperation Development. 4(1). 137–155. <br> Amaya-Panche, J., & Langer, J. (2015). Truth Commissions as Learning
            Institutions to Deal with the Past: The Case of Kenya. In Economia &
            Sociedad. (9). 35-65. <br> Amaya-Panche, J., & Pino, J. F. (2015). Modelo de desarrollo y
            élites económicas en Bolivia: análisis de la concepción de
            desarrollo ancestral del presidente Evo Morales. Hallazgos. 12(24).
            241-255. <br> Amaya-Panche, J. (2012). Violencia y no-violencia: la experiencia de
            paz de la ATCC. Revista Criterios. 5(1). 185–220. <br> Amaya-Panche, J. (2008). La relación entre guerra y política en
            Colombia: de La Violencia a las violencias. Economía & Desarrollo.
            13–35. <br></p> <h3 class="svelte-gbeqca">Papers to be submitted to Peer-Reviewed Journals</h3> <p class="svelte-gbeqca">Amaya-Panche, J. Violent Repertoires, Legacies of Victim’s
            Mobilisation and Reconciliation: Evidence from Colombia. <br> Amaya-Panche, J. Building Bridges: Foreign Aid Beneficiaries’
            Satisfaction with Bottom-up and Top-down Approaches in
            Peacebuilding. <br></p> <h3 class="svelte-gbeqca">Books</h3> <p class="svelte-gbeqca">Amaya-Panche, J., & Idrobo, J. (2018). Reconciliaciones y
            resistencias: Modelos mentales y aprendizajes colectivos en la
            construcción de paz territorial en Colombia. (1). USTA Editorial. <br> Mention: Academic book of the year, recommended by the printing
            house. Martínez, H; Gutiérrez, P.; Ortiz, D; Dorussen, H.;
            Benedetti, V.; Bustos, A.; Contreras, L. Gaitán, A., García, A.;
            Amaya-Panche, J; Velasco, X. Fortalecimiento de la confianza y la
            inclusión socioeconómica. University of Essex. Universidad Externado
            de Colombia. <br></p> <h3 class="svelte-gbeqca">Book Chapters</h3> <p class="svelte-gbeqca">Amaya-Panche, J., Gomis-Balestreri, M., & Cepeda, J. (2017).
            Debilidad institucional y violencia en el Triángulo del Norte: hacia
            una gobernanza interna crítica con apoyo internacional. . 413-446.
            In Nino, C.A., Castaneda A. (Eds.) Nociones sobre seguridad y paz en
            las Relaciones Internacionales contemporáneas. USTA Editorial. <br> Gomis-Balestreri, M., & Amaya-Panche, J. (2017). El síndrome del
            tirano silencioso: del Estado fantasma al autoritarismo
            extractivista local. Estudio de caso: el Meta, Puerto Gaitan. (1)
            59-102. In Olate, J. (Ed.) Estados autoritarios latinoamericanos
            (Ayer, hoy y proyecciones) . <br></p> <h3 class="svelte-gbeqca">Policy Brief</h3> <p class="svelte-gbeqca">Amaya-Panche, J. (2021). Implementing the Peace Agreement in
            Colombia. Challenges for Peacebuilding and Reconciliation. European
            Union. Institute for Security Studies. <br></p></section> <hr class="svelte-gbeqca"> <section id="grants" class="svelte-gbeqca"><h2 class="svelte-gbeqca">Grants</h2> <h3 class="svelte-gbeqca">University College London</h3> <p class="svelte-gbeqca">Co-Principal Investigator. Displaced by Drought and Deshielo:
            Evaluating the Escalation and Experiences of Venezuelan Climate
            Refugeeism. UCL Climate Crisis Grand Challenge Small Grant. 2024
            -2025.</p> <h3 class="svelte-gbeqca">University of Edinburgh</h3> <p class="svelte-gbeqca">Postdoctoral Research Fellow. Networks of International Actors and
            Peace Inclusivity. 2024-2026.</p> <h3 class="svelte-gbeqca">University of Essex</h3> <p class="svelte-gbeqca">Research Officer: Department of Government GCRF: Strengthening trust
            and socioeconomic inclusion in Colombia. 2020-present <br> Research Officer. School of Law GCRF: Legitimacy, accountability, victims'
            participation, and reparation in transitional justice settings - lessons
            from and for Colombia. 2021-2022 <br> Research Officer: Women building peace in Colombia. 2019.</p> <h3 class="svelte-gbeqca">University of Aarhus</h3> <p class="svelte-gbeqca">Department of Political Science. PhD Research Visit. 2022</p> <h3 class="svelte-gbeqca">Global Survivors Fund</h3> <p class="svelte-gbeqca">Conflict-Related Sexual Violence. Research and Methodology Leader.
            Global Reparations Study. 2021-2022.</p> <h3 class="svelte-gbeqca">Universidad Santo Tomas</h3> <p class="svelte-gbeqca">Principal Investigator: Mental models of reconciliation and
            peacebuilding in Colombia. Phases I and II. 2016-2018</p> <h3 class="svelte-gbeqca">Universidad San Buenaventura</h3> <p class="svelte-gbeqca">Director of Research. Department of Political Science and
            International Relations. <br> Co-Researcher: Get the Truth Out of the Truth Commissions. 2015-2016. <br> Co-Researcher: Monitoring and Protection System for Forced Displacement.
            2013-2014.</p> <h3 class="svelte-gbeqca">European Union - Universidad del Rosario</h3> <p class="svelte-gbeqca">Senior Researcher: Demobilisation, Disarmament and Reintegration of
            Ex-combatants and the European Union Interventions. 2005.</p> <h3 class="svelte-gbeqca">Bogota Office of the Major</h3> <p class="svelte-gbeqca">Junior Researcher. Transitions to Democracy in a Comparative
            Perspective, Lessons for Colombia. 2004.</p></section> <hr class="svelte-gbeqca"> <section id="teaching" class="svelte-gbeqca"><h2 class="svelte-gbeqca">Teaching</h2> <h3 class="svelte-gbeqca">University College London (2021-Present)</h3> <h4 class="svelte-gbeqca">Institute of the Americas</h4> <p class="svelte-gbeqca">Undergraduate:<br> AMER0103: Conflict, Peace and Foreign Aid in
            the Americas <br> AMER0039: Introduction to Politics <br> AMER0053: Research Methods <br> AMER0038: Encountering the Americas: Key Themes and Concepts</p> <p class="svelte-gbeqca">Postgraduate Taught:<br> AMER0057: Researching the Americas <br> AMER0102: Conflict and Peacebuilding in Contemporary Latin America</p> <h4 class="svelte-gbeqca">Department of Political Science</h4> <p class="svelte-gbeqca">POLS0007: Principles of Social Science Research</p> <h3 class="svelte-gbeqca">King's College London (2021-2022)</h3> <h4 class="svelte-gbeqca">Department of Political Economy</h4> <p class="svelte-gbeqca">4SSPP101 Fundamentals of Politics Research <br> 5SSPP206: Research Methods for Politics</p> <h3 class="svelte-gbeqca">University Of Essex (2019-2022)</h3> <h4 class="svelte-gbeqca">Department of Government</h4> <p class="svelte-gbeqca">GV211:Violent Non-State Actors: Violence, Crime and Conflict<br> GV214: International Relations: Theories and Approaches <br> GV103: Introduction to International Relations<br> GV110: Scientific Reasoning for the Social Sciences<br> GV100: Introduction to Politics.</p> <h4 class="svelte-gbeqca">Department of Philosophical, Historical and Interdisciplinary
            Studies</h4> <p class="svelte-gbeqca">CS217: Contemporary Challenges in Latin America<br> CS141:Contemporary Challenges in Latin America<br> CS143: Colonialism to Revolution: Power and Politics in Latin
            America <br> CS261: America and the World</p> <h4 class="svelte-gbeqca">Department of Sociology</h4> <p class="svelte-gbeqca">SC213: Social Psychology (Sociology): Self and Interaction</p> <h3 class="svelte-gbeqca">Visiting & Guess Lecturer</h3> <p class="svelte-gbeqca">2024. University of Erfurt, Germany. Willy Brandt School of Public
            Policy. Module: Conflict, Peace, and Foreign Aid in the Americas. <br> 2021. Maastricht University, The Netherlands. Lecture: Conflict, Peace
            and Foreign Aid in Latin America. Module: Extractivism and Environmental
            Justice in Latin America and the Global South.</p> <h3 class="svelte-gbeqca">The Brilliant Club</h3> <p class="svelte-gbeqca">2021. PhD tutorial Module: Peace, Gender and International Relations <br> 2020. PhD tutorial Module: Peace and Reconciliation in Postconflict Colombia</p> <h3 class="svelte-gbeqca">Previous Teaching Experience Overseas (2006-2019)</h3> <p class="svelte-gbeqca">2016-2018. Undergraduate Modules on Political Science and
            International Relations. Department of Government and International
            Relations. Universidad Santo Tomas. <br> 2006- 2018. Undergraduate Modules on Political Science and International
            Relations. Department of Political Science and International Relations.
            Pontificia Universidad Javeriana. <br> 2015. Undergraduate and Postgraduate Modules on International
            Relations. Department of International Relations. Universidad Nueva
            Granada. <br> 2012 -2014. Undergraduate Modules on Political Science. Department
            of Government and International Relations. Universidad San
            Buenaventura.</p> <h3 class="svelte-gbeqca">Supervision</h3> <p class="svelte-gbeqca">Master Dissertations (Selected)</p> <h4 class="svelte-gbeqca">UCL - Institute of the Americas</h4> <p class="svelte-gbeqca">Maya Kendall (2023-2024). Understanding the impact of the 2016
            Colombian peace agreement on the collective land rights of the Nasa
            community in north Cauca, Colombia. Prize for the Best Dissertation
            in Latin American Politics. <br> George Way (2023-2024). The Structural Inequalities of Networked
            Urban Climate Governance: The Case of the C40 and Latin America. <br> Lian Chengkai (2023-2024). Environmental justice, participation, and
            representation of the ethnic communities. The case of Peninsula the
            Yucatan. <br> Yicheng Hua (2023-2024). Voices from the Salt Flats. Media
            Representation of Lithium Extraction and Indigenous Rights in the
            Salar of Atacama.</p></section> <hr class="svelte-gbeqca"> <section id="public" class="svelte-gbeqca"><h2 class="svelte-gbeqca">Public Engagement</h2> <h3 class="svelte-gbeqca">Consultancy (Selected)</h3> <p class="svelte-gbeqca">ACDI-VOCA/USAID. Consultant -Expert in qualitative methods and
            development for reconciliation. Topic: Barometer of Reconciliation
            for Colombia. <br> UNDP. National Commission for Reparation and Reconciliation of Colombia.
            Advisor. Topic: Reconciliation. <br> Bogota Office of the Major for Culture. Consultant. Topic: Peace Culture
            and Social Security for Artists and Craftsmen.</p> <h3 class="svelte-gbeqca">Media Analysis</h3> <h4 class="svelte-gbeqca">Interviews</h4> <h5>TVP World (Poland)</h5> <p class="svelte-gbeqca">Venezuela–Guyana: Another potential flashpoint <br> Venezuela–Guyana dispute over Essequibo</p> <h5>France 24 (Selected)</h5> <p class="svelte-gbeqca">Peace Process in Colombia<br> Brexit and Latin America<br> Pink Tyde in Latin America<br> Elections and Polarisation in Brazil<br> Fujimorism in Peru<br> Violence in the UK and Peaceful Mobilisation</p> <h3 class="svelte-gbeqca">Analysis and Dialogues</h3> <p class="svelte-gbeqca">Canning House: Colombia’s Regional Elections: A Barometer for the
            Peace Agreement Implementation <br> The Dialogue: What Would Land Redistribution Mean for Colombia?<br> ReD (Embrace the Dialogue): Foreign Aid and Community Reconciliation <br> iNews: Coup attempt in Bolivia raises questions over role of US in
            region <br> Razon Publica: Retórica versus realidad: la corrupción en el
            gobierno del cambio</p> <h3 class="svelte-gbeqca">Networks</h3> <p class="svelte-gbeqca">Member. Conflict & Change Cluster. Department of Political Science.
            UCL <br> Member. Network of European Peace Scientists. NEPS<br> Member. Conflict Research Society. CRS<br> Member. The Independent Diplomat . Board of Advisors.(Meet the
            Parties) <br> Member. Global South Academic Network<br> Member. CAPAZ. Colombian German Institute for Peace<br> Member. SLAS. Society for Latin American Studies. UK<br> Member. ACCP. Asociacion Chilena de Ciencia Politica<br> Member. Rodeemos el Dialogo (ReD). Embrace de Dialogo. UK<br> Advisor. The Ethnic Committee for the Implementation of the Peace
            Agreement in Colombia</p></section></div>`);function On(e){var n=Bn();Q(e,n)}var Jn=X('<div class="container svelte-ch86aj"><!> <div class="main svelte-ch86aj"><div class="left svelte-ch86aj"><!></div> <div class="right svelte-ch86aj"><!></div></div></div>');function Vn(e){var n=Jn(),t=U(n);Nn(t);var a=A(t,2),r=U(a),i=U(r);Gn(i);var s=A(r,2),o=U(s);On(o),Q(e,n)}Mn(Vn,{target:document.getElementById("app")});
