//>>built
define("esri/dijit/editing/Util",["dojo/_base/lang","dojo/_base/array","dojo/has","../../kernel"],function(f,c,g,h){return{findFeatures:function(d,a,b){var e=a.objectIdField;a=c.filter(a.graphics,function(a){return c.some(d,function(b){return a.attributes[e]===b.objectId})});if(b)b(a);else return a},getSelection:function(d){var a=[];c.forEach(d,function(b){b=b.getSelectedFeatures();c.forEach(b,function(b){a.push(b)})});return a}}});
//@ sourceMappingURL=Util.js.map