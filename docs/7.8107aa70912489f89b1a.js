(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Ny1X:function(t,e,a){"use strict";a.r(e),a.d(e,"RostaModule",function(){return Ct});var s=a("ofXK"),n=a("tyNb"),o=a("0IaG"),i=a("l7P3");const c=Object(i.o)("rosta"),l=Object(i.q)(c,t=>t.duties),r=Object(i.q)(c,t=>t.dateFrom),d=Object(i.q)(c,t=>t.staffIdList),f=Object(i.q)(c,t=>t.dutyIdList);var u=a("fXoL"),h=a("MutI"),b=a("3Pt+"),m=a("bTqV");function g(t,e){if(1&t&&(u.Tb(0,"mat-list-option",8),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.lc("value",t.staffId),u.Cb(1),u.Ec(" ",t.userName," ")}}let C=(()=>{class t{constructor(t,e,a){this.dialogRef=t,this.data=e,this.store=a,this.selectedStaff=[],this.store.select(d).subscribe(t=>{this.selectedStaff=t})}onNoClick(){this.dialogRef.close()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(o.g),u.Nb(o.a),u.Nb(i.h))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-staff-picker-dialog"]],decls:11,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"ngModel","ngModelChange"],["list",""],[3,"value",4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],[3,"value"]],template:function(t,e){1&t&&(u.Tb(0,"h1",0),u.Cc(1,"Select Staff Roster"),u.Sb(),u.Tb(2,"div",1),u.Tb(3,"mat-selection-list",2,3),u.bc("ngModelChange",function(t){return e.selectedStaff=t}),u.Bc(5,g,2,2,"mat-list-option",4),u.Sb(),u.Sb(),u.Tb(6,"div",5),u.Tb(7,"button",6),u.bc("click",function(){return e.onNoClick()}),u.Cc(8,"Cancel"),u.Sb(),u.Tb(9,"button",7),u.Cc(10,"Ok"),u.Sb(),u.Sb()),2&t&&(u.Cb(3),u.lc("ngModel",e.selectedStaff),u.Cb(2),u.lc("ngForOf",e.data),u.Cb(4),u.lc("mat-dialog-close",e.selectedStaff))},directives:[o.h,o.e,h.c,b.k,b.n,s.k,o.c,m.a,o.d,h.b],styles:[""]}),t})();var p=a("sdho");function S(t,e){if(1&t&&(u.Tb(0,"mat-list-option",8),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.lc("value",t.dutyId),u.Cb(1),u.Ec(" ",t.dutyType," ")}}let y=(()=>{class t{constructor(t,e,a){this.dialogRef=t,this.data=e,this.store=a,this.selectedDuties=[],this.store.select(f).subscribe(t=>{this.selectedDuties=t})}onNoClick(){this.dialogRef.close()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(o.g),u.Nb(o.a),u.Nb(i.h))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-location-picker-dialog"]],decls:11,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[3,"ngModel","ngModelChange"],["list",""],[3,"value",4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],[3,"value"]],template:function(t,e){1&t&&(u.Tb(0,"h1",0),u.Cc(1,"Select Shift Type"),u.Sb(),u.Tb(2,"div",1),u.Tb(3,"mat-selection-list",2,3),u.bc("ngModelChange",function(t){return e.selectedDuties=t}),u.Bc(5,S,2,2,"mat-list-option",4),u.Sb(),u.Sb(),u.Tb(6,"div",5),u.Tb(7,"button",6),u.bc("click",function(){return e.onNoClick()}),u.Cc(8,"Cancel"),u.Sb(),u.Tb(9,"button",7),u.Cc(10,"Ok"),u.Sb(),u.Sb()),2&t&&(u.Cb(3),u.lc("ngModel",e.selectedDuties),u.Cb(2),u.lc("ngForOf",e.data),u.Cb(4),u.lc("mat-dialog-close",e.selectedDuties))},directives:[o.h,o.e,h.c,b.k,b.n,s.k,o.c,m.a,o.d,h.b],styles:[""]}),t})();var D=a("2NH0"),w=a("/t3+"),k=a("qFsG"),M=a("iadO"),O=a("wZkO"),T=a("+0xr"),v=a("STbY"),R=a("znSr"),I=a("Qu3c");function P(t,e){1&t&&u.Ob(0,"th",13)}function x(t,e){if(1&t&&(u.Tb(0,"td",14),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.lc("ngClass","rowLabel"),u.Cb(1),u.Ec(" ",null==t[0]?null:t[0].userName," ")}}function L(t,e){if(1&t&&(u.Tb(0,"th",13),u.Cc(1),u.Sb()),2&t){const t=u.fc().index,e=u.fc();u.yc("background-color",e.setBackgroundColourCell(t,0)),u.Cb(1),u.Ec(" ",e.setAMorPM(t)," ")}}const F=function(t,e){return{staff:t,col:e}};function $(t,e){if(1&t){const t=u.Ub();u.Tb(0,"td",18),u.bc("click",function(){u.tc(t);const a=e.$implicit,s=u.fc().index;return u.fc().cellClicked(a[0],s)})("menuClosed",function(){return u.tc(t),u.fc(2).menuClosed()}),u.Cc(1),u.Sb()}if(2&t){const t=e.$implicit,a=u.fc().index,s=u.fc(),n=u.rc(14);u.yc("background-color",s.setBackgroundColourCell(a,t[0].staffId)),u.lc("matMenuTriggerFor",n)("matMenuTriggerData",u.pc(7,F,t[0],a))("matTooltip",null==t[1][a]?null:t[1][a].dutyType)("ngClass",s.isSelected(t[0].staffId,a)?"highlight":"notHighlight"),u.Cb(1),u.Ec(" ",null==t[1][a]?null:t[1][a].dutyCode," ")}}function B(t,e){1&t&&(u.Rb(0,15),u.Bc(1,L,2,3,"th",16),u.Bc(2,$,2,10,"td",17),u.Qb()),2&t&&u.mc("matColumnDef",e.$implicit)}function A(t,e){1&t&&u.Ob(0,"th",13),2&t&&u.Db("colspan",1)}function _(t,e){if(1&t&&(u.Tb(0,"th",13),u.Cc(1),u.Sb()),2&t){const t=u.fc().index,e=u.fc();u.yc("background-color",e.setBackgroundColourHeader(t)),u.Db("colspan",2),u.Cb(1),u.Ec(" ",e.headerRowDay[t]," ")}}function N(t,e){1&t&&(u.Rb(0,15),u.Bc(1,_,2,4,"th",16),u.Qb()),2&t&&u.mc("matColumnDef",e.$implicit)}function H(t,e){1&t&&u.Ob(0,"tr",19)}function E(t,e){1&t&&u.Ob(0,"tr",19)}function j(t,e){1&t&&u.Ob(0,"tr",20)}function V(t,e){if(1&t){const t=u.Ub();u.Tb(0,"button",22),u.bc("click",function(){u.tc(t);const a=e.$implicit,s=u.fc(),n=s.staff,o=s.col;return u.fc().menuClick(n,o,a)}),u.Cc(1),u.Sb()}if(2&t){const t=e.$implicit;u.Cb(1),u.Dc(t.dutyType)}}function Q(t,e){if(1&t&&(u.Tb(0,"span"),u.Cc(1,"Edit Duty"),u.Sb(),u.Bc(2,V,2,1,"button",21)),2&t){const t=u.fc();u.Cb(2),u.lc("ngForOf",t.duties)}}let q=(()=>{class t{constructor(t,e,a){this.rostaService=t,this.store=e,this.locale=a,this.rotaArray=[],this.displayedColumns=[],this.displayedColumns2=[],this.headerRowDef=["h0"],this.headerRowDef2=[],this.headerRowDay=[],this.duties=[],this.selectedSlot=[-1,-1],this.duties$=this.store.select(l),this.duties$.subscribe(t=>{this.duties=t}),this.staffIdList$=this.store.select(d),this.staffIdList$.subscribe(t=>{this.staffIdList=t,this.resetTableData()}),this.weekStart$=this.store.select(r),this.weekStart$.subscribe(t=>{this.weekStart=t,this.setDayLabelRow(t),this.resetTableData()})}setDayLabelRow(t){let e="",a=null;this.headerRowDay=[];for(let n=0;n<14;n++)a=new Date(new Date(this.weekStart).setDate(this.weekStart.getDate()+n)),e=Object(s.t)(a,"E dd/MM",this.locale),this.headerRowDay.push(e)}resetTableData(){this.weekStart&&this.staffIdList&&(this.rotaArray$=this.rostaService.getDutiesFromDate(this.weekStart,this.staffIdList),this.rotaArray$.subscribe(t=>{this.rotaArray=t,console.log("Resetting table Data"),this.dataSource=new T.k(this.rotaArray)}))}ngOnInit(){this.rotaArray$=this.rostaService.getDutiesFromDate(this.weekStart,this.staffIdList),this.rotaArray$.subscribe(t=>{this.rotaArray=t,this.setDesplayedColumns(t),console.log("Setting table date"),this.dataSource=new T.k(this.rotaArray)})}setDesplayedColumns(t){let e;const a=t[0][1];for(this.displayedColumns.push("staff"),e=0;e<a.length;++e)this.displayedColumns.push(e.toString()),this.displayedColumns2.push(e.toString()),e>0&&e%2&&(this.headerRowDef.push("h"+(e/2+.5)),this.headerRowDef2.push("h"+(e/2+.5)))}setAMorPM(t){return t%2?"PM":"AM"}setBackgroundColourCell(t,e){return t>9&&t<14||t>23?"#f2ebff":"000000"}setBackgroundColourHeader(t){return 5===t||6===t||t>11?"#f2ebff":"000000"}cellClicked(t,e){this.selectedSlot=this.selectedSlot[0]===t.staffId&&e===this.selectedSlot[1]?[-1,-1]:[t.staffId,e]}menuClick(t,e,a){console.log("Staff Id = "+t.userName+" index = "+e+" => "+a.dutyCode);let n="",o=0;n=e%2?"PM":"AM",e>1&&(o=e%2?e/2-.5:e/2);const i=new Date(new Date(this.weekStart).setDate(this.weekStart.getDate()+o)),c=Object(s.t)(i,"yyyy-MM-dd",this.locale);this.rostaService.saveOrEditDuty({date:c,session:n,staff:t.staffId,duty:a.dutyId}).subscribe(t=>{this.result=t,console.log("result from save or edit = "+t),this.resetTableData()})}menuClosed(){console.log("Menu closed!"),this.selectedSlot=[-1,-1]}isSelected(t,e){return e===this.selectedSlot[1]&&t===this.selectedSlot[0]}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(D.a),u.Nb(i.h),u.Nb(u.w))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-rosta-staff"]],viewQuery:function(t,e){if(1&t&&u.Gc(T.j,!0),2&t){let t;u.qc(t=u.cc())&&(e.table=t.first)}},decls:16,vars:7,consts:[[1,"table-container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["table",""],["matColumnDef","staff"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass",4,"matCellDef"],[3,"matColumnDef",4,"ngFor","ngForOf"],["matColumnDef","h0"],["mat-header-row","",4,"matHeaderRowDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["appMenu","matMenu"],["matMenuContent",""],["mat-header-cell",""],["mat-cell","",3,"ngClass"],[3,"matColumnDef"],["mat-header-cell","",3,"background-color",4,"matHeaderCellDef"],["mat-cell","",3,"matMenuTriggerFor","matMenuTriggerData","matTooltip","background-color","ngClass","click","menuClosed",4,"matCellDef"],["mat-cell","",3,"matMenuTriggerFor","matMenuTriggerData","matTooltip","ngClass","click","menuClosed"],["mat-header-row",""],["mat-row",""],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"]],template:function(t,e){1&t&&(u.Tb(0,"div",0),u.Tb(1,"table",1,2),u.Rb(3,3),u.Bc(4,P,1,0,"th",4),u.Bc(5,x,2,2,"td",5),u.Qb(),u.Bc(6,B,3,1,"ng-container",6),u.Rb(7,7),u.Bc(8,A,1,1,"th",4),u.Qb(),u.Bc(9,N,2,1,"ng-container",6),u.Bc(10,H,1,0,"tr",8),u.Bc(11,E,1,0,"tr",9),u.Bc(12,j,1,0,"tr",10),u.Sb(),u.Sb(),u.Tb(13,"mat-menu",null,11),u.Bc(15,Q,3,1,"ng-template",12),u.Sb()),2&t&&(u.Cb(1),u.lc("dataSource",e.dataSource),u.Cb(5),u.lc("ngForOf",e.displayedColumns2),u.Cb(3),u.lc("ngForOf",e.headerRowDef2),u.Cb(1),u.lc("matHeaderRowDef",e.headerRowDef),u.Cb(1),u.lc("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),u.Cb(1),u.lc("matRowDefColumns",e.displayedColumns))},directives:[T.j,T.c,T.e,T.b,s.k,T.g,T.i,v.a,v.b,T.d,T.a,s.j,R.a,v.e,I.a,T.f,T.h,v.c],styles:["table[_ngcontent-%COMP%]{width:100%}.make-red[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]{background-color:#faa}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}th.mat-header-cell[_ngcontent-%COMP%]{border:1px solid #ccc}td.mat-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{text-align:center;padding:0!important}.mat-header-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%]{min-height:30px;height:30px}.mat-menu-item[_ngcontent-%COMP%]{height:25px;line-height:25px}  .mat-menu-panel{max-width:400px!important}.highlight[_ngcontent-%COMP%]{border:2px double #00f}.notHighlight[_ngcontent-%COMP%], .rowLabel[_ngcontent-%COMP%]{border:1px solid #ccc}"]}),t})();var G=a("mrSG");function U(t,e){if(1&t&&(u.Tb(0,"mat-list-option",7),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.lc("value",t.staffId),u.Cb(1),u.Ec(" ",t.userName," ")}}let z=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e,this.selectedStaff=[]}ngOnInit(){this.staffList=this.data.staffList,this.duty=this.data.duty,this.col=this.data.col,this.selectedStaff=this.data.selectedStaff}onNoClick(){this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(o.g),u.Nb(o.a))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-shift-staff-dialog"]],decls:11,vars:4,consts:[["mat-dialog-content",""],[3,"ngModel","ngModelChange"],["list",""],[3,"value",4,"ngFor","ngForOf"],["mat-dialog-actions",""],["mat-button","",3,"click"],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],[3,"value"]],template:function(t,e){1&t&&(u.Tb(0,"p"),u.Cc(1),u.Sb(),u.Tb(2,"div",0),u.Tb(3,"mat-selection-list",1,2),u.bc("ngModelChange",function(t){return e.selectedStaff=t}),u.Bc(5,U,2,2,"mat-list-option",3),u.Sb(),u.Sb(),u.Tb(6,"div",4),u.Tb(7,"button",5),u.bc("click",function(){return e.onNoClick()}),u.Cc(8,"Cancel"),u.Sb(),u.Tb(9,"button",6),u.Cc(10,"Ok"),u.Sb(),u.Sb()),2&t&&(u.Cb(1),u.Ec("Select Staff for ",e.duty.dutyType," on date!!!"),u.Cb(2),u.lc("ngModel",e.selectedStaff),u.Cb(2),u.lc("ngForOf",e.data.staffList),u.Cb(4),u.lc("mat-dialog-close",e.selectedStaff))},directives:[o.e,h.c,b.k,b.n,s.k,o.c,m.a,o.d,h.b],styles:[""]}),t})();function K(t,e){1&t&&u.Ob(0,"th",13)}function J(t,e){if(1&t&&(u.Tb(0,"td",14),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.lc("ngClass","rowLabel"),u.Cb(1),u.Ec(" ",null==t[0]?null:t[0].dutyType," ")}}function X(t,e){if(1&t&&(u.Tb(0,"th",13),u.Cc(1),u.Sb()),2&t){const t=u.fc().index,e=u.fc();u.yc("background-color",e.setBackgroundColourCell(t)),u.Cb(1),u.Ec(" ",e.setAMorPM(t)," ")}}function W(t,e){if(1&t){const t=u.Ub();u.Tb(0,"td",18),u.bc("click",function(){u.tc(t);const a=e.$implicit,s=u.fc().index;return u.fc().cellClicked(a[0],s,a[1][s])}),u.Cc(1),u.Sb()}if(2&t){const t=e.$implicit,a=u.fc().index,s=u.fc();u.yc("background-color",s.setBackgroundColourCell(a)),u.lc("matTooltip",s.getStaffArrayNames(t[1][a]))("ngClass",s.isSelected(t[0].dutyId,a)?"highlight":"notHighlight"),u.Cb(1),u.Ec(" ",s.getStaffArray(t[1][a])," ")}}function Y(t,e){1&t&&(u.Rb(0,15),u.Bc(1,X,2,3,"th",16),u.Bc(2,W,2,5,"td",17),u.Qb()),2&t&&u.mc("matColumnDef",e.$implicit)}function Z(t,e){1&t&&u.Ob(0,"th",13),2&t&&u.Db("colspan",1)}function tt(t,e){if(1&t&&(u.Tb(0,"th",13),u.Cc(1),u.Sb()),2&t){const t=u.fc().index,e=u.fc();u.yc("background-color",e.setBackgroundColourHeader(t)),u.Db("colspan",2),u.Cb(1),u.Ec(" ",e.headerRowDay[t]," ")}}function et(t,e){1&t&&(u.Rb(0,15),u.Bc(1,tt,2,4,"th",16),u.Qb()),2&t&&u.mc("matColumnDef",e.$implicit)}function at(t,e){1&t&&u.Ob(0,"tr",19)}function st(t,e){1&t&&u.Ob(0,"tr",19)}function nt(t,e){1&t&&u.Ob(0,"tr",20)}function ot(t,e){if(1&t){const t=u.Ub();u.Tb(0,"button",22),u.bc("click",function(){u.tc(t);const a=e.$implicit,s=u.fc(),n=s.col,o=s.duty;return u.fc().menuClick(a,n,o)}),u.Cc(1),u.Sb()}if(2&t){const t=e.$implicit;u.Cb(1),u.Dc(t.userName)}}function it(t,e){if(1&t&&(u.Tb(0,"span"),u.Cc(1,"Edit Staff"),u.Sb(),u.Bc(2,ot,2,1,"button",21)),2&t){const t=u.fc();u.Cb(2),u.lc("ngForOf",t.staff)}}let ct=(()=>{class t{constructor(t,e,a,s){this.dialog=t,this.rostaService=e,this.store=a,this.locale=s,this.rotaArrayDV=[],this.displayedColumns=[],this.displayedColumns2=[],this.headerRowDef=["h0"],this.headerRowDef2=[],this.headerRowDay=[],this.duties=[],this.staff=[],this.selectedSlot=[-1,-1],this.preSelectedStaffIdList=[],this.duties$=this.store.select(l),this.duties$.subscribe(t=>{this.duties=t}),this.staffIdList$=this.store.select(d),this.staffIdList$.subscribe(t=>{this.staffIdList=t,this.resetTableData(t)}),this.staff$=this.rostaService.getStaffList(),this.staff$.subscribe(t=>{this.staff=t}),this.dutyIdArray$=this.store.select(f),this.dutyIdArray$.subscribe(t=>{this.dutyIdArray=t,this.resetTableData(t)}),this.weekStart$=this.store.select(r),this.weekStart$.subscribe(t=>{this.weekStart=t,this.setDayLabelRow(t),this.resetTableData(t)})}setDayLabelRow(t){let e="",a=null;this.headerRowDay=[];for(let n=0;n<14;n++)a=new Date(new Date(this.weekStart).setDate(this.weekStart.getDate()+n)),e=Object(s.t)(a,"E dd/MM",this.locale),this.headerRowDay.push(e)}resetTableData(t){this.weekStart&&this.staffIdList&&(this.rotaArrayDV$=this.rostaService.getStaffPerDutyFromDate(this.weekStart,this.dutyIdArray),this.rotaArrayDV$.subscribe(t=>{this.rotaArrayDV=t,console.log("Resetting table Data"),this.dataSource=new T.k(this.rotaArrayDV)}))}ngOnInit(){this.rotaArrayDV$=this.rostaService.getStaffPerDutyFromDate(this.weekStart,this.dutyIdArray),this.rotaArrayDV$.subscribe(t=>{this.rotaArrayDV=t,this.setDesplayedColumns(t),console.log("Setting table date"),this.dataSource=new T.k(this.rotaArrayDV)})}setDesplayedColumns(t){let e;const a=t[0][1];for(this.displayedColumns.push("duty"),e=0;e<a.length;++e)this.displayedColumns.push(e.toString()),this.displayedColumns2.push(e.toString()),e>0&&e%2&&(this.headerRowDef.push("h"+(e/2+.5)),this.headerRowDef2.push("h"+(e/2+.5)))}setAMorPM(t){return t%2?"PM":"AM"}setBackgroundColourCell(t){return t>9&&t<14||t>23?"#f2ebff":"000000"}setBackgroundColourHeader(t){return 5===t||6===t||t>11?"#f2ebff":"000000"}getStaffArray(t){let e="";if(t)for(const a of t)e=e+" "+a.initials;return e}getStaffArrayNames(t){let e="";if(t)for(const a of t)e=e+" "+a.userName+",";return e}cellClicked(t,e,a){this.selectedSlot[0]===t.dutyId&&e===this.selectedSlot[1]?this.selectedSlot=[-1,-1]:(this.selectedSlot=[t.dutyId,e],this.preSelectedStaffIdList=a?this.getSelectedStaffIdArray(a):[],this.openSP2Dialog(t,e,this.preSelectedStaffIdList))}getSelectedStaffIdArray(t){const e=[];for(const a of t)e.push(a.staffId);return e}menuClick(t,e,a){}menuClosed(){console.log("Menu closed!"),this.selectedSlot=[-1,-1]}openSP2Dialog(t,e,a){this.dialog.open(z,{width:"250px",data:{staffList:this.staff,duty:t,col:e,selectedStaff:a}}).afterClosed().subscribe(e=>{if(e){let a="",n=0;a=this.selectedSlot[1]%2?"PM":"AM",this.selectedSlot[1]>1&&(n=this.selectedSlot[1]%2?this.selectedSlot[1]/2-.5:this.selectedSlot[1]/2);const o=new Date(new Date(this.weekStart).setDate(this.weekStart.getDate()+n)),i=Object(s.t)(o,"yyyy-MM-dd",this.locale);for(const s of e)console.log("Saving StaffId = "+s),this.saveAndReset({date:i,session:a,staff:s,duty:t.dutyId});this.preSelectedStaffIdList.length>0&&this.preSelectedStaffIdList.forEach(t=>{this.checkIfIdinList(t,e)||(console.log("Need to cancel shift for ID = "+t),this.saveAndReset({date:i,session:a,staff:t,duty:0}))})}this.selectedSlot=[-1,-1]})}saveAndReset(t){return Object(G.a)(this,void 0,void 0,function*(){console.log("saving start");const e=yield this.rostaService.saveOrEditDuty(t).toPromise();this.resetTableData(e),console.log("saving end")})}checkIfIdinList(t,e){for(const a of e)if(a===t)return!0;return!1}isSelected(t,e){return e===this.selectedSlot[1]&&t===this.selectedSlot[0]}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(o.b),u.Nb(D.a),u.Nb(i.h),u.Nb(u.w))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-rosta-location"]],viewQuery:function(t,e){if(1&t&&u.Gc(T.j,!0),2&t){let t;u.qc(t=u.cc())&&(e.table=t.first)}},decls:16,vars:7,consts:[[1,"table-container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["table",""],["matColumnDef","duty"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass",4,"matCellDef"],[3,"matColumnDef",4,"ngFor","ngForOf"],["matColumnDef","h0"],["mat-header-row","",4,"matHeaderRowDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["appMenu","matMenu"],["matMenuContent",""],["mat-header-cell",""],["mat-cell","",3,"ngClass"],[3,"matColumnDef"],["mat-header-cell","",3,"background-color",4,"matHeaderCellDef"],["mat-cell","",3,"matTooltip","background-color","ngClass","click",4,"matCellDef"],["mat-cell","",3,"matTooltip","ngClass","click"],["mat-header-row",""],["mat-row",""],["mat-menu-item","",3,"click",4,"ngFor","ngForOf"],["mat-menu-item","",3,"click"]],template:function(t,e){1&t&&(u.Tb(0,"div",0),u.Tb(1,"table",1,2),u.Rb(3,3),u.Bc(4,K,1,0,"th",4),u.Bc(5,J,2,2,"td",5),u.Qb(),u.Bc(6,Y,3,1,"ng-container",6),u.Rb(7,7),u.Bc(8,Z,1,1,"th",4),u.Qb(),u.Bc(9,et,2,1,"ng-container",6),u.Bc(10,at,1,0,"tr",8),u.Bc(11,st,1,0,"tr",9),u.Bc(12,nt,1,0,"tr",10),u.Sb(),u.Sb(),u.Tb(13,"mat-menu",null,11),u.Bc(15,it,3,1,"ng-template",12),u.Sb()),2&t&&(u.Cb(1),u.lc("dataSource",e.dataSource),u.Cb(5),u.lc("ngForOf",e.displayedColumns2),u.Cb(3),u.lc("ngForOf",e.headerRowDef2),u.Cb(1),u.lc("matHeaderRowDef",e.headerRowDef),u.Cb(1),u.lc("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),u.Cb(1),u.lc("matRowDefColumns",e.displayedColumns))},directives:[T.j,T.c,T.e,T.b,s.k,T.g,T.i,v.a,v.b,T.d,T.a,s.j,R.a,I.a,T.f,T.h,v.c],styles:["table[_ngcontent-%COMP%]{width:100%}.make-red[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]{background-color:#faa}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}th.mat-header-cell[_ngcontent-%COMP%]{border:1px solid #ccc}td.mat-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{text-align:center;padding:0!important}.mat-header-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%]{min-height:30px;height:30px}.mat-menu-item[_ngcontent-%COMP%]{height:25px;line-height:25px}  .mat-menu-panel{max-width:400px!important}.highlight[_ngcontent-%COMP%]{border:2px double #00f}.notHighlight[_ngcontent-%COMP%], .rowLabel[_ngcontent-%COMP%]{border:1px solid #ccc}  .mat-tooltip{font-size:16px}"]}),t})();function lt(t,e){1&t&&u.Ob(0,"app-rosta-staff")}function rt(t,e){1&t&&u.Ob(0,"app-rosta-location")}let dt=(()=>{class t{constructor(t,e,a){this.dialog=t,this.rostaService=e,this.store=a,this.tabLoadTimes=[],this.staffList=[],this.dutyList=[],this.myFilter=t=>1===(t||new Date).getDay();const s=new Date,n=s.getDay(),o=0===n?6:n-1;this.weekCommencing=new Date(new Date(s).setDate(s.getDate()-o)),this.store.dispatch(p.d({dateFrom:this.weekCommencing})),this.staffList$=this.rostaService.getStaffList(),this.staffList$.subscribe(t=>{this.staffList=t}),this.rostaService.getDutyList().subscribe(t=>{this.dutyList=t}),this.store.dispatch(p.a())}ngOnInit(){}dateChanged(t){console.log("W/C "+t),this.store.dispatch(p.d({dateFrom:t}))}openSPDialog(){this.dialog.open(C,{width:"250px",data:this.staffList}).afterClosed().subscribe(t=>{console.log("Selected Staff "+t),t&&t.length>0&&this.store.dispatch(p.f({staffIdList:t}))})}openDutyPickerDialog(){this.dialog.open(y,{width:"250px",data:this.dutyList}).afterClosed().subscribe(t=>{t&&t.length>0&&this.store.dispatch(p.e({dutyIdList:t}))})}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(o.b),u.Nb(D.a),u.Nb(i.h))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-rosta-main"]],decls:18,vars:4,consts:[["color","primary",2,"min-height","30px"],["matInput","",1,"dateInput",3,"matDatepickerFilter","ngModel","matDatepicker","readonly","ngModelChange"],["startView","month"],["picker",""],["mat-raised-button","",1,"button-width",3,"click"],[1,"spacer"],["label","Staff View"],["matTabContent",""],["label","Location/Duty View"]],template:function(t,e){if(1&t){const t=u.Ub();u.Tb(0,"mat-toolbar",0),u.Tb(1,"span"),u.Cc(2,"Shift Planner w/c: "),u.Sb(),u.Tb(3,"input",1),u.bc("ngModelChange",function(t){return e.weekCommencing=t})("ngModelChange",function(){return e.dateChanged(e.weekCommencing)}),u.Sb(),u.Ob(4,"mat-datepicker",2,3),u.Tb(6,"button",4),u.bc("click",function(){return u.tc(t),u.rc(5).open()}),u.Cc(7,"Change Date"),u.Sb(),u.Tb(8,"button",4),u.bc("click",function(){return e.openSPDialog()}),u.Cc(9,"Staff List"),u.Sb(),u.Tb(10,"button",4),u.bc("click",function(){return e.openDutyPickerDialog()}),u.Cc(11,"Duty List"),u.Sb(),u.Ob(12,"span",5),u.Sb(),u.Tb(13,"mat-tab-group"),u.Tb(14,"mat-tab",6),u.Bc(15,lt,1,0,"ng-template",7),u.Sb(),u.Tb(16,"mat-tab",8),u.Bc(17,rt,1,0,"ng-template",7),u.Sb(),u.Sb()}if(2&t){const t=u.rc(5);u.Cb(3),u.lc("matDatepickerFilter",e.myFilter)("ngModel",e.weekCommencing)("matDatepicker",t)("readonly",!0)}},directives:[w.a,k.b,b.c,M.b,b.k,b.n,M.a,m.a,O.c,O.a,O.b,q,ct],styles:[".mat-toolbar[_ngcontent-%COMP%]{min-height:40px!important;height:40px!important}.mat-toolbar-row[_ngcontent-%COMP%],   .mat-tab-label{min-height:30px!important;height:30px!important}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.button-width[_ngcontent-%COMP%]{width:200px;margin-left:10px}.dateInput[_ngcontent-%COMP%]{padding-left:10px}"]}),t})();const ft=[{path:"",component:(()=>{class t{constructor(){const t=new Date,e=t.getDay(),a=0===e?6:e-1;this.weekCommencing=new Date(new Date(t).setDate(t.getDate()-a))}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Hb({type:t,selectors:[["app-rosta"]],decls:2,vars:0,template:function(t,e){1&t&&(u.Tb(0,"div"),u.Ob(1,"router-outlet"),u.Sb())},directives:[n.h],styles:["table[_ngcontent-%COMP%]{width:100%}.make-red[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]{background-color:#faa}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}td.mat-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%]{text-align:center;border:1px solid #ccc;padding:0!important}.mat-header-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%]{min-height:30px;height:30px}"]}),t})(),children:[{path:"",component:dt}]}];let ut=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},imports:[[n.g.forChild(ft)],n.g]}),t})();var ht=a("PCNd"),bt=a("FKr1");let mt=(()=>{class t extends bt.r{getFirstDayOfWeek(){return 1}}return t.\u0275fac=function(e){return gt(e||t)},t.\u0275prov=u.Jb({token:t,factory:t.\u0275fac}),t})();const gt=u.Vb(mt);let Ct=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},providers:[{provide:bt.a,useClass:mt},{provide:bt.d,useValue:"en-GB"}],imports:[[s.c,ht.a,ut]]}),t})()}}]);