import{S as b,P as v,A as P,d as O}from"./AuthorizationModal-CYdv9e65.js";import{addNotification as c}from"./NotificationMessage-caDOYRe7.js";import{_ as j,r as k,o as g,c as S,a as p,b as o,t as y,w as x,F as w,e as D,f as M,d as E,n as C,g as _,v as U}from"./index-lvBPnoRy.js";const A={name:"SpreadsheetView",emits:["update-editing-mode"],components:{ShiftCountWindow:b,PeopleListWindow:v,AuthorizationModal:P},props:{isEditingMode:{type:Boolean,required:!0}},data(){return{editedShifts:{},selectedMonth:new Date().getMonth(),selectedYear:new Date().getFullYear(),monthDays:[],localData:{},daysOfWeek:O,madeChanges:!1,people:[{id:1,name:"Milena",ratownik:!1},{id:2,name:"Mikołaj",ratownik:!1},{id:3,name:"Aleksandra",ratownik:!1},{id:4,name:"Łukasz",ratownik:!0},{id:5,name:"Joanna",ratownik:!1},{id:6,name:"Natalia",ratownik:!0},{id:7,name:"Marcin",ratownik:!0},{id:8,name:"Alina",ratownik:!1},{id:9,name:"Ewelina",ratownik:!1},{id:7,name:"Teresa",ratownik:!1}],locale:"pl",showPasswordModal:!1,scrollContainer:null}},computed:{daysInMonth(){return this.monthDays.map(t=>t.date.getDate())},orderedPeople(){const t=["Milena","Mikołaj","Aleksandra","Joanna","Łukasz","Natalia","Marcin"];return this.people.filter(i=>t.includes(i.name)).sort((i,n)=>t.indexOf(i.name)-t.indexOf(n.name))},monthYear(){return new Date(this.selectedYear,this.selectedMonth).toLocaleString(this.locale,{month:"long",year:"numeric"})}},methods:{emitEditingMode(t){this.$emit("update-editing-mode",t)},isEditing(t,i){return this.editedShifts.hasOwnProperty(`${t}-${i}`)},getShiftForPersonAndDay(t,i){const n=this.monthDays.find(a=>a.date.getDate()===i)?.date.toDateString(),r=localStorage.getItem(n);if(r){const a=JSON.parse(r),s=[];return(a.dayShift1===t||a.dayShift2===t)&&s.push("D"),(a.nightShift1===t||a.nightShift2===t)&&s.push("N"),s.join(" ")}return null},editCell(t,i){if(this.isEditingMode){const n=`${t}-${i}`,r=this.getShiftForPersonAndDay(t,i)||"";this.editedShifts[n]=r}},saveShift(t,i){const n=`${t}-${i}`,r=this.editedShifts[n]?.trim().toUpperCase()||"",a=this.getShiftForPersonAndDay(t,i)||"";if(!["D","N","D N",""].includes(r)){c("Zła wartość! Tylko 'D', 'N', lub 'D N' są dozwolone."),this.$nextTick(()=>{this.editedShifts[n]=a});return}const l=this.monthDays.find(d=>d.date.getDate()===i)?.date.toDateString();if(!l||!this.monthDays)return;const e=this.monthDays.find(d=>d.date.toDateString()===l);if(!e)return;if(r===""){e.dayShift1===t&&(e.dayShift1=null,e.dayShift1Name="Not assigned",e.dayShift1UserChanged=!0),e.dayShift2===t&&(e.dayShift2=null,e.dayShift2Name="Not assigned",e.dayShift2UserChanged=!0),e.nightShift1===t&&(e.nightShift1=null,e.nightShift1Name="Not assigned",e.nightShift1UserChanged=!0),e.nightShift2===t&&(e.nightShift2=null,e.nightShift2Name="Not assigned",e.nightShift2UserChanged=!0);const d={dayShift1:e.dayShift1,dayShift2:e.dayShift2,nightShift1:e.nightShift1,nightShift2:e.nightShift2,dayShift1Name:e.dayShift1Name,dayShift2Name:e.dayShift2Name,nightShift1Name:e.nightShift1Name,nightShift2Name:e.nightShift2Name};this.localData[l]=d,localStorage.setItem(l,JSON.stringify(d)),this.madeChanges=!0,this.$nextTick(()=>{this.editedShifts[n]=void 0,delete this.editedShifts[n],this.$forceUpdate()});return}const f=this.people.find(d=>d.id===t);if(r.includes("D")){if(f?.ratownik&&[e.dayShift1,e.dayShift2].filter(Boolean).some(u=>this.people.find(N=>N.id===u)?.ratownik&&u!==t)){c("Nie można przypisać dwóch ratowników na zmianę dzienną."),delete this.editedShifts[n];return}if(r==="D"&&a!=="D N"){if(e.dayShift1===t||e.dayShift2===t){c("Ta osoba już ma zmianę dzienną."),delete this.editedShifts[n];return}if(!e.dayShift1)e.dayShift1=t,e.dayShift1Name=f.name,e.dayShift1UserChanged=!0;else if(!e.dayShift2)e.dayShift2=t,e.dayShift2Name=f.name,e.dayShift2UserChanged=!0;else{c("Nie można przypisać więcej niż dwóch osób na zmianę dzienną."),delete this.editedShifts[n];return}}else if(r==="D N"&&!(e.dayShift1===t||e.dayShift2===t))if(!e.dayShift1)e.dayShift1=t,e.dayShift1Name=f.name,e.dayShift1UserChanged=!0;else if(!e.dayShift2)e.dayShift2=t,e.dayShift2Name=f.name,e.dayShift2UserChanged=!0;else{c("Nie można przypisać więcej niż dwóch osób na zmianę dzienną."),delete this.editedShifts[n];return}}if(r.includes("N")){if(f?.ratownik&&[e.nightShift1,e.nightShift2].filter(Boolean).some(u=>this.people.find(N=>N.id===u)?.ratownik&&u!==t)){c("Nie można przypisać dwóch ratowników na zmianę nocną."),delete this.editedShifts[n];return}if(r==="N"&&a!=="D N"){if(e.nightShift1===t||e.nightShift2===t){c("Ta osoba już ma zmianę nocną."),delete this.editedShifts[n];return}if(!e.nightShift1)e.nightShift1=t,e.nightShift1Name=f.name,e.nightShift1UserChanged=!0;else if(!e.nightShift2)e.nightShift2=t,e.nightShift2Name=f.name,e.nightShift2UserChanged=!0;else{c("Nie można przypisać więcej niż dwóch osób na zmianę nocną."),delete this.editedShifts[n];return}}else if(r==="D N"&&!(e.nightShift1===t||e.nightShift2===t))if(!e.nightShift1)e.nightShift1=t,e.nightShift1Name=f.name,e.nightShift1UserChanged=!0;else if(!e.nightShift2)e.nightShift2=t,e.nightShift2Name=f.name,e.nightShift2UserChanged=!0;else{c("Nie można przypisać więcej niż dwóch osób na zmianę nocną."),delete this.editedShifts[n];return}}const h={dayShift1:e.dayShift1,dayShift2:e.dayShift2,nightShift1:e.nightShift1,nightShift2:e.nightShift2};this.localData[l]=h,this.madeChanges=!0,localStorage.setItem(l,JSON.stringify(h)),delete this.editedShifts[n]},generateMonthDays(){const t=this.selectedYear,i=this.selectedMonth,n=new Date(t,i+1,0).getDate();this.monthDays=[];for(let r=1;r<=n;r++)this.monthDays.push({date:new Date(t,i,r),dayShift1:null,dayShift2:null,nightShift1:null,nightShift2:null,dayShift1Name:"Not assigned",dayShift2Name:"Not assigned",nightShift1Name:"Not assigned",nightShift2Name:"Not assigned",isCurrentMonth:!0});this.loadFromLocalStorage()},changeMonth(t){this.madeChanges&&!confirm("Masz niezapisane zmiany. Czy napewno chcesz zmienić miesiąc? Zmiany zostaną usunięte.")||(this.editedShifts={},this.selectedMonth=this.selectedMonth+t,this.generateMonthDays())},loadFromLocalStorage(){const t=this.selectedYear,i=this.selectedMonth;for(let n=1;n<=31;n++){const r=new Date(t,i,n).toDateString(),a=localStorage.getItem(r);if(a)try{const s=JSON.parse(a),l=this.monthDays.find(e=>e.date.toDateString()===r);l&&(l.dayShift1=s.dayShift1,l.dayShift2=s.dayShift2,l.nightShift1=s.nightShift1,l.nightShift2=s.nightShift2,l.dayShift1Name=s.dayShift1Name||"Not assigned",l.dayShift2Name=s.dayShift2Name||"Not assigned",l.nightShift1Name=s.nightShift1Name||"Not assigned",l.nightShift2Name=s.nightShift2Name||"Not assigned")}catch(s){console.error("Failed to load local data:",s),c("Nie udało się załadować danych lokalnych. Sprawdź konsolę.","red")}}},resolvePersonName(t){const i=this.people.find(n=>n.id===t);return i?{name:i.name,isRatownik:i.ratownik}:{name:void 0,isRatownik:!1}},showPasswordPrompt(){this.showPasswordModal=!0},async fetchServerShiftData(){this.syncedChanges={};try{const t=await fetch("https://mc.kot.li/?key=shiftData.json",{method:"GET",headers:{"Content-Type":"application/json"}});if(!t.ok)throw t.status===404&&(console.error("Nie znaleziono harmonogramu na serwerze"),c("Nie znaleziono harmonogramu na serwerze","red")),new Error(console.error(`Nie udało się połączyć z serwerem: ${t.status}`),c(`Nie udało się połączyć z serwerem: ${t.status}`,"red"));return await t.json()}catch(t){return console.error("Error fetching data from server:",t),c("Failed to fetch data from server","red"),null}},async checkShiftDataSync(){this.resetSyncedChangesSessionStorage();const t=await this.fetchServerShiftData();if(!t){console.log("No remote data fetched.");return}const i={};for(const[n,r]of Object.entries(t)){const a=localStorage.getItem(n),s=a?JSON.parse(a):null,l={};if(!s)i[n]={...r},localStorage.setItem(n,JSON.stringify(r));else{for(const[e,f]of Object.entries(r)){const h=s[e]||null;h!==f&&(l[e]={from:h||"Empty",to:f||"Empty"})}Object.keys(l).length>0&&(i[n]=l),localStorage.setItem(n,JSON.stringify(r))}}this.generateMonthDays(),this.syncedChanges=i,sessionStorage.setItem("syncedChanges",JSON.stringify(this.syncedChanges)),setTimeout(()=>{this.syncedChanges={},sessionStorage.removeItem("syncedChanges")},5e3)},resetSyncedChangesSessionStorage(){const t=sessionStorage.getItem("syncedChanges");t&&(this.syncedChanges=JSON.parse(t),setTimeout(()=>{this.syncedChanges={},sessionStorage.removeItem("syncedChanges")},5e3))},showPasswordPrompt(){this.showPasswordModal=!0},handleAuthorization(){this.showPasswordModal=!1,this.madeChanges=!1},handleScroll(t){this.scrollContainer&&(t.preventDefault(),this.scrollContainer.scrollLeft+=t.deltaY)}},mounted(){this.generateMonthDays(),this.scrollContainer=this.$refs.scrollContainer}},L=["disabled"],V={class:"spreadsheet-view"},T={class:"monthChange"},W={style:{"font-weight":"bold",width:"144px !important",color:"var(--color-text-dark)"},role:"heading","aria-level":"2"},Y={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"refresh-icon",style:{width:"30px",height:"30px"}},F={class:"top-right-buttons compact-toggle",title:"Przełącz tryb edytowania"},J=["checked"],B=["aria-checked"],R={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"pencil-icon"},K={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"pencil-icon"},Z={class:"calendar-table"},q=["onClick","aria-label","title"],G={key:0},H=["onUpdate:modelValue","onChange"],Q={key:0,style:{display:"flex","flex-direction":"column","align-items":"center"}};function X(t,i,n,r,a,s){const l=k("AuthorizationModal"),e=k("PeopleListWindow"),f=k("ShiftCountWindow");return g(),S(w,null,[p(l,{show:a.showPasswordModal,localData:a.localData,onClose:i[0]||(i[0]=h=>a.showPasswordModal=!1),onAuthorized:s.handleAuthorization},null,8,["show","localData","onAuthorized"]),o("button",{disabled:!a.madeChanges,onClick:i[1]||(i[1]=(...h)=>s.showPasswordPrompt&&s.showPasswordPrompt(...h)),class:"submit-button"}," Zapisz ",8,L),o("div",V,[o("section",T,[o("button",{class:"buttonMonthChange",onClick:i[2]||(i[2]=h=>s.changeMonth(-1)),"aria-label":"Poprzedni miesiąc",title:"Idź do poprzedniego miesiąca"}," ‹ "),o("span",W,y(s.monthYear.toUpperCase()),1),o("button",{class:"buttonMonthChange",onClick:i[3]||(i[3]=h=>s.changeMonth(1)),"aria-label":"Następny miesiąc",title:"Idź do następnego miesiąca"}," › ")]),o("button",{class:"top-right-buttons buttonRefresh",onClick:i[4]||(i[4]=h=>s.checkShiftDataSync()),"aria-label":"Odśwież harmonogram",title:"Odśwież harmonogram"},[(g(),S("svg",Y,i[7]||(i[7]=[o("path",{d:"M23 4v6h-6"},null,-1),o("path",{d:"M1 20v-6h6"},null,-1),o("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10"},null,-1),o("path",{d:"M20.49 15a9 9 0 0 1-14.85 3.36L1 14"},null,-1)])))]),o("label",F,[o("input",{type:"checkbox",checked:n.isEditingMode,onChange:i[5]||(i[5]=h=>s.emitEditingMode(h.target.checked)),"aria-label":"Przełącz tryb edytowania"},null,40,J),o("span",{class:"slider",role:"switch","aria-checked":n.isEditingMode},[n.isEditingMode?(g(),S("svg",K,i[9]||(i[9]=[o("path",{d:"M12 20h9"},null,-1),o("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},null,-1)]))):(g(),S("svg",R,i[8]||(i[8]=[o("path",{d:"M12 20h9"},null,-1),o("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},null,-1)])))],8,B)]),o("div",{class:"scroll-container",onWheel:i[6]||(i[6]=x((...h)=>s.handleScroll&&s.handleScroll(...h),["prevent"])),ref:"scrollContainer"},[o("table",Z,[o("thead",null,[o("tr",null,[i[10]||(i[10]=o("th",null,null,-1)),(g(!0),S(w,null,D(s.daysInMonth,h=>(g(),S("th",{key:h,class:C({"nd-color":a.daysOfWeek[new Date(a.selectedYear,a.selectedMonth,h).getDay()]==="Nd","sob-color":a.daysOfWeek[new Date(a.selectedYear,a.selectedMonth,h).getDay()]==="Sob"})},y(h),3))),128))])]),o("tbody",null,[(g(!0),S(w,null,D(s.orderedPeople,h=>(g(),S("tr",{key:h.id},[o("td",{class:C({ratownik:h.ratownik,pielegniarka:!h.ratownik})},y(h.name),3),(g(!0),S(w,null,D(s.daysInMonth,d=>(g(),S("td",{key:d,class:C(["editable-cell",{"nd-color":a.daysOfWeek[new Date(a.selectedYear,a.selectedMonth,d).getDay()]==="Nd","sob-color":a.daysOfWeek[new Date(a.selectedYear,a.selectedMonth,d).getDay()]==="Sob"}]),onClick:m=>s.editCell(h.id,d),"aria-label":n.isEditingMode?"Kliknij aby edytować zmianę":"",title:n.isEditingMode?"Kliknij aby edytować zmianę":"",role:"gridcell"},[!n.isEditingMode||!s.isEditing(h.id,d)?(g(),S("span",G,y(s.getShiftForPersonAndDay(h.id,d)||""),1)):_((g(),S("select",{key:1,"onUpdate:modelValue":m=>a.editedShifts[`${h.id}-${d}`]=m,onChange:m=>s.saveShift(h.id,d)},i[11]||(i[11]=[o("option",{value:""},null,-1),o("option",{value:"D"},"D",-1),o("option",{value:"N"},"N",-1),o("option",{value:"D N"},"D N",-1)]),40,H)),[[U,a.editedShifts[`${h.id}-${d}`]]])],10,q))),128))]))),128))])])],544)]),p(e,{people:a.people,isEditingMode:!1},null,8,["people"]),n.isEditingMode?(g(),S("div",Q,i[12]||(i[12]=[o("h1",{class:"editing-mode-label"},[M(" Tryb edytowania "),o("a",{style:{color:"#4caf50"}},"Włączony"),o("br"),M(" Kliknij na miejsce w tabeli, aby wybrać zmianę. ")],-1)]))):E("",!0),p(f,{people:a.people,monthDays:a.monthDays},null,8,["people","monthDays"])],64)}const te=j(A,[["render",X],["__scopeId","data-v-22608037"]]);export{te as default};
