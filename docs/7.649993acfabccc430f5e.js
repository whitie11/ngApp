(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Ny1X:function(t,e,s){"use strict";s.r(e),s.d(e,"RostaModule",function(){return pt});var a=s("ofXK"),o=s("tyNb"),i=s("0IaG"),n=s("l7P3");const c=Object(n.o)("rosta"),l=Object(n.q)(c,t=>t.duties),r=Object(n.q)(c,t=>t.dateFrom),d=Object(n.q)(c,t=>t.staffIdList),f=Object(n.q)(c,t=>t.dutyIdList);var u=s("fXoL"),h=s("MutI"),b=s("3Pt+"),m=s("bTqV"),g=s("Qu3c");function p(t,e){if(1&t&&(u.Tb(0,"mat-list-option",8),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.lc("value",t.staffId)("matTooltip",t.firstName+" "+t.lastName+" Band:"+t.grade),u.Cb(1),u.Ec(" ",t.userName," ")}}let C=(()=>{class t{constructor(t,e,s){this.dialogRef=t,this.data=e,this.store=s,this.selectedStaff=[],this.selectedStaffIds$=this.store.select(d).subscribe(t=>{this.selectedStaff=t})}ngOnDestroy(){this.selectedStaffIds$&&this.selectedStaffIds$.unsubscribe()}onNoClick(){this.dialogRef.close()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(i.g),u.Nb(i.a),u.Nb(n.h))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-staff-picker-dialog"]],decls:11,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"ngModel","ngModelChange"],["list",""],[3,"value","matTooltip",4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],[3,"value","matTooltip"]],template:function(t,e){1&t&&(u.Tb(0,"h1",0),u.Cc(1,"Select Staff Roster"),u.Sb(),u.Tb(2,"div",1),u.Tb(3,"mat-selection-list",2,3),u.bc("ngModelChange",function(t){return e.selectedStaff=t}),u.Bc(5,p,2,3,"mat-list-option",4),u.Sb(),u.Sb(),u.Tb(6,"div",5),u.Tb(7,"button",6),u.bc("click",function(){return e.onNoClick()}),u.Cc(8,"Cancel"),u.Sb(),u.Tb(9,"button",7),u.Cc(10,"Ok"),u.Sb(),u.Sb()),2&t&&(u.Cb(3),u.lc("ngModel",e.selectedStaff),u.Cb(2),u.lc("ngForOf",e.data),u.Cb(4),u.lc("mat-dialog-close",e.selectedStaff))},directives:[i.h,i.e,h.c,b.k,b.n,a.k,i.c,m.a,i.d,h.b,g.a],styles:[""]}),t})();var S=s("sdho"),y=s("4Zo2");function D(t,e){if(1&t&&(u.Tb(0,"mat-list-option",8),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.lc("value",t.dutyId),u.Cb(1),u.Ec(" ",t.dutyType," ")}}let w=(()=>{class t{constructor(t,e,s){this.dialogRef=t,this.data=e,this.store=s,this.selectedDuties=[],this.store.select(f).subscribe(t=>{this.selectedDuties=t})}onNoClick(){this.dialogRef.close()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(i.g),u.Nb(i.a),u.Nb(n.h))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-location-picker-dialog"]],decls:11,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"ngModel","ngModelChange"],["list",""],[3,"value",4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],[3,"value"]],template:function(t,e){1&t&&(u.Tb(0,"h1",0),u.Cc(1,"Select Shift Type"),u.Sb(),u.Tb(2,"div",1),u.Tb(3,"mat-selection-list",2,3),u.bc("ngModelChange",function(t){return e.selectedDuties=t}),u.Bc(5,D,2,2,"mat-list-option",4),u.Sb(),u.Sb(),u.Tb(6,"div",5),u.Tb(7,"button",6),u.bc("click",function(){return e.onNoClick()}),u.Cc(8,"Cancel"),u.Sb(),u.Tb(9,"button",7),u.Cc(10,"Ok"),u.Sb(),u.Sb()),2&t&&(u.Cb(3),u.lc("ngModel",e.selectedDuties),u.Cb(2),u.lc("ngForOf",e.data),u.Cb(4),u.lc("mat-dialog-close",e.selectedDuties))},directives:[i.h,i.e,h.c,b.k,b.n,a.k,i.c,m.a,i.d,h.b],styles:[""]}),t})();var k=s("2NH0"),M=s("/t3+"),O=s("qFsG"),T=s("iadO"),v=s("wZkO"),I=s("+0xr"),P=s("STbY"),R=s("znSr");function L(t,e){1&t&&u.Ob(0,"th",13)}function $(t,e){if(1&t&&(u.Tb(0,"td",14),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.lc("ngClass","rowLabel")("matTooltip",(null==t[0]?null:t[0].firstName)+" "+(null==t[0]?null:t[0].lastName)+" Band:"+(null==t[0]?null:t[0].grade)),u.Cb(1),u.Ec(" ",null==t[0]?null:t[0].userName," ")}}function x(t,e){if(1&t&&(u.Tb(0,"th",13),u.Cc(1),u.Sb()),2&t){const t=u.fc().index,e=u.fc();u.yc("background-color",e.setBackgroundColourCell(t,0)),u.Cb(1),u.Ec(" ",e.setAMorPM(t)," ")}}const F=function(t,e){return{staff:t,col:e}};function _(t,e){if(1&t){const t=u.Ub();u.Tb(0,"td",18),u.bc("click",function(){u.tc(t);const s=e.$implicit,a=u.fc().index;return u.fc().cellClicked(s[0],a)})("menuClosed",function(){return u.tc(t),u.fc(2).menuClosed()}),u.Cc(1),u.Sb()}if(2&t){const t=e.$implicit,s=u.fc().index,a=u.fc(),o=u.rc(14);u.yc("background-color",a.setBackgroundColourCell(s,t[0].staffId)),u.lc("matMenuTriggerFor",o)("matMenuTriggerData",u.pc(7,F,t[0],s))("matTooltip",null==t[1][s]?null:t[1][s].dutyType)("ngClass",a.isSelected(t[0].staffId,s)?"highlight":"notHighlight"),u.Cb(1),u.Ec(" ",null==t[1][s]?null:t[1][s].dutyCode," ")}}function B(t,e){1&t&&(u.Rb(0,15),u.Bc(1,x,2,3,"th",16),u.Bc(2,_,2,10,"td",17),u.Qb()),2&t&&u.mc("matColumnDef",e.$implicit)}function N(t,e){1&t&&u.Ob(0,"th",13),2&t&&u.Db("colspan",1)}function A(t,e){if(1&t&&(u.Tb(0,"th",13),u.Cc(1),u.Sb()),2&t){const t=u.fc().index,e=u.fc();u.yc("background-color",e.setBackgroundColourHeader(t)),u.Db("colspan",2),u.Cb(1),u.Ec(" ",e.headerRowDay[t]," ")}}function H(t,e){1&t&&(u.Rb(0,15),u.Bc(1,A,2,4,"th",16),u.Qb()),2&t&&u.mc("matColumnDef",e.$implicit)}function j(t,e){1&t&&u.Ob(0,"tr",19)}function E(t,e){1&t&&u.Ob(0,"tr",19)}function V(t,e){1&t&&u.Ob(0,"tr",20)}function Q(t,e){if(1&t){const t=u.Ub();u.Tb(0,"button",23),u.bc("click",function(){u.tc(t);const s=e.$implicit,a=u.fc(),o=a.staff,i=a.col;return u.fc().menuClick(o,i,s)}),u.Cc(1),u.Sb()}if(2&t){const t=e.$implicit;u.Cb(1),u.Dc(t.dutyType)}}function q(t,e){if(1&t&&(u.Tb(0,"span",21),u.Cc(1),u.Sb(),u.Bc(2,Q,2,1,"button",22)),2&t){const t=u.fc();u.Cb(1),u.Ec("Select Duty for ",t.selectedUserDateStr,""),u.Cb(1),u.lc("ngForOf",t.duties)}}let U=(()=>{class t{constructor(t,e,s){this.rostaService=t,this.store=e,this.locale=s,this.rotaArray=[],this.displayedColumns=[],this.displayedColumns2=[],this.headerRowDef=["h0"],this.headerRowDef2=[],this.headerRowDay=[],this.duties=[],this.selectedSlot=[-1,-1],this.selectedUserDateStr="",this.duties$=this.store.select(l).subscribe(t=>{this.duties=t}),this.staffIdList$=this.store.select(d).subscribe(t=>{this.staffIdList=t,this.resetTableData()}),this.weekStart$=this.store.select(r).subscribe(t=>{this.weekStart=t,this.setDayLabelRow(t),this.resetTableData()})}ngOnDestroy(){console.log("rosta-staff destroyed"),this.rotaArray$.unsubscribe(),this.staffIdList$.unsubscribe(),this.duties$.unsubscribe(),this.weekStart$.unsubscribe()}setDayLabelRow(t){let e="",s=null;this.headerRowDay=[];for(let o=0;o<14;o++)s=new Date(new Date(this.weekStart).setDate(this.weekStart.getDate()+o)),e=Object(a.t)(s,"E dd/MM",this.locale),this.headerRowDay.push(e)}resetTableData(){void 0!==this.weekStart&&this.staffIdList&&void 0!==this.rotaArray$&&(console.log("calling rosta service getdutiesfromdate"),this.rotaArray$=this.rostaService.getDutiesFromDate(this.weekStart,this.staffIdList).subscribe(t=>{this.rotaArray=t,console.log("Resetting table Data"),this.dataSource=new I.k(this.rotaArray)}))}ngOnInit(){this.rotaArray$=this.rostaService.getDutiesFromDate(this.weekStart,this.staffIdList).subscribe(t=>{this.rotaArray=t,this.setDesplayedColumns(t),console.log("Setting table date"),this.dataSource=new I.k(this.rotaArray)})}setDesplayedColumns(t){let e;const s=t[0][1];for(this.displayedColumns.push("staff"),e=0;e<s.length;++e)this.displayedColumns.push(e.toString()),this.displayedColumns2.push(e.toString()),e>0&&e%2&&(this.headerRowDef.push("h"+(e/2+.5)),this.headerRowDef2.push("h"+(e/2+.5)))}setAMorPM(t){return t%2?"PM":"AM"}setBackgroundColourCell(t,e){return t>9&&t<14||t>23?"#f2ebff":"000000"}setBackgroundColourHeader(t){return 5===t||6===t||t>11?"#f2ebff":"000000"}cellClicked(t,e){this.selectedSlot=this.selectedSlot[0]===t.staffId&&e===this.selectedSlot[1]?[-1,-1]:[t.staffId,e],this.selectedUserDateStr=t.userName+" on the "+this.getSelectedDateFromCol(e)}getSelectedDateFromCol(t){let e="",s=0;e=t%2?"Afternoon of the ":"Morning of the ",t>1&&(s=t%2?t/2-.5:t/2);const o=new Date(new Date(this.weekStart).setDate(this.weekStart.getDate()+s));return e+" "+Object(a.t)(o,"dd-MM-yyyy",this.locale)}menuClick(t,e,s){console.log("Staff Id = "+t.userName+" index = "+e+" => "+s.dutyCode);let o="",i=0;o=e%2?"PM":"AM",e>1&&(i=e%2?e/2-.5:e/2);const n=new Date(new Date(this.weekStart).setDate(this.weekStart.getDate()+i)),c=Object(a.t)(n,"yyyy-MM-dd",this.locale);this.rostaService.saveOrEditDuty({date:c,session:o,staff:t.staffId,duty:s.dutyId}).subscribe(t=>{console.log("result from save or edit = "+t),!1!==t&&this.resetTableData()})}menuClosed(){console.log("Menu closed!"),this.selectedSlot=[-1,-1]}isSelected(t,e){return e===this.selectedSlot[1]&&t===this.selectedSlot[0]}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(k.a),u.Nb(n.h),u.Nb(u.w))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-rosta-staff"]],viewQuery:function(t,e){if(1&t&&u.Gc(I.j,!0),2&t){let t;u.qc(t=u.cc())&&(e.table=t.first)}},decls:16,vars:7,consts:[[1,"table-container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["table",""],["matColumnDef","staff"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass","matTooltip",4,"matCellDef"],[3,"matColumnDef",4,"ngFor","ngForOf"],["matColumnDef","h0"],["mat-header-row","",4,"matHeaderRowDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["appMenu","matMenu"],["matMenuContent",""],["mat-header-cell",""],["mat-cell","",3,"ngClass","matTooltip"],[3,"matColumnDef"],["mat-header-cell","",3,"background-color",4,"matHeaderCellDef"],["mat-cell","",3,"matMenuTriggerFor","matMenuTriggerData","matTooltip","background-color","ngClass","click","menuClosed",4,"matCellDef"],["mat-cell","",3,"matMenuTriggerFor","matMenuTriggerData","matTooltip","ngClass","click","menuClosed"],["mat-header-row",""],["mat-row",""],[2,"background-color","rgb(248, 229, 229)"],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"]],template:function(t,e){1&t&&(u.Tb(0,"div",0),u.Tb(1,"table",1,2),u.Rb(3,3),u.Bc(4,L,1,0,"th",4),u.Bc(5,$,2,3,"td",5),u.Qb(),u.Bc(6,B,3,1,"ng-container",6),u.Rb(7,7),u.Bc(8,N,1,1,"th",4),u.Qb(),u.Bc(9,H,2,1,"ng-container",6),u.Bc(10,j,1,0,"tr",8),u.Bc(11,E,1,0,"tr",9),u.Bc(12,V,1,0,"tr",10),u.Sb(),u.Sb(),u.Tb(13,"mat-menu",null,11),u.Bc(15,q,3,2,"ng-template",12),u.Sb()),2&t&&(u.Cb(1),u.lc("dataSource",e.dataSource),u.Cb(5),u.lc("ngForOf",e.displayedColumns2),u.Cb(3),u.lc("ngForOf",e.headerRowDef2),u.Cb(1),u.lc("matHeaderRowDef",e.headerRowDef),u.Cb(1),u.lc("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),u.Cb(1),u.lc("matRowDefColumns",e.displayedColumns))},directives:[I.j,I.c,I.e,I.b,a.k,I.g,I.i,P.a,P.b,I.d,I.a,a.j,R.a,g.a,P.e,I.f,I.h,P.c],styles:["table[_ngcontent-%COMP%]{width:100%}.make-red[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]{background-color:#faa}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}th.mat-header-cell[_ngcontent-%COMP%]{border:1px solid #ccc}td.mat-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{text-align:center;padding:0!important}.mat-header-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%]{min-height:30px;height:30px}.mat-menu-item[_ngcontent-%COMP%]{height:25px;line-height:25px}  .mat-menu-panel{max-width:400px!important}.highlight[_ngcontent-%COMP%]{border:2px double #00f}.notHighlight[_ngcontent-%COMP%], .rowLabel[_ngcontent-%COMP%]{border:1px solid #ccc}  .mat-tooltip{font-size:16px}menuHeader[_ngcontent-%COMP%]{background-color:#a9a9a9}"]}),t})();function z(t,e){if(1&t&&(u.Tb(0,"mat-list-option",7),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.lc("value",t.staffId)("matTooltip",t.firstName+" "+t.lastName+" Band:"+t.grade),u.Cb(1),u.Ec(" ",t.firstName," ")}}let G=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e,this.selectedStaff=[]}ngOnInit(){this.staffList=this.data.staffList,this.duty=this.data.duty,this.col=this.data.col,this.selectedStaff=this.data.selectedStaff,this.dateStr=this.data.dateStr}onNoClick(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(i.g),u.Nb(i.a))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-shift-staff-dialog"]],decls:11,vars:5,consts:[["mat-dialog-content",""],[3,"ngModel","ngModelChange"],["list",""],[3,"value","matTooltip",4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],[3,"value","matTooltip"]],template:function(t,e){1&t&&(u.Tb(0,"p"),u.Cc(1),u.Sb(),u.Tb(2,"div",0),u.Tb(3,"mat-selection-list",1,2),u.bc("ngModelChange",function(t){return e.selectedStaff=t}),u.Bc(5,z,2,3,"mat-list-option",3),u.Sb(),u.Sb(),u.Tb(6,"div",4),u.Tb(7,"button",5),u.bc("click",function(){return e.onNoClick()}),u.Cc(8,"Cancel"),u.Sb(),u.Tb(9,"button",6),u.Cc(10,"Ok"),u.Sb(),u.Sb()),2&t&&(u.Cb(1),u.Fc("Select Staff for ",e.duty.dutyType," on the ",e.dateStr,""),u.Cb(2),u.lc("ngModel",e.selectedStaff),u.Cb(2),u.lc("ngForOf",e.data.staffList),u.Cb(4),u.lc("mat-dialog-close",e.selectedStaff))},directives:[i.e,h.c,b.k,b.n,a.k,i.c,m.a,i.d,h.b,g.a],styles:[""]}),t})();function K(t,e){1&t&&u.Ob(0,"th",13)}function J(t,e){if(1&t&&(u.Tb(0,"td",14),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.lc("ngClass","rowLabel"),u.Cb(1),u.Ec(" ",null==t[0]?null:t[0].dutyType," ")}}function X(t,e){if(1&t&&(u.Tb(0,"th",13),u.Cc(1),u.Sb()),2&t){const t=u.fc().index,e=u.fc();u.yc("background-color",e.setBackgroundColourCell(t)),u.Cb(1),u.Ec(" ",e.setAMorPM(t)," ")}}function W(t,e){if(1&t){const t=u.Ub();u.Tb(0,"td",18),u.bc("click",function(){u.tc(t);const s=e.$implicit,a=u.fc().index;return u.fc().cellClicked(s[0],a,s[1][a])}),u.Cc(1),u.Sb()}if(2&t){const t=e.$implicit,s=u.fc().index,a=u.fc();u.yc("background-color",a.setBackgroundColourCell(s)),u.lc("matTooltip",a.getStaffArrayNames(t[1][s]))("ngClass",a.isSelected(t[0].dutyId,s)?"highlight":"notHighlight"),u.Cb(1),u.Ec(" ",a.getStaffArray(t[1][s])," ")}}function Z(t,e){1&t&&(u.Rb(0,15),u.Bc(1,X,2,3,"th",16),u.Bc(2,W,2,5,"td",17),u.Qb()),2&t&&u.mc("matColumnDef",e.$implicit)}function Y(t,e){1&t&&u.Ob(0,"th",13),2&t&&u.Db("colspan",1)}function tt(t,e){if(1&t&&(u.Tb(0,"th",13),u.Cc(1),u.Sb()),2&t){const t=u.fc().index,e=u.fc();u.yc("background-color",e.setBackgroundColourHeader(t)),u.Db("colspan",2),u.Cb(1),u.Ec(" ",e.headerRowDay[t]," ")}}function et(t,e){1&t&&(u.Rb(0,15),u.Bc(1,tt,2,4,"th",16),u.Qb()),2&t&&u.mc("matColumnDef",e.$implicit)}function st(t,e){1&t&&u.Ob(0,"tr",19)}function at(t,e){1&t&&u.Ob(0,"tr",19)}function ot(t,e){1&t&&u.Ob(0,"tr",20)}function it(t,e){if(1&t){const t=u.Ub();u.Tb(0,"button",22),u.bc("click",function(){u.tc(t);const s=e.$implicit,a=u.fc(),o=a.col,i=a.duty;return u.fc().menuClick(s,o,i)}),u.Cc(1),u.Sb()}if(2&t){const t=e.$implicit;u.Cb(1),u.Dc(t.userName)}}function nt(t,e){if(1&t&&(u.Tb(0,"span"),u.Cc(1,"Edit Staff"),u.Sb(),u.Bc(2,it,2,1,"button",21)),2&t){const t=u.fc();u.Cb(2),u.lc("ngForOf",t.staff)}}let ct=(()=>{class t{constructor(t,e,s,a){this.dialog=t,this.rostaService=e,this.store=s,this.locale=a,this.rotaArrayDV=[],this.displayedColumns=[],this.displayedColumns2=[],this.headerRowDef=["h0"],this.headerRowDef2=[],this.headerRowDay=[],this.duties=[],this.staff=[],this.selectedSlot=[-1,-1],this.preSelectedStaffIdList=[],this.duties$=this.store.select(l).subscribe(t=>{this.duties=t}),this.staff$=this.rostaService.getStaffList().subscribe(t=>{this.staff=t}),this.dutyIdArray$=this.store.select(f).subscribe(t=>{this.dutyIdArray=t,this.resetTableData()}),this.weekStart$=this.store.select(r).subscribe(t=>{this.weekStart=t,this.setDayLabelRow(t),this.resetTableData()})}ngOnDestroy(){this.weekStart$.unsubscribe(),this.dutyIdArray$.unsubscribe(),this.staff$.unsubscribe(),this.duties$.unsubscribe()}setDayLabelRow(t){let e="",s=null;this.headerRowDay=[];for(let o=0;o<14;o++)s=new Date(new Date(this.weekStart).setDate(this.weekStart.getDate()+o)),e=Object(a.t)(s,"E dd/MM",this.locale),this.headerRowDay.push(e)}resetTableData(){this.weekStart&&this.dutyIdArray&&void 0!==this.rotaArrayDV$&&(this.rotaArrayDV$=this.rostaService.getStaffPerDutyFromDate(this.weekStart,this.dutyIdArray).subscribe(t=>{this.rotaArrayDV=t,console.log("Resetting table Data"),this.dataSource=new I.k(this.rotaArrayDV)}))}ngOnInit(){this.rotaArrayDV$=this.rostaService.getStaffPerDutyFromDate(this.weekStart,this.dutyIdArray).subscribe(t=>{this.rotaArrayDV=t,this.setDesplayedColumns(t),console.log("Setting table date"),this.dataSource=new I.k(this.rotaArrayDV)})}setDesplayedColumns(t){let e;const s=t[0][1];for(this.displayedColumns.push("duty"),e=0;e<s.length;++e)this.displayedColumns.push(e.toString()),this.displayedColumns2.push(e.toString()),e>0&&e%2&&(this.headerRowDef.push("h"+(e/2+.5)),this.headerRowDef2.push("h"+(e/2+.5)))}setAMorPM(t){return t%2?"PM":"AM"}setBackgroundColourCell(t){return t>9&&t<14||t>23?"#f2ebff":"000000"}setBackgroundColourHeader(t){return 5===t||6===t||t>11?"#f2ebff":"000000"}getStaffArray(t){let e="";if(t)for(const s of t)e=e+" "+s.initials;return e}getStaffArrayNames(t){let e="";if(t)for(const s of t)e=e+" "+s.userName+",";return e}cellClicked(t,e,s){this.selectedSlot[0]===t.dutyId&&e===this.selectedSlot[1]?this.selectedSlot=[-1,-1]:(this.selectedSlot=[t.dutyId,e],this.preSelectedStaffIdList=s?this.getSelectedStaffIdArray(s):[],this.openSP2Dialog(t,e,this.preSelectedStaffIdList))}getSelectedStaffIdArray(t){const e=[];for(const s of t)e.push(s.staffId);return e}menuClick(t,e,s){}menuClosed(){console.log("Menu closed!"),this.selectedSlot=[-1,-1]}getSelectedDateFromCol(t){let e="",s=0;e=t%2?"Afternoon of the ":"Morning of the ",t>1&&(s=t%2?t/2-.5:t/2);const o=new Date(new Date(this.weekStart).setDate(this.weekStart.getDate()+s));return e+" "+Object(a.t)(o,"dd-MM-yyyy",this.locale)}openSP2Dialog(t,e,s){const o=this.getSelectedDateFromCol(e);this.dialog.open(G,{width:"250px",data:{staffList:this.staff,duty:t,col:e,selectedStaff:s,dateStr:o}}).afterClosed().subscribe(e=>{if(e){let s="",o=0;s=this.selectedSlot[1]%2?"PM":"AM",this.selectedSlot[1]>1&&(o=this.selectedSlot[1]%2?this.selectedSlot[1]/2-.5:this.selectedSlot[1]/2);const i=new Date(new Date(this.weekStart).setDate(this.weekStart.getDate()+o)),n=Object(a.t)(i,"yyyy-MM-dd",this.locale);for(const a of e)console.log("Saving StaffId = "+a),this.saveAndReset({date:n,session:s,staff:a,duty:t.dutyId});this.preSelectedStaffIdList.length>0&&this.preSelectedStaffIdList.forEach(t=>{this.checkIfIdinList(t,e)||(console.log("Need to cancel shift for ID = "+t),this.saveAndReset({date:n,session:s,staff:t,duty:0}))})}this.selectedSlot=[-1,-1],this.resetTableData()})}saveAndReset(t){this.rostaService.saveOrEditDuty(t).subscribe(t=>{console.log("result from save or edit = "+t)})}checkIfIdinList(t,e){for(const s of e)if(s===t)return!0;return!1}isSelected(t,e){return e===this.selectedSlot[1]&&t===this.selectedSlot[0]}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(i.b),u.Nb(k.a),u.Nb(n.h),u.Nb(u.w))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-rosta-location"]],viewQuery:function(t,e){if(1&t&&u.Gc(I.j,!0),2&t){let t;u.qc(t=u.cc())&&(e.table=t.first)}},decls:16,vars:7,consts:[[1,"table-container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["table",""],["matColumnDef","duty"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass",4,"matCellDef"],[3,"matColumnDef",4,"ngFor","ngForOf"],["matColumnDef","h0"],["mat-header-row","",4,"matHeaderRowDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["appMenu","matMenu"],["matMenuContent",""],["mat-header-cell",""],["mat-cell","",3,"ngClass"],[3,"matColumnDef"],["mat-header-cell","",3,"background-color",4,"matHeaderCellDef"],["mat-cell","",3,"matTooltip","background-color","ngClass","click",4,"matCellDef"],["mat-cell","",3,"matTooltip","ngClass","click"],["mat-header-row",""],["mat-row",""],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"]],template:function(t,e){1&t&&(u.Tb(0,"div",0),u.Tb(1,"table",1,2),u.Rb(3,3),u.Bc(4,K,1,0,"th",4),u.Bc(5,J,2,2,"td",5),u.Qb(),u.Bc(6,Z,3,1,"ng-container",6),u.Rb(7,7),u.Bc(8,Y,1,1,"th",4),u.Qb(),u.Bc(9,et,2,1,"ng-container",6),u.Bc(10,st,1,0,"tr",8),u.Bc(11,at,1,0,"tr",9),u.Bc(12,ot,1,0,"tr",10),u.Sb(),u.Sb(),u.Tb(13,"mat-menu",null,11),u.Bc(15,nt,3,1,"ng-template",12),u.Sb()),2&t&&(u.Cb(1),u.lc("dataSource",e.dataSource),u.Cb(5),u.lc("ngForOf",e.displayedColumns2),u.Cb(3),u.lc("ngForOf",e.headerRowDef2),u.Cb(1),u.lc("matHeaderRowDef",e.headerRowDef),u.Cb(1),u.lc("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),u.Cb(1),u.lc("matRowDefColumns",e.displayedColumns))},directives:[I.j,I.c,I.e,I.b,a.k,I.g,I.i,P.a,P.b,I.d,I.a,a.j,R.a,g.a,I.f,I.h,P.c],styles:["table[_ngcontent-%COMP%]{width:100%}.make-red[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]{background-color:#faa}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}th.mat-header-cell[_ngcontent-%COMP%]{border:1px solid #ccc}td.mat-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{text-align:center;padding:0!important}.mat-header-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%]{min-height:30px;height:30px}.mat-menu-item[_ngcontent-%COMP%]{height:25px;line-height:25px}  .mat-menu-panel{max-width:400px!important}.highlight[_ngcontent-%COMP%]{border:2px double #00f}.notHighlight[_ngcontent-%COMP%], .rowLabel[_ngcontent-%COMP%]{border:1px solid #ccc}  .mat-tooltip{font-size:16px}"]}),t})();function lt(t,e){1&t&&u.Ob(0,"app-rosta-staff")}function rt(t,e){1&t&&u.Ob(0,"app-rosta-location")}let dt=(()=>{class t{constructor(t,e,s){this.dialog=t,this.rostaService=e,this.store=s,this.tabLoadTimes=[],this.staffList=[],this.dutyList=[],this.myFilter=t=>1===(t||new Date).getDay();const a=new Date,o=a.getDay(),i=0===o?6:o-1;this.restorePreferences(),this.weekCommencing=new Date(new Date(a).setDate(a.getDate()-i)),this.store.dispatch(S.d({dateFrom:this.weekCommencing})),this.staffList$=this.rostaService.getStaffList().subscribe(t=>{this.staffList=t}),this.dutyList$=this.rostaService.getDutyList().subscribe(t=>{this.dutyList=t}),this.store.dispatch(S.a())}restorePreferences(){let t=null;this.user$=this.store.select(y.d).subscribe(e=>{t=e,this.config={userId:e,selected_duties:[1],selected_staff:[t]},this.config$=this.rostaService.getPreSelectedConfig(t).subscribe(t=>{console.log("get config data ",t),t&&(this.config=t),console.log("setting Config Data ",t),this.store.dispatch(S.e({dutyIdList:this.config.selected_duties})),this.store.dispatch(S.f({staffIdList:this.config.selected_staff}))})})}ngOnDestroy(){this.staffList$&&this.staffList$.unsubscribe(),this.dutyList$&&this.dutyList$.unsubscribe(),this.config$&&this.config$.unsubscribe(),this.user$&&this.user$.unsubscribe()}ngOnInit(){}dateChanged(t){console.log("W/C "+t),this.store.dispatch(S.d({dateFrom:t}))}openSPDialog(){this.dialog.open(C,{width:"250px",data:this.staffList}).afterClosed().subscribe(t=>{console.log("Selected Staff "+t),t&&t.length>0&&(this.store.dispatch(S.f({staffIdList:t})),this.config.selected_staff=t,this.rostaService.setPreSelectedConfig(this.config))})}openDutyPickerDialog(){this.dialog.open(w,{width:"450px",data:this.dutyList}).afterClosed().subscribe(t=>{t&&t.length>0&&(this.store.dispatch(S.e({dutyIdList:t})),this.config.selected_duties=t,this.rostaService.setPreSelectedConfig(this.config))})}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(i.b),u.Nb(k.a),u.Nb(n.h))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-rosta-main"]],decls:18,vars:4,consts:[["color","primary",2,"min-height","30px"],["matInput","",1,"dateInput",3,"matDatepickerFilter","ngModel","matDatepicker","readonly","ngModelChange"],["startView","month"],["picker",""],["mat-raised-button","",1,"button-width",3,"click"],[1,"spacer"],["label","Staff View"],["matTabContent",""],["label","Location/Duty View"]],template:function(t,e){if(1&t){const t=u.Ub();u.Tb(0,"mat-toolbar",0),u.Tb(1,"span"),u.Cc(2,"Shift Planner w/c: "),u.Sb(),u.Tb(3,"input",1),u.bc("ngModelChange",function(t){return e.weekCommencing=t})("ngModelChange",function(){return e.dateChanged(e.weekCommencing)}),u.Sb(),u.Ob(4,"mat-datepicker",2,3),u.Tb(6,"button",4),u.bc("click",function(){return u.tc(t),u.rc(5).open()}),u.Cc(7,"Change Date"),u.Sb(),u.Tb(8,"button",4),u.bc("click",function(){return e.openSPDialog()}),u.Cc(9,"Staff List"),u.Sb(),u.Tb(10,"button",4),u.bc("click",function(){return e.openDutyPickerDialog()}),u.Cc(11,"Duty List"),u.Sb(),u.Ob(12,"span",5),u.Sb(),u.Tb(13,"mat-tab-group"),u.Tb(14,"mat-tab",6),u.Bc(15,lt,1,0,"ng-template",7),u.Sb(),u.Tb(16,"mat-tab",8),u.Bc(17,rt,1,0,"ng-template",7),u.Sb(),u.Sb()}if(2&t){const t=u.rc(5);u.Cb(3),u.lc("matDatepickerFilter",e.myFilter)("ngModel",e.weekCommencing)("matDatepicker",t)("readonly",!0)}},directives:[M.a,O.b,b.c,T.b,b.k,b.n,T.a,m.a,v.c,v.a,v.b,U,ct],styles:[".mat-toolbar[_ngcontent-%COMP%]{min-height:40px!important;height:40px!important}.mat-toolbar-row[_ngcontent-%COMP%],   .mat-tab-label{min-height:30px!important;height:30px!important}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.button-width[_ngcontent-%COMP%]{width:200px;margin-left:10px}.dateInput[_ngcontent-%COMP%]{padding-left:10px}"]}),t})();const ft=[{path:"",component:(()=>{class t{constructor(){const t=new Date,e=t.getDay(),s=0===e?6:e-1;this.weekCommencing=new Date(new Date(t).setDate(t.getDate()-s))}ngOnInit(){console.log("Rosta component init")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Hb({type:t,selectors:[["app-rosta"]],decls:2,vars:0,template:function(t,e){1&t&&(u.Tb(0,"div"),u.Ob(1,"router-outlet"),u.Sb())},directives:[o.h],styles:["table[_ngcontent-%COMP%]{width:100%}.make-red[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]{background-color:#faa}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}td.mat-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{text-align:center;border:1px solid #ccc;padding:0!important}.mat-header-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%]{min-height:30px;height:30px}"]}),t})(),children:[{path:"",component:dt}]}];let ut=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},imports:[[o.g.forChild(ft)],o.g]}),t})();var ht=s("PCNd"),bt=s("FKr1");let mt=(()=>{class t extends bt.r{getFirstDayOfWeek(){return 1}}return t.\u0275fac=function(e){return gt(e||t)},t.\u0275prov=u.Jb({token:t,factory:t.\u0275fac}),t})();const gt=u.Vb(mt);let pt=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},providers:[{provide:bt.a,useClass:mt},{provide:bt.d,useValue:"en-GB"}],imports:[[a.c,ht.a,ut]]}),t})()}}]);