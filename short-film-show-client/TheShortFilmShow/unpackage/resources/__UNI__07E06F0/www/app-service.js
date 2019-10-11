var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20181221_syb_scopedata*/global.__wcc_version__='v0.5vv_20181221_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'12cd43ab'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'12cd43ab'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ca95fbe6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'ca95fbe6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'00b33dfa'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'00b33dfa'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'03c73e1e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'03c73e1e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0086721d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0086721d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'fa6a801e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'fa6a801e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'50a5d04d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'50a5d04d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6ffc4486'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6ffc4486'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5f0ac9fd'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5f0ac9fd'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'561e0bfd'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'561e0bfd'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a847c336'])
Z([3,'_view Ma847c336'])
Z([[7],[3,'showClearIcon']])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'a847c336'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'36ae34fd'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'36ae34fd'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','./pages/Swiper-detail/Swiper-detail.vue.wxml','./pages/Swiper-detail/Swiper-detail.wxml','./Swiper-detail.vue.wxml','./pages/filmlibrary/filmlibrary.vue.wxml','./pages/filmlibrary/filmlibrary.wxml','./filmlibrary.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','./index.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/open/open.vue.wxml','./pages/open/open.wxml','./open.vue.wxml','./pages/profile/profile.vue.wxml','./pages/profile/profile.wxml','./profile.vue.wxml','./pages/profileinfo/profileinfo.vue.wxml','./pages/profileinfo/profileinfo.wxml','./profileinfo.vue.wxml','./pages/register/register.vue.wxml','./pages/register/register.wxml','./register.vue.wxml','./pages/upload/upload.vue.wxml','./pages/upload/upload.wxml','./upload.vue.wxml','./pages/videoplay/videoplay.vue.wxml','./pages/videoplay/videoplay.wxml','./videoplay.vue.wxml','./pages/videosearch/videosearch.vue.wxml','./pages/videosearch/videosearch.wxml','./videosearch.vue.wxml','./pages/watchhistory/watchhistory.vue.wxml','./pages/watchhistory/watchhistory.wxml','./watchhistory.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["12cd43ab"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':12cd43ab'
r.wxVkey=b
gg.f=$gdc(f_["./pages/Swiper-detail/Swiper-detail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var oD=e_[x[2]].i
_ai(oD,x[3],e_,x[2],1,1)
var fE=_v()
_(r,fE)
var cF=_oz(z,1,e,s,gg)
var hG=_gd(x[2],cF,e_,d_)
if(hG){
var oH=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[2],2,18)
oD.pop()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[4]]={}
d_[x[4]]["ca95fbe6"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[4]+':ca95fbe6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/filmlibrary/filmlibrary.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lK=e_[x[5]].i
_ai(lK,x[6],e_,x[5],1,1)
var aL=_v()
_(r,aL)
var tM=_oz(z,1,e,s,gg)
var eN=_gd(x[5],tM,e_,d_)
if(eN){
var bO=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[5],2,18)
lK.pop()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[x[6]],ic:[]}
d_[x[7]]={}
d_[x[7]]["00b33dfa"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[7]+':00b33dfa'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[7]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oR=e_[x[8]].i
_ai(oR,x[9],e_,x[8],1,1)
var fS=_v()
_(r,fS)
var cT=_oz(z,1,e,s,gg)
var hU=_gd(x[8],cT,e_,d_)
if(hU){
var oV=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[8],2,18)
oR.pop()
return r
}
e_[x[8]]={f:m6,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[10]]={}
d_[x[10]]["03c73e1e"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[10]+':03c73e1e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[10]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var lY=e_[x[11]].i
_ai(lY,x[12],e_,x[11],1,1)
var aZ=_v()
_(r,aZ)
var t1=_oz(z,1,e,s,gg)
var e2=_gd(x[11],t1,e_,d_)
if(e2){
var b3=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[11],2,18)
lY.pop()
return r
}
e_[x[11]]={f:m8,j:[],i:[],ti:[x[12]],ic:[]}
d_[x[13]]={}
d_[x[13]]["0086721d"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[13]+':0086721d'
r.wxVkey=b
gg.f=$gdc(f_["./pages/open/open.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[13]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o6=e_[x[14]].i
_ai(o6,x[15],e_,x[14],1,1)
var f7=_v()
_(r,f7)
var c8=_oz(z,1,e,s,gg)
var h9=_gd(x[14],c8,e_,d_)
if(h9){
var o0=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
f7.wxXCkey=3
h9(o0,o0,f7,gg)
gg.f=cur_globalf
}
else _w(c8,x[14],2,18)
o6.pop()
return r
}
e_[x[14]]={f:m10,j:[],i:[],ti:[x[15]],ic:[]}
d_[x[16]]={}
d_[x[16]]["fa6a801e"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[16]+':fa6a801e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/profile/profile.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[16]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lCB=e_[x[17]].i
_ai(lCB,x[18],e_,x[17],1,1)
var aDB=_v()
_(r,aDB)
var tEB=_oz(z,1,e,s,gg)
var eFB=_gd(x[17],tEB,e_,d_)
if(eFB){
var bGB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aDB.wxXCkey=3
eFB(bGB,bGB,aDB,gg)
gg.f=cur_globalf
}
else _w(tEB,x[17],2,18)
lCB.pop()
return r
}
e_[x[17]]={f:m12,j:[],i:[],ti:[x[18]],ic:[]}
d_[x[19]]={}
d_[x[19]]["50a5d04d"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[19]+':50a5d04d'
r.wxVkey=b
gg.f=$gdc(f_["./pages/profileinfo/profileinfo.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[19]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var oJB=e_[x[20]].i
_ai(oJB,x[21],e_,x[20],1,1)
var fKB=_v()
_(r,fKB)
var cLB=_oz(z,1,e,s,gg)
var hMB=_gd(x[20],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[20],2,18)
oJB.pop()
return r
}
e_[x[20]]={f:m14,j:[],i:[],ti:[x[21]],ic:[]}
d_[x[22]]={}
d_[x[22]]["6ffc4486"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[22]+':6ffc4486'
r.wxVkey=b
gg.f=$gdc(f_["./pages/register/register.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[22]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var lQB=e_[x[23]].i
_ai(lQB,x[24],e_,x[23],1,1)
var aRB=_v()
_(r,aRB)
var tSB=_oz(z,1,e,s,gg)
var eTB=_gd(x[23],tSB,e_,d_)
if(eTB){
var bUB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aRB.wxXCkey=3
eTB(bUB,bUB,aRB,gg)
gg.f=cur_globalf
}
else _w(tSB,x[23],2,18)
lQB.pop()
return r
}
e_[x[23]]={f:m16,j:[],i:[],ti:[x[24]],ic:[]}
d_[x[25]]={}
d_[x[25]]["5f0ac9fd"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[25]+':5f0ac9fd'
r.wxVkey=b
gg.f=$gdc(f_["./pages/upload/upload.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[25]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[25]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var oXB=e_[x[26]].i
_ai(oXB,x[27],e_,x[26],1,1)
var fYB=_v()
_(r,fYB)
var cZB=_oz(z,1,e,s,gg)
var h1B=_gd(x[26],cZB,e_,d_)
if(h1B){
var o2B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fYB.wxXCkey=3
h1B(o2B,o2B,fYB,gg)
gg.f=cur_globalf
}
else _w(cZB,x[26],2,18)
oXB.pop()
return r
}
e_[x[26]]={f:m18,j:[],i:[],ti:[x[27]],ic:[]}
d_[x[28]]={}
d_[x[28]]["561e0bfd"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[28]+':561e0bfd'
r.wxVkey=b
gg.f=$gdc(f_["./pages/videoplay/videoplay.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[28]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var l5B=e_[x[29]].i
_ai(l5B,x[30],e_,x[29],1,1)
var a6B=_v()
_(r,a6B)
var t7B=_oz(z,1,e,s,gg)
var e8B=_gd(x[29],t7B,e_,d_)
if(e8B){
var b9B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
a6B.wxXCkey=3
e8B(b9B,b9B,a6B,gg)
gg.f=cur_globalf
}
else _w(t7B,x[29],2,18)
l5B.pop()
return r
}
e_[x[29]]={f:m20,j:[],i:[],ti:[x[30]],ic:[]}
d_[x[31]]={}
d_[x[31]]["a847c336"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[31]+':a847c336'
r.wxVkey=b
gg.f=$gdc(f_["./pages/videosearch/videosearch.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[31]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[31]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var oBC=e_[x[32]].i
_ai(oBC,x[33],e_,x[32],1,1)
var fCC=_v()
_(r,fCC)
var cDC=_oz(z,1,e,s,gg)
var hEC=_gd(x[32],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[32],2,18)
oBC.pop()
return r
}
e_[x[32]]={f:m22,j:[],i:[],ti:[x[33]],ic:[]}
d_[x[34]]={}
d_[x[34]]["36ae34fd"]=function(e,s,r,gg){
var z=gz$gwx_24()
var b=x[34]+':36ae34fd'
r.wxVkey=b
gg.f=$gdc(f_["./pages/watchhistory/watchhistory.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[34]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[34]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var lIC=e_[x[35]].i
_ai(lIC,x[36],e_,x[35],1,1)
var aJC=_v()
_(r,aJC)
var tKC=_oz(z,1,e,s,gg)
var eLC=_gd(x[35],tKC,e_,d_)
if(eLC){
var bMC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aJC.wxXCkey=3
eLC(bMC,bMC,aJC,gg)
gg.f=cur_globalf
}
else _w(tKC,x[35],2,18)
lIC.pop()
return r
}
e_[x[35]]={f:m24,j:[],i:[],ti:[x[36]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/watchhistory/watchhistory","pages/filmlibrary/filmlibrary","pages/videoplay/videoplay","pages/profile/profile","pages/login/login","pages/register/register","pages/Swiper-detail/Swiper-detail","pages/videosearch/videosearch","pages/open/open","pages/upload/upload","pages/profileinfo/profileinfo"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"theShortFilmShow","navigationBarBackgroundColor":"black","backgroundColor":"#F8F8F8"},"usingComponents":{},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#000000","list":[{"pagePath":"pages/index/index","text":"Home","iconPath":"static/icons/home.png","selectedIconPath":"static/icons/home.png"},{"pagePath":"pages/filmlibrary/filmlibrary","text":"Filmlibrary","iconPath":"static/icons/boxes.png","selectedIconPath":"static/icons/boxes.png"},{"pagePath":"pages/profile/profile","text":"Profile","iconPath":"static/icons/person.png","selectedIconPath":"static/icons/person.png"}]},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"ShortMovie","compilerVersion":"2.1.3"};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/filmlibrary/filmlibrary.json']={"usingComponents":{},"enablePullDownRefresh":true};
__wxAppCode__['pages/filmlibrary/filmlibrary.wxml']=$gwx('./pages/filmlibrary/filmlibrary.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{},"enablePullDownRefresh":true,"backgroundTextStyle":"dark"};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/open/open.json']={"usingComponents":{}};
__wxAppCode__['pages/open/open.wxml']=$gwx('./pages/open/open.wxml');

__wxAppCode__['pages/profile/profile.json']={"usingComponents":{}};
__wxAppCode__['pages/profile/profile.wxml']=$gwx('./pages/profile/profile.wxml');

__wxAppCode__['pages/profileinfo/profileinfo.json']={"usingComponents":{}};
__wxAppCode__['pages/profileinfo/profileinfo.wxml']=$gwx('./pages/profileinfo/profileinfo.wxml');

__wxAppCode__['pages/register/register.json']={"usingComponents":{}};
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/Swiper-detail/Swiper-detail.json']={"usingComponents":{}};
__wxAppCode__['pages/Swiper-detail/Swiper-detail.wxml']=$gwx('./pages/Swiper-detail/Swiper-detail.wxml');

__wxAppCode__['pages/upload/upload.json']={"usingComponents":{}};
__wxAppCode__['pages/upload/upload.wxml']=$gwx('./pages/upload/upload.wxml');

__wxAppCode__['pages/videoplay/videoplay.json']={"usingComponents":{}};
__wxAppCode__['pages/videoplay/videoplay.wxml']=$gwx('./pages/videoplay/videoplay.wxml');

__wxAppCode__['pages/videosearch/videosearch.json']={"usingComponents":{}};
__wxAppCode__['pages/videosearch/videosearch.wxml']=$gwx('./pages/videosearch/videosearch.wxml');

__wxAppCode__['pages/watchhistory/watchhistory.json']={"usingComponents":{}};
__wxAppCode__['pages/watchhistory/watchhistory.wxml']=$gwx('./pages/watchhistory/watchhistory.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"3a36":function(e,n,t){"use strict";var o=t("5d77"),r=t.n(o);r.a},"5d77":function(e,n,t){},7637:function(e,n,t){"use strict";t.r(n);var o=t("8796");for(var r in o)"default"!==r&&function(e){t.d(n,e,function(){return o[e]})}(r);t("3a36");var u,f,a=t("2877"),l=Object(a["a"])(o["default"],u,f,!1,null,null,null);n["default"]=l.exports},8796:function(e,n,t){"use strict";t.r(n);var o=t("b090"),r=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n["default"]=r.a},b090:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")},setGlobalUserInfo:function(n){e.setStorageSync("userInfo",n)}};n.default=t}).call(this,t("6e42")["default"])},eb92:function(e,n,t){"use strict";(function(e){t("fb50");var n=r(t("f3d3")),o=r(t("7637"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){f(e,n,t[n])})}return e}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default.config.productionTip=!1,o.default.mpType="app",n.default.prototype.$serverUrl="http://129.28.130.27:8080/sfs",n.default.prototype.setGlobalUserInfo=function(n){e.setStorageSync("userInfo",n)},n.default.prototype.getGlobalUserInfo=function(){var n=e.getStorageSync("userInfo");return n},n.default.prototype.removeGlobalUserInfo=function(){e.removeStorageSync("userInfo")};var a=new n.default(u({},o.default));a.$mount()}).call(this,t("6e42")["default"])}},[["eb92","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var f=u.render;u.render=function(t,e){return c.call(e),f(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createPage=xe,e.createComponent=Ae,e.default=void 0;var r=o(n("f3d3"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return c(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(c){o=!0,i=c}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function c(t){if(Array.isArray(t))return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return h(t)||l(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function g(t){return"string"===typeof t}function _(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,x=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],O={},k={};function E(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?j(n):n}function j(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function P(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function S(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&y(e[n])&&(t[n]=E(t[n],e[n]))})}function I(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&y(e[n])&&P(t[n],e[n])})}function C(t,e){"string"===typeof t&&_(e)?S(k[t]||(k[t]={}),e):_(t)&&S(O,t)}function T(t,e){"string"===typeof t?_(e)?I(k[t],e):delete k[t]:_(t)&&I(O,t)}function N(t){return function(e){return t(e)||e}}function D(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function R(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(N(o));else{var i=o(e);if(D(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){R(t[n],e).then(function(t){return y(r)&&r(t)||t})}}}),e}function B(t,e){var n=[];Array.isArray(O.returnValue)&&n.push.apply(n,f(O.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function M(t){var e=Object.create(null);Object.keys(O).forEach(function(t){"returnValue"!==t&&(e[t]=O[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function V(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=M(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=R(a.invoke,n);return s.then(function(t){return e.apply(void 0,[L(a,t)].concat(o))})}return e.apply(void 0,[L(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var U={returnValue:function(t){return D(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,W=/^create|Manager$/,H=/^on/;function z(t){return W.test(t)}function J(t){return F.test(t)}function q(t){return H.test(t)}function G(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(z(t)||J(t)||q(t))}function X(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return y(n.success)||y(n.fail)||y(n.complete)?B(t,V.apply(void 0,[t,e,n].concat(o))):B(t,G(new Promise(function(r,i){V.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Q="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&Q?.5:1:t<0?-n:n}var ot={promiseInterceptor:U},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:C,removeInterceptor:T}),at={},st=[],ct=[],ut=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(lt(t,r,n))}}function pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(_(e)){var i=!0===o?e:{};for(var a in y(n)&&(n=n(e,i)||{}),e)if(m(n,a)){var s=n[a];y(s)&&(s=s(e[a],e,i)),s?g(s)?i[s]=e[a]:_(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ut.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return y(e)&&(e=ft(t,e,r)),e}function lt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(at.returnValue)&&(e=at.returnValue(t,e)),pt(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var o=n;y(n)&&(o=n(e)),e=pt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return J(t)?lt(t,a,o.returnValue,z(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(o),y(r)&&r(o)}}vt.forEach(function(t){dt[t]=yt(t)});var gt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function _t(t,e,n){return t[e].apply(t,n)}function mt(){return _t(gt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return _t(gt(),"$off",Array.prototype.slice.call(arguments))}function $t(){return _t(gt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return _t(gt(),"$emit",Array.prototype.slice.call(arguments))}var xt=Object.freeze({$on:mt,$off:bt,$once:$t,$emit:wt});function At(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},c=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){c();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){c(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function Ot(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&At(e),e}function kt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var Et=Object.freeze({requireNativePlugin:kt,getSubNVueById:Ot}),jt=Page,Pt=Component,St=/:/g,It=$(function(t){return x(t.replace(St,"-"))});function Ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[It(n)].concat(o))}}}function Tt(t,e){var n=e[t];e[t]=n?function(){Ct(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("onLoad",t),jt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("created",t),Pt(t)};var Nt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Dt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Rt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Rt(t,e)}):void 0}function Lt(t,e,n){e.forEach(function(e){Rt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Bt(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Mt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Vt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ut(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return _(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Wt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),_(r)&&r.props&&a.push(e({properties:Jt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){_(t)&&t.props&&a.push(e({properties:Jt(t.props,!0)}))}),a}function zt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Jt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueId={type:String,value:""},r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:Wt(t)}}):_(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(_(o)){var i=o["default"];y(i)&&(i=i()),o.type=zt(e,o.type,i,n),r[e]={type:-1!==Ft.indexOf(o.type)?o.type:null,value:i,observer:Wt(e)}}else{var a=zt(e,o,null,n);r[e]={type:-1!==Ft.indexOf(a)?a:null,observer:Wt(e)}}}),r}function qt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),_(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Gt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):_(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Gt(t,e)}),r}function Xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Kt(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Xt(t)):"string"===typeof t&&m(s,t)?c.push(s[t]):c.push(t)}),c}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=qt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type;r.forEach(function(n){var r=n[0],i=n[1],a=r.charAt(0)===Qt;r=a?r.slice(1):r;var s=r.charAt(0)===Zt;r=s?r.slice(1):r,i&&te(o,r)&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm;o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent);var i=o[r];if(!y(i))throw new Error(" _vm.".concat(r," is not a function"));if(s){if(i.once)return;i.once=!0}i.apply(o,Yt(e.$vm,t,n[1],n[2],a,r))}})})}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=u({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Dt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return i.globalData=t.$options.globalData||{},Lt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function ue(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function pe(t){return re(t,{mocks:oe,initRefs:ue})}var le=["onUniNViewMessage"];function he(t){var e=pe(t);return Lt(e,le),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Bt(r.default,t),s=i(a,2),c=s[0],u=s[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:Ut(u,r.default.prototype),behaviors:Ht(u,ae),properties:Jt(u.props,!1,u.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Vt(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Mt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return n?f:[f,c]}function ye(t){return ve(t,{isPage:se,initRelation:ce})}function ge(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var _e=["onShow","onHide","onUnload"];function me(t,e){var n=e.isPage,r=e.initRelation,o=ge(t,{isPage:n,initRelation:r});return Lt(o.methods,_e,t),o.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},o}function be(t){return me(t,{isPage:se,initRelation:ce})}_e.push.apply(_e,Nt);var $e=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=be(t);return Lt(e.methods,$e),e}function xe(t){return Component(we(t))}function Ae(t){return Component(ge(t))}st.forEach(function(t){at[t]=!1}),ct.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Oe={};Object.keys(it).forEach(function(t){Oe[t]=it[t]}),Object.keys(xt).forEach(function(t){Oe[t]=xt[t]}),Object.keys(Et).forEach(function(t){Oe[t]=X(t,Et[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Oe[t]=X(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Oe,t.UniEmitter=xt),wx.createApp=de,wx.createPage=xe,wx.createComponent=Ae;var ke=Oe,Ee=ke;e.default=Ee}).call(this,n("c8ba"))},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=b;var p="suspendedStart",l="suspendedYield",h="executing",d="completed",v={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,_=g&&g(g(C([])));_&&_!==r&&o.call(_,a)&&(y=_);var m=A.prototype=w.prototype=Object.create(y);x.prototype=m.constructor=A,A.constructor=x,A[c]=x.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,A):(t.__proto__=A,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},O(k.prototype),k.prototype[s]=function(){return this},f.AsyncIterator=k,f.async=function(t,e,n,r){var o=new k(b(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(m),m[c]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=C,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new I(r||[]);return i._invoke=E(t,n,a),i}function $(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function w(){}function x(){}function A(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,r,i,a){var s=$(t[n],t,r);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(u).then(function(t){c.value=t,i(c)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function E(t,e,n){var r=p;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return T()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=$(t,e,n);if("normal"===c.type){if(r=n.done?d:l,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function j(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=$(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},a34a:function(t,e,n){t.exports=n("bbdd")},b0ce:function(t,e,n){"use strict";n.r(e);var r=n("f3d3"),o=n.n(r);function i(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),"function"===typeof o&&(o=[o]),o)for(var a=0,s=o.length;a<s;a++)r=o[a].call(t,n);return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return i(t,e,n)}),r}function a(t){return t.$vm.$root}e["default"]=function(t){return{data:{$root:{}},onLoad:function(e){var n=new o.a(t);this.$vm=n;var r=n.$root;r.__wxExparserNodeId__=this.__wxExparserNodeId__,r.__wxWebviewId__=this.__wxWebviewId__,r.$mp||(r.$mp={});var i=r.$mp;i.mpType="page",i.page=this,i.query=e,i.status="load",n.$mount()},handleProxy:function(t){var e=a(this);return e.$handleProxyWithVue(t)},onShow:function(){var t=a(this),e=t.$mp;e.status="show",i(t,"onShow"),t.$nextTick(function(){t._initDataToMP()})},onReady:function(){var t=a(this),e=t.$mp;e.status="ready",i(t,"onReady")},onHide:function(){var t=a(this),e=t.$mp;e.status="hide",i(t,"onHide")},onUnload:function(){var t=a(this);i(t,"onUnload"),t.$destroy()},onPullDownRefresh:function(){var t=a(this);i(t,"onPullDownRefresh")},onReachBottom:function(){var t=a(this);i(t,"onReachBottom")},onPageScroll:function(t){var e=a(this);i(e,"onPageScroll",t)},onTabItemTap:function(t){var e=a(this);i(e,"onTabItemTap",t)},onShareAppMessage:t.onShareAppMessage?function(t){var e=a(this);return i(e,"onShareAppMessage",t)}:null,onNavigationBarButtonTap:function(t){var e=a(this);i(e,"onNavigationBarButtonTap",t)},onNavigationBarSearchInputChanged:function(t){var e=a(this);i(e,"onNavigationBarSearchInputChanged",t)},onNavigationBarSearchInputConfirmed:function(t){var e=a(this);i(e,"onNavigationBarSearchInputConfirmed",t)},onNavigationBarSearchInputClicked:function(t){var e=a(this);i(e,"onNavigationBarSearchInputClicked",t)},onBackPress:function(t){var e=a(this);return i(e,"onBackPress",t)},$getAppWebview:function(t){return plus.webview.getWebviewById(""+this.__wxWebviewId__)}}}},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},f3d3:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(n){}(function(e,n){t.exports=n()})(0,function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!==typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"===typeof r&&"object"===typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function r(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,p=c.length;f<p&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}function o(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function s(t){return!1===t}function c(t){return"string"===typeof t||"number"===typeof t}function u(t){return null!==t&&"object"===typeof t}var f=Object.prototype.toString;function p(t){return"[object Object]"===f.call(t)}function l(t){return"[object RegExp]"===f.call(t)}function h(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return null==t?"":"object"===typeof t?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var g=y("key,ref,slot,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,x=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),O=/([^-])([A-Z])/g,k=$(function(t){return t.replace(O,"$1-$2").replace(O,"$1-$2").toLowerCase()});function E(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function j(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function S(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function I(t,e,n){}var C=function(t,e,n){return!1},T=function(t){return t};function N(t,e){var r=u(t),o=u(e);if(!r||!o)return!r&&!o&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function D(t,e){for(var n=0;n<t.length;n++)if(N(t[n],e))return n;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var L="data-server-rendered",B=["component","directive","filter"],M=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:C,isReservedAttr:C,isUnknownElement:C,getTagNamespace:I,parsePlatformTagName:T,mustUseProp:C,_lifecycleHooks:M},U=Object.freeze({});function F(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function W(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var H=/[^\w.$]/;function z(t){if(!H.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J=I;function q(t,e,n){if(V.errorHandler)V.errorHandler.call(null,t,e,n);else{if(!X||"undefined"===typeof console)throw t;console.error(t)}}var G,K="__proto__"in{},X="undefined"!==typeof window,Y=["mpvue-runtime"].join(),Z=(Y&&/msie|trident/.test(Y),Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),Q=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)),tt=(Y&&/chrome\/\d+/.test(Y),{}.watch);if(X)try{var et={};Object.defineProperty(et,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,et)}catch(n){}var nt=function(){return void 0===G&&(G=!X&&"undefined"!==typeof e&&"server"===e["process"].env.VUE_ENV),G},rt=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var it,at="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys),st=function(){var t,e=[],r=!1;function o(){r=!1;var t=e.slice(0);e.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ot(Promise)){var i=Promise.resolve(),a=function(t){console.error(t)};t=function(){i.then(o).catch(a),Q&&setTimeout(I)}}else t=function(){setTimeout(o,0)};return function(o,i){var a;if(e.push(function(){if(o)try{o.call(i)}catch(n){q(n,i,"nextTick")}else a&&a(i)}),r||(r=!0,t()),!o&&"undefined"!==typeof Promise)return new Promise(function(t,e){a=t})}}();it="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=0,ut=function(){this.id=ct++,this.subs=[]};ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){_(this.subs,t)},ut.prototype.depend=function(){ut.target&&ut.target.addDep(this)},ut.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},ut.target=null;var ft=[];function pt(t){ut.target&&ft.push(ut.target),ut.target=t}function lt(){ut.target=ft.pop()}var ht=Array.prototype,dt=Object.create(ht);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=ht[t];W(dt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var vt=Object.getOwnPropertyNames(dt),yt={shouldConvert:!0},gt=function(t){if(this.value=t,this.dep=new ut,this.vmCount=0,W(t,"__ob__",this),Array.isArray(t)){var e=K?_t:mt;e(t,dt,vt),this.observeArray(t)}else this.walk(t)};function _t(t,e,n){t.__proto__=e}function mt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];W(t,i,e[i])}}function bt(t,e){var n;if(u(t))return b(t,"__ob__")&&t.__ob__ instanceof gt?n=t.__ob__:yt.shouldConvert&&!nt()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new gt(t)),e&&n&&n.vmCount++,n}function $t(t,e,n,r,o){var i=new ut,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&bt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ut.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&At(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||(c?c.call(t,e):n=e,u=!o&&bt(e),i.notify())}})}}function wt(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(b(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?($t(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function xt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function At(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&At(e)}gt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)$t(t,e[n],t[e[n]])},gt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)bt(t[e])};var Ot=V.optionMergeStrategies;function kt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)n=i[a],r=t[n],o=e[n],b(t,n)?p(r)&&p(o)&&kt(r,o):wt(t,n,o);return t}function Et(t,e,n){return n?t||e?function(){var r="function"===typeof e?e.call(n):e,o="function"===typeof t?t.call(n):void 0;return r?kt(r,o):o}:void 0:e?t?function(){return kt("function"===typeof e?e.call(this):e,t.call(this))}:e:t}function jt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function Pt(t,e){var n=Object.create(t||null);return e?P(n,e):n}Ot.data=function(t,e,n){return n?Et(t,e,n):e&&"function"!==typeof e?t:Et.call(this,t,e)},M.forEach(function(t){Ot[t]=jt}),B.forEach(function(t){Ot[t+"s"]=Pt}),Ot.watch=function(t,e){if(t===tt&&(t=void 0),e===tt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in P(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},Ot.props=Ot.methods=Ot.inject=Ot.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return P(n,t),P(n,e),n},Ot.provide=Et;var St=function(t,e){return void 0===e?t:e};function It(t){var e=t.props;if(e){var n,r,o,i={};if(Array.isArray(e)){n=e.length;while(n--)r=e[n],"string"===typeof r&&(o=x(r),i[o]={type:null})}else if(p(e))for(var a in e)r=e[a],o=x(a),i[o]=p(r)?r:{type:r};t.props=i}}function Ct(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}function Tt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Nt(t,e,n){"function"===typeof e&&(e=e.options),It(e),Ct(e),Tt(e);var r=e.extends;if(r&&(t=Nt(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=Nt(t,e.mixins[o],n);var a,s={};for(a in t)c(a);for(a in e)b(t,a)||c(a);function c(r){var o=Ot[r]||St;s[r]=o(t[r],e[r],n,r)}return s}function Dt(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=x(n);if(b(o,i))return o[i];var a=A(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function Rt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t];if(Mt(Boolean,o.type)&&(i&&!b(o,"default")?a=!1:Mt(String,o.type)||""!==a&&a!==k(t)||(a=!0)),void 0===a){a=Lt(r,o,t);var s=yt.shouldConvert;yt.shouldConvert=!0,bt(a),yt.shouldConvert=s}return a}function Lt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Bt(e.type)?r.call(t):r}}function Bt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Mt(t,e){if(!Array.isArray(e))return Bt(e)===Bt(t);for(var n=0,r=e.length;n<r;n++)if(Bt(e[n])===Bt(t))return!0;return!1}var Vt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Ut={child:{}};Ut.child.get=function(){return this.componentInstance},Object.defineProperties(Vt.prototype,Ut);var Ft=function(t){void 0===t&&(t="");var e=new Vt;return e.text=t,e.isComment=!0,e};function Wt(t){return new Vt(void 0,void 0,void 0,String(t))}function Ht(t){var e=new Vt(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function zt(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Ht(t[r]);return n}var Jt,qt=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function Gt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function Kt(t,e,n,r,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=qt(a),o(s)||(o(c)?(o(s.fns)&&(s=t[a]=Gt(s)),n(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)o(t[a])&&(u=qt(a),r(u.name,e[a],u.capture))}function Xt(t,e,n){var r=e.options.props;if(!o(r)){var a={},s=t.attrs,c=t.props;if(i(s)||i(c))for(var u in r){var f=k(u);Yt(a,c,u,f,!0)||Yt(a,s,u,f,!1)}return a}}function Yt(t,e,n,r,o){if(i(e)){if(b(e,n))return t[n]=e[n],o||delete e[n],!0;if(b(e,r))return t[n]=e[r],o||delete e[r],!0}return!1}function Zt(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Qt(t){return c(t)?[Wt(t)]:Array.isArray(t)?ee(t):void 0}function te(t){return i(t)&&i(t.text)&&s(t.isComment)}function ee(t,e){var n,r,s,u=[];for(n=0;n<t.length;n++)r=t[n],o(r)||"boolean"===typeof r||(s=u[u.length-1],Array.isArray(r)?u.push.apply(u,ee(r,(e||"")+"_"+n)):c(r)?te(s)?s.text+=String(r):""!==r&&u.push(Wt(r)):te(r)&&te(s)?u[u.length-1]=Wt(s.text+r.text):(a(t._isVList)&&i(r.tag)&&o(r.key)&&i(e)&&(r.key="__vlist"+e+"_"+n+"__"),u.push(r)));return u}function ne(t,e){return t.__esModule&&t.default&&(t=t.default),u(t)?e.extend(t):t}function re(t,e,n,r,o){var i=Ft();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function oe(t,e,n){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;if(a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(!i(t.contexts)){var r=t.contexts=[n],s=!0,c=function(){for(var t=0,e=r.length;t<e;t++)r[t].$forceUpdate()},f=R(function(n){t.resolved=ne(n,e),s||c()}),p=R(function(e){i(t.errorComp)&&(t.error=!0,c())}),l=t(f,p);return u(l)&&("function"===typeof l.then?o(t.resolved)&&l.then(f,p):i(l.component)&&"function"===typeof l.component.then&&(l.component.then(f,p),i(l.error)&&(t.errorComp=ne(l.error,e)),i(l.loading)&&(t.loadingComp=ne(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){o(t.resolved)&&o(t.error)&&(t.loading=!0,c())},l.delay||200)),i(l.timeout)&&setTimeout(function(){o(t.resolved)&&p(null)},l.timeout))),s=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(n)}function ie(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&i(n.componentOptions))return n}}function ae(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ue(t,e)}function se(t,e,n){n?Jt.$once(t,e):Jt.$on(t,e)}function ce(t,e){Jt.$off(t,e)}function ue(t,e,n){Jt=t,Kt(e,n||{},se,ce,t)}function fe(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this,o=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(o._events[t]||(o._events[t]=[])).push(n),e.test(t)&&(o._hasHookEvent=!0);return o},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(t)){for(var o=0,i=t.length;o<i;o++)n.$off(t[o],e);return r}var a,s=r._events[t];if(!s)return r;if(1===arguments.length)return r._events[t]=null,r;var c=s.length;while(c--)if(a=s[c],a===e||a.fn===e){s.splice(c,1);break}return r},t.prototype.$emit=function(t){var e=this,r=e._events[t];if(r){r=r.length>1?j(r):r;for(var o=j(arguments,1),i=0,a=r.length;i<a;i++)try{r[i].apply(e,o)}catch(n){q(n,e,'event handler for "'+t+'"')}}return e}}function pe(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(le)||(n.default=r),n}function le(t){return t.isComment||" "===t.text}function he(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?he(t[n],e):e[t[n].key]=t[n].fn;return e}var de=null;function ve(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ye(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&we(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=de;de=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),de=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){we(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),we(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}function ge(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=Ft),we(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new Re(t,r,I),n=!1,null==t.$vnode&&(t._isMounted=!0,we(t,"mounted")),t}function _e(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==U);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){yt.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Rt(u,t.$options.props,e,t)}yt.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,ue(t,n,f)}i&&(t.$slots=pe(o,r.context),t.$forceUpdate())}function me(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function be(t,e){if(e){if(t._directInactive=!1,me(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)be(t.$children[n]);we(t,"activated")}}function $e(t,e){if((!e||(t._directInactive=!0,!me(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)$e(t.$children[n]);we(t,"deactivated")}}function we(t,e){var r=t.$options[e];if(r)for(var o=0,i=r.length;o<i;o++)try{r[o].call(t)}catch(n){q(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var xe=[],Ae=[],Oe={},ke=!1,Ee=!1,je=0;function Pe(){je=xe.length=Ae.length=0,Oe={},ke=Ee=!1}function Se(){var t,e;for(Ee=!0,xe.sort(function(t,e){return t.id-e.id}),je=0;je<xe.length;je++)t=xe[je],e=t.id,Oe[e]=null,t.run();var n=Ae.slice(),r=xe.slice();Pe(),Te(n),Ie(r),rt&&V.devtools&&rt.emit("flush")}function Ie(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&we(r,"updated")}}function Ce(t){t._inactive=!1,Ae.push(t)}function Te(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,be(t[e],!0)}function Ne(t){var e=t.id;if(null==Oe[e]){if(Oe[e]=!0,Ee){var n=xe.length-1;while(n>je&&xe[n].id>t.id)n--;xe.splice(n+1,0,t)}else xe.push(t);ke||(ke=!0,st(Se))}}var De=0,Re=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++De,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new it,this.newDepIds=new it,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Re.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(n){if(!this.user)throw n;q(n,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Be(t),lt(),this.cleanupDeps()}return t},Re.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Re.prototype.cleanupDeps=function(){var t=this,e=this.deps.length;while(e--){var n=t.deps[e];t.newDepIds.has(n.id)||n.removeSub(t)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},Re.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Ne(this)},Re.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(n){q(n,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Re.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Re.prototype.depend=function(){var t=this,e=this.deps.length;while(e--)t.deps[e].depend()},Re.prototype.teardown=function(){var t=this;if(this.active){this.vm._isBeingDestroyed||_(this.vm._watchers,this);var e=this.deps.length;while(e--)t.deps[e].removeSub(t);this.active=!1}};var Le=new it;function Be(t){Le.clear(),Me(t,Le)}function Me(t,e){var n,r,o=Array.isArray(t);if((o||u(t))&&Object.isExtensible(t)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)Me(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)Me(t[r[n]],e)}}}var Ve={enumerable:!0,configurable:!0,get:I,set:I};function Ue(t,e,n){Ve.get=function(){return this[e][n]},Ve.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Ve)}function Fe(t){t._watchers=[];var e=t.$options;e.props&&We(t,e.props),e.methods&&Xe(t,e.methods),e.data?He(t):bt(t._data={},!0),e.computed&&qe(t,e.computed),e.watch&&e.watch!==tt&&Ye(t,e.watch)}function We(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;yt.shouldConvert=i;var a=function(i){o.push(i);var a=Rt(i,e,n,t);$t(r,i,a),i in t||Ue(t,"_props",i)};for(var s in e)a(s);yt.shouldConvert=!0}function He(t){var e=t.$options.data;e=t._data="function"===typeof e?ze(e,t):e||{},p(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];r&&b(r,i)||F(i)||Ue(t,"_data",i)}bt(e,!0)}function ze(t,e){try{return t.call(e)}catch(n){return q(n,e,"data()"),{}}}var Je={lazy:!0};function qe(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"===typeof o?o:o.get;n[r]=new Re(t,i,I,Je),r in t||Ge(t,r,o)}}function Ge(t,e,n){"function"===typeof n?(Ve.get=Ke(e),Ve.set=I):(Ve.get=n.get?!1!==n.cache?Ke(e):n.get:I,Ve.set=n.set?n.set:I),Object.defineProperty(t,e,Ve)}function Ke(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.target&&e.depend(),e.value}}function Xe(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?I:E(e[n],t)}function Ye(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)Ze(t,n,r[o]);else Ze(t,n,r)}}function Ze(t,e,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function Qe(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=wt,t.prototype.$delete=xt,t.prototype.$watch=function(t,e,n){var r=this;if(p(e))return Ze(r,t,e,n);n=n||{},n.user=!0;var o=new Re(r,t,e,n);return n.immediate&&e.call(r,o.value),function(){o.teardown()}}}function tn(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function en(t){var e=nn(t.$options.inject,t);e&&(yt.shouldConvert=!1,Object.keys(e).forEach(function(n){$t(t,n,e[n])}),yt.shouldConvert=!0)}function nn(t,e){if(t){for(var n=Object.create(null),r=at?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o],a=t[i],s=e;while(s){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function rn(t,e,n,r,o){var a={},s=t.options.props;if(i(s))for(var c in s)a[c]=Rt(c,s,e||{});else i(n.attrs)&&on(a,n.attrs),i(n.props)&&on(a,n.props);var u=Object.create(r),f=function(t,e,n,r){return vn(u,t,e,n,r,!0)},p=t.options.render.call(null,f,{data:n,props:a,children:o,parent:r,listeners:n.on||{},injections:nn(t.options.inject,r),slots:function(){return pe(o,r)}});return p instanceof Vt&&(p.functionalContext=r,p.functionalOptions=t.options,n.slot&&((p.data||(p.data={})).slot=n.slot)),p}function on(t,e){for(var n in e)t[x(n)]=e[n]}var an={init:function(t,e,n,r){if(!t.componentInstance||t.componentInstance._isDestroyed){var o=t.componentInstance=un(t,de,n,r);o.$mount(e?t.elm:void 0,e)}else if(t.data.keepAlive){var i=t;an.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;_e(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,we(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ce(n):be(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?$e(e,!0):e.$destroy())}},sn=Object.keys(an);function cn(t,e,n,r,s){if(!o(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(o(t.cid)&&(f=t,t=oe(f,c,n),void 0===t))return re(f,e,n,r,s);e=e||{},Tn(t),i(e.model)&&ln(t.options,e);var p=Xt(e,t,s);if(a(t.options.functional))return rn(t,p,e,n,r);var l=e.on;if(a(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}fn(e);var d=t.options.name||s,v=new Vt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:s,children:r},f);return v}}}function un(t,e,n,r){var o=t.componentOptions,a={_isComponent:!0,parent:e,propsData:o.propsData,_componentTag:o.tag,_parentVnode:t,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:n||null,_refElm:r||null},s=t.data.inlineTemplate;return i(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function fn(t){t.hook||(t.hook={});for(var e=0;e<sn.length;e++){var n=sn[e],r=t.hook[n],o=an[n];t.hook[n]=r?pn(o,r):o}}function pn(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}function ln(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var o=e.on||(e.on={});i(o[r])?o[r]=[e.model.callback].concat(o[r]):o[r]=e.model.callback}var hn=1,dn=2;function vn(t,e,n,r,o,i){return(Array.isArray(n)||c(n))&&(o=r,r=n,n=void 0),a(i)&&(o=dn),yn(t,e,n,r,o)}function yn(t,e,n,r,o){if(i(n)&&i(n.__ob__))return Ft();if(i(n)&&i(n.is)&&(e=n.is),!e)return Ft();var a,s,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===dn?r=Qt(r):o===hn&&(r=Zt(r)),"string"===typeof e)?(s=V.getTagNamespace(e),a=V.isReservedTag(e)?new Vt(V.parsePlatformTagName(e),n,r,void 0,void 0,t):i(c=Dt(t.$options,"components",e))?cn(c,n,t,r,e):new Vt(e,n,r,void 0,void 0,t)):a=cn(e,n,t,r);return i(a)?(s&&gn(a,s),a):Ft()}function gn(t,e){if(t.ns=e,"foreignObject"!==t.tag&&i(t.children))for(var n=0,r=t.children.length;n<r;n++){var a=t.children[n];i(a.tag)&&o(a.ns)&&gn(a,e)}}function _n(t,e){var n,r,o,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))for(a=Object.keys(t),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=e(t[s],s,r);return i(n)&&(n._isVList=!0),n}function mn(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=P(P({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function bn(t){return Dt(this.$options,"filters",t,!0)||T}function $n(t,e,n){var r=V.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function wn(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=S(n));var a=function(a){if("class"===a||"style"===a||g(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||V.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(a in i)&&(i[a]=n[a],o)){var c=t.on||(t.on={});c["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function xn(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?zt(n):Ht(n):(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),On(n,"__static__"+t,!1),n)}function An(t,e,n){return On(t,"__once__"+e+(n?"_"+n:""),!0),t}function On(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&kn(t[r],e+"_"+r,n);else kn(t,e,n)}function kn(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function En(t,e){if(e)if(p(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}function jn(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=pe(t.$options._renderChildren,n),t.$scopedSlots=U,t._c=function(e,n,r,o){return vn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return vn(t,e,n,r,o,!0)};var r=e&&e.data;$t(t,"$attrs",r&&r.attrs,null,!0),$t(t,"$listeners",r&&r.on,null,!0)}function Pn(t){t.prototype.$nextTick=function(t){return st(t,this)},t.prototype._render=function(){var t,e=this,r=e.$options,o=r.render,i=r.staticRenderFns,a=r._parentVnode;if(e._isMounted)for(var s in e.$slots)e.$slots[s]=zt(e.$slots[s]);e.$scopedSlots=a&&a.data.scopedSlots||U,i&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=a;try{t=o.call(e._renderProxy,e.$createElement)}catch(n){q(n,e,"render function"),t=e._vnode}return t instanceof Vt||(t=Ft()),t.parent=a,t},t.prototype._o=An,t.prototype._n=v,t.prototype._s=d,t.prototype._l=_n,t.prototype._t=mn,t.prototype._q=N,t.prototype._i=D,t.prototype._m=xn,t.prototype._f=bn,t.prototype._k=$n,t.prototype._b=wn,t.prototype._v=Wt,t.prototype._e=Ft,t.prototype._u=he,t.prototype._g=En}var Sn=0;function In(t){t.prototype._init=function(t){var e=this;e._uid=Sn++,e._isVue=!0,t&&t._isComponent?Cn(e,t):e.$options=Nt(Tn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ve(e),ae(e),jn(e),we(e,"beforeCreate"),en(e),Fe(e),tn(e),we(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function Cn(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Tn(t){var e=t.options;if(t.super){var n=Tn(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=Nn(t);o&&P(t.extendOptions,o),e=t.options=Nt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Nn(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=Dn(n[i],r[i],o[i]));return e}function Dn(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Rn(t){this._init(t)}function Ln(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=j(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Bn(t){t.mixin=function(t){return this.options=Nt(this.options,t),this}}function Mn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Nt(n.options,t),a["super"]=n,a.options.props&&Vn(a),a.options.computed&&Un(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),o[r]=a,a}}function Vn(t){var e=t.options.props;for(var n in e)Ue(t.prototype,"_props",n)}function Un(t){var e=t.options.computed;for(var n in e)Ge(t.prototype,n,e[n])}function Fn(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}In(Rn),Qe(Rn),fe(Rn),ye(Rn),Pn(Rn);var Wn=[String,RegExp,Array];function Hn(t){return t&&(t.Ctor.options.name||t.tag)}function zn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function Jn(t,e,n){for(var r in t){var o=t[r];if(o){var i=Hn(o.componentOptions);i&&!n(i)&&(o!==e&&qn(o),t[r]=null)}}}function qn(t){t&&t.componentInstance.$destroy()}var Gn={name:"keep-alive",abstract:!0,props:{include:Wn,exclude:Wn},created:function(){this.cache=Object.create(null)},destroyed:function(){var t=this;for(var e in t.cache)qn(t.cache[e])},watch:{include:function(t){Jn(this.cache,this._vnode,function(e){return zn(t,e)})},exclude:function(t){Jn(this.cache,this._vnode,function(e){return!zn(t,e)})}},render:function(){var t=ie(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Hn(e);if(n&&(this.include&&!zn(this.include,n)||this.exclude&&zn(this.exclude,n)))return t;var r=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[r]?t.componentInstance=this.cache[r].componentInstance:this.cache[r]=t,t.data.keepAlive=!0}return t}},Kn={KeepAlive:Gn};function Xn(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:J,extend:P,mergeOptions:Nt,defineReactive:$t},t.set=wt,t.delete=xt,t.nextTick=st,t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,Kn),Ln(t),Bn(t),Mn(t),Fn(t)}Xn(Rn),Object.defineProperty(Rn.prototype,"$isServer",{get:nt}),Object.defineProperty(Rn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Rn.version="2.4.1",Rn.mpvueVersion="1.0.12";var Yn=y("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),Zn=y("style,class");y("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),y("embed,img,image,input,link,meta",!0);function Qn(){}function tr(){}function er(){}function nr(t){return t&&t.$attrs?t.$attrs["mpcomid"]:"0"}var rr={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},or={};function ir(t,e){return or}function ar(t,e){return or}function sr(t){return or}function cr(t){return or}function ur(t,e,n){}function fr(t,e){}function pr(t,e){}function lr(t){return or}function hr(t){return or}function dr(t){return"div"}function vr(t,e){return or}function yr(t,e,n){return or}var gr=Object.freeze({createElement:ir,createElementNS:ar,createTextNode:sr,createComment:cr,insertBefore:ur,removeChild:fr,appendChild:pr,parentNode:lr,nextSibling:hr,tagName:dr,setTextContent:vr,setAttribute:yr}),_r={create:function(t,e){mr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(mr(t,!0),mr(e))},destroy:function(t){mr(t,!0)}};function mr(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?_(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var br=new Vt("",{},[]),$r=["create","activate","update","remove","destroy"];function wr(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&i(t.data)===i(e.data)&&xr(t,e)||a(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&o(e.asyncFactory.error))}function xr(t,e){if("input"!==t.tag)return!0;var n,r=i(n=t.data)&&i(n=n.attrs)&&n.type,o=i(n=e.data)&&i(n=n.attrs)&&n.type;return r===o}function Ar(t,e,n){var r,o,a={};for(r=e;r<=n;++r)o=t[r].key,i(o)&&(a[o]=r);return a}function Or(t){var e,n,r={},s=t.modules,u=t.nodeOps;for(e=0;e<$r.length;++e)for(r[$r[e]]=[],n=0;n<s.length;++n)i(s[n][$r[e]])&&r[$r[e]].push(s[n][$r[e]]);function f(t){return new Vt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function p(t,e){function n(){0===--n.listeners&&l(t)}return n.listeners=e,n}function l(t){var e=u.parentNode(t);i(e)&&u.removeChild(e,t)}function h(t,e,n,r,o){if(t.isRootInsert=!o,!d(t,e,n,r)){var s=t.data,c=t.children,f=t.tag;i(f)?(t.elm=t.ns?u.createElementNS(t.ns,f):u.createElement(f,t),w(t),m(t,c,e),i(s)&&$(t,e),_(n,t.elm,r)):a(t.isComment)?(t.elm=u.createComment(t.text),_(n,t.elm,r)):(t.elm=u.createTextNode(t.text),_(n,t.elm,r))}}function d(t,e,n,r){var o=t.data;if(i(o)){var s=i(t.componentInstance)&&o.keepAlive;if(i(o=o.hook)&&i(o=o.init)&&o(t,!1,n,r),i(t.componentInstance))return v(t,e),a(s)&&g(t,e,n,r),!0}}function v(t,e){i(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,b(t)?($(t,e),w(t)):(mr(t),e.push(t))}function g(t,e,n,o){var a,s=t;while(s.componentInstance)if(s=s.componentInstance._vnode,i(a=s.data)&&i(a=a.transition)){for(a=0;a<r.activate.length;++a)r.activate[a](br,s);e.push(s);break}_(n,t.elm,o)}function _(t,e,n){i(t)&&(i(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function m(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)h(e[r],n,t.elm,null,!0);else c(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function b(t){while(t.componentInstance)t=t.componentInstance._vnode;return i(t.tag)}function $(t,n){for(var o=0;o<r.create.length;++o)r.create[o](br,t);e=t.data.hook,i(e)&&(i(e.create)&&e.create(br,t),i(e.insert)&&n.push(t))}function w(t){var e,n=t;while(n)i(e=n.context)&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;i(e=de)&&e!==t.context&&i(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function x(t,e,n,r,o,i){for(;r<=o;++r)h(n[r],i,t,e)}function A(t){var e,n,o=t.data;if(i(o))for(i(e=o.hook)&&i(e=e.destroy)&&e(t),e=0;e<r.destroy.length;++e)r.destroy[e](t);if(i(e=t.children))for(n=0;n<t.children.length;++n)A(t.children[n])}function O(t,e,n,r){for(;n<=r;++n){var o=e[n];i(o)&&(i(o.tag)?(k(o),A(o)):l(o.elm))}}function k(t,e){if(i(e)||i(t.data)){var n,o=r.remove.length+1;for(i(e)?e.listeners+=o:e=p(t.elm,o),i(n=t.componentInstance)&&i(n=n._vnode)&&i(n.data)&&k(n,e),n=0;n<r.remove.length;++n)r.remove[n](t,e);i(n=t.data.hook)&&i(n=n.remove)?n(t,e):e()}else l(t.elm)}function E(t,e,n,r,a){var s,c,f,p,l=0,d=0,v=e.length-1,y=e[0],g=e[v],_=n.length-1,m=n[0],b=n[_],$=!a;while(l<=v&&d<=_)o(y)?y=e[++l]:o(g)?g=e[--v]:wr(y,m)?(j(y,m,r),y=e[++l],m=n[++d]):wr(g,b)?(j(g,b,r),g=e[--v],b=n[--_]):wr(y,b)?(j(y,b,r),$&&u.insertBefore(t,y.elm,u.nextSibling(g.elm)),y=e[++l],b=n[--_]):wr(g,m)?(j(g,m,r),$&&u.insertBefore(t,g.elm,y.elm),g=e[--v],m=n[++d]):(o(s)&&(s=Ar(e,l,v)),c=i(m.key)?s[m.key]:null,o(c)?(h(m,r,t,y.elm),m=n[++d]):(f=e[c],wr(f,m)?(j(f,m,r),e[c]=void 0,$&&u.insertBefore(t,f.elm,y.elm),m=n[++d]):(h(m,r,t,y.elm),m=n[++d])));l>v?(p=o(n[_+1])?null:n[_+1].elm,x(t,p,n,d,_,r)):d>_&&O(t,e,l,v)}function j(t,e,n,s){if(t!==e){var c=e.elm=t.elm;if(a(t.isAsyncPlaceholder))i(e.asyncFactory.resolved)?I(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,p=e.data;i(p)&&i(f=p.hook)&&i(f=f.prepatch)&&f(t,e);var l=t.children,h=e.children;if(i(p)&&b(e)){for(f=0;f<r.update.length;++f)r.update[f](t,e);i(f=p.hook)&&i(f=f.update)&&f(t,e)}o(e.text)?i(l)&&i(h)?l!==h&&E(c,l,h,n,s):i(h)?(i(t.text)&&u.setTextContent(c,""),x(c,null,h,0,h.length-1,n)):i(l)?O(c,l,0,l.length-1):i(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),i(p)&&i(f=p.hook)&&i(f=f.postpatch)&&f(t,e)}}}function P(t,e,n){if(a(n)&&i(t.parent))t.parent.data.pendingInsert=e;else for(var r=0;r<e.length;++r)e[r].data.hook.insert(e[r])}var S=y("attrs,style,class,staticClass,staticStyle,key");function I(t,n,r){if(a(n.isComment)&&i(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var o=n.tag,s=n.data,c=n.children;if(i(s)&&(i(e=s.hook)&&i(e=e.init)&&e(n,!0),i(e=n.componentInstance)))return v(n,r),!0;if(i(o)){if(i(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,p=0;p<c.length;p++){if(!f||!I(f,c[p],r)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else m(n,c,r);if(i(s))for(var l in s)if(!S(l)){$(n,r);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,n,s,c,p){if(!o(e)){var l=!1,d=[];if(o(t))l=!0,h(e,d,c,p);else{var v=i(t.nodeType);if(!v&&wr(t,e))j(t,e,d,s);else{if(v){if(1===t.nodeType&&t.hasAttribute(L)&&(t.removeAttribute(L),n=!0),a(n)&&I(t,e,d))return P(e,d,!0),t;t=f(t)}var y=t.elm,g=u.parentNode(y);if(h(e,d,y._leaveCb?null:g,u.nextSibling(y)),i(e.parent)){var _=e.parent;while(_)_.elm=e.elm,_=_.parent;if(b(e))for(var m=0;m<r.create.length;++m)r.create[m](br,e.parent)}i(g)?O(g,[t],0,0):i(t.tag)&&A(t)}}return P(e,d,l),e.elm}i(t)&&A(t)}}var kr=[_r],Er=Or({nodeOps:gr,modules:kr});function jr(){Er.apply(this,arguments),this.$updateDataToMP()}function Pr(t,e,r){var o,i=t.$options[e];if("onError"===e&&i&&(i=[i]),i)for(var a=0,s=i.length;a<s;a++)try{o=i[a].call(t,r)}catch(n){q(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return Pr(t,e,r)}),o}function Sr(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}function Ir(t,e,n){if(t){var r,o,i;if(Array.isArray(t)){r=t.length;while(r--)o=t[r],"string"===typeof o&&(i=x(o),e[i]={type:null})}else if(p(t))for(var a in t)o=t[a],i=x(a),e[i]=p(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var c=e[s];c.default&&(c.value=c.default);var u=c.observer;c.observer=function(t,e){n[i]=t,"function"===typeof u&&u.call(n,t,e)}}return e}}function Cr(t){var e=t.$options.properties,n=t.$options.props,r={};return Ir(e,r,t),Ir(n,r,t),r}function Tr(t){var e=t._mpProps={},n=Object.keys(t.$options.properties||{});n.forEach(function(n){n in t||(Ue(t,"_mpProps",n),e[n]=void 0)}),bt(e,!0)}function Nr(t,n){var r=this.$root;r.$mp||(r.$mp={});var o=r.$mp;if(o.status)return"app"===t?Pr(this,"onLaunch",o.appOptions):(this.__wxWebviewId__=r.__wxWebviewId__,this.__wxExparserNodeId__=r.__wxExparserNodeId__,Pr(this,"onLoad",o.query)),n();if(o.mpType=t,o.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),o.app=this,o.status="launch",this.globalData.appOptions=o.appOptions=t,Pr(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),o.status="show",this.globalData.appOptions=o.appOptions=t,Pr(r,"onShow",t)},onHide:function(){o.status="hide",Pr(r,"onHide")},onError:function(t){Pr(r,"onError",t)},onUniNViewMessage:function(t){Pr(r,"onUniNViewMessage",t)}});else if("component"===t)Tr(r),e.Component({properties:Cr(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){o.status="created",o.page=this},attached:function(){o.status="attached",Pr(r,"attached")},ready:function(){o.status="ready",Pr(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){Pr(r,"moved")},detached:function(){o.status="detached",Pr(r,"detached")}});else{var i=e.getApp();e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.query=t,o.status="load",Sr(i,r),r.$options&&"function"===typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),Pr(r,"onLoad",t)},onShow:function(){r.__wxWebviewId__=this.__wxWebviewId__,r.__wxExparserNodeId__=this.__wxExparserNodeId__,o.page=this,o.status="show",Pr(r,"onShow"),r.$nextTick(function(){r._initDataToMP()})},onReady:function(){o.status="ready",Pr(r,"onReady"),n()},onHide:function(){o.status="hide",Pr(r,"onHide")},onUnload:function(){o.status="unload",Pr(r,"onUnload"),o.page=null},onPullDownRefresh:function(){Pr(r,"onPullDownRefresh")},onReachBottom:function(){Pr(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return Pr(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){Pr(r,"onPageScroll",t)},onTabItemTap:function(t){Pr(r,"onTabItemTap",t)}})}}function Dr(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(e,n){return e[n]=t[n],e},{})}function Rr(t,e){void 0===e&&(e=[]);var n=t||{},r=n.$parent;return r?(e.unshift(nr(r)),r.$parent?Rr(r,e):e):e}function Lr(t){var e=Rr(t).join(","),n=e+(e?",":"")+nr(t),r=Object.assign(Dr(t),{$k:n,$kk:n+",",$p:e}),o="$root."+n,i={};return i[o]=r,i}function Br(t,e){void 0===e&&(e={});var n=t.$children;return n&&n.length&&n.forEach(function(t){return Br(t,e)}),Object.assign(e,Lr(t))}function Mr(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var p=Date.now();s||!1!==n.leading||(s=p);var l=e-(p-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],l<=0||l>e?(clearTimeout(a),a=null,s=p,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),i}}var Vr=Mr(function(t,e){t&&t(e)},50);function Ur(t){var e=t.$root,n=e.$mp||{},r=n.mpType;void 0===r&&(r="");var o=n.page;if("app"!==r&&o&&"function"===typeof o.setData)return o}function Fr(){var t=Ur(this);if(t){var e=JSON.parse(JSON.stringify(Lr(this)));Vr(t.setData.bind(t),r(e,t.data))}}function Wr(){var t=Ur(this);if(t){var e=Br(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}}function Hr(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r],i=nr(o);if(i===e)return t=o,t}return t},t):t}function zr(t,e,n){void 0===n&&(n=[]);var r=[];if(!t||!t.tag)return r;var o=t||{},i=o.data;void 0===i&&(i={});var a=o.children;void 0===a&&(a=[]);var s=o.componentInstance;s?Object.keys(s.$slots).forEach(function(t){var o=s.$slots[t],i=Array.isArray(o)?o:[o];i.forEach(function(t){r=r.concat(zr(t,e,n))})}):a.forEach(function(t){r=r.concat(zr(t,e,n))});var c=i.attrs,u=i.on;return c&&u&&c["eventid"]===e?(n.forEach(function(t){var e=u[t];"function"===typeof e?r.push(e):Array.isArray(e)&&(r=r.concat(e))}),r):r}function Jr(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s=o.x,c=o.y,u={mp:t,type:e,timeStamp:n,x:s,y:c,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:I,preventDefault:I};return r&&r.length&&(Object.assign(u,r[0]),u.touches=r),u}function qr(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=t.currentTarget,i=o||r,a=i.dataset;void 0===a&&(a={});var s=a.comkey;void 0===s&&(s="");var c=a.eventid,u=Hr(e,s.split(","));if(u){var f=rr[n]||[n],p=zr(u._vnode,c,f);if(p.length){var l=Jr(t);if(1===p.length){var h=p[0](l);return h}p.forEach(function(t){return t(l)})}}}return Rn.config.mustUseProp=Qn,Rn.config.isReservedTag=Yn,Rn.config.isReservedAttr=Zn,Rn.config.getTagNamespace=tr,Rn.config.isUnknownElement=er,Rn.prototype.__patch__=jr,Rn.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return ge(n,void 0,void 0)})}return ge(this,void 0,void 0)},Rn.prototype._initMP=Nr,Rn.prototype.$updateDataToMP=Fr,Rn.prototype._initDataToMP=Wr,Rn.prototype.$handleProxyWithVue=qr,Rn})}).call(this,n("c8ba"))},fb50:function(t,e,n){}}]);
});
define('static/weCropper.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.weCropper = factory();
})(void 0, function () {
  'use strict';
  /**
   * Created by sail on 2017/6/11.
   */

  var device = void 0;
  var TOUCH_STATE = ['touchstarted', 'touchmoved', 'touchended'];

  function firstLetterUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function setTouchState(instance) {
    for (var _len = arguments.length, arg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      arg[_key - 1] = arguments[_key];
    }

    TOUCH_STATE.forEach(function (key, i) {
      if (arg[i] !== undefined) {
        instance[key] = arg[i];
      }
    });
  }

  function validator(instance, o) {
    Object.defineProperties(instance, o);
  }

  function getDevice() {
    if (!device) {
      device = wx.getSystemInfoSync();
    }

    return device;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var tmp = {};
  var DEFAULT = {
    id: {
      default: 'cropper',
      get: function get$$1() {
        return tmp.id;
      },
      set: function set$$1(value) {
        if (typeof value !== 'string') {}

        tmp.id = value;
      }
    },
    width: {
      default: 750,
      get: function get$$1() {
        return tmp.width;
      },
      set: function set$$1(value) {
        tmp.width = value;
      }
    },
    height: {
      default: 750,
      get: function get$$1() {
        return tmp.height;
      },
      set: function set$$1(value) {
        tmp.height = value;
      }
    },
    scale: {
      default: 2.5,
      get: function get$$1() {
        return tmp.scale;
      },
      set: function set$$1(value) {
        tmp.scale = value;
      }
    },
    zoom: {
      default: 5,
      get: function get$$1() {
        return tmp.zoom;
      },
      set: function set$$1(value) {
        tmp.zoom = value;
      }
    },
    src: {
      default: 'cropper',
      get: function get$$1() {
        return tmp.src;
      },
      set: function set$$1(value) {
        tmp.src = value;
      }
    },
    cut: {
      default: {},
      get: function get$$1() {
        return tmp.cut;
      },
      set: function set$$1(value) {
        tmp.cut = value;
      }
    },
    onReady: {
      default: null,
      get: function get$$1() {
        return tmp.ready;
      },
      set: function set$$1(value) {
        tmp.ready = value;
      }
    },
    onBeforeImageLoad: {
      default: null,
      get: function get$$1() {
        return tmp.beforeImageLoad;
      },
      set: function set$$1(value) {
        tmp.beforeImageLoad = value;
      }
    },
    onImageLoad: {
      default: null,
      get: function get$$1() {
        return tmp.imageLoad;
      },
      set: function set$$1(value) {
        tmp.imageLoad = value;
      }
    },
    onBeforeDraw: {
      default: null,
      get: function get$$1() {
        return tmp.beforeDraw;
      },
      set: function set$$1(value) {
        tmp.beforeDraw = value;
      }
    }
  };
  /**
   * Created by sail on 2017/6/11.
   */

  function prepare() {
    var self = this;

    var _getDevice = getDevice(),
        windowWidth = _getDevice.windowWidth;

    self.attachPage = function () {
      var pages = getCurrentPages //  获取到当前page上下文
      ();
      var pageContext = pages[pages.length - 1]; //  把this依附在Page上下文的wecropper属性上，便于在page钩子函数中访问

      pageContext.wecropper = self;
    };

    self.createCtx = function () {
      var id = self.id;

      if (id) {
        self.ctx = wx.createCanvasContext(id);
      }
    };

    self.deviceRadio = windowWidth / 750;
    self.deviceRadio = self.deviceRadio.toFixed(2);
  }
  /**
   *
   */


  function observer() {
    var self = this;
    var EVENT_TYPE = ['ready', 'beforeImageLoad', 'beforeDraw', 'imageLoad'];

    self.on = function (event, fn) {
      if (EVENT_TYPE.indexOf(event) > -1) {
        if (typeof fn === 'function') {
          event === 'ready' ? fn(self) : self['on' + firstLetterUpper(event)] = fn;
        }
      }

      return self;
    };
  }
  /**
   * Created by sail on 2017/6/11.
   */


  function methods() {
    var self = this;
    var deviceRadio = self.deviceRadio;
    console.log(JSON.stringify(self));
    var boundWidth = self.width; // 裁剪框默认宽度，即整个画布宽度

    var boundHeight = self.height; // 裁剪框默认高度，即整个画布高度

    var _self$cut = self.cut,
        _self$cut$x = _self$cut.x,
        x = _self$cut$x === undefined ? 0 : _self$cut$x,
        _self$cut$y = _self$cut.y,
        y = _self$cut$y === undefined ? 0 : _self$cut$y,
        _self$cut$width = _self$cut.width,
        width = _self$cut$width === undefined ? boundWidth : _self$cut$width,
        _self$cut$height = _self$cut.height,
        height = _self$cut$height === undefined ? boundHeight : _self$cut$height;

    self.updateCanvas = function () {
      if (self.croperTarget) {
        //  画布绘制图片
        self.ctx.drawImage(self.croperTarget, self.imgLeft, self.imgTop, self.scaleWidth, self.scaleHeight);
      }

      typeof self.onBeforeDraw === 'function' && self.onBeforeDraw(self.ctx, self);
      self.setBoundStyle //	设置边界样式
      ();
      self.ctx.draw();
      return self;
    };

    self.pushOrign = function (src) {
      self.src = src;
      typeof self.onBeforeImageLoad === 'function' && self.onBeforeImageLoad(self.ctx, self);
      uni.getImageInfo({
        src: src,
        success: function success(res) {
          var innerAspectRadio = res.width / res.height;
          self.croperTarget = res.path || src;

          if (innerAspectRadio < width / height) {
            self.rectX = x;
            self.baseWidth = width;
            self.baseHeight = width / innerAspectRadio;
            self.rectY = y - Math.abs((height - self.baseHeight) / 2);
          } else {
            self.rectY = y;
            self.baseWidth = height * innerAspectRadio;
            self.baseHeight = height;
            self.rectX = x - Math.abs((width - self.baseWidth) / 2);
          }

          self.imgLeft = self.rectX;
          self.imgTop = self.rectY;
          self.scaleWidth = self.baseWidth;
          self.scaleHeight = self.baseHeight;
          self.updateCanvas();
          typeof self.onImageLoad === 'function' && self.onImageLoad(self.ctx, self);
        }
      });
      self.update();
      return self;
    };

    self.getCropperImage = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var id = self.id;
      var ARG_TYPE = toString.call(args[0]);

      switch (ARG_TYPE) {
        case '[object Object]':
          var _args$0$quality = args[0].quality,
              quality = _args$0$quality === undefined ? 10 : _args$0$quality;
          console.log("quality--" + quality);
          uni.canvasToTempFilePath({
            canvasId: id,
            x: x,
            y: y,
            width: width,
            height: height,
            destWidth: width * quality / (deviceRadio * 10),
            destHeight: height * quality / (deviceRadio * 10),
            success: function success(res) {
              console.log(res);
              typeof args[args.length - 1] === 'function' && args[args.length - 1](res.tempFilePath);
            }
          });
          break;

        case '[object Function]':
          uni.canvasToTempFilePath({
            canvasId: id,
            x: x,
            y: y,
            fileType: "jpg",
            width: width,
            height: height,
            destWidth: width,
            destHeight: height,
            success: function success(res) {
              typeof args[args.length - 1] === 'function' && args[args.length - 1](res.tempFilePath);
            }
          });
          break;
      }

      return self;
    };
  }
  /**
   * Created by sail on 2017/6/11.
   */


  function update() {
    var self = this;
    if (!self.src) return;

    self.__oneTouchStart = function (touch) {
      self.touchX0 = touch.x;
      self.touchY0 = touch.y;
    };

    self.__oneTouchMove = function (touch) {
      var xMove = void 0,
          yMove = void 0; //计算单指移动的距离

      if (self.touchended) {
        return self.updateCanvas();
      }

      xMove = touch.x - self.touchX0;
      yMove = touch.y - self.touchY0;
      var imgLeft = self.rectX + xMove;
      var imgTop = self.rectY + yMove;
      self.outsideBound(imgLeft, imgTop);
      self.updateCanvas();
    };

    self.__twoTouchStart = function (touch0, touch1) {
      var xMove = void 0,
          yMove = void 0,
          oldDistance = void 0;
      self.touchX1 = self.rectX + self.scaleWidth / 2;
      self.touchY1 = self.rectY + self.scaleHeight / 2; //计算两指距离

      xMove = touch1.x - touch0.x;
      yMove = touch1.y - touch0.y;
      oldDistance = Math.sqrt(xMove * xMove + yMove * yMove);
      self.oldDistance = oldDistance;
    };

    self.__twoTouchMove = function (touch0, touch1) {
      var xMove = void 0,
          yMove = void 0,
          newDistance = void 0;
      var scale = self.scale,
          zoom = self.zoom; // 计算二指最新距离

      xMove = touch1.x - touch0.x;
      yMove = touch1.y - touch0.y;
      newDistance = Math.sqrt(xMove * xMove + yMove * yMove //  使用0.005的缩放倍数具有良好的缩放体验
      );
      self.newScale = self.oldScale + 0.001 * zoom * (newDistance - self.oldDistance); //  设定缩放范围

      self.newScale <= 1 && (self.newScale = 1);
      self.newScale >= scale && (self.newScale = scale);
      self.scaleWidth = self.newScale * self.baseWidth;
      self.scaleHeight = self.newScale * self.baseHeight;
      var imgLeft = self.touchX1 - self.scaleWidth / 2;
      var imgTop = self.touchY1 - self.scaleHeight / 2;
      self.outsideBound(imgLeft, imgTop);
      self.updateCanvas();
    };

    self.__xtouchEnd = function () {
      self.oldScale = self.newScale;
      self.rectX = self.imgLeft;
      self.rectY = self.imgTop;
    };
  }
  /**
   * Created by sail on 2017/6/11.
   */


  var handle = {
    //  图片手势初始监测
    touchStart: function touchStart(e) {
      var self = this;

      var _e$touches = slicedToArray(e.touches, 2),
          touch0 = _e$touches[0],
          touch1 = _e$touches[1];

      console.log(JSON.stringify(touch1));

      if (!touch0.x) {
        touch0.x = touch0.clientX;
        touch0.y = touch0.clientY;

        if (touch1) {
          touch1.x = touch1.clientX;
          touch1.y = touch1.clientY;
        }
      }

      setTouchState(self, true, null, null //计算第一个触摸点的位置，并参照改点进行缩放
      );

      self.__oneTouchStart(touch0 // 两指手势触发
      );

      if (e.touches.length >= 2) {
        self.__twoTouchStart(touch0, touch1);
      }
    },
    //  图片手势动态缩放
    touchMove: function touchMove(e) {
      var self = this;

      var _e$touches2 = slicedToArray(e.touches, 2),
          touch0 = _e$touches2[0],
          touch1 = _e$touches2[1];

      if (!touch0.x) {
        touch0.x = touch0.clientX;
        touch0.y = touch0.clientY;

        if (touch1) {
          touch1.x = touch1.clientX;
          touch1.y = touch1.clientY;
        }
      }

      setTouchState(self, null, true // 单指手势时触发
      );

      if (e.touches.length === 1) {
        self.__oneTouchMove(touch0);
      } // 两指手势触发


      if (e.touches.length >= 2) {
        self.__twoTouchMove(touch0, touch1);
      }
    },
    touchEnd: function touchEnd(e) {
      var self = this;
      setTouchState(self, false, false, true);

      self.__xtouchEnd();
    }
  };
  /**
   * Created by sail on 1017/6/12.
   */

  function cut() {
    var self = this;
    var deviceRadio = self.deviceRadio;
    var boundWidth = self.width; // 裁剪框默认宽度，即整个画布宽度

    var boundHeight = self.height; // 裁剪框默认高度，即整个画布高度

    var _self$cut = self.cut,
        _self$cut$x = _self$cut.x,
        x = _self$cut$x === undefined ? 0 : _self$cut$x,
        _self$cut$y = _self$cut.y,
        y = _self$cut$y === undefined ? 0 : _self$cut$y,
        _self$cut$width = _self$cut.width,
        width = _self$cut$width === undefined ? boundWidth : _self$cut$width,
        _self$cut$height = _self$cut.height,
        height = _self$cut$height === undefined ? boundHeight : _self$cut$height;
    /**
     * 设置边界
     * @param imgLeft 图片左上角横坐标值
     * @param imgTop 图片左上角纵坐标值
     */

    self.outsideBound = function (imgLeft, imgTop) {
      self.imgLeft = imgLeft >= x ? x : self.scaleWidth + imgLeft - x <= width ? x + width - self.scaleWidth : imgLeft;
      self.imgTop = imgTop >= y ? y : self.scaleHeight + imgTop - y <= height ? y + height - self.scaleHeight : imgTop;
    };
    /**
     * 设置边界样式
     * @param color	边界颜色
     */


    self.setBoundStyle = function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$color = _ref.color,
          color = _ref$color === undefined ? '#04b00f' : _ref$color,
          _ref$mask = _ref.mask,
          mask = _ref$mask === undefined ? 'rgba(0, 0, 0, 0.3)' : _ref$mask,
          _ref$lineWidth = _ref.lineWidth,
          lineWidth = _ref$lineWidth === undefined ? 1 : _ref$lineWidth; // 绘制半透明层


      self.ctx.beginPath();
      self.ctx.setFillStyle(mask);
      self.ctx.fillRect(0, 0, x, boundHeight);
      self.ctx.fillRect(x, 0, width, y);
      self.ctx.fillRect(x, y + height, width, boundHeight - y - height);
      self.ctx.fillRect(x + width, 0, boundWidth - x - width, boundHeight);
      self.ctx.fill // 设置边界左上角样式
      // 为使边界样式处于边界外边缘，此时x、y均要减少lineWidth
      ();
      self.ctx.beginPath();
      self.ctx.setStrokeStyle(color);
      self.ctx.setLineWidth(lineWidth);
      self.ctx.moveTo(x - lineWidth, y + 10 - lineWidth);
      self.ctx.lineTo(x - lineWidth, y - lineWidth);
      self.ctx.lineTo(x + 10 - lineWidth, y - lineWidth);
      self.ctx.stroke // 设置边界左下角样式
      // 为使边界样式处于边界外边缘，此时x要减少lineWidth、y要增加lineWidth
      ();
      self.ctx.beginPath();
      self.ctx.setStrokeStyle(color);
      self.ctx.setLineWidth(lineWidth);
      self.ctx.moveTo(x - lineWidth, y + height - 10 + lineWidth);
      self.ctx.lineTo(x - lineWidth, y + height + lineWidth);
      self.ctx.lineTo(x + 10 - lineWidth, y + height + lineWidth);
      self.ctx.stroke // 设置边界右上角样式
      // 为使边界样式处于边界外边缘，此时x要增加lineWidth、y要减少lineWidth
      ();
      self.ctx.beginPath();
      self.ctx.setStrokeStyle(color);
      self.ctx.setLineWidth(lineWidth);
      self.ctx.moveTo(x + width - 10 + lineWidth, y - lineWidth);
      self.ctx.lineTo(x + width + lineWidth, y - lineWidth);
      self.ctx.lineTo(x + width + lineWidth, y + 10 - lineWidth);
      self.ctx.stroke // 设置边界右下角样式
      // 为使边界样式处于边界外边缘，此时x、y均要增加lineWidth
      ();
      self.ctx.beginPath();
      self.ctx.setStrokeStyle(color);
      self.ctx.setLineWidth(lineWidth);
      self.ctx.moveTo(x + width + lineWidth, y + height - 10 + lineWidth);
      self.ctx.lineTo(x + width + lineWidth, y + height + lineWidth);
      self.ctx.lineTo(x + width - 10 + lineWidth, y + height + lineWidth);
      self.ctx.stroke();
    };
  }

  var __version__ = '1.1.4';

  var weCropper = function () {
    function weCropper(params) {
      classCallCheck(this, weCropper);
      var self = this;
      var _default = {};
      validator(self, DEFAULT);
      Object.keys(DEFAULT).forEach(function (key) {
        _default[key] = DEFAULT[key].default;
      });
      Object.assign(self, _default, params);
      self.prepare();
      self.attachPage();
      self.createCtx();
      self.observer();
      self.cutt();
      self.methods();
      self.init();
      self.update();
      return self;
    }

    createClass(weCropper, [{
      key: 'init',
      value: function init() {
        var self = this;
        var src = self.src;
        self.version = __version__;
        typeof self.onReady === 'function' && self.onReady(self.ctx, self);

        if (src) {
          self.pushOrign(src);
        }

        setTouchState(self, false, false, false);
        self.oldScale = 1;
        self.newScale = 1;
        return self;
      }
    }]);
    return weCropper;
  }();

  Object.assign(weCropper.prototype, handle);
  weCropper.prototype.prepare = prepare;
  weCropper.prototype.observer = observer;
  weCropper.prototype.methods = methods;
  weCropper.prototype.cutt = cut;
  weCropper.prototype.update = update;
  return weCropper;
});
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"4e97":function(t,e,i){},"6e7e":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"body-view"},[i("scroll-view",{staticClass:"top-menu-view",attrs:{"scroll-x":"true","scroll-left":t.scrollLeft}},t._l(t.menuTabs,function(e,a){return i("block",{key:a},[i("view",{staticClass:"menu-one-view",attrs:{id:"tabNum"+a,eventid:"00b33dfa-0-"+a},on:{click:function(e){t.swichMenu(a)}}},[i("view",{class:[t.currentTab==a?"menu-one-act":"menu-one"]},[i("view",{staticClass:"menu-one-txt"},[t._v(t._s(e.name))]),i("view",{staticClass:"menu-one-bottom"},[i("view",{staticClass:"menu-one-bottom-color"})])])])])})),i("swiper",{staticClass:"swiper-box-list",attrs:{current:t.currentTab,duration:"300",eventid:"00b33dfa-4"},on:{change:t.swiperChange}},t._l(t.swiperDateList,function(e,a){return i("block",{key:a},[i("swiper-item",{attrs:{mpcomid:"00b33dfa-3-"+a}},[i("scroll-view",{staticClass:"swiper-one-list",attrs:{"scroll-y":"true",eventid:"00b33dfa-3-"+a},on:{scrolltolower:function(e){t.loadMore(a)}}},[i("block",[i("swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,"indicator-color":t.white,"indicator-active-color":t.black,autoplay:!0,interval:3e3,duration:500,circular:!0}},[i("swiper-item",{attrs:{mpcomid:"00b33dfa-0-"+a}},[i("navigator",{attrs:{url:"../videoplay1/videoplay1"}},[i("image",{staticClass:"slideimage",attrs:{src:"../../static/assets/Andrea Facheris.jpg",mode:""}})])],1),i("swiper-item",{attrs:{mpcomid:"00b33dfa-1-"+a}},[i("navigator",{attrs:{url:"../videoplay2/videoplay2"}},[i("image",{staticClass:"slideimage",attrs:{src:"../../static/assets/Sunnie Du.jpg",mode:""}})])],1),i("swiper-item",{attrs:{mpcomid:"00b33dfa-2-"+a}},[i("navigator",{attrs:{url:"../videoplay3/videoplay3"}},[i("image",{staticClass:"slideimage",attrs:{src:"../../static/assets/Matt Bowron.jpg",mode:""}})])],1)],1),i("view",{staticClass:"filmsarea"},[i("view",{staticClass:"title"},[t._v("Default Column1")]),i("scroll-view",{staticClass:"oneline",attrs:{"scroll-x":"true",eventid:"00b33dfa-2-"+a},on:{scrolltolower:t.getMoreAllVideoList}},[i("view",{staticClass:"filmsblock"},t._l(t.videoList,function(e,n){return i("view",{key:e.id,staticClass:"film"},[i("view",{attrs:{eventid:"00b33dfa-1-"+a+"-"+n},on:{click:function(i){t.navigatToVideoPlay(e)}}},[i("image",{staticClass:"filmpic",attrs:{src:t.serverUrl+e.coverPath,mode:""}}),i("text",{staticClass:"filmname"},[t._v(t._s(e.id))])])])}))])],1)],1)],1)],1)],1)}))],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},c6a1:function(t,e,i){"use strict";i.r(e);var a=i("e010"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},ce5b:function(t,e,i){"use strict";i("fb50");var a=s(i("b0ce")),n=s(i("d970"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},d970:function(t,e,i){"use strict";i.r(e);var a=i("6e7e"),n=i("c6a1");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("edae");var r=i("2877"),o=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},e010:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("a34a"));function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i,a,n,s,r){try{var o=t[s](r),c=o.value}catch(l){return void i(l)}o.done?e(c):Promise.resolve(c).then(a,n)}function r(t){return function(){var e=this,i=arguments;return new Promise(function(a,n){var r=t.apply(e,i);function o(t){s(r,a,n,o,c,"next",t)}function c(t){s(r,a,n,o,c,"throw",t)}o(void 0)})}}var o={data:function(){return{scrollLeft:0,isClickChange:!1,currentTab:0,menuTabs:[{name:"Crime"},{name:"Drama"},{name:"Comedy"},{name:"Sci-Fi"},{name:"Animation"},{name:"Action"}],swiperDateList:[[],[],[],[],[],[]],totalPage:1,page:1,videoList:[],screenWidth:350,serverUrl:""}},changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value},onLoad:function(){t.setNavigationBarTitle({title:"TheShortFilmShow"});var e=t.getSystemInfoSync().screenWidth;this.screenWidth=e;var i=this.page;this.getAllVideoList(i)},onPullDownRefresh:function(){console.log("refresh"),setTimeout(function(){t.stopPullDownRefresh()},1e3)},methods:{swichMenu:function(){var t=r(a.default.mark(function t(e){return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.currentTab!=e){t.next=4;break}return t.abrupt("return",!1);case 4:this.currentTab=e,this.setScrollLeft(e);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),swiperChange:function(){var t=r(a.default.mark(function t(e){var i;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:i=e.target.current,this.setScrollLeft(i),this.currentTab=i;case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),setScrollLeft:function(){var e=r(a.default.mark(function e(i){var n,s,r,o;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=0,s=0;case 2:if(!(s<=i)){e.next=10;break}return e.next=5,this.getWidth("tabNum"+s);case 5:r=e.sent,n+=r.width;case 7:s++,e.next=2;break;case 10:o=t.getSystemInfoSync().windowWidth,this.scrollLeft=n>o?n-o:0;case 12:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}(),getWidth:function(e){return new Promise(function(i,a){t.createSelectorQuery().select("#"+e).fields({size:!0,scrollOffset:!0},function(t){i(t)}).exec()})},loadMore:function(t){console.log("正在加载更多数据。。。"),this.getDateList(t)},getDateList:function(t){for(var e=0;e<20;e++){var i=this.menuTabs[t].name+this.swiperDateList[t].length;this.swiperDateList[t].push(i)}},getAllVideoList:function(e){var i=this,a=i.$serverUrl;t.showLoading({title:"Loading..."}),console.log("当前请求页："+e),t.request({url:a+"/video/showAll",data:{page:e,pageSize:4},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){t.hideLoading(),console.log(n.data.data),1==e&&(i.videoList=[]);var s=i.videoList,r=n.data.data.rows;i.videoList=s.concat(r),i.page=e,i.totalPage=n.data.data.total,i.serverUrl=a}})},getMoreAllVideoList:function(){var t=this.page,e=this.totalPage;if(t!=e){var i=t+1;this.getAllVideoList(i),this.page=i}},navigatToVideoPlay:function(e){e=JSON.stringify(e),t.navigateTo({url:"../videoplay/videoplay?film="+e})}}};e.default=o}).call(this,i("6e42")["default"])},edae:function(t,e,i){"use strict";var a=i("4e97"),n=i.n(a);n.a}},[["ce5b","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/watchhistory/watchhistory';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/watchhistory/watchhistory.js';

define('pages/watchhistory/watchhistory.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/watchhistory/watchhistory"],{"175e":function(t,e,a){"use strict";a("fb50");var n=i(a("b0ce")),s=i(a("68f2"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},"1a14":function(t,e,a){},"61b9":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{history:[[123],[234],[345],[465]],history_card:[1,2,3,4,5]}},onLoad:function(){t.setNavigationBarTitle({title:"Watch History"})},methods:{jumpvp:function(){t.navigateTo({url:"../videoplay/videoplay",success:function(t){console.log("jump successfully")},fail:function(){console.log("jump fail")}})}}};e.default=a}).call(this,a("6e42")["default"])},"68f2":function(t,e,a){"use strict";a.r(e);var n=a("738b"),s=a("9f73");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a("8a1d");var o=a("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"738b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"container column"},[a("view",{staticClass:"history_a column"},t._l(t.history_card,function(e,n){return a("view",{key:e[0],staticClass:"card_loop"},[a("view",{staticClass:"history_card row hor_center",attrs:{eventid:"36ae34fd-0-"+n},on:{click:t.jumpvp}},[a("view",{staticClass:"history_t super_center"},[a("text",{staticClass:"history_fn"},[t._v(t._s(t.history))])]),t._m(0,!0)])])}))])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"history_ia super_center"},[a("image",{staticClass:"history_img",attrs:{src:"../../static/assets/Tom Eastwood.jpg",mode:"aspectFit"}})])}];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"8a1d":function(t,e,a){"use strict";var n=a("1a14"),s=a.n(n);s.a},"9f73":function(t,e,a){"use strict";a.r(e);var n=a("61b9"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a}},[["175e","common/runtime","common/vendor"]]]);
});
require('pages/watchhistory/watchhistory.js');
__wxRoute = 'pages/filmlibrary/filmlibrary';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/filmlibrary/filmlibrary.js';

define('pages/filmlibrary/filmlibrary.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/filmlibrary/filmlibrary"],{3268:function(t,a,e){"use strict";e.r(a);var n=e("5513"),i=e("5cff");for(var o in i)"default"!==o&&function(t){e.d(a,t,function(){return i[t]})}(o);e("b75e");var r=e("2877"),c=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);a["default"]=c.exports},5513:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"container column"},[e("view",{staticClass:"card"},[e("navigator",{staticClass:"rec",attrs:{url:"../videoplay1/videoplay1"}},[e("video",{staticClass:"play-video",attrs:{id:"5285890787780845965",src:"http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd4a1c45285890787780845965/GtCUUl8lkqIA.mp4",controls:"",eventid:"ca95fbe6-0"},on:{error:t.videoErrorCallback}}),e("text",{staticClass:"cardtitle"},[t._v("Vendetta (ven·dét·ta)")])])],1),e("view",{staticClass:"card"},[e("navigator",{staticClass:"rec",attrs:{url:"../videoplay1/videoplay1"}},[e("video",{staticClass:"play-video",attrs:{id:"5285890787780845965",src:"http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd4a1c45285890787780845965/GtCUUl8lkqIA.mp4",controls:"",eventid:"ca95fbe6-1"},on:{error:t.videoErrorCallback}}),e("text",{staticClass:"cardtitle"},[t._v("Vendetta (ven·dét·ta)")])])],1)])},i=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return i})},"5cff":function(t,a,e){"use strict";e.r(a);var n=e("70ec"),i=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=i.a},"5e3a":function(t,a,e){},"70ec":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{indicatorDots:!0,autoplay:!0,interval:5e3,duration:500,circular:!0}},changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value},onPullDownRefresh:function(){console.log("refresh"),setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){t.setNavigationBarTitle({title:"Films Library"})},methods:{}};a.default=e}).call(this,e("6e42")["default"])},b75e:function(t,a,e){"use strict";var n=e("5e3a"),i=e.n(n);i.a},d17b:function(t,a,e){"use strict";e("fb50");var n=o(e("b0ce")),i=o(e("3268"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))}},[["d17b","common/runtime","common/vendor"]]]);
});
require('pages/filmlibrary/filmlibrary.js');
__wxRoute = 'pages/videoplay/videoplay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/videoplay/videoplay.js';

define('pages/videoplay/videoplay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/videoplay/videoplay"],{"07d4":function(t,e,s){"use strict";s.r(e);var a=s("2af3"),i=s("b103");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);s("af21");var r=s("2877"),o=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"2af3":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"VP-back"},[s("view",{staticClass:"VP-screen"},[s("view",{staticClass:"screen"},[s("video",{staticClass:"play-video",attrs:{src:t.filmUrl,controls:"",eventid:"561e0bfd-0"},on:{error:t.videoErrorCallback}})])]),t._m(0),s("view",{staticClass:"data_box column_center"},[s("image",{staticClass:"filmmaker-pic",attrs:{src:"../../static/icons/logo.png"}}),t._m(1),s("button",{staticClass:"follow_button",attrs:{size:"mini",plain:"true","hover-class":"button-hover",type:"primary"}},[t._v("Follow")])],1),s("view",{staticClass:"control_interface"},[s("scroll-view",{staticClass:"top-menu-view",attrs:{"scroll-x":"true","scroll-left":t.scrollLeft}},t._l(t.menuTabs,function(e,a){return s("block",{key:a},[s("view",{staticClass:"menu-one-view",attrs:{id:"tabNum"+a,eventid:"561e0bfd-1-"+a},on:{click:function(e){t.swichMenu(a)}}},[s("view",{class:[t.currentTab==a?"menu-one-act":"menu-one"]},[s("view",{staticClass:"menu-one-txt"},[t._v(t._s(e.name))]),s("view",{staticClass:"menu-one-bottom"},[s("view",{staticClass:"menu-one-bottom-color"})])])])])})),s("swiper",{staticClass:"swiper-box-list",attrs:{current:t.currentTab,duration:"300",eventid:"561e0bfd-4"},on:{change:t.swiperChange}},t._l(t.swiperDateList,function(e,a){return s("block",{key:a},[s("swiper-item",{attrs:{mpcomid:"561e0bfd-0-"+a}},[s("scroll-view",{staticClass:"swiper-one-list",attrs:{"scroll-y":"true",eventid:"561e0bfd-2-"+a},on:{scrolltolower:function(e){t.loadMore(a)}}},[s("block",[s("view",{staticClass:"video-info-card"},[s("view",{staticClass:"video-pic-box"},[s("image",{staticClass:"video-pic-set",attrs:{src:"../../static/assets/images2.jpg",mode:""}})]),s("view",{staticClass:"video-info-box"},[s("text",{staticClass:"filmname"},[t._v("Vendetta (ven·dét·ta)")]),s("view",{staticClass:"actors"},[s("text",{staticClass:"actor-name"},[t._v("Film Maker:")]),s("text",{staticClass:"actor-name"},[t._v("Andrea Facheris")])])])]),s("text",{staticClass:"filmintro"})])],1)],1),s("swiper-item",{attrs:{mpcomid:"561e0bfd-1-"+a}},[s("scroll-view",{staticClass:"swiper-one-list",attrs:{"scroll-y":"true",eventid:"561e0bfd-3-"+a},on:{scrolltolower:function(e){t.loadMore(a)}}},[s("block",[s("view",{staticClass:"new_comment hor_center"},[s("text",{staticClass:"latest_comment hor_center"},[t._v("Latest comment")])]),t._l(t.comments,function(e,a){return s("view",{key:e.id,staticClass:"videocomment"},[s("view",{staticClass:"border_line"}),s("view",{staticClass:"user_info"},[s("image",{staticClass:"comment_profile_pic",attrs:{src:"../../static/icons/logo.png"}}),s("view",{staticClass:"user_info_name"},[s("text",{staticClass:"user_info_name_text"},[t._v(t._s(e.fromUserId))])])]),s("view",{staticClass:"comment_box"},[s("view",{staticClass:"time"},[s("text",{staticClass:"time_text"},[t._v(t._s(e.createDate))])]),s("view",{staticClass:"content_box"},[s("text",{staticClass:"content_text"},[t._v(t._s(e.comment))]),s("view",{staticClass:"text_i"})]),s("view",{staticClass:"comment_show super_center"},[t._v("Show more")])])])})],2)],1)],1)],1)})),s("view",{staticClass:"V-com-area"},[s("form",{attrs:{eventid:"561e0bfd-5"},on:{submit:t.comment}},[s("view",{staticClass:"com-write"},[s("input",{staticClass:"input",attrs:{name:"comment",placeholder:"Write some comment?"}}),s("button",{attrs:{formType:"submit"}},[t._v("send")])],1)])],1)],1),t._m(2)])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"filmmaker_title column_center"},[s("text",{staticClass:"filmmaker_title_text"},[t._v("Director")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"filmmaker-name column_center"},[s("text",{staticClass:"filmmaker-name-text"},[t._v("Guetta Xia")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{},[s("image",{staticClass:"like_button",attrs:{src:"../../static/icons/like2.png",mode:"aspectFit"}})])}];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},"2f20":function(t,e,s){"use strict";s("fb50");var a=n(s("b0ce")),i=n(s("07d4"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},4206:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(s("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function n(t,e,s,a,i,n,r){try{var o=t[n](r),c=o.value}catch(l){return void s(l)}o.done?e(c):Promise.resolve(c).then(a,i)}function r(t){return function(){var e=this,s=arguments;return new Promise(function(a,i){var r=t.apply(e,s);function o(t){n(r,a,i,o,c,"next",t)}function c(t){n(r,a,i,o,c,"throw",t)}o(void 0)})}}var o={data:function(){return{scrollLeft:0,isClickChange:!1,currentTab:0,menuTabs:[{name:"Detail"},{name:"Comment"}],actorinfo:[{name:"Sam"},{name:"David"}],swiperDateList:[[],[]],filmUrl:"",film:{},comments:{}}},changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value},onLoad:function(e){for(var s=0;s<this.swiperDateList.length;s++)this.getDateList(s);t.setNavigationBarTitle({title:"TheShortFilmShow"});var a=JSON.parse(e.film);this.filmUrl=this.$serverUrl+a.videoPath,this.film=a,console.log(a),this.getComment()},methods:{swichMenu:function(){var t=r(a.default.mark(function t(e){return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.currentTab!=e){t.next=4;break}return t.abrupt("return",!1);case 4:this.currentTab=e,this.setScrollLeft(e);case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),swiperChange:function(){var t=r(a.default.mark(function t(e){var s;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=e.target.current,this.setScrollLeft(s),this.currentTab=s;case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),setScrollLeft:function(){var e=r(a.default.mark(function e(s){var i,n,r,o;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:i=0,n=0;case 2:if(!(n<=s)){e.next=10;break}return e.next=5,this.getWidth("tabNum"+n);case 5:r=e.sent,i+=r.width;case 7:n++,e.next=2;break;case 10:o=t.getSystemInfoSync().windowWidth,this.scrollLeft=i>o?i-o:0;case 12:case"end":return e.stop()}},e,this)}));function s(t){return e.apply(this,arguments)}return s}(),getWidth:function(e){return new Promise(function(s,a){t.createSelectorQuery().select("#"+e).fields({size:!0,scrollOffset:!0},function(t){s(t)}).exec()})},loadMore:function(t){console.log("正在加载更多数据。。。"),this.getDateList(t)},getDateList:function(t){for(var e=0;e<20;e++){var s=this.menuTabs[t].name+this.swiperDateList[t].length;this.swiperDateList[t].push(s)}},comment:function(e){var s=e.detail.value,a=this;t.request({url:a.$serverUrl+"/video/saveComment",data:{videoId:a.film.id,fromUserId:"test",comment:s.comment},method:"POST",header:{"content-type":"application/json"},success:function(t){console.log(t.data)}})},getComment:function(){var e=this;t.request({url:e.$serverUrl+"/video/getAllComments",data:{videoId:e.film.id},method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.comments=t.data.data.rows,console.log(e.comments)}})}}};e.default=o}).call(this,s("6e42")["default"])},af21:function(t,e,s){"use strict";var a=s("dbf9"),i=s.n(a);i.a},b103:function(t,e,s){"use strict";s.r(e);var a=s("4206"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e["default"]=i.a},dbf9:function(t,e,s){}},[["2f20","common/runtime","common/vendor"]]]);
});
require('pages/videoplay/videoplay.js');
__wxRoute = 'pages/profile/profile';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/profile/profile.js';

define('pages/profile/profile.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profile/profile"],{"1be5":function(t,e,o){"use strict";var a=o("7f40"),s=o.n(a);s.a},"33ec":function(t,e,o){"use strict";o.r(e);var a=o("a903"),s=o.n(a);for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},"7f40":function(t,e,o){},"80f6":function(t,e,o){"use strict";o("fb50");var a=n(o("b0ce")),s=n(o("9dee"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},"96d8":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"background"},[o("view",{staticClass:"picbox"},[o("view",{attrs:{type:"primary",eventid:"fa6a801e-0"},on:{tap:t.upload}},[o("image",{staticClass:"profilepic",attrs:{src:t.faceUrl}})]),o("view",{},[t._v(t._s(t.name))])]),t._m(0),o("view",{staticClass:"container_profile column hor_center"},[o("view",{staticClass:"drawer column_center"},[o("image",{staticClass:"icon-proflie",attrs:{src:"../../static/icons/history.png",mode:""}}),o("view",{staticClass:"profile_title column_center"},[o("navigator",{staticClass:"profiel_title_text",attrs:{url:"../watchhistory/watchhistory","hover-class":"navigator-hover"}},[t._v(t._s(t.history))])],1)]),o("view",{staticClass:"drawer column_center"},[o("image",{staticClass:"icon-proflie",attrs:{src:"../../static/icons/history.png",mode:""}}),o("view",{staticClass:"profile_title column_center"},[o("navigator",{staticClass:"profiel_title_text",attrs:{url:"../profileinfo/profileinfo","hover-class":"navigator-hover"}},[t._v("Edit\n\t\t\t\t\tinformation")])],1)])]),o("button",{attrs:{eventid:"fa6a801e-1"},on:{click:t.logout}},[t._v("logout")])],1)},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"data_box column_center"},[o("text",{staticClass:"data_box_text"},[t._v("Follow")]),o("view",{staticClass:"data_border"}),o("text",{staticClass:"data_box_text"},[t._v("Fans")]),o("view",{staticClass:"data_border"}),o("text",{staticClass:"data_box_text"},[t._v("Donate")])])}];o.d(e,"a",function(){return a}),o.d(e,"b",function(){return s})},"9dee":function(t,e,o){"use strict";o.r(e);var a=o("96d8"),s=o("33ec");for(var n in s)"default"!==n&&function(t){o.d(e,t,function(){return s[t]})}(n);o("1be5");var i=o("2877"),r=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},a903:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{faceUrl:"../../static/icons/profilePic.png",src:"",history:"Watch history",name:"Please login"}},onLoad:function(e){t.setNavigationBarTitle({title:"Profile"}),t.showLoading({title:"Loding..."}),setTimeout(function(){t.hideLoading()},5e3);var o=this.getGlobalUserInfo();null!=o&&void 0!=o&&""!=o?(console.log(o),this.queryUserInfo(o)):t.navigateTo({url:"../login/login"})},methods:{upload:function(){var e=this.getGlobalUserInfo();null!=e&&void 0!=e&&""!=e?t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var o=e.tempFilePaths[0];console.log("src="+o),t.redirectTo({url:"../upload/upload?src="+o})}}):t.navigateTo({url:"../login/login"})},logout:function(){var e=this.getGlobalUserInfo();if(null!=e&&void 0!=e&&""!=e){var o=this;t.request({url:o.$serverUrl+"/logout?userId"+e.id,method:"POST",header:{"content-type":"application/json"},success:function(e){console.log(e.data);var a=e.data.status;200==a?(t.showToast({icon:"none",title:"Logout"}),o.removeGlobalUserInfo(),console.log("logout: userInfo.id="+o.getGlobalUserInfo.id),console.log("logout: userInfo.userToken="+o.getGlobalUserInfo.userToken),t.navigateTo({url:"../login/login"})):500==a&&t.showToast({icon:"none",title:e.data.msg})}})}else t.navigateTo({url:"../login/login"})},queryUserInfo:function(e){var o=this;t.request({url:o.$serverUrl+"/user/query?userId="+e.id,method:"POST",header:{"content-type":"application/json",userId:e.id,userToken:e.userToken},success:function(e){console.log(e.data);var a=e.data.status;if(200==a){t.hideLoading();var s=e.data.data;null!=s.faceImage&&(o.faceUrl=o.$serverUrl+s.faceImage)}else 502==a&&t.showToast({icon:"none",title:e.data.msg})}})}}};e.default=o}).call(this,o("6e42")["default"])}},[["80f6","common/runtime","common/vendor"]]]);
});
require('pages/profile/profile.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"033f":function(t,e,a){"use strict";a.r(e);var n=a("4612"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},"0c87":function(t,e,a){"use strict";var n=a("8a1c"),s=a.n(n);s.a},"18c4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"lg-back"},[t._m(0),a("form",{attrs:{eventid:"03c73e1e-1"},on:{submit:t.login}},[a("view",{staticClass:"itemView"},[a("input",{staticClass:"input",attrs:{name:"username",placeholder:"Username"}})]),a("view",{staticClass:"itemView"},[a("input",{staticClass:"input",attrs:{name:"password",placeholder:"Password"}})]),a("view",{staticClass:"button-area"},[a("button",{staticClass:"loginBtn",attrs:{formType:"submit"}},[t._v("Login")]),a("button",{staticClass:"registerBtn",attrs:{eventid:"03c73e1e-0"},on:{tap:t.register}},[t._v("Sign up now!")])],1)])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"picture"},[a("image",{staticClass:"logo",attrs:{src:"../../static/assets/logo.png",mode:"aspectFit"}})])}];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},4612:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},onLoad:function(){t.setNavigationBarTitle({title:"Sign in"})},methods:{register:function(){t.navigateTo({url:"../register/register"})},login:function(e){var a=e.detail.value,n=a.username,s=a.password;if(0==n.length||0==s.length)t.showToast({title:"Username or password can not be null"});else{var i=this.$serverUrl,o=this;t.request({url:i+"/login",method:"POST",data:{username:n,password:s},success:function(e){console.log(e.data);var a=e.data.status;200==a?(t.showToast({icon:"success",title:"Welcome"}),o.setGlobalUserInfo(e.data.data),o.goback()):500==a&&t.showToast({icon:"none",title:e.data.msg,duration:3e3})}})}},goback:function(){t.navigateBack({delta:1})}}};e.default=a}).call(this,a("6e42")["default"])},5383:function(t,e,a){"use strict";a.r(e);var n=a("18c4"),s=a("033f");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a("0c87");var o=a("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},"8a1c":function(t,e,a){},ce16:function(t,e,a){"use strict";a("fb50");var n=i(a("b0ce")),s=i(a("5383"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))}},[["ce16","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"094a":function(t,e,a){"use strict";var s=a("8e7a"),n=a.n(s);n.a},"136e":function(t,e,a){"use strict";a.r(e);var s=a("d581"),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);e["default"]=n.a},"30de":function(t,e,a){"use strict";a.r(e);var s=a("6c8f"),n=a("136e");for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);a("094a");var r=a("2877"),o=Object(r["a"])(n["default"],s["a"],s["b"],!1,null,null,null);e["default"]=o.exports},"6c8f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"reg-back"},[t._m(0),a("form",{attrs:{bindreset:"formReset",eventid:"6ffc4486-0"},on:{submit:t.register}},[a("view",{staticClass:"itemView"},[a("input",{staticClass:"input",attrs:{name:"email",placeholder:"Email"}})]),a("view",{staticClass:"itemView"},[a("input",{staticClass:"input",attrs:{name:"username",placeholder:"Username"}})]),a("view",{staticClass:"itemView"},[a("input",{staticClass:"input",attrs:{name:"password",placeholder:"Password"}})]),a("view",{staticClass:"itemView"},[a("input",{staticClass:"input",attrs:{name:"vPassword",placeholder:"Vertify Password"}})]),a("view",{staticClass:"btn-row"},[a("button",{staticClass:"register",attrs:{formType:"submit"}},[t._v("Complete!")])],1)])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"picture"},[a("image",{staticClass:"logo",attrs:{src:"../../static/assets/logo.png",mode:"aspectFit"}})])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return n})},"844a":function(t,e,a){"use strict";a("fb50");var s=i(a("b0ce")),n=i(a("30de"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},"8e7a":function(t,e,a){},d581:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{register:function(e){var a=e.detail.value,s=a.email,n=a.username,i=a.password,r=a.vPassword;if(s.length<1||!~s.indexOf("@"))t.showToast({icon:"none",title:"Your email address is not valid"});else if(0==n.length||0==i.length)t.showToast({title:"Username or password can not be null"});else if(i!=r)t.showToast({icon:"none",title:"Vertify password is different with password"});else{var o=this.$serverUrl,l=this;t.request({url:o+"/register",method:"POST",data:{email:s,username:n,password:i},header:{"content-type":"application/json"},success:function(e){console.log(e.data);var a=e.data.status;200==a?(t.showToast({icon:"none",title:"Register Complete"}),l.setGlobalUserInfo(e.data.data),t.navigateTo({url:"../login/login"})):500==a&&t.showToast({icon:"none",title:e.data.msg})},fail:function(e){console.log(e.data),t.showToast({icon:"none",title:e.data.msg})}})}}}};e.default=a}).call(this,a("6e42")["default"])}},[["844a","common/runtime","common/vendor"]]]);
});
require('pages/register/register.js');
__wxRoute = 'pages/Swiper-detail/Swiper-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/Swiper-detail/Swiper-detail.js';

define('pages/Swiper-detail/Swiper-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/Swiper-detail/Swiper-detail"],{"16af":function(t,e,n){"use strict";n.r(e);var u=n("1e99"),a=n("ecfd");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("dd0b");var c=n("2877"),i=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=i.exports},"1e99":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"container"},[n("view",{staticClass:"background"},[n("view",{staticClass:"fud"},[n("text",{staticClass:"notice"},[t._v("Function under development")])])])])}];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"5e75":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{}}};e.default=u},"8c50":function(t,e,n){},"9f54":function(t,e,n){"use strict";n("fb50");var u=r(n("b0ce")),a=r(n("16af"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,u.default)(a.default))},dd0b:function(t,e,n){"use strict";var u=n("8c50"),a=n.n(u);a.a},ecfd:function(t,e,n){"use strict";n.r(e);var u=n("5e75"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a}},[["9f54","common/runtime","common/vendor"]]]);
});
require('pages/Swiper-detail/Swiper-detail.js');
__wxRoute = 'pages/videosearch/videosearch';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/videosearch/videosearch.js';

define('pages/videosearch/videosearch.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/videosearch/videosearch"],{"2c1b":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("view",{staticClass:"video-name"},[a("view",{staticClass:"section title"},[e._v("Viedo name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"name",attrs:{placeholder:"please enter video name:",value:e.inputClearValue,eventid:"a847c336-0"},domProps:{value:e.name},on:{input:[function(t){t.target.composing||(e.name=t.target.value)},e.clearInput]}}),e.showClearIcon?a("view",{staticClass:"uni-icon uni-icon-clear",attrs:{eventid:"a847c336-1"},on:{click:e.clearIcon}}):e._e()]),a("view",{staticClass:"video-discription"},[a("view",{staticClass:"section title"},[e._v("Video discription")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.disription,expression:"disription"}],staticClass:"discription",attrs:{placeholder:" please enter video discription",value:e.inputClearValue,eventid:"a847c336-2"},domProps:{value:e.disription},on:{input:[function(t){t.target.composing||(e.disription=t.target.value)},e.clearInput]}}),e.showClearIcon?a("view",{staticClass:"uni-icon uni-icon-clear",attrs:{eventid:"a847c336-3"},on:{click:e.clearIcon}}):e._e()]),a("view",{staticClass:"Choose-class"},[a("view",{staticClass:"uni-title uni-common-pl"},[e._v("video classification")]),a("view",{staticClass:"list-cell"},[a("view",{staticClass:"list-cell-left"},[e._v("class")]),a("view",{staticClass:"list-cell-picker"},[a("picker",{attrs:{value:e.index,range:e.array,eventid:"a847c336-4"},on:{change:e.bindPickerChange}},[a("view",{staticClass:"uni-input"},[e._v(e._s(e.array[e.index]))])])],1)])]),a("view",{staticClass:"locate-directory"},[a("view",{staticClass:"path"},[e._v(e._s(e.path))]),a("button",{attrs:{type:"primary",plain:"true",eventid:"a847c336-5"},on:{tap:e.findlocation}},[e._v("press me to locate")])],1),a("view",[a("button",{attrs:{type:"primary",eventid:"a847c336-6"},on:{tap:e.uploadvideo}},[e._v("页upload")])],1)])},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},5576:function(e,t,a){"use strict";a.r(t);var i=a("2c1b"),n=a("aa71");for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);var o=a("2877"),c=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);t["default"]=c.exports},"5afb":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{array:["Drama","Fantasy","Thriller","Comedy","Honor","Music"],index:0}},methods:{clearInput:function(e){this.inputClearValue=e.target.value,e.target.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},findlocation:function(){e.chooseVideo({count:1,sourceType:["camera","album"],success:function(e){path=e.tempFilePath}})},uploadvideo:function(){e.uploadFile({url:"",filePath:path,name:this.name,success:function(e){console.log(e.data)}})}}};t.default=a}).call(this,a("6e42")["default"])},9343:function(e,t,a){"use strict";a("fb50");var i=s(a("b0ce")),n=s(a("5576"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},aa71:function(e,t,a){"use strict";a.r(t);var i=a("5afb"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);t["default"]=n.a}},[["9343","common/runtime","common/vendor"]]]);
});
require('pages/videosearch/videosearch.js');
__wxRoute = 'pages/open/open';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/open/open.js';

define('pages/open/open.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/open/open"],{"065b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("image",{staticClass:"test1",attrs:{src:"../../static/assets/logo-empty.png",mode:""}}),n("image",{staticClass:"test1",attrs:{src:"../../static/assets/wheel.png",mode:""}})])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},3443:function(t,e,n){"use strict";var a=n("eabd"),u=n.n(a);u.a},"494c":function(t,e,n){"use strict";n.r(e);var a=n("4f13"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},"4f13":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}}};e.default=a},"6cfa":function(t,e,n){"use strict";n("fb50");var a=r(n("b0ce")),u=r(n("bdd3"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(u.default))},bdd3:function(t,e,n){"use strict";n.r(e);var a=n("065b"),u=n("494c");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("3443");var c=n("2877"),s=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=s.exports},eabd:function(t,e,n){}},[["6cfa","common/runtime","common/vendor"]]]);
});
require('pages/open/open.js');
__wxRoute = 'pages/upload/upload';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/upload/upload.js';

define('pages/upload/upload.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/upload/upload"],{"01dd":function(t,e,o){"use strict";var n=o("dab6"),i=o.n(n);i.a},"242a":function(t,e,o){"use strict";o("fb50");var n=c(o("b0ce")),i=c(o("a98c"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},"697e":function(t,e,o){"use strict";(function(e){(function(e,o){t.exports=o()})(0,function(){var t=void 0,o=["touchstarted","touchmoved","touchended"];function n(t){return t.charAt(0).toUpperCase()+t.slice(1)}function i(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];o.forEach(function(e,o){void 0!==n[o]&&(t[e]=n[o])})}function c(t,e){Object.defineProperties(t,e)}function r(){return t||(t=wx.getSystemInfoSync()),t}"function"===typeof Symbol&&Symbol.iterator;var a=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},u=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),s=function(){function t(t,e){var o=[],n=!0,i=!1,c=void 0;try{for(var r,a=t[Symbol.iterator]();!(n=(r=a.next()).done);n=!0)if(o.push(r.value),e&&o.length===e)break}catch(u){i=!0,c=u}finally{try{!n&&a["return"]&&a["return"]()}finally{if(i)throw c}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l={},d={id:{default:"cropper",get:function(){return l.id},set:function(t){l.id=t}},width:{default:750,get:function(){return l.width},set:function(t){l.width=t}},height:{default:750,get:function(){return l.height},set:function(t){l.height=t}},scale:{default:2.5,get:function(){return l.scale},set:function(t){l.scale=t}},zoom:{default:5,get:function(){return l.zoom},set:function(t){l.zoom=t}},src:{default:"cropper",get:function(){return l.src},set:function(t){l.src=t}},cut:{default:{},get:function(){return l.cut},set:function(t){l.cut=t}},onReady:{default:null,get:function(){return l.ready},set:function(t){l.ready=t}},onBeforeImageLoad:{default:null,get:function(){return l.beforeImageLoad},set:function(t){l.beforeImageLoad=t}},onImageLoad:{default:null,get:function(){return l.imageLoad},set:function(t){l.imageLoad=t}},onBeforeDraw:{default:null,get:function(){return l.beforeDraw},set:function(t){l.beforeDraw=t}}};function f(){var t=this,e=r(),o=e.windowWidth;t.attachPage=function(){var e=getCurrentPages(),o=e[e.length-1];o.wecropper=t},t.createCtx=function(){var e=t.id;e&&(t.ctx=wx.createCanvasContext(e))},t.deviceRadio=o/750,t.deviceRadio=t.deviceRadio.toFixed(2)}function h(){var t=this,e=["ready","beforeImageLoad","beforeDraw","imageLoad"];t.on=function(o,i){return e.indexOf(o)>-1&&"function"===typeof i&&("ready"===o?i(t):t["on"+n(o)]=i),t}}function p(){var t=this,o=t.deviceRadio;console.log(JSON.stringify(t));var n=t.width,i=t.height,c=t.cut,r=c.x,a=void 0===r?0:r,u=c.y,s=void 0===u?0:u,l=c.width,d=void 0===l?n:l,f=c.height,h=void 0===f?i:f;t.updateCanvas=function(){return t.croperTarget&&t.ctx.drawImage(t.croperTarget,t.imgLeft,t.imgTop,t.scaleWidth,t.scaleHeight),"function"===typeof t.onBeforeDraw&&t.onBeforeDraw(t.ctx,t),t.setBoundStyle(),t.ctx.draw(),t},t.pushOrign=function(o){return t.src=o,"function"===typeof t.onBeforeImageLoad&&t.onBeforeImageLoad(t.ctx,t),e.getImageInfo({src:o,success:function(e){var n=e.width/e.height;t.croperTarget=e.path||o,n<d/h?(t.rectX=a,t.baseWidth=d,t.baseHeight=d/n,t.rectY=s-Math.abs((h-t.baseHeight)/2)):(t.rectY=s,t.baseWidth=h*n,t.baseHeight=h,t.rectX=a-Math.abs((d-t.baseWidth)/2)),t.imgLeft=t.rectX,t.imgTop=t.rectY,t.scaleWidth=t.baseWidth,t.scaleHeight=t.baseHeight,t.updateCanvas(),"function"===typeof t.onImageLoad&&t.onImageLoad(t.ctx,t)}}),t.update(),t},t.getCropperImage=function(){for(var n=arguments.length,i=Array(n),c=0;c<n;c++)i[c]=arguments[c];var r=t.id,u=toString.call(i[0]);switch(u){case"[object Object]":var l=i[0].quality,f=void 0===l?10:l;console.log("quality--"+f),e.canvasToTempFilePath({canvasId:r,x:a,y:s,width:d,height:h,destWidth:d*f/(10*o),destHeight:h*f/(10*o),success:function(t){console.log(t),"function"===typeof i[i.length-1]&&i[i.length-1](t.tempFilePath)}});break;case"[object Function]":e.canvasToTempFilePath({canvasId:r,x:a,y:s,fileType:"jpg",width:d,height:h,destWidth:d,destHeight:h,success:function(t){"function"===typeof i[i.length-1]&&i[i.length-1](t.tempFilePath)}});break}return t}}function g(){var t=this;t.src&&(t.__oneTouchStart=function(e){t.touchX0=e.x,t.touchY0=e.y},t.__oneTouchMove=function(e){var o=void 0,n=void 0;if(t.touchended)return t.updateCanvas();o=e.x-t.touchX0,n=e.y-t.touchY0;var i=t.rectX+o,c=t.rectY+n;t.outsideBound(i,c),t.updateCanvas()},t.__twoTouchStart=function(e,o){var n=void 0,i=void 0,c=void 0;t.touchX1=t.rectX+t.scaleWidth/2,t.touchY1=t.rectY+t.scaleHeight/2,n=o.x-e.x,i=o.y-e.y,c=Math.sqrt(n*n+i*i),t.oldDistance=c},t.__twoTouchMove=function(e,o){var n=void 0,i=void 0,c=void 0,r=t.scale,a=t.zoom;n=o.x-e.x,i=o.y-e.y,c=Math.sqrt(n*n+i*i),t.newScale=t.oldScale+.001*a*(c-t.oldDistance),t.newScale<=1&&(t.newScale=1),t.newScale>=r&&(t.newScale=r),t.scaleWidth=t.newScale*t.baseWidth,t.scaleHeight=t.newScale*t.baseHeight;var u=t.touchX1-t.scaleWidth/2,s=t.touchY1-t.scaleHeight/2;t.outsideBound(u,s),t.updateCanvas()},t.__xtouchEnd=function(){t.oldScale=t.newScale,t.rectX=t.imgLeft,t.rectY=t.imgTop})}var v={touchStart:function(t){var e=this,o=s(t.touches,2),n=o[0],c=o[1];console.log(JSON.stringify(c)),n.x||(n.x=n.clientX,n.y=n.clientY,c&&(c.x=c.clientX,c.y=c.clientY)),i(e,!0,null,null),e.__oneTouchStart(n),t.touches.length>=2&&e.__twoTouchStart(n,c)},touchMove:function(t){var e=this,o=s(t.touches,2),n=o[0],c=o[1];n.x||(n.x=n.clientX,n.y=n.clientY,c&&(c.x=c.clientX,c.y=c.clientY)),i(e,null,!0),1===t.touches.length&&e.__oneTouchMove(n),t.touches.length>=2&&e.__twoTouchMove(n,c)},touchEnd:function(t){var e=this;i(e,!1,!1,!0),e.__xtouchEnd()}};function b(){var t=this,e=(t.deviceRadio,t.width),o=t.height,n=t.cut,i=n.x,c=void 0===i?0:i,r=n.y,a=void 0===r?0:r,u=n.width,s=void 0===u?e:u,l=n.height,d=void 0===l?o:l;t.outsideBound=function(e,o){t.imgLeft=e>=c?c:t.scaleWidth+e-c<=s?c+s-t.scaleWidth:e,t.imgTop=o>=a?a:t.scaleHeight+o-a<=d?a+d-t.scaleHeight:o},t.setBoundStyle=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=n.color,r=void 0===i?"#04b00f":i,u=n.mask,l=void 0===u?"rgba(0, 0, 0, 0.3)":u,f=n.lineWidth,h=void 0===f?1:f;t.ctx.beginPath(),t.ctx.setFillStyle(l),t.ctx.fillRect(0,0,c,o),t.ctx.fillRect(c,0,s,a),t.ctx.fillRect(c,a+d,s,o-a-d),t.ctx.fillRect(c+s,0,e-c-s,o),t.ctx.fill(),t.ctx.beginPath(),t.ctx.setStrokeStyle(r),t.ctx.setLineWidth(h),t.ctx.moveTo(c-h,a+10-h),t.ctx.lineTo(c-h,a-h),t.ctx.lineTo(c+10-h,a-h),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.setStrokeStyle(r),t.ctx.setLineWidth(h),t.ctx.moveTo(c-h,a+d-10+h),t.ctx.lineTo(c-h,a+d+h),t.ctx.lineTo(c+10-h,a+d+h),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.setStrokeStyle(r),t.ctx.setLineWidth(h),t.ctx.moveTo(c+s-10+h,a-h),t.ctx.lineTo(c+s+h,a-h),t.ctx.lineTo(c+s+h,a+10-h),t.ctx.stroke(),t.ctx.beginPath(),t.ctx.setStrokeStyle(r),t.ctx.setLineWidth(h),t.ctx.moveTo(c+s+h,a+d-10+h),t.ctx.lineTo(c+s+h,a+d+h),t.ctx.lineTo(c+s-10+h,a+d+h),t.ctx.stroke()}}var y="1.1.4",w=function(){function t(e){a(this,t);var o=this,n={};return c(o,d),Object.keys(d).forEach(function(t){n[t]=d[t].default}),Object.assign(o,n,e),o.prepare(),o.attachPage(),o.createCtx(),o.observer(),o.cutt(),o.methods(),o.init(),o.update(),o}return u(t,[{key:"init",value:function(){var t=this,e=t.src;return t.version=y,"function"===typeof t.onReady&&t.onReady(t.ctx,t),e&&t.pushOrign(e),i(t,!1,!1,!1),t.oldScale=1,t.newScale=1,t}}]),t}();return Object.assign(w.prototype,v),w.prototype.prepare=f,w.prototype.observer=h,w.prototype.methods=p,w.prototype.cutt=b,w.prototype.update=g,w})}).call(this,o("6e42")["default"])},a98c:function(t,e,o){"use strict";o.r(e);var n=o("bb18"),i=o("b402");for(var c in i)"default"!==c&&function(t){o.d(e,t,function(){return i[t]})}(c);o("01dd");var r=o("2877"),a=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=a.exports},b402:function(t,e,o){"use strict";o.r(e);var n=o("c1af"),i=o.n(n);for(var c in n)"default"!==c&&function(t){o.d(e,t,function(){return n[t]})}(c);e["default"]=i.a},bb18:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"content"},[o("view",{staticClass:"cropper-wrapper",staticStyle:{height:"617px"}},[o("canvas",{staticClass:"cropper",style:{width:t.cropperOpt.width,height:t.cropperOpt.height},attrs:{"disable-scroll":"true","canvas-id":"cropper",eventid:"5f0ac9fd-0"},on:{touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}})]),o("view",{staticClass:"cropper-buttons"},[o("view",{staticClass:"upload",attrs:{eventid:"5f0ac9fd-1"},on:{tap:t.uploadTap}},[t._v("Browse Album")]),o("view",{staticClass:"getCropperImage",attrs:{eventid:"5f0ac9fd-2"},on:{tap:t.getCropperImage}},[t._v("Confirm")])])])},i=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return i})},c1af:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("697e"));function i(t){return t&&t.__esModule?t:{default:t}}var c=t.getSystemInfoSync(),r=c.windowWidth,a=c.windowHeight-50;console.log(c);var u={data:function(){return{cropperOpt:{id:"cropper",width:r,height:a,scale:2.5,zoom:8,cut:{x:(r-295)/2,y:(a-413)/2,width:295,height:413}},weCropper:""}},methods:{back:function(){t.redirectTo({url:"../infoDetail/infoDetail"})},touchStart:function(t){this.weCropper.touchStart(t)},touchMove:function(t){this.weCropper.touchMove(t)},touchEnd:function(t){this.weCropper.touchEnd(t)},convertBase64UrlToBlob:function(t,e){for(var o=atob(t.split(",")[1]),n=[],i=0;i<o.length;i++)n.push(o.charCodeAt(i));return new Blob([new Uint8Array(n)],{type:e},{filename:"1111.jpg"})},blobToDataURL:function(t){var e=new FileReader;e.readAsDataURL(t),e.onload=function(t){var e=t.target.result;console.log(e)}},getCropperImage:function(){var e=this.getGlobalUserInfo();if(null!=e&&void 0!=e&&""!=e){var o=this;this.weCropper.getCropperImage(function(n){n?(t.uploadFile({url:o.$serverUrl+"/user/uploadFace?userId="+e.id,filePath:o.cropperOpt.src,name:"file",header:{"content-type":"application/json",userId:e.id,userToken:e.userToken},success:function(e){console.log(e);var n=JSON.parse(e.data);if(t.hideLoading(),200==n.status){t.showToast({title:"Success!",icon:"success"});var i=n.data;o.faceUrl=o.$serverUrl+i}else t.showToast({title:n.msg})}}),t.switchTab({url:"../profile/profile"})):console.log("获取图片失败，请稍后重试")})}else t.navigateTo({url:"../login/login"})},uploadTap:function(){var e=this;t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){var o=t.tempFilePaths[0];e.weCropper.pushOrign(o)}})}},onLoad:function(e){var o=this.cropperOpt,i=e.src;i&&(Object.assign(o,{src:i}),this.weCropper=new n.default(o).on("ready",function(t){}).on("beforeImageLoad",function(e){t.showToast({title:"上传中",icon:"loading",duration:3e3})}).on("imageLoad",function(e){t.hideToast()})),console.log(this.cropperOpt.src)}};e.default=u}).call(this,o("6e42")["default"])},dab6:function(t,e,o){}},[["242a","common/runtime","common/vendor"]]]);
});
require('pages/upload/upload.js');
__wxRoute = 'pages/profileinfo/profileinfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/profileinfo/profileinfo.js';

define('pages/profileinfo/profileinfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/profileinfo/profileinfo"],{"0862":function(t,e,n){"use strict";n.r(e);var a=n("4f1e"),s=n("e67e");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("96e5");var o=n("2877"),c=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"4f1e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"background"},[n("view",{staticClass:"information-card"},[n("view",{staticClass:"title-line"},[n("text",{staticClass:"info-title"},[t._v("Nicke name")]),n("text",{staticClass:"info-title"},[t._v("ID")]),n("text",{staticClass:"info-title"},[t._v("Gender")]),n("text",{staticClass:"info-title"},[t._v("Birthday")]),n("text",{staticClass:"info-title"},[t._v("Prefer")])]),n("view",{staticClass:"content-line"},[n("text",{staticClass:"info-content conteng-space"},[t._v("content")]),n("text",{staticClass:"info-content conteng-space"},[t._v("content")]),n("text",{staticClass:"info-content conteng-space"},[t._v("content")]),n("text",{staticClass:"info-content conteng-space"},[t._v("content")]),n("text",{staticClass:"info-content conteng-space"},[t._v("content")])])])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},"508d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{faceUrl:"../../static/icons/logo.png"}},onLoad:function(){t.setNavigationBarTitle({title:"Profile"})},methods:{changeFaceImage:function(){var e=this;t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(n){var a=n.tempFilePaths;console.log(a),t.showLoading({title:"Uploading..."}),t.uploadFile({url:e.$serverUrl+"/user/uploadFace?userId=tmp-user-id",filePath:a[0],name:"file",success:function(n){var a=JSON.parse(n.data);if(console.log(a.data),t.hideLoading(),200==a.status){t.showToast({title:"Success!",icon:"success"});var s=a.data;e.faceUrl=e.$serverUrl+s}else 500==a.status&&t.showToast({title:a.msg})}})}})}}};e.default=n}).call(this,n("6e42")["default"])},"6fed":function(t,e,n){},"96e5":function(t,e,n){"use strict";var a=n("6fed"),s=n.n(a);s.a},e67e:function(t,e,n){"use strict";n.r(e);var a=n("508d"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=s.a},ee6e:function(t,e,n){"use strict";n("fb50");var a=i(n("b0ce")),s=i(n("0862"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))}},[["ee6e","common/runtime","common/vendor"]]]);
});
require('pages/profileinfo/profileinfo.js');


