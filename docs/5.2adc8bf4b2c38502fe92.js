(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{kse6:function(t,e,a){"use strict";a.r(e),a.d(e,"LibraryModule",function(){return $});var o=a("ofXK"),i=a("PCNd"),c=a("tyNb"),n=a("l7P3");const l=Object(n.o)("library"),r=Object(n.q)(l,t=>t.savedFiles);var s=a("+0xr"),b=a("M9IT"),d=a("0IaG"),u=a("fXoL"),p=a("XiUz"),f=a("bTqV");let m=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(d.g),u.Nb(d.a))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-download-dialog"]],decls:20,vars:7,consts:[["mat-dialog-title",""],["fxLayout","column","fxLayoutAlign","space-even start",1,"setHeight"],["fxLayout","row","fxLayoutAlign","space-around center",1,"fullWidth"],[1,"spacer"],["mat-raised-button","","color","primary",3,"mat-dialog-close"],["mat-raised-button","","color","accent","mat-dialog-close",""]],template:function(t,e){1&t&&(u.Tb(0,"h2",0),u.Cc(1,"Selected File Details"),u.Sb(),u.Tb(2,"mat-dialog-content"),u.Tb(3,"div",1),u.Tb(4,"div",2),u.Tb(5,"span"),u.Cc(6),u.Ob(7,"br"),u.Sb(),u.Sb(),u.Tb(8,"div"),u.Tb(9,"span"),u.Cc(10),u.Sb(),u.Sb(),u.Sb(),u.Sb(),u.Tb(11,"mat-dialog-actions"),u.Tb(12,"span"),u.Cc(13),u.gc(14,"date"),u.Sb(),u.Ob(15,"span",3),u.Tb(16,"button",4),u.Cc(17,"Download"),u.Sb(),u.Tb(18,"button",5),u.Cc(19,"Cancel"),u.Sb(),u.Sb()),2&t&&(u.Cb(6),u.Ec(" Description: ",e.data.description," "),u.Cb(4),u.Ec(" Filename: ",e.data.file," "),u.Cb(3),u.Ec(" Uploaded: ",u.ic(14,4,e.data.dateUploaded,"dd/MM/yyyy")," "),u.Cb(3),u.lc("mat-dialog-close",e.data))},directives:[d.h,d.e,p.c,p.b,d.c,f.a,d.d],pipes:[o.e],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}.fullWidth[_ngcontent-%COMP%]{width:100%;background-color:#d7defd}.setHeight[_ngcontent-%COMP%]{height:250px}"]}),t})();var h=a("tk/3"),g=a("3Pt+"),C=a("LRne"),S=a("lJxs"),y=a("JIr8"),v=a("ZdSY"),w=a("H+J2"),T=a("kmnG"),F=a("qFsG"),O=a("bv9b");const k=["fileUpload"];let x=(()=>{class t{constructor(t,e,a){this.dialogUploadRef=t,this.libraryService=e,this.formBuilder=a,this.files=[],this.fileProgress=0}ngOnInit(){this.uploadForm=this.formBuilder.group({file:[null,g.p.required],description:["",[g.p.required,v.a]]})}onFileSelected(t){if(t.target.files.length>0){const e=t.target.files[0];console.log(e),this.uploadForm.get("file").setValue(e)}}uploadFile(){const t=new FormData,e=this.uploadForm.get("file").value;t.append("file",e),t.append("description",this.uploadForm.get("description").value),e.inProgress=!0,this.libraryService.upload(t).pipe(Object(S.a)(t=>{switch(t.type){case h.d.UploadProgress:t.total&&(this.fileProgress=Math.round(100*t.loaded/t.total));break;case h.d.Response:return t}}),Object(y.a)(t=>(e.inProgress=!1,Object(C.a)(e.data.name+" upload failed.")))).subscribe(t=>{"object"==typeof t&&(console.log(t.body),this.dialogUploadRef.close(t.body))})}onCancelClick(){this.dialogUploadRef.close()}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(d.g),u.Nb(w.a),u.Nb(g.d))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-upload-dialog"]],viewQuery:function(t,e){if(1&t&&u.Gc(k,!0),2&t){let t;u.qc(t=u.cc())&&(e.fileUpload=t.first)}},decls:16,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content","",1,"setHeight"],[3,"formGroup","ngSubmit"],["type","file","name","file",3,"change"],["matInput","","formControlName","description","autocomplete","off","placeholder","Type description here"],[3,"value"],["mat-dialog-actions",""],[1,"spacer"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","color","accent",3,"disabled","click"]],template:function(t,e){1&t&&(u.Tb(0,"h1",0),u.Cc(1,"Select file to upload"),u.Sb(),u.Tb(2,"div",1),u.Tb(3,"form",2),u.bc("ngSubmit",function(){return e.uploadFile()}),u.Tb(4,"div"),u.Tb(5,"input",3),u.bc("change",function(t){return e.onFileSelected(t)}),u.Sb(),u.Sb(),u.Tb(6,"mat-form-field"),u.Ob(7,"input",4),u.Sb(),u.Sb(),u.Ob(8,"mat-progress-bar",5),u.Sb(),u.Tb(9,"div",6),u.Tb(10,"span",7),u.Cc(11,"..... "),u.Sb(),u.Tb(12,"button",8),u.bc("click",function(){return e.onCancelClick()}),u.Cc(13,"Cancel"),u.Sb(),u.Tb(14,"button",9),u.bc("click",function(){return e.uploadFile()}),u.Cc(15,"Save"),u.Sb(),u.Sb()),2&t&&(u.Cb(3),u.lc("formGroup",e.uploadForm),u.Cb(5),u.lc("value",e.fileProgress),u.Cb(6),u.lc("disabled",!e.uploadForm.valid))},directives:[d.h,d.e,g.q,g.l,g.f,T.b,F.b,g.c,g.k,g.e,O.a,d.c,f.a],styles:[".spacer[_ngcontent-%COMP%]{flex:1 1 auto}.fullWidth[_ngcontent-%COMP%]{width:100%;background-color:#d7defd}.setHeight[_ngcontent-%COMP%]{height:250px}"]}),t})();var P=a("/t3+");function D(t,e){1&t&&(u.Tb(0,"th",13),u.Cc(1," Description "),u.Sb())}function M(t,e){if(1&t&&(u.Tb(0,"td",14),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.Cb(1),u.Ec(" ",t.description," ")}}function N(t,e){1&t&&(u.Tb(0,"th",13),u.Cc(1," Date Uploaded "),u.Sb())}function R(t,e){if(1&t&&(u.Tb(0,"td",14),u.Cc(1),u.gc(2,"date"),u.Sb()),2&t){const t=e.$implicit;u.Cb(1),u.Ec(" ",u.ic(2,1,t.dateUploaded,"dd/MM/yyyy")," ")}}function H(t,e){1&t&&(u.Tb(0,"th",13),u.Cc(1," Filename "),u.Sb())}function U(t,e){if(1&t&&(u.Tb(0,"td",14),u.Cc(1),u.Sb()),2&t){const t=e.$implicit;u.Cb(1),u.Ec(" ",t.file," ")}}function L(t,e){1&t&&u.Ob(0,"tr",15)}function B(t,e){if(1&t){const t=u.Ub();u.Tb(0,"tr",16),u.bc("click",function(){u.tc(t);const a=e.$implicit;return u.fc().onFileSelected(a)}),u.Sb()}}const j=function(){return[6]};let _=(()=>{class t{constructor(t,e,a){this.libraryService=t,this.store=e,this.dialog=a,this.savedFiles=[],this.displayedColumns=["description","dateUploaded","file"],this.savedFiles$=this.store.select(r),this.savedFiles$.subscribe(t=>{this.savedFiles=t,this.dataSource=new s.k(this.savedFiles),this.dataSource.paginator=this.paginator})}ngOnInit(){}onFileSelected(t){this.dialog.open(m,{width:"600px",height:"400px",data:t}).afterClosed().subscribe(t=>{if(t){const e=t.file.slice(6);this.libraryService.download(e)}})}onNewFile(){this.dialog.open(x,{width:"600px",height:"400px"}).afterClosed().subscribe(t=>{if(t){console.log("result  "+t.file);const e=Object.assign([],this.savedFiles);e.push(t),this.dataSource=new s.k(e)}else console.log("No data returned!!");t=null})}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(w.a),u.Nb(n.h),u.Nb(d.b))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-library-main"]],viewQuery:function(t,e){if(1&t&&u.Gc(b.a,!0),2&t){let t;u.qc(t=u.cc())&&(e.paginator=t.first)}},decls:20,vars:6,consts:[["color","primary"],[1,"spacer"],["mat-raised-button","","color","accent","type","button",3,"click"],[1,"table-container"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","description"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","dateUploaded"],["matColumnDef","file"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row","",3,"click"]],template:function(t,e){1&t&&(u.Tb(0,"mat-toolbar",0),u.Tb(1,"span"),u.Cc(2,"Saved Files"),u.Sb(),u.Ob(3,"span",1),u.Tb(4,"button",2),u.bc("click",function(){return e.onNewFile()}),u.Cc(5,"Upload new file"),u.Sb(),u.Sb(),u.Tb(6,"div",3),u.Tb(7,"table",4),u.Rb(8,5),u.Bc(9,D,2,0,"th",6),u.Bc(10,M,2,1,"td",7),u.Qb(),u.Rb(11,8),u.Bc(12,N,2,0,"th",6),u.Bc(13,R,3,4,"td",7),u.Qb(),u.Rb(14,9),u.Bc(15,H,2,0,"th",6),u.Bc(16,U,2,1,"td",7),u.Qb(),u.Bc(17,L,1,0,"tr",10),u.Bc(18,B,1,0,"tr",11),u.Sb(),u.Ob(19,"mat-paginator",12),u.Sb()),2&t&&(u.Cb(7),u.lc("dataSource",e.dataSource),u.Cb(10),u.lc("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),u.Cb(1),u.lc("matRowDefColumns",e.displayedColumns),u.Cb(1),u.lc("pageSizeOptions",u.nc(5,j)))},directives:[P.a,f.a,s.j,s.c,s.e,s.b,s.g,s.i,b.a,s.d,s.a,s.f,s.h],pipes:[o.e],styles:["table[_ngcontent-%COMP%]{width:100%}.make-red[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]{background-color:#faa}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),t})();var I=a("ipC3");let q=(()=>{class t{constructor(t,e){this.libraryService=t,this.store=e}ngOnInit(){}onClick(){this.store.dispatch(I.c())}}return t.\u0275fac=function(e){return new(e||t)(u.Nb(w.a),u.Nb(n.h))},t.\u0275cmp=u.Hb({type:t,selectors:[["app-library-nav"]],decls:5,vars:1,consts:[[3,"click"]],template:function(t,e){1&t&&(u.Tb(0,"p"),u.Cc(1,"library-nav works!"),u.Sb(),u.Cc(2),u.Tb(3,"button",0),u.bc("click",function(){return e.onClick()}),u.Cc(4,"Get Files"),u.Sb()),2&t&&(u.Cb(2),u.Ec("\n",e.result,"\n"))},styles:[""]}),t})();const G=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Hb({type:t,selectors:[["app-library"]],decls:5,vars:0,consts:[["fxLayout","row","fxLayoutAlign","space-between start"],["fxFlex","20",1,"container-outer"],["fxFlex","80",1,"content"]],template:function(t,e){1&t&&(u.Tb(0,"div",0),u.Tb(1,"div",1),u.Ob(2,"app-library-nav"),u.Sb(),u.Tb(3,"div",2),u.Ob(4,"router-outlet"),u.Sb(),u.Sb())},directives:[p.c,p.b,p.a,q,c.h],styles:[""]}),t})(),children:[{path:"",component:_}]}];let E=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},imports:[[c.g.forChild(G)],c.g]}),t})(),$=(()=>{class t{}return t.\u0275mod=u.Lb({type:t}),t.\u0275inj=u.Kb({factory:function(e){return new(e||t)},imports:[[o.c,i.a,E]]}),t})()}}]);