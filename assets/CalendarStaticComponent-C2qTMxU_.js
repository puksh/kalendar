import{d as k}from"./daysOfWeek-C19XqJ9X.js";import{addNotification as w}from"./NotificationMessage-aJiTbCwY.js";import{_ as p,o,c as a,a as s,t as d,d as v,F as f,r as S,n as m,e as y}from"./index-w5D3n7er.js";const D={name:"CalendarComponent",data(){return{selectedMonth:new Date().getMonth(),selectedYear:new Date().getFullYear(),monthDays:[],localData:{},changedShifts:{},syncedChanges:{},daysOfWeek:k,currentDate:new Date,people:[{id:1,name:"Milena",ratownik:!1},{id:2,name:"Mikołaj",ratownik:!1},{id:3,name:"Aleksandra",ratownik:!1},{id:4,name:"Łukasz",ratownik:!0},{id:5,name:"Joanna",ratownik:!0},{id:6,name:"Natalia",ratownik:!0},{id:7,name:"Marcin",ratownik:!0},{id:8,name:"Alina",ratownik:!1},{id:9,name:"Ewelina",ratownik:!1},{id:7,name:"Teresa",ratownik:!1}],locale:"pl",scrollContainer:null}},computed:{monthYear(){return new Date(this.selectedYear,this.selectedMonth).toLocaleString(this.locale,{month:"long",year:"numeric"})}},methods:{resolvePersonName(n){const e=this.people.find(i=>i.id===n);return e?{name:e.name,isRatownik:e.ratownik}:{name:void 0,isRatownik:!1}},generateMonthDays(){const n=this.selectedYear,e=this.selectedMonth,i=new Date(n,e+1,0).getDate();this.monthDays=[];for(let h=1;h<=i;h++)this.monthDays.push({date:new Date(n,e,h),dayShift1:null,dayShift2:null,nightShift1:null,nightShift2:null,dayShift1Name:"Not assigned",dayShift2Name:"Not assigned",nightShift1Name:"Not assigned",nightShift2Name:"Not assigned",isCurrentMonth:!0});this.loadFromLocalStorage()},changeMonth(n){if(this.madeChanges){if(!confirm("You have unsaved changes. Are you sure you want to switch the month? Your changes will be discarded."))return;this.changedShifts={}}this.selectedMonth=this.selectedMonth+n,this.generateMonthDays()},async fetchServerShiftData(){this.syncedChanges={};try{const n=await fetch("https://vuecalendar.kot.li/?key=shiftData.json",{method:"GET",headers:{"Content-Type":"application/json"}});if(!n.ok)throw n.status===404&&w("Data not found on server","red"),new Error(`Failed to fetch data from server: ${n.status}`);return await n.json()}catch(n){return console.error("Error fetching data from server:",n),w("Failed to fetch data from server","red"),null}},async checkShiftDataSync(){this.resetSyncedChangesSessionStorage();const n=await this.fetchServerShiftData();if(!n){console.log("No remote data fetched.");return}const e={};for(const[i,h]of Object.entries(n)){const r=localStorage.getItem(i),l=r?JSON.parse(r):null,t={};if(!l)e[i]={...h},localStorage.setItem(i,JSON.stringify(h));else{for(const[c,g]of Object.entries(h)){const u=l[c]||null;u!==g&&(t[c]={from:u||"Empty",to:g||"Empty"})}Object.keys(t).length>0&&(e[i]=t),localStorage.setItem(i,JSON.stringify(h))}}this.generateMonthDays(),this.syncedChanges=e,console.log("Updated syncedChanges:",this.syncedChanges),sessionStorage.setItem("syncedChanges",JSON.stringify(this.syncedChanges)),setTimeout(()=>{console.log("Clearing syncedChanges."),this.syncedChanges={},sessionStorage.removeItem("syncedChanges")},5e3)},loadFromLocalStorage(){const n=this.selectedYear,e=this.selectedMonth;for(let i=1;i<=31;i++){const h=new Date(n,e,i).toDateString();if(this.syncedChanges[h])continue;const r=localStorage.getItem(h);if(r)try{const l=JSON.parse(r),t=this.monthDays.find(c=>c.date.toDateString()===h);if(t){t.dayShift1=l.dayShift1,t.dayShift2=l.dayShift2,t.nightShift1=l.nightShift1,t.nightShift2=l.nightShift2;const c=this.resolvePersonName(t.dayShift1);t.dayShift1Name=c.name,t.dayShift1Ratownik=c.isRatownik;const g=this.resolvePersonName(t.dayShift2);t.dayShift2Name=g.name,t.dayShift2Ratownik=g.isRatownik;const u=this.resolvePersonName(t.nightShift1);t.nightShift1Name=u.name,t.nightShift1Ratownik=u.isRatownik;const C=this.resolvePersonName(t.nightShift2);t.nightShift2Name=C.name,t.nightShift2Ratownik=C.isRatownik}}catch(l){w("Failed to load local data: "+l,"red")}}this.calculateAllShiftCounts()},resetSyncedChangesSessionStorage(){const n=sessionStorage.getItem("syncedChanges");n&&(this.syncedChanges=JSON.parse(n),setTimeout(()=>{this.syncedChanges={},sessionStorage.removeItem("syncedChanges")},5e3))},handleScroll(n){this.scrollContainer&&(n.preventDefault(),this.scrollContainer.scrollLeft+=n.deltaY)},getDayClass(n){return k[n]==="Nd"?"nd-color":k[n]==="Sob"?"sob-color":"normal-color"},countShiftsForPerson(n){return this.monthDays.reduce((e,i)=>i.dayShift1===n||i.dayShift2===n||i.nightShift1===n||i.nightShift2===n?e+1:e,0)},calculateAllShiftCounts(){this.people.forEach(n=>{n.shiftCount=this.countShiftsForPerson(n.id)})}},async mounted(){await this.checkShiftDataSync(),this.scrollContainer=this.$refs.scrollContainer}},N={class:"monthChange"},_={style:{"font-weight":"bold"}},b={class:"calendar-container"},M={class:"calendar-grid"},R={class:"day-header"},O={class:"shift"},x={class:"day-date"},F={key:0,class:"assigned-person"},Y={key:1,class:"empty-slot"},z={key:0,class:"assigned-person"},P={key:1,class:"empty-slot"},E={key:0,class:"assigned-person"},j={key:1,class:"empty-slot"},J={key:0,class:"assigned-person"},T={key:1,class:"empty-slot"},I={class:"people-list"},U={class:"person-lists"},A={class:"person-lists"},L={class:"shift-counts-window"},W={style:{display:"flex","flex-direction":"row"}},V={style:{display:"flex","flex-direction":"column"}},B={class:"shift-counts"},G={style:{display:"flex","flex-direction":"column"}},Z={class:"shift-counts"};function q(n,e,i,h,r,l){return o(),a(f,null,[s("section",null,[s("section",N,[s("button",{class:"buttonMonthChange",onClick:e[0]||(e[0]=t=>l.changeMonth(-1))}," ‹ "),s("span",_,d(l.monthYear.toUpperCase()),1),s("button",{class:"buttonMonthChange",onClick:e[1]||(e[1]=t=>l.changeMonth(1))},"›")]),s("button",{class:"top-right-buttons buttonRefresh",onClick:e[2]||(e[2]=t=>l.checkShiftDataSync())},e[5]||(e[5]=[s("img",{src:"/assets/icons/refresh.svg",style:{width:"30px",height:"30px",cursor:"pointer"},alt:"Refresh"},null,-1)])),s("button",{class:"top-right-buttons buttonFilter",onClick:e[3]||(e[3]=t=>n.filterCalendar())},e[6]||(e[6]=[s("img",{src:"/assets/icons/filter.svg",style:{width:"30px",height:"30px",cursor:"pointer"},alt:"Refresh"},null,-1)]))]),s("div",b,[s("section",{class:"scrollable-container",onWheel:e[4]||(e[4]=v((...t)=>l.handleScroll&&l.handleScroll(...t),["prevent"])),ref:"scrollContainer"},[s("div",M,[(o(!0),a(f,null,S(r.monthDays,(t,c)=>(o(),a("div",{key:c,class:"day-column"},[s("div",null,[s("div",{class:m(["day-cell",{"current-month":t.isCurrentMonth,"nd-color":r.daysOfWeek[t.date.getDay()]==="Nd","sob-color":r.daysOfWeek[t.date.getDay()]==="Sob"}])},[s("div",R,d(r.daysOfWeek[t.date.getDay()]),1),s("div",O,[s("div",x,d(t.date.getDate()),1),s("div",{class:m(["shift-slot day",{"synced-changed":r.syncedChanges[t.date.toDateString()]?.dayShift1,ratownik:t.dayShift1Ratownik===!0,userChanged:t.dayShift1UserChanged===!0}])},[t.dayShift1?(o(),a("div",F,d(t.dayShift1Name),1)):(o(),a("div",Y,"D"))],2),s("div",{class:m(["shift-slot day",{"synced-changed":r.syncedChanges[t.date.toDateString()]?.dayShift2,ratownik:t.dayShift2Ratownik===!0,userChanged:t.dayShift2UserChanged===!0}])},[t.dayShift2?(o(),a("div",z,d(t.dayShift2Name),1)):(o(),a("div",P,"D"))],2),s("div",{class:m(["shift-slot night",{"synced-changed":r.syncedChanges[t.date.toDateString()]?.nightShift1,ratownik:t.nightShift1Ratownik===!0,userChanged:t.nightShift1UserChanged===!0}])},[t.nightShift1?(o(),a("div",E,d(t.nightShift1Name),1)):(o(),a("div",j,"N"))],2),s("div",{class:m(["shift-slot night",{"synced-changed":r.syncedChanges[t.date.toDateString()]?.nightShift2,ratownik:t.nightShift2Ratownik===!0,userChanged:t.nightShift2UserChanged===!0}])},[t.nightShift2?(o(),a("div",J,d(t.nightShift2Name),1)):(o(),a("div",T,"N"))],2)])],2)])]))),128))])],544)]),s("section",I,[e[9]||(e[9]=s("h3",{style:{"font-weight":"bold"}},"Zespół",-1)),s("div",null,[e[7]||(e[7]=s("h4",null,"Ratowniczki/cy",-1)),s("div",U,[(o(!0),a(f,null,S(r.people.filter(t=>t.ratownik),t=>(o(),a("div",{key:t.id,class:"person-item ratownik"},d(t.name),1))),128))]),e[8]||(e[8]=s("h4",null,"Pielęgniarki/rze",-1)),s("div",A,[(o(!0),a(f,null,S(r.people.filter(t=>!t.ratownik),t=>(o(),a("div",{key:t.id,class:"person-item"},d(t.name),1))),128))])])]),s("section",L,[e[14]||(e[14]=s("h3",null,"Ilość zmian",-1)),s("div",W,[s("div",V,[e[11]||(e[11]=s("h4",null,"Ratowniczki/cy",-1)),s("ul",B,[(o(!0),a(f,null,S(r.people.filter(t=>t.ratownik),t=>(o(),a("li",{key:t.id},[y(d(t.name)+": ",1),s("strong",null,d(t.shiftCount||0),1),e[10]||(e[10]=y(" zmian/a "))]))),128))])]),s("div",G,[e[13]||(e[13]=s("h4",null,"Pielęgniarki/rze",-1)),s("ul",Z,[(o(!0),a(f,null,S(r.people.filter(t=>!t.ratownik),t=>(o(),a("li",{key:t.id},[y(d(t.name)+": ",1),s("strong",null,d(t.shiftCount||0),1),e[12]||(e[12]=y(" zmian/a "))]))),128))])])])])],64)}const X=p(D,[["render",q],["__scopeId","data-v-42d3c292"]]);export{X as default};
