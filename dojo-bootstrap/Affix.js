//>>built
define("dojo-bootstrap/Affix","./Support dojo/_base/declare dojo/query dojo/_base/lang dojo/_base/window dojo/on dojo/dom-class dojo/dom-construct dojo/dom-attr dojo/dom-style dojo/dom-geometry dojo/NodeList-dom dojo/NodeList-traverse dojo/domReady!".split(" "),function(h,m,e,d,f,k,q,r,s,n,p){var l=m([],{defaultOptions:{offset:0},constructor:function(c,a){this.options=d.mixin(d.clone(this.defaultOptions),a||{});this.domNode=c;k(f.global,"scroll",d.hitch(this,"checkPosition"));k(f.global,"click",d.hitch(this,
function(){setTimeout(d.hitch(this,"checkPosition"),1)}));this.checkPosition()},checkPosition:function(){if("none"!==n.get(this.domNode,"display")){var c=p.position(this.domNode,!1),a=f.doc.height,d=f.global.scrollY,b=this.options.offset,g;"object"!==typeof b?b=g=b:(g="function"===typeof b.top?b.top():b.top||0,b="function"===typeof b.bottom?b.bottom():b.bottom||0);a=null!==this.unpin&&d+this.unpin<=c.y?!1:null!==b&&c.y+c.h>=a-b?"bottom":null!==g&&d<=g?"top":!1;this.affixed!==a&&(this.affixed=a,this.unpin=
"bottom"===a?c.y-d:null,e(this.domNode).removeClass("affix affix-top affix-bottom").addClass("affix"+(a?"-"+a:"")))}}});d.extend(e.NodeList,{affix:function(c){var a=d.isObject(c)?c:{};return this.forEach(function(e){var b=h.getData(e,"affix");b||h.setData(e,"affix",b=new l(e,a));d.isString(c)&&b[c].call(b)})}});e("[data-spy\x3daffix]").forEach(function(c){var a=h.getData(c);a.offset=a.offset||{};a["offset-bottom"]&&(a.offset.bottom=a["offset-bottom"]);a["offset-top"]&&(a.offset.top=a["offset-top"]);
e(c).affix(a)});return l});
//@ sourceMappingURL=Affix.js.map