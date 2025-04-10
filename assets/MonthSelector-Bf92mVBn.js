import{_ as i,o as r,b as h,d as n,t as c,n as l}from"./index-RthQ7baR.js";const d={name:"MonthSelector",props:{currentMonth:{type:Number,required:!0},currentYear:{type:Number,required:!0},locale:{type:String,default:"pl"},hasUnsavedChanges:{type:Boolean,default:!1}},data(){return{isChanging:!1}},computed:{formattedMonthYear(){return new Date(this.currentYear,this.currentMonth).toLocaleString(this.locale,{month:"long",year:"numeric"}).toUpperCase()}},methods:{handleMonthChange(a){if(this.hasUnsavedChanges){if(!confirm("Masz niezapisane zmiany. Czy na pewno chcesz zmienić miesiąc? Twoje zmiany zostaną utracone."))return;this.$emit("discard-changes")}this.isChanging=!0,setTimeout(()=>{this.isChanging=!1},300),this.$emit("change-month",a)}}},m={class:"monthChange"};function u(a,e,g,p,s,t){return r(),h("section",m,[n("button",{class:"buttonMonthChange",onClick:e[0]||(e[0]=o=>t.handleMonthChange(-1)),"aria-label":"Poprzedni miesiąc",title:"Idź do poprzedniego miesiąca"}," ‹ "),n("span",{class:l({changing:s.isChanging}),role:"heading","aria-level":"2"},c(t.formattedMonthYear),3),n("button",{class:"buttonMonthChange",onClick:e[1]||(e[1]=o=>t.handleMonthChange(1)),"aria-label":"Następny miesiąc",title:"Idź do następnego miesiąca"}," › ")])}const C=i(d,[["render",u],["__scopeId","data-v-f125e2fe"]]);export{C as default};
