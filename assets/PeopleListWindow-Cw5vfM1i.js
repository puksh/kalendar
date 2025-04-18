import{_ as h}from"./utils-7_cPcmap.js";import{o as a,c as d,d as r,F as g,a as u,n as c,p as m,t as _}from"./vue-vendor-DAxx2COs.js";const b={name:"PeopleListWindow",props:{people:{type:Array,required:!0},isEditingMode:{type:Boolean,required:!0}},data(){return{draggedPerson:null,touchedPerson:null,touchStartTime:0,touchTimer:null,isDragging:!1}},methods:{startDrag(o){localStorage.setItem("draggedPerson",JSON.stringify(o))},handleDragEnd(){localStorage.removeItem("draggedPerson")}}},D={class:"people-list"},E={class:"people-list-content"},f={class:"person-lists"},y=["draggable","onDragstart"],v={class:"person-lists"},k=["draggable","onDragstart"];function M(o,i,t,P,l,n){return a(),d("section",D,[i[3]||(i[3]=r("h3",{style:{"font-weight":"bold"}},"Zespół",-1)),r("div",E,[i[1]||(i[1]=r("h4",null,"Ratowniczki/cy",-1)),r("div",f,[(a(!0),d(g,null,u(t.people.filter(e=>e.ratownik),e=>(a(),d("div",{key:e.id,class:c(["person-item ratownik",{draggable:t.isEditingMode,"being-touched":l.touchedPerson?.id===e.id}]),style:m({borderRadius:t.isEditingMode?"var(--border-radius)":"0"}),draggable:t.isEditingMode,onDragstart:s=>t.isEditingMode?n.startDrag(e):null,onDragend:i[0]||(i[0]=(...s)=>n.handleDragEnd&&n.handleDragEnd(...s))},_(e.name),47,y))),128))]),i[2]||(i[2]=r("h4",null,"Pielęgniarki/rze",-1)),r("div",v,[(a(!0),d(g,null,u(t.people.filter(e=>!e.ratownik),e=>(a(),d("div",{key:e.id,class:c(["person-item pielegniarka",{draggable:t.isEditingMode,"being-touched":l.touchedPerson?.id===e.id}]),style:m({borderRadius:t.isEditingMode?"var(--border-radius)":"0"}),draggable:t.isEditingMode,onDragstart:s=>t.isEditingMode?n.startDrag(e):null},_(e.name),47,k))),128))])])])}const p=h(b,[["render",M],["__scopeId","data-v-6aa63c65"]]);export{p as default};
