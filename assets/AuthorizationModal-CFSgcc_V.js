const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/md5-hf_1SqVf.js","assets/crypto-vendor-lIZFEAA1.js"])))=>i.map(i=>d[i]);
import{_ as m}from"./index-CWJnIakH.js";import{N as y,a as l,_ as w}from"./utils-7_cPcmap.js";import{c as h,d as o,w as z,u as g,x as _,t as b,i as p,o as f}from"./vue-vendor-DAxx2COs.js";const k={name:"AuthorizationModal",props:{show:{type:Boolean,required:!0}},emits:["close","authorized"],components:{NotificationMessage:y},data(){return{password:"",isAuthorizing:!1}},methods:{async authorize(){if(!this.isAuthorizing){this.isAuthorizing=!0;try{const{default:d}=await m(async()=>{const{default:r}=await import("./md5-hf_1SqVf.js").then(a=>a.m);return{default:r}},__vite__mapDeps([0,1]));if(d(this.password).toString()!=="71d114fc94f6a0badc14cf88cb4b8d98"){l("Nieprawidłowe hasło","red"),this.password="",this.isAuthorizing=!1;return}const n={};for(let r=0;r<localStorage.length;r++){const a=localStorage.key(r);if(a!=="isEditingMode"&&a!=="currentPage")try{n[a]=JSON.parse(localStorage.getItem(a))}catch{}}if(Object.keys(n).length===0){l("Brak zmian do zapisania","yellow"),this.isAuthorizing=!1;return}const u=JSON.stringify(n),i=new Blob([u],{type:"application/json"}),s=new FileReader,e=await new Promise((r,a)=>{s.onloadend=()=>r(s.result.toString().split(",")[1]),s.onerror=a,s.readAsDataURL(i)}),c=await fetch("https://mc.kot.li/?key=shiftData.json",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({key:"shiftData",value:e})});if(!c.ok)throw new Error(`Server error: ${c.status}`);l("Zmiany zapisano pomyślnie!","green"),this.$emit("authorized"),this.closeModal()}catch{l("Nie udało się zaktualizować danych","red")}finally{this.isAuthorizing=!1}}},closeModal(){this.password="",this.$emit("close")},cancel(){this.isAuthorizing||this.closeModal()}},mounted(){this.$nextTick(()=>{this.$refs.passwordInput?.focus()})}},A={key:0,class:"modal"},S={class:"modal-content"},v={class:"input-container"},D={class:"button-container"},M=["disabled"],N={key:0,class:"spinner"},j=["disabled"];function P(d,t,n,u,i,s){return n.show?(f(),h("section",A,[o("div",S,[t[4]||(t[4]=o("h3",null,"Autoryzacja",-1)),t[5]||(t[5]=o("p",null,"Wpisz hasło aby zapisać zmiany:",-1)),o("div",v,[z(o("input",{type:"password","onUpdate:modelValue":t[0]||(t[0]=e=>i.password=e),onKeyup:t[1]||(t[1]=_((...e)=>s.authorize&&s.authorize(...e),["enter"])),placeholder:"Hasło...",autocomplete:"current-password",ref:"passwordInput"},null,544),[[g,i.password]])]),o("div",D,[o("button",{class:"primary-button",onClick:t[2]||(t[2]=(...e)=>s.authorize&&s.authorize(...e)),disabled:i.isAuthorizing},[o("span",null,b(i.isAuthorizing?"Weryfikacja...":"Zapisz"),1),i.isAuthorizing?(f(),h("span",N)):p("",!0)],8,M),o("button",{class:"secondary-button",onClick:t[3]||(t[3]=(...e)=>s.cancel&&s.cancel(...e)),disabled:i.isAuthorizing}," Anuluj ",8,j)])])])):p("",!0)}const I=w(k,[["render",P],["__scopeId","data-v-2ed4764c"]]);export{I as default};
