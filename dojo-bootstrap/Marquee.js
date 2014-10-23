//>>built
define("dojo-bootstrap/Marquee","./Support dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/fx dojo/query dojo/on dojo/Deferred dojo/dom-class dojo/dom-construct dojo/dom-attr dojo/dom-style dojo/dom-geometry dojo/NodeList-dom dojo/NodeList-traverse dojo/NodeList-manipulate dojo/domReady!".split(" "),function(f,r,c,s,k,g,e,y,m,n,z,A,t){function p(a,b){return b?0>a.current-1?a.messages.length-1:a.current-1:a.current+1>a.messages.length-1?0:a.current+1}function u(a){var b=l(a);k.animateProperty({node:a.domNode,
properties:b.trans_in,duration:0}).play()}function v(a){var b=l(a);k.animateProperty({node:a.domNode,properties:b.trans_out,duration:0}).play()}function l(a){return{trans_in:w[a.options.anim].trans_in(a),trans_out:w[a.options.anim].trans_out(a)}}var x=r([],{defaultOptions:{link:"",className:"",life:2,anim:"fade",duration:1},constructor:function(a){this.options=c.mixin(c.clone(this.defaultOptions),a||{});this.options.life=isNaN(this.options.life)?this.defaultOptions.life:Number(this.options.life);
this.options.duration=isNaN(this.options.duration)?this.defaultOptions.duration:Number(this.options.duration);this.domNode=n.toDom("\x3cdiv\x3e"+(a.message||"")+"\x3c/div\x3e");if(""!==this.options.link){var b=n.toDom('\x3ca href\x3d"'+this.options.link+'"\x3e'+a.message+"\x3c/a\x3e");g(this.domNode).html(b)}m.add(this.domNode,"marquee-item");""!==this.options.className&&m.add(this.domNode,this.options.className);n.place(this.domNode,a.parent||document.body);this.parent=this.options.parent;this.dim=
{me:t.position(this.domNode),up:t.position(this.parent)};v(this)}}),h=r([],{defaultOptions:{autostart:!0,blend:!1},constructor:function(a,b){this.options=c.mixin(c.clone(this.defaultOptions),b||{});this.domNode=a;this.messages=[];m.add(this.domNode,"marquee");this.load(this.options.messages,this.options.autostart)},load:function(a,b){this.empty();this.add(a);e.emit(this.domNode,"loaded",{bubbles:!1,cancelable:!1});b&&!0===b&&this.start(this.current)},add:function(a){if(a){if(!(a instanceof Array))if(c.isObject(a))a=
[a];else if(c.isString(a))a=[{message:a}];else return;s.forEach(a,function(a){var d=c.mixin(c.clone(this.options),a);d.parent=this.domNode;s.forEach(["messages","startOnLoad","blend","toggle"],function(a){delete d[a]});this.messages.push(new x(d))},this)}},remove:function(a){this.current===a&&this.next();this.messages.splice(a,1)},clear:function(){this.stop(!0);v(this.messages[this.current])},empty:function(){this.stop();g(this.domNode).empty("");this.messages=[];this.current=0},start:function(a){var b=
this;if(!(0===this.messages.length||this.running))if(1===this.messages.length)u(this.messages[0]),e.emit(b.domNode,"changed",{bubbles:!1,cancelable:!1,currentIndex:0,currentMessage:this.messages[0]});else{"number"===typeof a&&(this.clear(),this.current=a,u(this.messages[this.current]));var d=this.messages[this.current],c=l(d);b.lifeTime=window.setTimeout(function(){function a(){b.current=p(b);var d=b.messages[b.current],c=l(d);e.emit(b.domNode,"before",{bubbles:!1,cancelable:!1,currentIndex:b.current,
currentMessage:d});k.animateProperty({node:d.domNode,properties:c.trans_in,duration:1E3*d.options.duration,onEnd:function(){b.running=!1;e.emit(b.domNode,"changed",{bubbles:!1,cancelable:!1,currentIndex:b.current,currentMessage:d});b.start()}}).play()}b.running=!0;k.animateProperty({node:d.domNode,properties:c.trans_out,duration:1E3*d.options.duration,onEnd:function(){e.emit(b.domNode,"after",{bubbles:!1,cancelable:!1,currentIndex:b.current,currentMessage:d});return b.options.blend||a()}}).play();
return b.options.blend&&a()},1E3*d.options.life)}},stop:function(a){this.running=!1;this.lifeTime&&window.clearTimeout(this.lifeTime);a&&!0===a||e.emit(this.domNode,"stop",{bubbles:!1,cancelable:!1})},next:function(){return this.running||this.start(p(this))},previous:function(){return this.running||this.start(p(this,!0))},first:function(){return this.running||this.start(0)},last:function(){return this.running||this.start(this.messages.length-1)}});h.extend({animations:{slide:{trans_in:function(a){return{left:{start:a.dim.up.w+
1,end:0}}},trans_out:function(a){return{left:{start:0,end:-1*(a.dim.me.w+1)}}}},scroll:{trans_in:function(a){return{top:{start:a.dim.up.h+1,end:0}}},trans_out:function(a){return{top:{start:0,end:-1*(a.dim.me.h+1)}}}},fade:{trans_in:function(a){return{opacity:{start:0,end:1}}},trans_out:function(a){return{opacity:{start:1,end:0}}}}}});var w=h.prototype.animations;c.extend(g.NodeList,{marquee:function(a,b){var d=c.isObject(a)?a:{};return this.forEach(function(q){var e=f.getData(q,"marquee");e||f.setData(q,
"marquee",e=new h(q,d));c.isString(a)&&e[a].call(e,b||"")})}});g("[data-spy\x3dmarquee]").forEach(function(a){var b=f.getData(a);b.messages=[];g("\x3e *",a).forEach(function(a){var c=f.getData(a)||{};c.message=a.innerHTML;""!==a.className&&(c.className=a.className);b.messages.push(c)});f.setData(a,"marquee",new h(a,b))});return h});
//@ sourceMappingURL=Marquee.js.map