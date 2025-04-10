import{S as M,P,A as z,d as p}from"./AuthorizationModal-CYdv9e65.js";import{addNotification as u}from"./NotificationMessage-caDOYRe7.js";import{_ as N,r as y,o as d,c,a as v,b as o,d as b,t as m,w as g,F as C,e as E,f as D,n as k}from"./index-lvBPnoRy.js";const _={name:"CalendarComponent",emits:["update-editing-mode"],components:{ShiftCountWindow:M,PeopleListWindow:P,AuthorizationModal:z},props:{isEditingMode:{type:Boolean,required:!0}},data(){return{selectedMonth:new Date().getMonth(),selectedYear:new Date().getFullYear(),monthDays:[],localData:{},syncedChanges:{},daysOfWeek:p,currentDate:new Date,people:[{id:1,name:"Milena",ratownik:!1},{id:2,name:"Mikołaj",ratownik:!1},{id:3,name:"Aleksandra",ratownik:!1},{id:4,name:"Łukasz",ratownik:!0},{id:5,name:"Joanna",ratownik:!1},{id:6,name:"Natalia",ratownik:!0},{id:7,name:"Marcin",ratownik:!0},{id:8,name:"Alina",ratownik:!1},{id:9,name:"Ewelina",ratownik:!1},{id:7,name:"Teresa",ratownik:!1}],madeChanges:!1,showPasswordModal:!1,password:"",locale:"pl",scrollContainer:null,currentDropTarget:{date:null,shiftType:null},showMobileWarning:!1,isMobileDevice:!1}},computed:{monthYear(){return new Date(this.selectedYear,this.selectedMonth).toLocaleString(this.locale,{month:"long",year:"numeric"})}},methods:{handleDrop(i,e){const n=JSON.parse(localStorage.getItem("draggedPerson"));if(!n)return;const s=this.monthDays.find(S=>S.date.toDateString()===i.toDateString()),r={...s,[e]:n.id};if(r.dayShift1!=null&&r.dayShift2!=null&&r.dayShift1===r.dayShift2||r.nightShift1!=null&&r.nightShift2!=null&&r.nightShift1===r.nightShift2){u("Ta sama osoba na obydwu zmianach.","red");return}const a=n.ratownik;let l=!1;switch(e){case"dayShift1":l=s.dayShift2Ratownik;break;case"dayShift2":l=s.dayShift1Ratownik;break;case"nightShift1":l=s.nightShift2Ratownik;break;case"nightShift2":l=s.nightShift1Ratownik;break}if(a&&l){u("Nie można przypisać dwóch ratowników na jedną zmianę.","red");return}s[e]=n.id,s[`${e}Name`]=n.name,s[`${e}Ratownik`]=n.ratownik,s[`${e}UserChanged`]=!0;const f={dayShift1:s.dayShift1,dayShift2:s.dayShift2,nightShift1:s.nightShift1,nightShift2:s.nightShift2};this.localData[i.toDateString()]=f,localStorage.setItem(i.toDateString(),JSON.stringify(f)),this.madeChanges=!0,localStorage.removeItem("draggedPerson")},handlePointerMove(i,e,n){this.currentDropTarget={date:e,shiftType:n},i.preventDefault()},handlePointerEnd(i,e,n){JSON.parse(localStorage.getItem("draggedPerson"))&&(this.handleDrop(e,n),this.currentDropTarget={date:null,shiftType:null})},isDropTarget(i,e){return this.currentDropTarget.date?this.currentDropTarget.date.toDateString()===i.toDateString()&&this.currentDropTarget.shiftType===e:!1},handleClickResetShift(i,e){if(i[e]!==null){i[e]=null,i[e+"Name"]="Usunięto",i[e+"Ratownik"]=null,i[e+"UserChanged"]=!0;const n={dayShift1:i.dayShift1,dayShift2:i.dayShift2,nightShift1:i.nightShift1,nightShift2:i.nightShift2};this.localData[i.date.toDateString()]=n,localStorage.setItem(i.date.toDateString(),JSON.stringify(n)),i[e]="Usunięto",this.madeChanges=!0}},resolvePersonName(i){const e=this.people.find(n=>n.id===i);return e?{name:e.name,isRatownik:e.ratownik}:{name:void 0,isRatownik:!1}},generateMonthDays(){const i=this.selectedYear,e=this.selectedMonth,n=new Date(i,e+1,0).getDate();this.monthDays=[];for(let s=1;s<=n;s++)this.monthDays.push({date:new Date(i,e,s),dayShift1:null,dayShift2:null,nightShift1:null,nightShift2:null,dayShift1Name:"Not assigned",dayShift2Name:"Not assigned",nightShift1Name:"Not assigned",nightShift2Name:"Not assigned",isCurrentMonth:!0});this.loadFromLocalStorage()},changeMonth(i){this.madeChanges&&!confirm("You have unsaved changes. Are you sure you want to switch the month? Your changes will be discarded.")||(this.selectedMonth=this.selectedMonth+i,this.generateMonthDays())},emitEditingMode(i){this.$emit("update-editing-mode",i)},async fetchServerShiftData(){this.syncedChanges={};try{const i=await fetch("https://mc.kot.li/?key=shiftData.json",{method:"GET",headers:{"Content-Type":"application/json"}});if(!i.ok)throw i.status===404&&u("Data not found on server","red"),new Error(`Failed to fetch data from server: ${i.status}`);return await i.json()}catch(i){return console.error("Error fetching data from server:",i),u("Failed to fetch data from server","red"),null}},async checkShiftDataSync(){this.resetSyncedChangesSessionStorage();const i=await this.fetchServerShiftData();if(!i){console.log("No remote data fetched.");return}const e={};for(const[n,s]of Object.entries(i)){const r=localStorage.getItem(n),a=r?JSON.parse(r):null,l={};if(!a)e[n]={...s},localStorage.setItem(n,JSON.stringify(s));else{for(const[f,S]of Object.entries(s)){const t=a[f]||null;t!==S&&(l[f]={from:t||"Empty",to:S||"Empty"})}Object.keys(l).length>0&&(e[n]=l),localStorage.setItem(n,JSON.stringify(s))}}this.generateMonthDays(),this.syncedChanges=e,sessionStorage.setItem("syncedChanges",JSON.stringify(this.syncedChanges)),setTimeout(()=>{this.syncedChanges={},sessionStorage.removeItem("syncedChanges")},5e3)},loadFromLocalStorage(){const i=this.selectedYear,e=this.selectedMonth;for(let n=1;n<=31;n++){const s=new Date(i,e,n).toDateString();if(this.syncedChanges[s])continue;const r=localStorage.getItem(s);if(r)try{const a=JSON.parse(r),l=this.monthDays.find(f=>f.date.toDateString()===s);if(l){l.dayShift1=a.dayShift1,l.dayShift2=a.dayShift2,l.nightShift1=a.nightShift1,l.nightShift2=a.nightShift2;const f=this.resolvePersonName(l.dayShift1);l.dayShift1Name=f.name,l.dayShift1Ratownik=f.isRatownik;const S=this.resolvePersonName(l.dayShift2);l.dayShift2Name=S.name,l.dayShift2Ratownik=S.isRatownik;const t=this.resolvePersonName(l.nightShift1);l.nightShift1Name=t.name,l.nightShift1Ratownik=t.isRatownik;const w=this.resolvePersonName(l.nightShift2);l.nightShift2Name=w.name,l.nightShift2Ratownik=w.isRatownik}}catch(a){u("Failed to load local data: "+a,"red")}}},resetSyncedChangesSessionStorage(){const i=sessionStorage.getItem("syncedChanges");i&&(this.syncedChanges=JSON.parse(i),setTimeout(()=>{this.syncedChanges={},sessionStorage.removeItem("syncedChanges")},5e3))},resetUserChanges(){for(const i in localStorage)if(localStorage.hasOwnProperty(i)){const e=JSON.parse(localStorage.getItem(i)||"{}");(e.dayShift1UserChanged||e.dayShift2UserChanged||e.nightShift1UserChanged||e.nightShift2UserChanged)&&localStorage.removeItem(i)}this.localData={},this.madeChanges=!1},handleScroll(i){this.scrollContainer&&(i.preventDefault(),this.scrollContainer.scrollLeft+=i.deltaY)},getDayClass(i){return p[i]==="Nd"?"nd-color":p[i]==="Sob"?"sob-color":"normal-color"},showPasswordPrompt(){this.showPasswordModal=!0},handleAuthorization(){this.showPasswordModal=!1,this.madeChanges=!1},getShiftAriaLabel(i,e){const n=i[e],s=e.includes("day")?"Zmiana dzienna":"Zmiana nocna",r=i[`${e}Name`];return this.isEditingMode?n?`${s}: ${r}. Kliknij aby usunąć zmianę.`:`${s}: Pusta zmiana. Przeciągnij członka zespołu by nadać im zmianę.`:n?`${s}: ${r}`:`${s}: Pusta zmiana.`},getShiftTooltip(i,e){const n=i[e],s=e.includes("day")?"Zmiana dzienna":"Zmiana nocna";return this.isEditingMode?n?`${s}: ${i[`${e}Name`]} (Kliknij by usunąć)`:`Przeciągnij członka zespołu by nadać im - ${s.toLowerCase()}`:n?`${s}: ${i[`${e}Name`]}`:`${s}: Nieprzypisana`},checkMobilePlatform(){const i=navigator.userAgent||navigator.vendor||window.opera;this.isMobileDevice=/android|iphone|ipad|ipod/i.test(i.toLowerCase())},handleMobileWarningClose(){this.showMobileWarning=!1,this.emitEditingMode(!1)},handlePointerUp(i){i.pointerType==="touch"&&(this.touchTimer&&(clearTimeout(this.touchTimer),this.touchTimer=null),this.touchedElement&&(this.touchedElement.releasePointerCapture(i.pointerId),this.touchedElement.classList.remove("being-touched")),this.isDragging=!1,this.touchedElement=null,this.touchedPerson=null)}},async mounted(){this.resetUserChanges(),await this.checkShiftDataSync(),this.scrollContainer=this.$refs.scrollContainer,this.checkMobilePlatform()},watch:{isEditingMode(i){localStorage.setItem("isEditingMode",JSON.stringify(i)),i&&this.isMobileDevice&&(this.showMobileWarning=!0)}}},R=["disabled"],j={key:0,class:"mobile-warning-overlay"},O={class:"mobile-warning"},L={class:"monthChange"},U={style:{"font-weight":"bold",width:"144px !important",color:"var(--color-text-dark)"},role:"heading","aria-level":"2"},x={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"refresh-icon",style:{width:"30px",height:"30px"}},I={class:"top-right-buttons compact-toggle",title:"Przełącz tryb edytowania"},T=["checked"],W=["aria-checked"],A={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"pencil-icon"},J={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round",class:"pencil-icon"},Y={class:"calendar-container"},Z={class:"calendar-grid"},F=["onDrop"],B={class:"day-header"},V=["onDrop"],K={class:"day-date"},q=["clickable","onDrop","onPointerup","onPointermove","onClick","aria-label","title"],G={key:0,class:"assigned-person"},H={key:1,class:"empty-slot"},Q=["clickable","onDrop","onPointerup","onPointermove","onClick","aria-label","title"],X={key:0,class:"assigned-person"},$={key:1,class:"empty-slot"},ee=["onDrop","onPointerup","onPointermove","onClick","aria-label","title"],te={key:0,class:"assigned-person"},ie={key:1,class:"empty-slot"},ne=["clickable","onDrop","onPointerup","onPointermove","onClick","aria-label","title"],ae={key:0,class:"assigned-person"},oe={key:1,class:"empty-slot"},se={key:1,style:{display:"flex","flex-direction":"column","align-items":"center"}};function re(i,e,n,s,r,a){const l=y("AuthorizationModal"),f=y("PeopleListWindow"),S=y("ShiftCountWindow");return d(),c(C,null,[v(l,{show:r.showPasswordModal,localData:r.localData,onClose:e[0]||(e[0]=t=>r.showPasswordModal=!1),onAuthorized:a.handleAuthorization,"aria-label":"Zapisz zmiany",title:"Zapisz zmiany w harmonogramie"},null,8,["show","localData","onAuthorized"]),o("button",{disabled:!r.madeChanges,onClick:e[1]||(e[1]=(...t)=>a.showPasswordPrompt&&a.showPasswordPrompt(...t)),class:"submit-button","aria-label":"Zapisz zmiany",title:"Zapisz zmiany w harmonogramie"}," Zapisz ",8,R),r.showMobileWarning?(d(),c("div",j,[o("div",O,[e[13]||(e[13]=o("h3",null,"!! Urządzenie mobilne wykryte !!",-1)),e[14]||(e[14]=o("p",null," Niestety, tryb edycji w widoku kalendarza nie jest obsługiwany na urządzeniach mobilnych. ",-1)),e[15]||(e[15]=o("p",null,"Proszę przejdź do widoku tabeli lub skorzystaj z komputera.",-1)),o("button",{onClick:e[2]||(e[2]=(...t)=>a.handleMobileWarningClose&&a.handleMobileWarningClose(...t)),class:"warning-button"}," Ok :( ")])])):b("",!0),o("section",null,[o("section",L,[o("button",{class:"buttonMonthChange",onClick:e[3]||(e[3]=t=>a.changeMonth(-1)),"aria-label":"Poprzedni miesiąc",title:"Idź do poprzedniego miesiąca"}," ‹ "),o("span",U,m(a.monthYear.toUpperCase()),1),o("button",{class:"buttonMonthChange",onClick:e[4]||(e[4]=t=>a.changeMonth(1)),"aria-label":"Następny miesiąc",title:"Idź do następnego miesiąca"}," › ")]),o("button",{class:"top-right-buttons buttonRefresh",onClick:e[5]||(e[5]=t=>a.checkShiftDataSync()),"aria-label":"Odśwież harmonogram",title:"Odśwież harmonogram"},[(d(),c("svg",x,e[16]||(e[16]=[o("path",{d:"M23 4v6h-6"},null,-1),o("path",{d:"M1 20v-6h6"},null,-1),o("path",{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10"},null,-1),o("path",{d:"M20.49 15a9 9 0 0 1-14.85 3.36L1 14"},null,-1)])))]),o("label",I,[o("input",{type:"checkbox",checked:n.isEditingMode,onChange:e[6]||(e[6]=t=>a.emitEditingMode(t.target.checked)),"aria-label":"Przełącz tryb edytowania"},null,40,T),o("span",{class:"slider",role:"switch","aria-checked":n.isEditingMode},[n.isEditingMode?(d(),c("svg",J,e[18]||(e[18]=[o("path",{d:"M12 20h9"},null,-1),o("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},null,-1)]))):(d(),c("svg",A,e[17]||(e[17]=[o("path",{d:"M12 20h9"},null,-1),o("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},null,-1)])))],8,W)])]),o("div",Y,[o("section",{class:"scrollable-container",onWheel:e[12]||(e[12]=g((...t)=>a.handleScroll&&a.handleScroll(...t),["prevent"])),ref:"scrollContainer"},[o("div",Z,[(d(!0),c(C,null,E(r.monthDays,(t,w)=>(d(),c("div",{key:w,class:"day-column",onDragover:e[11]||(e[11]=g(()=>{},["prevent"])),onDrop:h=>a.handleDrop(t.date,"day")},[o("div",null,[o("div",{class:k(["day-cell",{"current-month":t.isCurrentMonth,"nd-color":r.daysOfWeek[t.date.getDay()]==="Nd","sob-color":r.daysOfWeek[t.date.getDay()]==="Sob"}])},[o("div",B,m(r.daysOfWeek[t.date.getDay()]),1),o("div",{class:"shift",onDrop:h=>a.handleDrop(t.date,"day"),onDragover:e[10]||(e[10]=g(()=>{},["prevent"]))},[o("div",K,m(t.date.getDate()),1),o("div",{class:k(["shift-slot day",{"synced-changed":r.syncedChanges[t.date.toDateString()]?.dayShift1,ratownik:t.dayShift1Ratownik===!0,pielegniarka:t.dayShift1Ratownik===!1,userChanged:t.dayShift1UserChanged===!0,clickable:n.isEditingMode}]),clickable:n.isEditingMode,onDragover:e[7]||(e[7]=g(()=>{},["prevent"])),onDrop:h=>a.handleDrop(t.date,"dayShift1"),onPointerup:g(h=>a.handlePointerUp(h,t.date,"dayShift1"),["prevent"]),onPointermove:g(h=>a.handlePointerMove(h,t.date,"dayShift1"),["prevent"]),onClick:h=>n.isEditingMode&&a.handleClickResetShift(t,"dayShift1"),"aria-label":a.getShiftAriaLabel(t,"dayShift1"),title:a.getShiftTooltip(t,"dayShift1"),role:"button",tabindex:"0"},[t.dayShift1?(d(),c("div",G,m(t.dayShift1Name),1)):(d(),c("div",H,"D"))],42,q),o("div",{class:k(["shift-slot day",{"synced-changed":r.syncedChanges[t.date.toDateString()]?.dayShift2,ratownik:t.dayShift2Ratownik===!0,pielegniarka:t.dayShift2Ratownik===!1,userChanged:t.dayShift2UserChanged===!0,clickable:n.isEditingMode}]),clickable:n.isEditingMode,onDrop:h=>a.handleDrop(t.date,"dayShift2"),onPointerup:g(h=>a.handlePointerUp(h,t.date,"dayShift2"),["prevent"]),onPointermove:g(h=>a.handlePointerMove(h,t.date,"dayShift2"),["prevent"]),onClick:h=>n.isEditingMode&&a.handleClickResetShift(t,"dayShift2"),"aria-label":a.getShiftAriaLabel(t,"dayShift2"),title:a.getShiftTooltip(t,"dayShift2"),role:"button",tabindex:"0"},[t.dayShift2?(d(),c("div",X,m(t.dayShift2Name),1)):(d(),c("div",$,"D"))],42,Q),o("div",{class:k(["shift-slot night",{"synced-changed":r.syncedChanges[t.date.toDateString()]?.nightShift1,ratownik:t.nightShift1Ratownik===!0,pielegniarka:t.nightShift1Ratownik===!1,userChanged:t.nightShift1UserChanged===!0,clickable:n.isEditingMode}]),onDragover:e[8]||(e[8]=g(()=>{},["prevent"])),onDrop:h=>a.handleDrop(t.date,"nightShift1"),onPointerup:g(h=>a.handlePointerUp(h,t.date,"nightShift1"),["prevent"]),onPointermove:g(h=>a.handlePointerMove(h,t.date,"nightShift1"),["prevent"]),onClick:h=>n.isEditingMode&&a.handleClickResetShift(t,"nightShift1"),"aria-label":a.getShiftAriaLabel(t,"nightShift1"),title:a.getShiftTooltip(t,"nightShift1"),role:"button",tabindex:"0"},[t.nightShift1?(d(),c("div",te,m(t.nightShift1Name),1)):(d(),c("div",ie,"N"))],42,ee),o("div",{class:k(["shift-slot night",{"synced-changed":r.syncedChanges[t.date.toDateString()]?.nightShift2,ratownik:t.nightShift2Ratownik===!0,pielegniarka:t.nightShift2Ratownik===!1,userChanged:t.nightShift2UserChanged===!0,clickable:n.isEditingMode}]),clickable:n.isEditingMode,onDragover:e[9]||(e[9]=g(()=>{},["prevent"])),onDrop:h=>a.handleDrop(t.date,"nightShift2"),onPointerup:g(h=>a.handlePointerUp(h,t.date,"nightShift2"),["prevent"]),onPointermove:g(h=>a.handlePointerMove(h,t.date,"nightShift2"),["prevent"]),onClick:h=>n.isEditingMode&&a.handleClickResetShift(t,"nightShift2"),"aria-label":a.getShiftAriaLabel(t,"nightShift2"),title:a.getShiftTooltip(t,"nightShift2"),role:"button",tabindex:"0"},[t.nightShift2?(d(),c("div",ae,m(t.nightShift2Name),1)):(d(),c("div",oe,"N"))],42,ne)],40,V)],2)])],40,F))),128))])],544)]),v(f,{people:r.people,isEditingMode:n.isEditingMode},null,8,["people","isEditingMode"]),n.isEditingMode?(d(),c("div",se,e[19]||(e[19]=[o("h1",{class:"editing-mode-label"},[D(" Tryb edytowania "),o("a",{style:{color:"#4caf50"}},"Włączony"),o("br"),D(" Przeciągaj członków zespołu na miejsca w grafiku."),o("br"),D("Kliknij na zajętą zmianę, aby ją wyczyścić. ")],-1)]))):b("",!0),v(S,{people:r.people,monthDays:r.monthDays},null,8,["people","monthDays"])],64)}const ce=N(_,[["render",re],["__scopeId","data-v-d8ab9651"]]);export{ce as default};
