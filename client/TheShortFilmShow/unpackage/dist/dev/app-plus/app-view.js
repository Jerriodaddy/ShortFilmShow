var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181221_syb_scopedata*/window.__wcc_version__='v0.5vv_20181221_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
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
Z([3,'5a181cfe'])
Z([3,'_view M5a181cfe container'])
Z([3,'_view M5a181cfe background'])
Z([3,'_view M5a181cfe fud'])
Z([3,'_text M5a181cfe notice'])
Z([3,'Function under development'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5a181cfe'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1792e79a'])
Z([3,'_view M1792e79a body-view'])
Z([3,'_scroll-view M1792e79a top-menu-view'])
Z([[7],[3,'scrollLeft']])
Z([3,'true'])
Z([3,'index'])
Z([3,'menuTabs'])
Z([[7],[3,'menuTabs']])
Z(z[5])
Z([[7],[3,'index']])
Z([3,'handleProxy'])
Z([3,'_view M1792e79a menu-one-view'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'1792e79a-0-'],[[7],[3,'index']]])
Z([[2,'+'],[1,'tabNum'],[[7],[3,'index']]])
Z([a,[3,'_view M1792e79a '],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[[7],[3,'index']]],[1,'menu-one-act'],[1,'menu-one']]]]])
Z([3,'_view M1792e79a menu-one-txt'])
Z([a,[[6],[[7],[3,'menuTabs']],[3,'name']]])
Z([3,'_view M1792e79a menu-one-bottom'])
Z([3,'_view M1792e79a menu-one-bottom-color'])
Z(z[10])
Z([3,'_swiper M1792e79a swiper-box-list'])
Z([[7],[3,'currentTab']])
Z(z[12])
Z([1,'1792e79a-2'])
Z([3,'300'])
Z([3,'index1'])
Z([3,'swiperDate'])
Z([[7],[3,'swiperDateList']])
Z(z[26])
Z([[7],[3,'index1']])
Z([3,'_swiper-item M1792e79a'])
Z(z[10])
Z([3,'_scroll-view M1792e79a swiper-one-list'])
Z(z[12])
Z([[2,'+'],[1,'1792e79a-1-'],[[7],[3,'index1']]])
Z(z[4])
Z([1,true])
Z(z[37])
Z([3,'_swiper M1792e79a swiper'])
Z([1,500])
Z([[7],[3,'black']])
Z([[7],[3,'white']])
Z(z[37])
Z([1,3000])
Z(z[31])
Z([3,'_navigator M1792e79a'])
Z([3,'../videoplay1/videoplay1'])
Z([3,'_image M1792e79a slideimage'])
Z([3,'../../static/assets/Andrea Facheris.jpg'])
Z(z[31])
Z(z[46])
Z([3,'../videoplay2/videoplay2'])
Z(z[48])
Z([3,'../../static/assets/Sunnie Du.jpg'])
Z(z[31])
Z(z[46])
Z([3,'../videoplay3/videoplay3'])
Z(z[48])
Z([3,'../../static/assets/Matt Bowron.jpg'])
Z([3,'_view M1792e79a filmsarea'])
Z([3,'_view M1792e79a oneline'])
Z([3,'_view M1792e79a title'])
Z([3,'Most popular movies'])
Z([3,'_view M1792e79a filmsline'])
Z([3,'_view M1792e79a film'])
Z(z[46])
Z(z[47])
Z([3,'_image M1792e79a filmpic'])
Z(z[49])
Z([3,'_text M1792e79a filmname'])
Z([3,'Vendetta (ven·dét·ta)'])
Z(z[65])
Z(z[46])
Z(z[52])
Z(z[68])
Z(z[54])
Z(z[70])
Z([3,'Newbeginning'])
Z(z[65])
Z(z[46])
Z(z[57])
Z(z[68])
Z(z[59])
Z(z[70])
Z([3,'Magic Lee'])
Z(z[61])
Z(z[62])
Z([3,'More Movies'])
Z(z[64])
Z(z[65])
Z(z[46])
Z([3,'../videoplay4/videoplay4'])
Z(z[68])
Z([3,'../../static/assets/Under the Parasol UTP_MASTER_GENERAL.jpg'])
Z(z[70])
Z([3,'Under the Parasol UTP_MASTER_GENERAL'])
Z(z[65])
Z(z[46])
Z([3,'../videoplay5/videoplay5'])
Z(z[68])
Z([3,'../../static/assets/STUDIO-A138.jpg'])
Z(z[70])
Z([3,'Stalled1-31-18'])
Z(z[65])
Z(z[46])
Z([3,'../videoplay6/videoplay6'])
Z(z[68])
Z([3,'../../static/assets/Tom%20Eastwood.jpg'])
Z(z[70])
Z([3,'The String 60 seconds'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1792e79a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'f16879e2'])
Z([3,'_view Mf16879e2 container'])
Z([3,'_view Mf16879e2 card1'])
Z([3,'_navigator Mf16879e2 rec'])
Z([3,'../videoplay1/videoplay1'])
Z([3,'handleProxy'])
Z([3,'_video Mf16879e2 play-video'])
Z([[7],[3,'$k']])
Z([1,'f16879e2-0'])
Z([3,'5285890787780845965'])
Z([3,'http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd4a1c45285890787780845965/GtCUUl8lkqIA.mp4'])
Z([3,'_text Mf16879e2 cardtitle'])
Z([3,'Vendetta (ven·dét·ta)'])
Z([3,'_view Mf16879e2 directorid'])
Z([3,'_view Mf16879e2 nickname'])
Z([3,'_image Mf16879e2 namepic'])
Z([3,'../../static/icons/logo.png'])
Z([3,'_text Mf16879e2 namew'])
Z([3,'#Name'])
Z([3,'_view Mf16879e2 follow'])
Z([3,'_button Mf16879e2 btn'])
Z([3,'Follow'])
Z([3,'_view Mf16879e2 action'])
Z([3,'_image Mf16879e2 comment'])
Z([3,'../../static/icons/comment.png'])
Z([3,'_image Mf16879e2 like'])
Z([3,'../../static/icons/like.png'])
Z([3,'_image Mf16879e2 more'])
Z([3,'../../static/icons/more.png'])
Z([3,'_view Mf16879e2 card2'])
Z(z[3])
Z([3,'../videoplay2/videoplay2'])
Z(z[5])
Z(z[6])
Z(z[7])
Z([1,'f16879e2-1'])
Z([3,'Newbeginnig'])
Z([3,'http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd48c5b5285890787780845452/0OKOPIAaH4oA.mp4'])
Z(z[11])
Z([3,'Newbeginnig'])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[3])
Z([3,'../videoplay3/videoplay3'])
Z(z[5])
Z(z[6])
Z(z[7])
Z([1,'f16879e2-2'])
Z([3,'Magic Lee - Clean Version'])
Z([3,'http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/f99283fa5285890787780757053/OejgkLtvjuoA.mp4'])
Z(z[11])
Z([3,'Magic Lee - Clean Version'])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
Z(z[29])
Z(z[3])
Z([3,'../videoplay/videoplay'])
Z(z[5])
Z(z[6])
Z(z[7])
Z([1,'f16879e2-3'])
Z([3,'myVideo'])
Z([3,'static/assets/sample2.mp4'])
Z(z[11])
Z([3,'#Titletitletitletitletitle'])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z(z[28])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'f16879e2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'68d50a72'])
Z([3,'_view M68d50a72 lg-back'])
Z([3,'_view M68d50a72 picture'])
Z([3,'_image M68d50a72 logo'])
Z([3,'../../static/assets/logo3.png'])
Z([3,'formReset'])
Z([3,'formSubmit'])
Z([3,'_form M68d50a72'])
Z([3,'_view M68d50a72 itemView'])
Z([3,'handleProxy'])
Z([3,'_input M68d50a72 input'])
Z([[7],[3,'$k']])
Z([1,'68d50a72-0'])
Z([3,'username'])
Z([3,'Username'])
Z([[7],[3,'account']])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z([1,'68d50a72-1'])
Z([3,'password'])
Z([3,'Password'])
Z([[7],[3,'password']])
Z([3,'_view M68d50a72 btn-row'])
Z(z[9])
Z([3,'_button M68d50a72 primary'])
Z(z[11])
Z([1,'68d50a72-2'])
Z([3,'primary'])
Z([3,'Login'])
Z([3,'_view M68d50a72 action-row'])
Z([3,'_navigator M68d50a72 Reg'])
Z([3,'../register/register'])
Z([3,'Register'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'68d50a72'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'afefed1a'])
Z([3,'_view Mafefed1a'])
Z([3,'_image Mafefed1a test1'])
Z([3,'../../static/assets/logo-empty.png'])
Z(z[2])
Z([3,'../../static/assets/wheel.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'afefed1a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'57d6fec7'])
Z([3,'_view M57d6fec7 background'])
Z([3,'_view M57d6fec7 picbox'])
Z([3,'_navigator M57d6fec7'])
Z([3,'../login/login'])
Z([3,'_image M57d6fec7 profilepic'])
Z([3,'../../static/icons/logo.png'])
Z([3,'_text M57d6fec7 change'])
Z([3,'change picture'])
Z([3,'_view M57d6fec7 information-card'])
Z([3,'_view M57d6fec7 title-line'])
Z([3,'_text M57d6fec7 info-title'])
Z([3,'Nicke name'])
Z(z[11])
Z([3,'ID'])
Z(z[11])
Z([3,'Gender'])
Z(z[11])
Z([3,'Birthday'])
Z(z[11])
Z([3,'Prefer'])
Z([3,'_view M57d6fec7 content-line'])
Z([3,'_text M57d6fec7 info-content conteng-space'])
Z([3,'content'])
Z(z[22])
Z(z[23])
Z(z[22])
Z(z[23])
Z(z[22])
Z(z[23])
Z(z[22])
Z(z[23])
Z([3,'_view M57d6fec7 edit-button'])
Z([3,'_text M57d6fec7 edit-text'])
Z([3,'Edit'])
Z([3,'_view M57d6fec7 film-upload'])
Z(z[3])
Z([3,'../videosearch/videosearch'])
Z([3,'_text M57d6fec7 film-upload-text'])
Z([3,'Film upload'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'57d6fec7'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ea0c81da'])
Z([3,'_view Mea0c81da Reg-back'])
Z([3,'_view Mea0c81da picture'])
Z([3,'_image Mea0c81da logo'])
Z([3,'../../static/assets/logo3.png'])
Z([3,'formReset'])
Z([3,'formSubmit'])
Z([3,'_form Mea0c81da'])
Z([3,'_view Mea0c81da itemView'])
Z([3,'handleProxy'])
Z([3,'_input Mea0c81da input'])
Z([[7],[3,'$k']])
Z([1,'ea0c81da-0'])
Z([3,'username'])
Z([3,'Email'])
Z([[7],[3,'email']])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z([1,'ea0c81da-1'])
Z(z[13])
Z([3,'Username'])
Z([[7],[3,'account']])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z([1,'ea0c81da-2'])
Z([3,'password'])
Z([3,'Password'])
Z([[7],[3,'password']])
Z([3,'_view Mea0c81da btn-row'])
Z(z[9])
Z([3,'_button Mea0c81da primary'])
Z(z[11])
Z([1,'ea0c81da-3'])
Z([3,'primary'])
Z([3,'Complete'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'ea0c81da'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'9754b69a'])
Z([3,'_view M9754b69a VP-back'])
Z([3,'_view M9754b69a VP-screen'])
Z([3,'_view M9754b69a screen'])
Z([3,'handleProxy'])
Z([3,'_video M9754b69a play-video'])
Z([[7],[3,'$k']])
Z([1,'9754b69a-0'])
Z([3,'Vendetta (ven·dét·ta)'])
Z([3,'http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd4a1c45285890787780845965/GtCUUl8lkqIA.mp4'])
Z([3,'_view M9754b69a control_interface'])
Z([3,'_scroll-view M9754b69a top-menu-view'])
Z([[7],[3,'scrollLeft']])
Z([3,'true'])
Z([3,'index'])
Z([3,'menuTabs'])
Z([[7],[3,'menuTabs']])
Z(z[14])
Z([[7],[3,'index']])
Z(z[4])
Z([3,'_view M9754b69a menu-one-view'])
Z(z[6])
Z([[2,'+'],[1,'9754b69a-1-'],[[7],[3,'index']]])
Z([[2,'+'],[1,'tabNum'],[[7],[3,'index']]])
Z([a,[3,'_view M9754b69a '],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[[7],[3,'index']]],[1,'menu-one-act'],[1,'menu-one']]]]])
Z([3,'_view M9754b69a menu-one-txt'])
Z([a,[[6],[[7],[3,'menuTabs']],[3,'name']]])
Z([3,'_view M9754b69a menu-one-bottom'])
Z([3,'_view M9754b69a menu-one-bottom-color'])
Z(z[4])
Z([3,'_swiper M9754b69a swiper-box-list'])
Z([[7],[3,'currentTab']])
Z(z[6])
Z([1,'9754b69a-4'])
Z([3,'300'])
Z([3,'index1'])
Z([3,'swiperDate'])
Z([[7],[3,'swiperDateList']])
Z(z[35])
Z([[7],[3,'index1']])
Z([3,'_swiper-item M9754b69a'])
Z(z[4])
Z([3,'_scroll-view M9754b69a swiper-one-list'])
Z(z[6])
Z([[2,'+'],[1,'9754b69a-2-'],[[7],[3,'index1']]])
Z(z[13])
Z([3,'_view M9754b69a video-info-card'])
Z([3,'_view M9754b69a video-pic-box'])
Z([3,'_image M9754b69a video-pic-set'])
Z([3,'../../static/assets/images2.jpg'])
Z([3,'_view M9754b69a video-info-box'])
Z([3,'_text M9754b69a filmname'])
Z([3,'Vendetta (ven·dét·ta)'])
Z([3,'_view M9754b69a actors'])
Z([3,'_text M9754b69a actor-name'])
Z([3,'Film Maker:'])
Z(z[54])
Z([3,'Andrea Facheris'])
Z([3,'_text M9754b69a filmintro'])
Z(z[40])
Z(z[4])
Z(z[42])
Z(z[6])
Z([[2,'+'],[1,'9754b69a-3-'],[[7],[3,'index1']]])
Z(z[13])
Z([3,'_view M9754b69a new_comment hor_center'])
Z([3,'_text M9754b69a latest_comment hor_center'])
Z([3,'Latest comment'])
Z([3,'_view M9754b69a border_line'])
Z([3,'_view M9754b69a videocomment'])
Z([3,'_view M9754b69a user_info'])
Z([3,'_image M9754b69a comment_profile_pic'])
Z([3,'../../static/icons/logo.png'])
Z([3,'_view M9754b69a user_info_name'])
Z([3,'_text M9754b69a user_info_name_text'])
Z([3,'Guetta'])
Z([3,'_view M9754b69a comment_box'])
Z([3,'_view M9754b69a time'])
Z([3,'_text M9754b69a time_text'])
Z([3,'22-06-2019'])
Z([3,'_view M9754b69a content_box'])
Z([3,'_text M9754b69a content_text'])
Z([3,'The magical war has gradually entered a climax.'])
Z([3,'_view M9754b69a text_i'])
Z([3,'_view M9754b69a comment_show super_center'])
Z([3,'Show more'])
Z(z[68])
Z(z[69])
Z(z[70])
Z(z[71])
Z(z[72])
Z(z[73])
Z(z[74])
Z(z[75])
Z(z[76])
Z(z[77])
Z(z[78])
Z([3,'2-06-2019'])
Z(z[80])
Z(z[81])
Z([3,'This film is really nice and I almost remember everything in this film.'])
Z(z[83])
Z(z[84])
Z(z[85])
Z(z[68])
Z(z[69])
Z(z[70])
Z(z[71])
Z(z[72])
Z(z[73])
Z(z[74])
Z(z[75])
Z(z[76])
Z(z[77])
Z(z[78])
Z([3,'17-09-2018'])
Z(z[80])
Z(z[81])
Z([3,'I really like the actors in this film. For their really nice outlook and their suits. It\x27s really cool.'])
Z(z[83])
Z(z[84])
Z(z[85])
Z(z[68])
Z([3,'_view M9754b69a V-com-area'])
Z([3,'_view M9754b69a com-write'])
Z([3,'_input M9754b69a input'])
Z([3,'comment'])
Z([3,'Write some comment?'])
Z([3,'_view M9754b69a'])
Z([3,'_image M9754b69a like_button'])
Z([3,'aspectFit'])
Z([3,'../../static/icons/like2.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'9754b69a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'87f16bda'])
Z([3,'_view M87f16bda VP-back'])
Z([3,'_view M87f16bda VP-screen'])
Z([3,'_view M87f16bda screen'])
Z([3,'handleProxy'])
Z([3,'_video M87f16bda play-video'])
Z([[7],[3,'$k']])
Z([1,'87f16bda-0'])
Z([3,'Newbeginnig'])
Z([3,'http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd48c5b5285890787780845452/0OKOPIAaH4oA.mp4'])
Z([3,'_scroll-view M87f16bda top-menu-view'])
Z([[7],[3,'scrollLeft']])
Z([3,'true'])
Z([3,'index'])
Z([3,'menuTabs'])
Z([[7],[3,'menuTabs']])
Z(z[13])
Z([[7],[3,'index']])
Z(z[4])
Z([3,'_view M87f16bda menu-one-view'])
Z(z[6])
Z([[2,'+'],[1,'87f16bda-1-'],[[7],[3,'index']]])
Z([[2,'+'],[1,'tabNum'],[[7],[3,'index']]])
Z([a,[3,'_view M87f16bda '],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[[7],[3,'index']]],[1,'menu-one-act'],[1,'menu-one']]]]])
Z([3,'_view M87f16bda menu-one-txt'])
Z([a,[[6],[[7],[3,'menuTabs']],[3,'name']]])
Z([3,'_view M87f16bda menu-one-bottom'])
Z([3,'_view M87f16bda menu-one-bottom-color'])
Z(z[4])
Z([3,'_swiper M87f16bda swiper-box-list'])
Z([[7],[3,'currentTab']])
Z(z[6])
Z([1,'87f16bda-3'])
Z([3,'300'])
Z([3,'index1'])
Z([3,'swiperDate'])
Z([[7],[3,'swiperDateList']])
Z(z[34])
Z([[7],[3,'index1']])
Z([3,'_swiper-item M87f16bda'])
Z(z[4])
Z([3,'_scroll-view M87f16bda swiper-one-list'])
Z(z[6])
Z([[2,'+'],[1,'87f16bda-2-'],[[7],[3,'index1']]])
Z(z[12])
Z([3,'_view M87f16bda video-info-card'])
Z([3,'_view M87f16bda video-pic-box'])
Z([3,'_image M87f16bda video-pic-set'])
Z([3,'../../static/assets/Sunnie Du.jpg'])
Z([3,'_view M87f16bda video-info-box'])
Z([3,'_text M87f16bda filmname'])
Z([3,'Newbeginnig'])
Z([3,'_view M87f16bda actors'])
Z([3,'_text M87f16bda actor-name'])
Z([3,'Film Maker:'])
Z(z[53])
Z([3,'Sunnie Du'])
Z([3,'_text M87f16bda filmintro'])
Z([3,'_view M87f16bda V-com-area'])
Z([3,'_view M87f16bda com-write'])
Z([3,'_input M87f16bda input'])
Z([3,'comment'])
Z([3,'Write some comment?'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'87f16bda'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'788e211a'])
Z([3,'_view M788e211a VP-back'])
Z([3,'_view M788e211a VP-screen'])
Z([3,'_view M788e211a screen'])
Z([3,'handleProxy'])
Z([3,'_video M788e211a play-video'])
Z([[7],[3,'$k']])
Z([1,'788e211a-0'])
Z([3,'Magic Lee - Clean Version'])
Z([3,'http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/f99283fa5285890787780757053/OejgkLtvjuoA.mp4'])
Z([3,'_scroll-view M788e211a top-menu-view'])
Z([[7],[3,'scrollLeft']])
Z([3,'true'])
Z([3,'index'])
Z([3,'menuTabs'])
Z([[7],[3,'menuTabs']])
Z(z[13])
Z([[7],[3,'index']])
Z(z[4])
Z([3,'_view M788e211a menu-one-view'])
Z(z[6])
Z([[2,'+'],[1,'788e211a-1-'],[[7],[3,'index']]])
Z([[2,'+'],[1,'tabNum'],[[7],[3,'index']]])
Z([a,[3,'_view M788e211a '],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[[7],[3,'index']]],[1,'menu-one-act'],[1,'menu-one']]]]])
Z([3,'_view M788e211a menu-one-txt'])
Z([a,[[6],[[7],[3,'menuTabs']],[3,'name']]])
Z([3,'_view M788e211a menu-one-bottom'])
Z([3,'_view M788e211a menu-one-bottom-color'])
Z(z[4])
Z([3,'_swiper M788e211a swiper-box-list'])
Z([[7],[3,'currentTab']])
Z(z[6])
Z([1,'788e211a-3'])
Z([3,'300'])
Z([3,'index1'])
Z([3,'swiperDate'])
Z([[7],[3,'swiperDateList']])
Z(z[34])
Z([[7],[3,'index1']])
Z([3,'_swiper-item M788e211a'])
Z(z[4])
Z([3,'_scroll-view M788e211a swiper-one-list'])
Z(z[6])
Z([[2,'+'],[1,'788e211a-2-'],[[7],[3,'index1']]])
Z(z[12])
Z([3,'_view M788e211a video-info-card'])
Z([3,'_view M788e211a video-pic-box'])
Z([3,'_image M788e211a video-pic-set'])
Z([3,'../../static/assets/Matt Bowron.jpg'])
Z([3,'_view M788e211a video-info-box'])
Z([3,'_text M788e211a filmname'])
Z([3,'Magic Lee - Clean Version'])
Z([3,'_view M788e211a actors'])
Z([3,'_text M788e211a actor-name'])
Z([3,'Film Maker:'])
Z(z[53])
Z([3,'Matt Bowron'])
Z([3,'_text M788e211a filmintro'])
Z([3,'_view M788e211a V-com-area'])
Z([3,'_view M788e211a com-write'])
Z([3,'_input M788e211a input'])
Z([3,'comment'])
Z([3,'Write some comment?'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'788e211a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'692ad65a'])
Z([3,'_view M692ad65a VP-back'])
Z([3,'_view M692ad65a VP-screen'])
Z([3,'_view M692ad65a screen'])
Z([3,'handleProxy'])
Z([3,'_video M692ad65a play-video'])
Z([[7],[3,'$k']])
Z([1,'692ad65a-0'])
Z([3,'Under the Parasol UTP_MASTER_GENERAL'])
Z([3,'http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/9e54270c5285890787789099846/UOPICa0uldAA.mp4'])
Z([3,'_scroll-view M692ad65a top-menu-view'])
Z([[7],[3,'scrollLeft']])
Z([3,'true'])
Z([3,'index'])
Z([3,'menuTabs'])
Z([[7],[3,'menuTabs']])
Z(z[13])
Z([[7],[3,'index']])
Z(z[4])
Z([3,'_view M692ad65a menu-one-view'])
Z(z[6])
Z([[2,'+'],[1,'692ad65a-1-'],[[7],[3,'index']]])
Z([[2,'+'],[1,'tabNum'],[[7],[3,'index']]])
Z([a,[3,'_view M692ad65a '],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[[7],[3,'index']]],[1,'menu-one-act'],[1,'menu-one']]]]])
Z([3,'_view M692ad65a menu-one-txt'])
Z([a,[[6],[[7],[3,'menuTabs']],[3,'name']]])
Z([3,'_view M692ad65a menu-one-bottom'])
Z([3,'_view M692ad65a menu-one-bottom-color'])
Z(z[4])
Z([3,'_swiper M692ad65a swiper-box-list'])
Z([[7],[3,'currentTab']])
Z(z[6])
Z([1,'692ad65a-3'])
Z([3,'300'])
Z([3,'index1'])
Z([3,'swiperDate'])
Z([[7],[3,'swiperDateList']])
Z(z[34])
Z([[7],[3,'index1']])
Z([3,'_swiper-item M692ad65a'])
Z(z[4])
Z([3,'_scroll-view M692ad65a swiper-one-list'])
Z(z[6])
Z([[2,'+'],[1,'692ad65a-2-'],[[7],[3,'index1']]])
Z(z[12])
Z([3,'_view M692ad65a video-info-card'])
Z([3,'_view M692ad65a video-pic-box'])
Z([3,'_image M692ad65a video-pic-set'])
Z([3,'../../static/assets/Under the Parasol UTP_MASTER_GENERAL.jpg'])
Z([3,'_view M692ad65a video-info-box'])
Z([3,'_text M692ad65a filmname'])
Z([3,'Under the Parasol UTP_MASTER_GENERAL'])
Z([3,'_view M692ad65a actors'])
Z([3,'_text M692ad65a actor-name'])
Z([3,'Film Maker:'])
Z(z[53])
Z(z[51])
Z([3,'_text M692ad65a filmintro'])
Z([3,'_view M692ad65a V-com-area'])
Z([3,'_view M692ad65a com-write'])
Z([3,'_input M692ad65a input'])
Z([3,'comment'])
Z([3,'Write some comment?'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'692ad65a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'59c78b9a'])
Z([3,'_view M59c78b9a VP-back'])
Z([3,'_view M59c78b9a VP-screen'])
Z([3,'_view M59c78b9a screen'])
Z([3,'handleProxy'])
Z([3,'_video M59c78b9a play-video'])
Z([[7],[3,'$k']])
Z([1,'59c78b9a-0'])
Z([3,'Stalled1-31-18'])
Z([3,'http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/6621f12e5285890787788969186/agxOba4LvGUA.mp4'])
Z([3,'_scroll-view M59c78b9a top-menu-view'])
Z([[7],[3,'scrollLeft']])
Z([3,'true'])
Z([3,'index'])
Z([3,'menuTabs'])
Z([[7],[3,'menuTabs']])
Z(z[13])
Z([[7],[3,'index']])
Z(z[4])
Z([3,'_view M59c78b9a menu-one-view'])
Z(z[6])
Z([[2,'+'],[1,'59c78b9a-1-'],[[7],[3,'index']]])
Z([[2,'+'],[1,'tabNum'],[[7],[3,'index']]])
Z([a,[3,'_view M59c78b9a '],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[[7],[3,'index']]],[1,'menu-one-act'],[1,'menu-one']]]]])
Z([3,'_view M59c78b9a menu-one-txt'])
Z([a,[[6],[[7],[3,'menuTabs']],[3,'name']]])
Z([3,'_view M59c78b9a menu-one-bottom'])
Z([3,'_view M59c78b9a menu-one-bottom-color'])
Z(z[4])
Z([3,'_swiper M59c78b9a swiper-box-list'])
Z([[7],[3,'currentTab']])
Z(z[6])
Z([1,'59c78b9a-3'])
Z([3,'300'])
Z([3,'index1'])
Z([3,'swiperDate'])
Z([[7],[3,'swiperDateList']])
Z(z[34])
Z([[7],[3,'index1']])
Z([3,'_swiper-item M59c78b9a'])
Z(z[4])
Z([3,'_scroll-view M59c78b9a swiper-one-list'])
Z(z[6])
Z([[2,'+'],[1,'59c78b9a-2-'],[[7],[3,'index1']]])
Z(z[12])
Z([3,'_view M59c78b9a video-info-card'])
Z([3,'_view M59c78b9a video-pic-box'])
Z([3,'_image M59c78b9a video-pic-set'])
Z([3,'../../static/assets/STUDIO-A138.jpg'])
Z([3,'_view M59c78b9a video-info-box'])
Z([3,'_text M59c78b9a filmname'])
Z([3,'Stalled1-31-18'])
Z([3,'_view M59c78b9a actors'])
Z([3,'_text M59c78b9a actor-name'])
Z([3,'Film Maker:'])
Z(z[53])
Z([3,'STUDIO-A138'])
Z([3,'_text M59c78b9a filmintro'])
Z([3,'_view M59c78b9a V-com-area'])
Z([3,'_view M59c78b9a com-write'])
Z([3,'_input M59c78b9a input'])
Z([3,'comment'])
Z([3,'Write some comment?'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'59c78b9a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'4a6440da'])
Z([3,'_view M4a6440da VP-back'])
Z([3,'_view M4a6440da VP-screen'])
Z([3,'_view M4a6440da screen'])
Z([3,'handleProxy'])
Z([3,'_video M4a6440da play-video'])
Z([[7],[3,'$k']])
Z([1,'4a6440da-0'])
Z([3,'The String 60 seconds'])
Z([3,'http://1258775435.vod2.myqcloud.com/fbfcb119vodtranscq1258775435/9e2ff6285285890787789079853/v.f20.mp4'])
Z([3,'_scroll-view M4a6440da top-menu-view'])
Z([[7],[3,'scrollLeft']])
Z([3,'true'])
Z([3,'index'])
Z([3,'menuTabs'])
Z([[7],[3,'menuTabs']])
Z(z[13])
Z([[7],[3,'index']])
Z(z[4])
Z([3,'_view M4a6440da menu-one-view'])
Z(z[6])
Z([[2,'+'],[1,'4a6440da-1-'],[[7],[3,'index']]])
Z([[2,'+'],[1,'tabNum'],[[7],[3,'index']]])
Z([a,[3,'_view M4a6440da '],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[[7],[3,'index']]],[1,'menu-one-act'],[1,'menu-one']]]]])
Z([3,'_view M4a6440da menu-one-txt'])
Z([a,[[6],[[7],[3,'menuTabs']],[3,'name']]])
Z([3,'_view M4a6440da menu-one-bottom'])
Z([3,'_view M4a6440da menu-one-bottom-color'])
Z(z[4])
Z([3,'_swiper M4a6440da swiper-box-list'])
Z([[7],[3,'currentTab']])
Z(z[6])
Z([1,'4a6440da-3'])
Z([3,'300'])
Z([3,'index1'])
Z([3,'swiperDate'])
Z([[7],[3,'swiperDateList']])
Z(z[34])
Z([[7],[3,'index1']])
Z([3,'_swiper-item M4a6440da'])
Z(z[4])
Z([3,'_scroll-view M4a6440da swiper-one-list'])
Z(z[6])
Z([[2,'+'],[1,'4a6440da-2-'],[[7],[3,'index1']]])
Z(z[12])
Z([3,'_view M4a6440da video-info-card'])
Z([3,'_view M4a6440da video-pic-box'])
Z([3,'_image M4a6440da video-pic-set'])
Z([3,'../../static/assets/Tom Eastwood.jpg'])
Z([3,'_view M4a6440da video-info-box'])
Z([3,'_text M4a6440da filmname'])
Z([3,'The String 60 seconds'])
Z([3,'_view M4a6440da actors'])
Z([3,'_text M4a6440da actor-name'])
Z([3,'Film Maker:'])
Z(z[53])
Z([3,'Tom Eastwood'])
Z([3,'_text M4a6440da filmintro'])
Z([3,'_view M4a6440da V-com-area'])
Z([3,'_view M4a6440da com-write'])
Z([3,'_input M4a6440da input'])
Z([3,'comment'])
Z([3,'Write some comment?'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'4a6440da'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'38ff273b'])
Z([3,'_view M38ff273b'])
Z([3,'_view M38ff273b video-name'])
Z([3,'_view M38ff273b section title'])
Z([3,'Viedo name'])
Z([3,'handleProxy'])
Z([3,'_input M38ff273b name'])
Z([[7],[3,'$k']])
Z([1,'38ff273b-0'])
Z([3,'please enter video name:'])
Z([[7],[3,'inputClearValue']])
Z([[7],[3,'showClearIcon']])
Z(z[5])
Z([3,'_view M38ff273b uni-icon uni-icon-clear'])
Z(z[7])
Z([1,'38ff273b-1'])
Z([3,'_view M38ff273b video-discription'])
Z(z[3])
Z([3,'Video discription'])
Z(z[5])
Z([3,'_input M38ff273b discription'])
Z(z[7])
Z([1,'38ff273b-2'])
Z([3,' please enter video discription'])
Z(z[10])
Z(z[11])
Z(z[5])
Z(z[13])
Z(z[7])
Z([1,'38ff273b-3'])
Z([3,'_view M38ff273b Choose-class'])
Z([3,'_view M38ff273b uni-title uni-common-pl'])
Z([3,'video classification'])
Z([3,'_view M38ff273b list-cell'])
Z([3,'_view M38ff273b list-cell-left'])
Z([3,'class'])
Z([3,'_view M38ff273b list-cell-picker'])
Z(z[5])
Z([3,'_picker M38ff273b'])
Z(z[7])
Z([1,'38ff273b-4'])
Z([[7],[3,'array']])
Z([[7],[3,'index']])
Z([3,'_view M38ff273b uni-input'])
Z([a,[[6],[[7],[3,'array']],[[7],[3,'index']]]])
Z([3,'_view M38ff273b locate-directory'])
Z([3,'_view M38ff273b path'])
Z([a,[[7],[3,'path']]])
Z(z[5])
Z([3,'_button M38ff273b'])
Z(z[7])
Z([1,'38ff273b-5'])
Z([3,'true'])
Z([3,'primary'])
Z([3,'press me to locate'])
Z(z[1])
Z(z[5])
Z(z[49])
Z(z[7])
Z([1,'38ff273b-6'])
Z(z[53])
Z([3,'页upload'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'38ff273b'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./common/slots.wxml','./pages/Swiper-detail/Swiper-detail.vue.wxml','./pages/Swiper-detail/Swiper-detail.wxml','./Swiper-detail.vue.wxml','./pages/classify/classify.vue.wxml','./pages/classify/classify.wxml','./classify.vue.wxml','./pages/hot/hot.vue.wxml','./pages/hot/hot.wxml','./hot.vue.wxml','./pages/login/login.vue.wxml','./pages/login/login.wxml','./login.vue.wxml','./pages/open/open.vue.wxml','./pages/open/open.wxml','./open.vue.wxml','./pages/profile/profile.vue.wxml','./pages/profile/profile.wxml','./profile.vue.wxml','./pages/register/register.vue.wxml','./pages/register/register.wxml','./register.vue.wxml','./pages/videoplay1/videoplay1.vue.wxml','./pages/videoplay1/videoplay1.wxml','./videoplay1.vue.wxml','./pages/videoplay2/videoplay2.vue.wxml','./pages/videoplay2/videoplay2.wxml','./videoplay2.vue.wxml','./pages/videoplay3/videoplay3.vue.wxml','./pages/videoplay3/videoplay3.wxml','./videoplay3.vue.wxml','./pages/videoplay4/videoplay4.vue.wxml','./pages/videoplay4/videoplay4.wxml','./videoplay4.vue.wxml','./pages/videoplay5/videoplay5.vue.wxml','./pages/videoplay5/videoplay5.wxml','./videoplay5.vue.wxml','./pages/videoplay6/videoplay6.vue.wxml','./pages/videoplay6/videoplay6.wxml','./videoplay6.vue.wxml','./pages/videosearch/videosearch.vue.wxml','./pages/videosearch/videosearch.wxml','./videosearch.vue.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["5a181cfe"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':5a181cfe'
r.wxVkey=b
gg.f=$gdc(f_["./pages/Swiper-detail/Swiper-detail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_n('text')
_rz(z,fE,'class',4,e,s,gg)
var cF=_oz(z,5,e,s,gg)
_(fE,cF)
_(oD,fE)
_(xC,oD)
_(oB,xC)
_(r,oB)
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
d_[x[4]]["1792e79a"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[4]+':1792e79a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/classify/classify.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_mz(z,'scroll-view',['class',2,'scrollLeft',1,'scrollX',2],[],e,s,gg)
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_mz(z,'view',['bindtap',10,'class',1,'data-comkey',2,'data-eventid',3,'id',4],[],hG,cF,gg)
var lK=_n('view')
_rz(z,lK,'class',15,hG,cF,gg)
var aL=_n('view')
_rz(z,aL,'class',16,hG,cF,gg)
var tM=_oz(z,17,hG,cF,gg)
_(aL,tM)
_(lK,aL)
var eN=_n('view')
_rz(z,eN,'class',18,hG,cF,gg)
var bO=_n('view')
_rz(z,bO,'class',19,hG,cF,gg)
_(eN,bO)
_(lK,eN)
_(oJ,lK)
_(oH,oJ)
return oH
}
oD.wxXCkey=2
_2z(z,7,fE,e,s,gg,oD,'menuTabs','index','index')
_(oB,xC)
var oP=_mz(z,'swiper',['bindchange',20,'class',1,'current',2,'data-comkey',3,'data-eventid',4,'duration',5],[],e,s,gg)
var xQ=_v()
_(oP,xQ)
var oR=function(cT,fS,hU,gg){
var cW=_n('swiper-item')
_rz(z,cW,'class',31,cT,fS,gg)
var oX=_mz(z,'scroll-view',['bindscrolltolower',32,'class',1,'data-comkey',2,'data-eventid',3,'scrollY',4],[],cT,fS,gg)
var lY=_mz(z,'swiper',['autoplay',37,'circular',1,'class',2,'duration',3,'indicatorActiveColor',4,'indicatorColor',5,'indicatorDots',6,'interval',7],[],cT,fS,gg)
var aZ=_n('swiper-item')
_rz(z,aZ,'class',45,cT,fS,gg)
var t1=_mz(z,'navigator',['class',46,'url',1],[],cT,fS,gg)
var e2=_mz(z,'image',['mode',-1,'class',48,'src',1],[],cT,fS,gg)
_(t1,e2)
_(aZ,t1)
_(lY,aZ)
var b3=_n('swiper-item')
_rz(z,b3,'class',50,cT,fS,gg)
var o4=_mz(z,'navigator',['class',51,'url',1],[],cT,fS,gg)
var x5=_mz(z,'image',['mode',-1,'class',53,'src',1],[],cT,fS,gg)
_(o4,x5)
_(b3,o4)
_(lY,b3)
var o6=_n('swiper-item')
_rz(z,o6,'class',55,cT,fS,gg)
var f7=_mz(z,'navigator',['class',56,'url',1],[],cT,fS,gg)
var c8=_mz(z,'image',['mode',-1,'class',58,'src',1],[],cT,fS,gg)
_(f7,c8)
_(o6,f7)
_(lY,o6)
_(oX,lY)
var h9=_n('view')
_rz(z,h9,'class',60,cT,fS,gg)
var o0=_n('view')
_rz(z,o0,'class',61,cT,fS,gg)
var cAB=_n('view')
_rz(z,cAB,'class',62,cT,fS,gg)
var oBB=_oz(z,63,cT,fS,gg)
_(cAB,oBB)
_(o0,cAB)
var lCB=_n('view')
_rz(z,lCB,'class',64,cT,fS,gg)
var aDB=_n('view')
_rz(z,aDB,'class',65,cT,fS,gg)
var tEB=_mz(z,'navigator',['class',66,'url',1],[],cT,fS,gg)
var eFB=_mz(z,'image',['mode',-1,'class',68,'src',1],[],cT,fS,gg)
_(tEB,eFB)
var bGB=_n('text')
_rz(z,bGB,'class',70,cT,fS,gg)
var oHB=_oz(z,71,cT,fS,gg)
_(bGB,oHB)
_(tEB,bGB)
_(aDB,tEB)
_(lCB,aDB)
var xIB=_n('view')
_rz(z,xIB,'class',72,cT,fS,gg)
var oJB=_mz(z,'navigator',['class',73,'url',1],[],cT,fS,gg)
var fKB=_mz(z,'image',['mode',-1,'class',75,'src',1],[],cT,fS,gg)
_(oJB,fKB)
var cLB=_n('text')
_rz(z,cLB,'class',77,cT,fS,gg)
var hMB=_oz(z,78,cT,fS,gg)
_(cLB,hMB)
_(oJB,cLB)
_(xIB,oJB)
_(lCB,xIB)
var oNB=_n('view')
_rz(z,oNB,'class',79,cT,fS,gg)
var cOB=_mz(z,'navigator',['class',80,'url',1],[],cT,fS,gg)
var oPB=_mz(z,'image',['mode',-1,'class',82,'src',1],[],cT,fS,gg)
_(cOB,oPB)
var lQB=_n('text')
_rz(z,lQB,'class',84,cT,fS,gg)
var aRB=_oz(z,85,cT,fS,gg)
_(lQB,aRB)
_(cOB,lQB)
_(oNB,cOB)
_(lCB,oNB)
_(o0,lCB)
_(h9,o0)
var tSB=_n('view')
_rz(z,tSB,'class',86,cT,fS,gg)
var eTB=_n('view')
_rz(z,eTB,'class',87,cT,fS,gg)
var bUB=_oz(z,88,cT,fS,gg)
_(eTB,bUB)
_(tSB,eTB)
var oVB=_n('view')
_rz(z,oVB,'class',89,cT,fS,gg)
var xWB=_n('view')
_rz(z,xWB,'class',90,cT,fS,gg)
var oXB=_mz(z,'navigator',['class',91,'url',1],[],cT,fS,gg)
var fYB=_mz(z,'image',['mode',-1,'class',93,'src',1],[],cT,fS,gg)
_(oXB,fYB)
var cZB=_n('text')
_rz(z,cZB,'class',95,cT,fS,gg)
var h1B=_oz(z,96,cT,fS,gg)
_(cZB,h1B)
_(oXB,cZB)
_(xWB,oXB)
_(oVB,xWB)
var o2B=_n('view')
_rz(z,o2B,'class',97,cT,fS,gg)
var c3B=_mz(z,'navigator',['class',98,'url',1],[],cT,fS,gg)
var o4B=_mz(z,'image',['mode',-1,'class',100,'src',1],[],cT,fS,gg)
_(c3B,o4B)
var l5B=_n('text')
_rz(z,l5B,'class',102,cT,fS,gg)
var a6B=_oz(z,103,cT,fS,gg)
_(l5B,a6B)
_(c3B,l5B)
_(o2B,c3B)
_(oVB,o2B)
var t7B=_n('view')
_rz(z,t7B,'class',104,cT,fS,gg)
var e8B=_mz(z,'navigator',['class',105,'url',1],[],cT,fS,gg)
var b9B=_mz(z,'image',['mode',-1,'class',107,'src',1],[],cT,fS,gg)
_(e8B,b9B)
var o0B=_n('text')
_rz(z,o0B,'class',109,cT,fS,gg)
var xAC=_oz(z,110,cT,fS,gg)
_(o0B,xAC)
_(e8B,o0B)
_(t7B,e8B)
_(oVB,t7B)
_(tSB,oVB)
_(h9,tSB)
_(oX,h9)
_(cW,oX)
_(hU,cW)
return hU
}
xQ.wxXCkey=2
_2z(z,28,oR,e,s,gg,xQ,'swiperDate','index1','index1')
_(oB,oP)
_(r,oB)
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
d_[x[7]]["f16879e2"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[7]+':f16879e2'
r.wxVkey=b
gg.f=$gdc(f_["./pages/hot/hot.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[7]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_mz(z,'navigator',['class',3,'url',1],[],e,s,gg)
var fE=_mz(z,'video',['controls',-1,'binderror',5,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'src',5],[],e,s,gg)
_(oD,fE)
var cF=_n('text')
_rz(z,cF,'class',11,e,s,gg)
var hG=_oz(z,12,e,s,gg)
_(cF,hG)
_(oD,cF)
_(xC,oD)
var oH=_n('view')
_rz(z,oH,'class',13,e,s,gg)
var cI=_n('view')
_rz(z,cI,'class',14,e,s,gg)
var oJ=_mz(z,'image',['mode',-1,'class',15,'src',1],[],e,s,gg)
_(cI,oJ)
var lK=_n('text')
_rz(z,lK,'class',17,e,s,gg)
var aL=_oz(z,18,e,s,gg)
_(lK,aL)
_(cI,lK)
var tM=_n('view')
_rz(z,tM,'class',19,e,s,gg)
var eN=_n('button')
_rz(z,eN,'class',20,e,s,gg)
var bO=_oz(z,21,e,s,gg)
_(eN,bO)
_(tM,eN)
_(cI,tM)
_(oH,cI)
var oP=_n('view')
_rz(z,oP,'class',22,e,s,gg)
var xQ=_mz(z,'image',['mode',-1,'class',23,'src',1],[],e,s,gg)
_(oP,xQ)
var oR=_mz(z,'image',['mode',-1,'class',25,'src',1],[],e,s,gg)
_(oP,oR)
var fS=_mz(z,'image',['mode',-1,'class',27,'src',1],[],e,s,gg)
_(oP,fS)
_(oH,oP)
_(xC,oH)
_(oB,xC)
var cT=_n('view')
_rz(z,cT,'class',29,e,s,gg)
var hU=_mz(z,'navigator',['class',30,'url',1],[],e,s,gg)
var oV=_mz(z,'video',['controls',-1,'binderror',32,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'src',5],[],e,s,gg)
_(hU,oV)
var cW=_n('text')
_rz(z,cW,'class',38,e,s,gg)
var oX=_oz(z,39,e,s,gg)
_(cW,oX)
_(hU,cW)
_(cT,hU)
var lY=_n('view')
_rz(z,lY,'class',40,e,s,gg)
var aZ=_n('view')
_rz(z,aZ,'class',41,e,s,gg)
var t1=_mz(z,'image',['mode',-1,'class',42,'src',1],[],e,s,gg)
_(aZ,t1)
var e2=_n('text')
_rz(z,e2,'class',44,e,s,gg)
var b3=_oz(z,45,e,s,gg)
_(e2,b3)
_(aZ,e2)
var o4=_n('view')
_rz(z,o4,'class',46,e,s,gg)
var x5=_n('button')
_rz(z,x5,'class',47,e,s,gg)
var o6=_oz(z,48,e,s,gg)
_(x5,o6)
_(o4,x5)
_(aZ,o4)
_(lY,aZ)
var f7=_n('view')
_rz(z,f7,'class',49,e,s,gg)
var c8=_mz(z,'image',['mode',-1,'class',50,'src',1],[],e,s,gg)
_(f7,c8)
var h9=_mz(z,'image',['mode',-1,'class',52,'src',1],[],e,s,gg)
_(f7,h9)
var o0=_mz(z,'image',['mode',-1,'class',54,'src',1],[],e,s,gg)
_(f7,o0)
_(lY,f7)
_(cT,lY)
_(oB,cT)
var cAB=_n('view')
_rz(z,cAB,'class',56,e,s,gg)
var oBB=_mz(z,'navigator',['class',57,'url',1],[],e,s,gg)
var lCB=_mz(z,'video',['controls',-1,'binderror',59,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'src',5],[],e,s,gg)
_(oBB,lCB)
var aDB=_n('text')
_rz(z,aDB,'class',65,e,s,gg)
var tEB=_oz(z,66,e,s,gg)
_(aDB,tEB)
_(oBB,aDB)
_(cAB,oBB)
var eFB=_n('view')
_rz(z,eFB,'class',67,e,s,gg)
var bGB=_n('view')
_rz(z,bGB,'class',68,e,s,gg)
var oHB=_mz(z,'image',['mode',-1,'class',69,'src',1],[],e,s,gg)
_(bGB,oHB)
var xIB=_n('text')
_rz(z,xIB,'class',71,e,s,gg)
var oJB=_oz(z,72,e,s,gg)
_(xIB,oJB)
_(bGB,xIB)
var fKB=_n('view')
_rz(z,fKB,'class',73,e,s,gg)
var cLB=_n('button')
_rz(z,cLB,'class',74,e,s,gg)
var hMB=_oz(z,75,e,s,gg)
_(cLB,hMB)
_(fKB,cLB)
_(bGB,fKB)
_(eFB,bGB)
var oNB=_n('view')
_rz(z,oNB,'class',76,e,s,gg)
var cOB=_mz(z,'image',['mode',-1,'class',77,'src',1],[],e,s,gg)
_(oNB,cOB)
var oPB=_mz(z,'image',['mode',-1,'class',79,'src',1],[],e,s,gg)
_(oNB,oPB)
var lQB=_mz(z,'image',['mode',-1,'class',81,'src',1],[],e,s,gg)
_(oNB,lQB)
_(eFB,oNB)
_(cAB,eFB)
_(oB,cAB)
var aRB=_n('view')
_rz(z,aRB,'class',83,e,s,gg)
var tSB=_mz(z,'navigator',['class',84,'url',1],[],e,s,gg)
var eTB=_mz(z,'video',['controls',-1,'binderror',86,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'src',5],[],e,s,gg)
_(tSB,eTB)
var bUB=_n('text')
_rz(z,bUB,'class',92,e,s,gg)
var oVB=_oz(z,93,e,s,gg)
_(bUB,oVB)
_(tSB,bUB)
_(aRB,tSB)
var xWB=_n('view')
_rz(z,xWB,'class',94,e,s,gg)
var oXB=_n('view')
_rz(z,oXB,'class',95,e,s,gg)
var fYB=_mz(z,'image',['mode',-1,'class',96,'src',1],[],e,s,gg)
_(oXB,fYB)
var cZB=_n('text')
_rz(z,cZB,'class',98,e,s,gg)
var h1B=_oz(z,99,e,s,gg)
_(cZB,h1B)
_(oXB,cZB)
var o2B=_n('view')
_rz(z,o2B,'class',100,e,s,gg)
var c3B=_n('button')
_rz(z,c3B,'class',101,e,s,gg)
var o4B=_oz(z,102,e,s,gg)
_(c3B,o4B)
_(o2B,c3B)
_(oXB,o2B)
_(xWB,oXB)
var l5B=_n('view')
_rz(z,l5B,'class',103,e,s,gg)
var a6B=_mz(z,'image',['mode',-1,'class',104,'src',1],[],e,s,gg)
_(l5B,a6B)
var t7B=_mz(z,'image',['mode',-1,'class',106,'src',1],[],e,s,gg)
_(l5B,t7B)
var e8B=_mz(z,'image',['mode',-1,'class',108,'src',1],[],e,s,gg)
_(l5B,e8B)
_(xWB,l5B)
_(aRB,xWB)
_(oB,aRB)
_(r,oB)
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
d_[x[10]]["68d50a72"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[10]+':68d50a72'
r.wxVkey=b
gg.f=$gdc(f_["./pages/login/login.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[10]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_mz(z,'image',['mode',-1,'class',3,'src',1],[],e,s,gg)
_(xC,oD)
_(oB,xC)
var fE=_mz(z,'form',['bindreset',5,'bindsubmit',1,'class',2],[],e,s,gg)
var cF=_n('view')
_rz(z,cF,'class',8,e,s,gg)
var hG=_mz(z,'input',['bindinput',9,'class',1,'data-comkey',2,'data-eventid',3,'name',4,'placeholder',5,'value',6],[],e,s,gg)
_(cF,hG)
_(fE,cF)
var oH=_n('view')
_rz(z,oH,'class',16,e,s,gg)
var cI=_mz(z,'input',['password',-1,'bindinput',17,'class',1,'data-comkey',2,'data-eventid',3,'name',4,'placeholder',5,'value',6],[],e,s,gg)
_(oH,cI)
_(fE,oH)
var oJ=_n('view')
_rz(z,oJ,'class',24,e,s,gg)
var lK=_mz(z,'button',['bindtap',25,'class',1,'data-comkey',2,'data-eventid',3,'type',4],[],e,s,gg)
var aL=_oz(z,30,e,s,gg)
_(lK,aL)
_(oJ,lK)
_(fE,oJ)
var tM=_n('view')
_rz(z,tM,'class',31,e,s,gg)
var eN=_mz(z,'navigator',['class',32,'url',1],[],e,s,gg)
var bO=_oz(z,34,e,s,gg)
_(eN,bO)
_(tM,eN)
_(fE,tM)
_(oB,fE)
_(r,oB)
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
d_[x[13]]["afefed1a"]=function(e,s,r,gg){
var z=gz$gwx_10()
var b=x[13]+':afefed1a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/open/open.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_mz(z,'image',['mode',-1,'class',2,'src',1],[],e,s,gg)
_(oB,xC)
var oD=_mz(z,'image',['mode',-1,'class',4,'src',1],[],e,s,gg)
_(oB,oD)
_(r,oB)
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
d_[x[16]]["57d6fec7"]=function(e,s,r,gg){
var z=gz$gwx_12()
var b=x[16]+':57d6fec7'
r.wxVkey=b
gg.f=$gdc(f_["./pages/profile/profile.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[16]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_mz(z,'navigator',['class',3,'url',1],[],e,s,gg)
var fE=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(oD,fE)
_(xC,oD)
var cF=_n('text')
_rz(z,cF,'class',7,e,s,gg)
var hG=_oz(z,8,e,s,gg)
_(cF,hG)
_(xC,cF)
_(oB,xC)
var oH=_n('view')
_rz(z,oH,'class',9,e,s,gg)
var cI=_n('view')
_rz(z,cI,'class',10,e,s,gg)
var oJ=_n('text')
_rz(z,oJ,'class',11,e,s,gg)
var lK=_oz(z,12,e,s,gg)
_(oJ,lK)
_(cI,oJ)
var aL=_n('text')
_rz(z,aL,'class',13,e,s,gg)
var tM=_oz(z,14,e,s,gg)
_(aL,tM)
_(cI,aL)
var eN=_n('text')
_rz(z,eN,'class',15,e,s,gg)
var bO=_oz(z,16,e,s,gg)
_(eN,bO)
_(cI,eN)
var oP=_n('text')
_rz(z,oP,'class',17,e,s,gg)
var xQ=_oz(z,18,e,s,gg)
_(oP,xQ)
_(cI,oP)
var oR=_n('text')
_rz(z,oR,'class',19,e,s,gg)
var fS=_oz(z,20,e,s,gg)
_(oR,fS)
_(cI,oR)
_(oH,cI)
var cT=_n('view')
_rz(z,cT,'class',21,e,s,gg)
var hU=_n('text')
_rz(z,hU,'class',22,e,s,gg)
var oV=_oz(z,23,e,s,gg)
_(hU,oV)
_(cT,hU)
var cW=_n('text')
_rz(z,cW,'class',24,e,s,gg)
var oX=_oz(z,25,e,s,gg)
_(cW,oX)
_(cT,cW)
var lY=_n('text')
_rz(z,lY,'class',26,e,s,gg)
var aZ=_oz(z,27,e,s,gg)
_(lY,aZ)
_(cT,lY)
var t1=_n('text')
_rz(z,t1,'class',28,e,s,gg)
var e2=_oz(z,29,e,s,gg)
_(t1,e2)
_(cT,t1)
var b3=_n('text')
_rz(z,b3,'class',30,e,s,gg)
var o4=_oz(z,31,e,s,gg)
_(b3,o4)
_(cT,b3)
_(oH,cT)
_(oB,oH)
var x5=_n('view')
_rz(z,x5,'class',32,e,s,gg)
var o6=_n('text')
_rz(z,o6,'class',33,e,s,gg)
var f7=_oz(z,34,e,s,gg)
_(o6,f7)
_(x5,o6)
_(oB,x5)
var c8=_n('view')
_rz(z,c8,'class',35,e,s,gg)
var h9=_mz(z,'navigator',['class',36,'url',1],[],e,s,gg)
var o0=_n('text')
_rz(z,o0,'class',38,e,s,gg)
var cAB=_oz(z,39,e,s,gg)
_(o0,cAB)
_(h9,o0)
_(c8,h9)
_(oB,c8)
_(r,oB)
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
d_[x[19]]["ea0c81da"]=function(e,s,r,gg){
var z=gz$gwx_14()
var b=x[19]+':ea0c81da'
r.wxVkey=b
gg.f=$gdc(f_["./pages/register/register.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[19]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_mz(z,'image',['mode',-1,'class',3,'src',1],[],e,s,gg)
_(xC,oD)
_(oB,xC)
var fE=_mz(z,'form',['bindreset',5,'bindsubmit',1,'class',2],[],e,s,gg)
var cF=_n('view')
_rz(z,cF,'class',8,e,s,gg)
var hG=_mz(z,'input',['bindinput',9,'class',1,'data-comkey',2,'data-eventid',3,'name',4,'placeholder',5,'value',6],[],e,s,gg)
_(cF,hG)
_(fE,cF)
var oH=_n('view')
_rz(z,oH,'class',16,e,s,gg)
var cI=_mz(z,'input',['bindinput',17,'class',1,'data-comkey',2,'data-eventid',3,'name',4,'placeholder',5,'value',6],[],e,s,gg)
_(oH,cI)
_(fE,oH)
var oJ=_n('view')
_rz(z,oJ,'class',24,e,s,gg)
var lK=_mz(z,'input',['password',-1,'bindinput',25,'class',1,'data-comkey',2,'data-eventid',3,'name',4,'placeholder',5,'value',6],[],e,s,gg)
_(oJ,lK)
_(fE,oJ)
var aL=_n('view')
_rz(z,aL,'class',32,e,s,gg)
var tM=_mz(z,'button',['bindtap',33,'class',1,'data-comkey',2,'data-eventid',3,'type',4],[],e,s,gg)
var eN=_oz(z,38,e,s,gg)
_(tM,eN)
_(aL,tM)
_(fE,aL)
_(oB,fE)
_(r,oB)
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
d_[x[22]]["9754b69a"]=function(e,s,r,gg){
var z=gz$gwx_16()
var b=x[22]+':9754b69a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/videoplay1/videoplay1.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[22]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_mz(z,'video',['controls',-1,'binderror',4,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'src',5],[],e,s,gg)
_(oD,fE)
_(xC,oD)
_(oB,xC)
var cF=_n('view')
_rz(z,cF,'class',10,e,s,gg)
var hG=_mz(z,'scroll-view',['class',11,'scrollLeft',1,'scrollX',2],[],e,s,gg)
var oH=_v()
_(hG,oH)
var cI=function(lK,oJ,aL,gg){
var eN=_mz(z,'view',['bindtap',19,'class',1,'data-comkey',2,'data-eventid',3,'id',4],[],lK,oJ,gg)
var bO=_n('view')
_rz(z,bO,'class',24,lK,oJ,gg)
var oP=_n('view')
_rz(z,oP,'class',25,lK,oJ,gg)
var xQ=_oz(z,26,lK,oJ,gg)
_(oP,xQ)
_(bO,oP)
var oR=_n('view')
_rz(z,oR,'class',27,lK,oJ,gg)
var fS=_n('view')
_rz(z,fS,'class',28,lK,oJ,gg)
_(oR,fS)
_(bO,oR)
_(eN,bO)
_(aL,eN)
return aL
}
oH.wxXCkey=2
_2z(z,16,cI,e,s,gg,oH,'menuTabs','index','index')
_(cF,hG)
var cT=_mz(z,'swiper',['bindchange',29,'class',1,'current',2,'data-comkey',3,'data-eventid',4,'duration',5],[],e,s,gg)
var hU=_v()
_(cT,hU)
var oV=function(oX,cW,lY,gg){
var t1=_n('swiper-item')
_rz(z,t1,'class',40,oX,cW,gg)
var e2=_mz(z,'scroll-view',['bindscrolltolower',41,'class',1,'data-comkey',2,'data-eventid',3,'scrollY',4],[],oX,cW,gg)
var b3=_n('view')
_rz(z,b3,'class',46,oX,cW,gg)
var o4=_n('view')
_rz(z,o4,'class',47,oX,cW,gg)
var x5=_mz(z,'image',['mode',-1,'class',48,'src',1],[],oX,cW,gg)
_(o4,x5)
_(b3,o4)
var o6=_n('view')
_rz(z,o6,'class',50,oX,cW,gg)
var f7=_n('text')
_rz(z,f7,'class',51,oX,cW,gg)
var c8=_oz(z,52,oX,cW,gg)
_(f7,c8)
_(o6,f7)
var h9=_n('view')
_rz(z,h9,'class',53,oX,cW,gg)
var o0=_n('text')
_rz(z,o0,'class',54,oX,cW,gg)
var cAB=_oz(z,55,oX,cW,gg)
_(o0,cAB)
_(h9,o0)
var oBB=_n('text')
_rz(z,oBB,'class',56,oX,cW,gg)
var lCB=_oz(z,57,oX,cW,gg)
_(oBB,lCB)
_(h9,oBB)
_(o6,h9)
_(b3,o6)
_(e2,b3)
var aDB=_n('text')
_rz(z,aDB,'class',58,oX,cW,gg)
_(e2,aDB)
_(t1,e2)
_(lY,t1)
var tEB=_n('swiper-item')
_rz(z,tEB,'class',59,oX,cW,gg)
var eFB=_mz(z,'scroll-view',['bindscrolltolower',60,'class',1,'data-comkey',2,'data-eventid',3,'scrollY',4],[],oX,cW,gg)
var bGB=_n('view')
_rz(z,bGB,'class',65,oX,cW,gg)
var oHB=_n('text')
_rz(z,oHB,'class',66,oX,cW,gg)
var xIB=_oz(z,67,oX,cW,gg)
_(oHB,xIB)
_(bGB,oHB)
_(eFB,bGB)
var oJB=_n('view')
_rz(z,oJB,'class',68,oX,cW,gg)
_(eFB,oJB)
var fKB=_n('view')
_rz(z,fKB,'class',69,oX,cW,gg)
var cLB=_n('view')
_rz(z,cLB,'class',70,oX,cW,gg)
var hMB=_mz(z,'image',['class',71,'src',1],[],oX,cW,gg)
_(cLB,hMB)
var oNB=_n('view')
_rz(z,oNB,'class',73,oX,cW,gg)
var cOB=_n('text')
_rz(z,cOB,'class',74,oX,cW,gg)
var oPB=_oz(z,75,oX,cW,gg)
_(cOB,oPB)
_(oNB,cOB)
_(cLB,oNB)
_(fKB,cLB)
var lQB=_n('view')
_rz(z,lQB,'class',76,oX,cW,gg)
var aRB=_n('view')
_rz(z,aRB,'class',77,oX,cW,gg)
var tSB=_n('text')
_rz(z,tSB,'class',78,oX,cW,gg)
var eTB=_oz(z,79,oX,cW,gg)
_(tSB,eTB)
_(aRB,tSB)
_(lQB,aRB)
var bUB=_n('view')
_rz(z,bUB,'class',80,oX,cW,gg)
var oVB=_n('text')
_rz(z,oVB,'class',81,oX,cW,gg)
var xWB=_oz(z,82,oX,cW,gg)
_(oVB,xWB)
_(bUB,oVB)
var oXB=_n('view')
_rz(z,oXB,'class',83,oX,cW,gg)
_(bUB,oXB)
_(lQB,bUB)
var fYB=_n('view')
_rz(z,fYB,'class',84,oX,cW,gg)
var cZB=_oz(z,85,oX,cW,gg)
_(fYB,cZB)
_(lQB,fYB)
_(fKB,lQB)
_(eFB,fKB)
var h1B=_n('view')
_rz(z,h1B,'class',86,oX,cW,gg)
_(eFB,h1B)
var o2B=_n('view')
_rz(z,o2B,'class',87,oX,cW,gg)
var c3B=_n('view')
_rz(z,c3B,'class',88,oX,cW,gg)
var o4B=_mz(z,'image',['class',89,'src',1],[],oX,cW,gg)
_(c3B,o4B)
var l5B=_n('view')
_rz(z,l5B,'class',91,oX,cW,gg)
var a6B=_n('text')
_rz(z,a6B,'class',92,oX,cW,gg)
var t7B=_oz(z,93,oX,cW,gg)
_(a6B,t7B)
_(l5B,a6B)
_(c3B,l5B)
_(o2B,c3B)
var e8B=_n('view')
_rz(z,e8B,'class',94,oX,cW,gg)
var b9B=_n('view')
_rz(z,b9B,'class',95,oX,cW,gg)
var o0B=_n('text')
_rz(z,o0B,'class',96,oX,cW,gg)
var xAC=_oz(z,97,oX,cW,gg)
_(o0B,xAC)
_(b9B,o0B)
_(e8B,b9B)
var oBC=_n('view')
_rz(z,oBC,'class',98,oX,cW,gg)
var fCC=_n('text')
_rz(z,fCC,'class',99,oX,cW,gg)
var cDC=_oz(z,100,oX,cW,gg)
_(fCC,cDC)
_(oBC,fCC)
var hEC=_n('view')
_rz(z,hEC,'class',101,oX,cW,gg)
_(oBC,hEC)
_(e8B,oBC)
var oFC=_n('view')
_rz(z,oFC,'class',102,oX,cW,gg)
var cGC=_oz(z,103,oX,cW,gg)
_(oFC,cGC)
_(e8B,oFC)
_(o2B,e8B)
_(eFB,o2B)
var oHC=_n('view')
_rz(z,oHC,'class',104,oX,cW,gg)
_(eFB,oHC)
var lIC=_n('view')
_rz(z,lIC,'class',105,oX,cW,gg)
var aJC=_n('view')
_rz(z,aJC,'class',106,oX,cW,gg)
var tKC=_mz(z,'image',['class',107,'src',1],[],oX,cW,gg)
_(aJC,tKC)
var eLC=_n('view')
_rz(z,eLC,'class',109,oX,cW,gg)
var bMC=_n('text')
_rz(z,bMC,'class',110,oX,cW,gg)
var oNC=_oz(z,111,oX,cW,gg)
_(bMC,oNC)
_(eLC,bMC)
_(aJC,eLC)
_(lIC,aJC)
var xOC=_n('view')
_rz(z,xOC,'class',112,oX,cW,gg)
var oPC=_n('view')
_rz(z,oPC,'class',113,oX,cW,gg)
var fQC=_n('text')
_rz(z,fQC,'class',114,oX,cW,gg)
var cRC=_oz(z,115,oX,cW,gg)
_(fQC,cRC)
_(oPC,fQC)
_(xOC,oPC)
var hSC=_n('view')
_rz(z,hSC,'class',116,oX,cW,gg)
var oTC=_n('text')
_rz(z,oTC,'class',117,oX,cW,gg)
var cUC=_oz(z,118,oX,cW,gg)
_(oTC,cUC)
_(hSC,oTC)
var oVC=_n('view')
_rz(z,oVC,'class',119,oX,cW,gg)
_(hSC,oVC)
_(xOC,hSC)
var lWC=_n('view')
_rz(z,lWC,'class',120,oX,cW,gg)
var aXC=_oz(z,121,oX,cW,gg)
_(lWC,aXC)
_(xOC,lWC)
_(lIC,xOC)
_(eFB,lIC)
var tYC=_n('view')
_rz(z,tYC,'class',122,oX,cW,gg)
_(eFB,tYC)
_(tEB,eFB)
_(lY,tEB)
return lY
}
hU.wxXCkey=2
_2z(z,37,oV,e,s,gg,hU,'swiperDate','index1','index1')
_(cF,cT)
var eZC=_n('view')
_rz(z,eZC,'class',123,e,s,gg)
var b1C=_n('view')
_rz(z,b1C,'class',124,e,s,gg)
var o2C=_mz(z,'input',['class',125,'name',1,'placeholder',2],[],e,s,gg)
_(b1C,o2C)
_(eZC,b1C)
_(cF,eZC)
_(oB,cF)
var x3C=_n('view')
_rz(z,x3C,'class',128,e,s,gg)
var o4C=_mz(z,'image',['class',129,'mode',1,'src',2],[],e,s,gg)
_(x3C,o4C)
_(oB,x3C)
_(r,oB)
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
d_[x[25]]["87f16bda"]=function(e,s,r,gg){
var z=gz$gwx_18()
var b=x[25]+':87f16bda'
r.wxVkey=b
gg.f=$gdc(f_["./pages/videoplay2/videoplay2.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[25]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_mz(z,'video',['controls',-1,'binderror',4,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'src',5],[],e,s,gg)
_(oD,fE)
_(xC,oD)
_(oB,xC)
var cF=_mz(z,'scroll-view',['class',10,'scrollLeft',1,'scrollX',2],[],e,s,gg)
var hG=_v()
_(cF,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'view',['bindtap',18,'class',1,'data-comkey',2,'data-eventid',3,'id',4],[],oJ,cI,gg)
var eN=_n('view')
_rz(z,eN,'class',23,oJ,cI,gg)
var bO=_n('view')
_rz(z,bO,'class',24,oJ,cI,gg)
var oP=_oz(z,25,oJ,cI,gg)
_(bO,oP)
_(eN,bO)
var xQ=_n('view')
_rz(z,xQ,'class',26,oJ,cI,gg)
var oR=_n('view')
_rz(z,oR,'class',27,oJ,cI,gg)
_(xQ,oR)
_(eN,xQ)
_(tM,eN)
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,15,oH,e,s,gg,hG,'menuTabs','index','index')
_(oB,cF)
var fS=_mz(z,'swiper',['bindchange',28,'class',1,'current',2,'data-comkey',3,'data-eventid',4,'duration',5],[],e,s,gg)
var cT=_v()
_(fS,cT)
var hU=function(cW,oV,oX,gg){
var aZ=_n('swiper-item')
_rz(z,aZ,'class',39,cW,oV,gg)
var t1=_mz(z,'scroll-view',['bindscrolltolower',40,'class',1,'data-comkey',2,'data-eventid',3,'scrollY',4],[],cW,oV,gg)
var e2=_n('view')
_rz(z,e2,'class',45,cW,oV,gg)
var b3=_n('view')
_rz(z,b3,'class',46,cW,oV,gg)
var o4=_mz(z,'image',['mode',-1,'class',47,'src',1],[],cW,oV,gg)
_(b3,o4)
_(e2,b3)
var x5=_n('view')
_rz(z,x5,'class',49,cW,oV,gg)
var o6=_n('text')
_rz(z,o6,'class',50,cW,oV,gg)
var f7=_oz(z,51,cW,oV,gg)
_(o6,f7)
_(x5,o6)
var c8=_n('view')
_rz(z,c8,'class',52,cW,oV,gg)
var h9=_n('text')
_rz(z,h9,'class',53,cW,oV,gg)
var o0=_oz(z,54,cW,oV,gg)
_(h9,o0)
_(c8,h9)
var cAB=_n('text')
_rz(z,cAB,'class',55,cW,oV,gg)
var oBB=_oz(z,56,cW,oV,gg)
_(cAB,oBB)
_(c8,cAB)
_(x5,c8)
_(e2,x5)
_(t1,e2)
var lCB=_n('text')
_rz(z,lCB,'class',57,cW,oV,gg)
_(t1,lCB)
_(aZ,t1)
_(oX,aZ)
return oX
}
cT.wxXCkey=2
_2z(z,36,hU,e,s,gg,cT,'swiperDate','index1','index1')
_(oB,fS)
var aDB=_n('view')
_rz(z,aDB,'class',58,e,s,gg)
var tEB=_n('view')
_rz(z,tEB,'class',59,e,s,gg)
var eFB=_mz(z,'input',['class',60,'name',1,'placeholder',2],[],e,s,gg)
_(tEB,eFB)
_(aDB,tEB)
_(oB,aDB)
_(r,oB)
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
d_[x[28]]["788e211a"]=function(e,s,r,gg){
var z=gz$gwx_20()
var b=x[28]+':788e211a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/videoplay3/videoplay3.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[28]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_mz(z,'video',['controls',-1,'binderror',4,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'src',5],[],e,s,gg)
_(oD,fE)
_(xC,oD)
_(oB,xC)
var cF=_mz(z,'scroll-view',['class',10,'scrollLeft',1,'scrollX',2],[],e,s,gg)
var hG=_v()
_(cF,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'view',['bindtap',18,'class',1,'data-comkey',2,'data-eventid',3,'id',4],[],oJ,cI,gg)
var eN=_n('view')
_rz(z,eN,'class',23,oJ,cI,gg)
var bO=_n('view')
_rz(z,bO,'class',24,oJ,cI,gg)
var oP=_oz(z,25,oJ,cI,gg)
_(bO,oP)
_(eN,bO)
var xQ=_n('view')
_rz(z,xQ,'class',26,oJ,cI,gg)
var oR=_n('view')
_rz(z,oR,'class',27,oJ,cI,gg)
_(xQ,oR)
_(eN,xQ)
_(tM,eN)
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,15,oH,e,s,gg,hG,'menuTabs','index','index')
_(oB,cF)
var fS=_mz(z,'swiper',['bindchange',28,'class',1,'current',2,'data-comkey',3,'data-eventid',4,'duration',5],[],e,s,gg)
var cT=_v()
_(fS,cT)
var hU=function(cW,oV,oX,gg){
var aZ=_n('swiper-item')
_rz(z,aZ,'class',39,cW,oV,gg)
var t1=_mz(z,'scroll-view',['bindscrolltolower',40,'class',1,'data-comkey',2,'data-eventid',3,'scrollY',4],[],cW,oV,gg)
var e2=_n('view')
_rz(z,e2,'class',45,cW,oV,gg)
var b3=_n('view')
_rz(z,b3,'class',46,cW,oV,gg)
var o4=_mz(z,'image',['mode',-1,'class',47,'src',1],[],cW,oV,gg)
_(b3,o4)
_(e2,b3)
var x5=_n('view')
_rz(z,x5,'class',49,cW,oV,gg)
var o6=_n('text')
_rz(z,o6,'class',50,cW,oV,gg)
var f7=_oz(z,51,cW,oV,gg)
_(o6,f7)
_(x5,o6)
var c8=_n('view')
_rz(z,c8,'class',52,cW,oV,gg)
var h9=_n('text')
_rz(z,h9,'class',53,cW,oV,gg)
var o0=_oz(z,54,cW,oV,gg)
_(h9,o0)
_(c8,h9)
var cAB=_n('text')
_rz(z,cAB,'class',55,cW,oV,gg)
var oBB=_oz(z,56,cW,oV,gg)
_(cAB,oBB)
_(c8,cAB)
_(x5,c8)
_(e2,x5)
_(t1,e2)
var lCB=_n('text')
_rz(z,lCB,'class',57,cW,oV,gg)
_(t1,lCB)
_(aZ,t1)
_(oX,aZ)
return oX
}
cT.wxXCkey=2
_2z(z,36,hU,e,s,gg,cT,'swiperDate','index1','index1')
_(oB,fS)
var aDB=_n('view')
_rz(z,aDB,'class',58,e,s,gg)
var tEB=_n('view')
_rz(z,tEB,'class',59,e,s,gg)
var eFB=_mz(z,'input',['class',60,'name',1,'placeholder',2],[],e,s,gg)
_(tEB,eFB)
_(aDB,tEB)
_(oB,aDB)
_(r,oB)
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
d_[x[31]]["692ad65a"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[31]+':692ad65a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/videoplay4/videoplay4.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[31]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_mz(z,'video',['controls',-1,'binderror',4,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'src',5],[],e,s,gg)
_(oD,fE)
_(xC,oD)
_(oB,xC)
var cF=_mz(z,'scroll-view',['class',10,'scrollLeft',1,'scrollX',2],[],e,s,gg)
var hG=_v()
_(cF,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'view',['bindtap',18,'class',1,'data-comkey',2,'data-eventid',3,'id',4],[],oJ,cI,gg)
var eN=_n('view')
_rz(z,eN,'class',23,oJ,cI,gg)
var bO=_n('view')
_rz(z,bO,'class',24,oJ,cI,gg)
var oP=_oz(z,25,oJ,cI,gg)
_(bO,oP)
_(eN,bO)
var xQ=_n('view')
_rz(z,xQ,'class',26,oJ,cI,gg)
var oR=_n('view')
_rz(z,oR,'class',27,oJ,cI,gg)
_(xQ,oR)
_(eN,xQ)
_(tM,eN)
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,15,oH,e,s,gg,hG,'menuTabs','index','index')
_(oB,cF)
var fS=_mz(z,'swiper',['bindchange',28,'class',1,'current',2,'data-comkey',3,'data-eventid',4,'duration',5],[],e,s,gg)
var cT=_v()
_(fS,cT)
var hU=function(cW,oV,oX,gg){
var aZ=_n('swiper-item')
_rz(z,aZ,'class',39,cW,oV,gg)
var t1=_mz(z,'scroll-view',['bindscrolltolower',40,'class',1,'data-comkey',2,'data-eventid',3,'scrollY',4],[],cW,oV,gg)
var e2=_n('view')
_rz(z,e2,'class',45,cW,oV,gg)
var b3=_n('view')
_rz(z,b3,'class',46,cW,oV,gg)
var o4=_mz(z,'image',['mode',-1,'class',47,'src',1],[],cW,oV,gg)
_(b3,o4)
_(e2,b3)
var x5=_n('view')
_rz(z,x5,'class',49,cW,oV,gg)
var o6=_n('text')
_rz(z,o6,'class',50,cW,oV,gg)
var f7=_oz(z,51,cW,oV,gg)
_(o6,f7)
_(x5,o6)
var c8=_n('view')
_rz(z,c8,'class',52,cW,oV,gg)
var h9=_n('text')
_rz(z,h9,'class',53,cW,oV,gg)
var o0=_oz(z,54,cW,oV,gg)
_(h9,o0)
_(c8,h9)
var cAB=_n('text')
_rz(z,cAB,'class',55,cW,oV,gg)
var oBB=_oz(z,56,cW,oV,gg)
_(cAB,oBB)
_(c8,cAB)
_(x5,c8)
_(e2,x5)
_(t1,e2)
var lCB=_n('text')
_rz(z,lCB,'class',57,cW,oV,gg)
_(t1,lCB)
_(aZ,t1)
_(oX,aZ)
return oX
}
cT.wxXCkey=2
_2z(z,36,hU,e,s,gg,cT,'swiperDate','index1','index1')
_(oB,fS)
var aDB=_n('view')
_rz(z,aDB,'class',58,e,s,gg)
var tEB=_n('view')
_rz(z,tEB,'class',59,e,s,gg)
var eFB=_mz(z,'input',['class',60,'name',1,'placeholder',2],[],e,s,gg)
_(tEB,eFB)
_(aDB,tEB)
_(oB,aDB)
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
d_[x[34]]["59c78b9a"]=function(e,s,r,gg){
var z=gz$gwx_24()
var b=x[34]+':59c78b9a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/videoplay5/videoplay5.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[34]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_mz(z,'video',['controls',-1,'binderror',4,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'src',5],[],e,s,gg)
_(oD,fE)
_(xC,oD)
_(oB,xC)
var cF=_mz(z,'scroll-view',['class',10,'scrollLeft',1,'scrollX',2],[],e,s,gg)
var hG=_v()
_(cF,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'view',['bindtap',18,'class',1,'data-comkey',2,'data-eventid',3,'id',4],[],oJ,cI,gg)
var eN=_n('view')
_rz(z,eN,'class',23,oJ,cI,gg)
var bO=_n('view')
_rz(z,bO,'class',24,oJ,cI,gg)
var oP=_oz(z,25,oJ,cI,gg)
_(bO,oP)
_(eN,bO)
var xQ=_n('view')
_rz(z,xQ,'class',26,oJ,cI,gg)
var oR=_n('view')
_rz(z,oR,'class',27,oJ,cI,gg)
_(xQ,oR)
_(eN,xQ)
_(tM,eN)
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,15,oH,e,s,gg,hG,'menuTabs','index','index')
_(oB,cF)
var fS=_mz(z,'swiper',['bindchange',28,'class',1,'current',2,'data-comkey',3,'data-eventid',4,'duration',5],[],e,s,gg)
var cT=_v()
_(fS,cT)
var hU=function(cW,oV,oX,gg){
var aZ=_n('swiper-item')
_rz(z,aZ,'class',39,cW,oV,gg)
var t1=_mz(z,'scroll-view',['bindscrolltolower',40,'class',1,'data-comkey',2,'data-eventid',3,'scrollY',4],[],cW,oV,gg)
var e2=_n('view')
_rz(z,e2,'class',45,cW,oV,gg)
var b3=_n('view')
_rz(z,b3,'class',46,cW,oV,gg)
var o4=_mz(z,'image',['mode',-1,'class',47,'src',1],[],cW,oV,gg)
_(b3,o4)
_(e2,b3)
var x5=_n('view')
_rz(z,x5,'class',49,cW,oV,gg)
var o6=_n('text')
_rz(z,o6,'class',50,cW,oV,gg)
var f7=_oz(z,51,cW,oV,gg)
_(o6,f7)
_(x5,o6)
var c8=_n('view')
_rz(z,c8,'class',52,cW,oV,gg)
var h9=_n('text')
_rz(z,h9,'class',53,cW,oV,gg)
var o0=_oz(z,54,cW,oV,gg)
_(h9,o0)
_(c8,h9)
var cAB=_n('text')
_rz(z,cAB,'class',55,cW,oV,gg)
var oBB=_oz(z,56,cW,oV,gg)
_(cAB,oBB)
_(c8,cAB)
_(x5,c8)
_(e2,x5)
_(t1,e2)
var lCB=_n('text')
_rz(z,lCB,'class',57,cW,oV,gg)
_(t1,lCB)
_(aZ,t1)
_(oX,aZ)
return oX
}
cT.wxXCkey=2
_2z(z,36,hU,e,s,gg,cT,'swiperDate','index1','index1')
_(oB,fS)
var aDB=_n('view')
_rz(z,aDB,'class',58,e,s,gg)
var tEB=_n('view')
_rz(z,tEB,'class',59,e,s,gg)
var eFB=_mz(z,'input',['class',60,'name',1,'placeholder',2],[],e,s,gg)
_(tEB,eFB)
_(aDB,tEB)
_(oB,aDB)
_(r,oB)
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
d_[x[37]]={}
d_[x[37]]["4a6440da"]=function(e,s,r,gg){
var z=gz$gwx_26()
var b=x[37]+':4a6440da'
r.wxVkey=b
gg.f=$gdc(f_["./pages/videoplay6/videoplay6.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[37]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',3,e,s,gg)
var fE=_mz(z,'video',['controls',-1,'binderror',4,'class',1,'data-comkey',2,'data-eventid',3,'id',4,'src',5],[],e,s,gg)
_(oD,fE)
_(xC,oD)
_(oB,xC)
var cF=_mz(z,'scroll-view',['class',10,'scrollLeft',1,'scrollX',2],[],e,s,gg)
var hG=_v()
_(cF,hG)
var oH=function(oJ,cI,lK,gg){
var tM=_mz(z,'view',['bindtap',18,'class',1,'data-comkey',2,'data-eventid',3,'id',4],[],oJ,cI,gg)
var eN=_n('view')
_rz(z,eN,'class',23,oJ,cI,gg)
var bO=_n('view')
_rz(z,bO,'class',24,oJ,cI,gg)
var oP=_oz(z,25,oJ,cI,gg)
_(bO,oP)
_(eN,bO)
var xQ=_n('view')
_rz(z,xQ,'class',26,oJ,cI,gg)
var oR=_n('view')
_rz(z,oR,'class',27,oJ,cI,gg)
_(xQ,oR)
_(eN,xQ)
_(tM,eN)
_(lK,tM)
return lK
}
hG.wxXCkey=2
_2z(z,15,oH,e,s,gg,hG,'menuTabs','index','index')
_(oB,cF)
var fS=_mz(z,'swiper',['bindchange',28,'class',1,'current',2,'data-comkey',3,'data-eventid',4,'duration',5],[],e,s,gg)
var cT=_v()
_(fS,cT)
var hU=function(cW,oV,oX,gg){
var aZ=_n('swiper-item')
_rz(z,aZ,'class',39,cW,oV,gg)
var t1=_mz(z,'scroll-view',['bindscrolltolower',40,'class',1,'data-comkey',2,'data-eventid',3,'scrollY',4],[],cW,oV,gg)
var e2=_n('view')
_rz(z,e2,'class',45,cW,oV,gg)
var b3=_n('view')
_rz(z,b3,'class',46,cW,oV,gg)
var o4=_mz(z,'image',['mode',-1,'class',47,'src',1],[],cW,oV,gg)
_(b3,o4)
_(e2,b3)
var x5=_n('view')
_rz(z,x5,'class',49,cW,oV,gg)
var o6=_n('text')
_rz(z,o6,'class',50,cW,oV,gg)
var f7=_oz(z,51,cW,oV,gg)
_(o6,f7)
_(x5,o6)
var c8=_n('view')
_rz(z,c8,'class',52,cW,oV,gg)
var h9=_n('text')
_rz(z,h9,'class',53,cW,oV,gg)
var o0=_oz(z,54,cW,oV,gg)
_(h9,o0)
_(c8,h9)
var cAB=_n('text')
_rz(z,cAB,'class',55,cW,oV,gg)
var oBB=_oz(z,56,cW,oV,gg)
_(cAB,oBB)
_(c8,cAB)
_(x5,c8)
_(e2,x5)
_(t1,e2)
var lCB=_n('text')
_rz(z,lCB,'class',57,cW,oV,gg)
_(t1,lCB)
_(aZ,t1)
_(oX,aZ)
return oX
}
cT.wxXCkey=2
_2z(z,36,hU,e,s,gg,cT,'swiperDate','index1','index1')
_(oB,fS)
var aDB=_n('view')
_rz(z,aDB,'class',58,e,s,gg)
var tEB=_n('view')
_rz(z,tEB,'class',59,e,s,gg)
var eFB=_mz(z,'input',['class',60,'name',1,'placeholder',2],[],e,s,gg)
_(tEB,eFB)
_(aDB,tEB)
_(oB,aDB)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[37]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var oPC=e_[x[38]].i
_ai(oPC,x[39],e_,x[38],1,1)
var fQC=_v()
_(r,fQC)
var cRC=_oz(z,1,e,s,gg)
var hSC=_gd(x[38],cRC,e_,d_)
if(hSC){
var oTC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fQC.wxXCkey=3
hSC(oTC,oTC,fQC,gg)
gg.f=cur_globalf
}
else _w(cRC,x[38],2,18)
oPC.pop()
return r
}
e_[x[38]]={f:m26,j:[],i:[],ti:[x[39]],ic:[]}
d_[x[40]]={}
d_[x[40]]["38ff273b"]=function(e,s,r,gg){
var z=gz$gwx_28()
var b=x[40]+':38ff273b'
r.wxVkey=b
gg.f=$gdc(f_["./pages/videosearch/videosearch.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[40]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var fE=_n('view')
_rz(z,fE,'class',3,e,s,gg)
var cF=_oz(z,4,e,s,gg)
_(fE,cF)
_(xC,fE)
var hG=_mz(z,'input',['bindinput',5,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'value',5],[],e,s,gg)
_(xC,hG)
var oD=_v()
_(xC,oD)
if(_oz(z,11,e,s,gg)){oD.wxVkey=1
var oH=_mz(z,'view',['bindtap',12,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
_(oD,oH)
}
oD.wxXCkey=1
_(oB,xC)
var cI=_n('view')
_rz(z,cI,'class',16,e,s,gg)
var lK=_n('view')
_rz(z,lK,'class',17,e,s,gg)
var aL=_oz(z,18,e,s,gg)
_(lK,aL)
_(cI,lK)
var tM=_mz(z,'input',['bindinput',19,'class',1,'data-comkey',2,'data-eventid',3,'placeholder',4,'value',5],[],e,s,gg)
_(cI,tM)
var oJ=_v()
_(cI,oJ)
if(_oz(z,25,e,s,gg)){oJ.wxVkey=1
var eN=_mz(z,'view',['bindtap',26,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
_(oJ,eN)
}
oJ.wxXCkey=1
_(oB,cI)
var bO=_n('view')
_rz(z,bO,'class',30,e,s,gg)
var oP=_n('view')
_rz(z,oP,'class',31,e,s,gg)
var xQ=_oz(z,32,e,s,gg)
_(oP,xQ)
_(bO,oP)
var oR=_n('view')
_rz(z,oR,'class',33,e,s,gg)
var fS=_n('view')
_rz(z,fS,'class',34,e,s,gg)
var cT=_oz(z,35,e,s,gg)
_(fS,cT)
_(oR,fS)
var hU=_n('view')
_rz(z,hU,'class',36,e,s,gg)
var oV=_mz(z,'picker',['bindchange',37,'class',1,'data-comkey',2,'data-eventid',3,'range',4,'value',5],[],e,s,gg)
var cW=_n('view')
_rz(z,cW,'class',43,e,s,gg)
var oX=_oz(z,44,e,s,gg)
_(cW,oX)
_(oV,cW)
_(hU,oV)
_(oR,hU)
_(bO,oR)
_(oB,bO)
var lY=_n('view')
_rz(z,lY,'class',45,e,s,gg)
var aZ=_n('view')
_rz(z,aZ,'class',46,e,s,gg)
var t1=_oz(z,47,e,s,gg)
_(aZ,t1)
_(lY,aZ)
var e2=_mz(z,'button',['bindtap',48,'class',1,'data-comkey',2,'data-eventid',3,'plain',4,'type',5],[],e,s,gg)
var b3=_oz(z,54,e,s,gg)
_(e2,b3)
_(lY,e2)
_(oB,lY)
var o4=_n('view')
_rz(z,o4,'class',55,e,s,gg)
var x5=_mz(z,'button',['bindtap',56,'class',1,'data-comkey',2,'data-eventid',3,'type',4],[],e,s,gg)
var o6=_oz(z,61,e,s,gg)
_(x5,o6)
_(o4,x5)
_(oB,o4)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[40]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var lWC=e_[x[41]].i
_ai(lWC,x[42],e_,x[41],1,1)
var aXC=_v()
_(r,aXC)
var tYC=_oz(z,1,e,s,gg)
var eZC=_gd(x[41],tYC,e_,d_)
if(eZC){
var b1C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aXC.wxXCkey=3
eZC(b1C,b1C,aXC,gg)
gg.f=cur_globalf
}
else _w(tYC,x[41],2,18)
lWC.pop()
return r
}
e_[x[41]]={f:m28,j:[],i:[],ti:[x[42]],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/classify/classify.wxss']=setCssToHead(["body { width: 100%; height: 150%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"body-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; width: 100%; background-color: black; }\n.",[1],"top-menu-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; white-space: nowrap; width: 100%; background-color: orange; height: ",[0,80],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view { display: inline-block; white-space: nowrap; height: 100%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: white; line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: rgba(0, 170, 255, 1); line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; background: rgba(0, 170, 255, 1); }\n.",[1],"swiper-box-list { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; height: auto; background-color: #000000; }\n.",[1],"swiper-one-list { height: 100%; width: 100%; }\n.",[1],"swiper { height: ",[0,360],"; }\n.",[1],"slideimage { width: 100%; }\n.",[1],"filmsarea { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"oneline { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"title { font-size: larger; color: orange; padding-left: ",[0,50],"; margin-bottom: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"filmsline { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"filmname { color: white; font-size: small; }\n.",[1],"film { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"filmpic { width: ",[0,245.9],"; height: ",[0,330],"; }\n",],undefined,{path:"./pages/classify/classify.wxss"});    
__wxAppCode__['pages/classify/classify.wxml']=$gwx('./pages/classify/classify.wxml');

__wxAppCode__['pages/hot/hot.wxss']=setCssToHead(["body { height: 220%; width: 100%; }\n.",[1],"play-video { height: ",[0,400],"; width: 98%; margin-top: ",[0,7],"; margin-left: ",[0,10],"; margin-right: ",[0,10],"; }\n.",[1],"card1 { height: ",[0,640],"; width: 95%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background-color: white; margin: ",[0,0]," ",[0,20],"; -webkit-border-radius: ",[0,20],"; border-radius: ",[0,20],"; -webkit-box-shadow: ",[0,0]," ",[0,10]," ",[0,3]," ",[0,10]," #C0C0C0; box-shadow: ",[0,0]," ",[0,10]," ",[0,3]," ",[0,10]," #C0C0C0; }\n.",[1],"card2 { height: ",[0,640],"; width: 95%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background-color: white; margin: ",[0,50]," ",[0,20],"; -webkit-border-radius: ",[0,20],"; border-radius: ",[0,20],"; -webkit-box-shadow: ",[0,0]," ",[0,10]," ",[0,3]," ",[0,10]," #C0C0C0; box-shadow: ",[0,0]," ",[0,10]," ",[0,3]," ",[0,10]," #C0C0C0; }\n.",[1],"directorid { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: ",[0,80],"; width: 95%; }\n.",[1],"nickname { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"follow { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"namepic { height: ",[0,80],"; width: ",[0,80],"; border: ",[0,2]," solid #707070; -webkit-border-radius: ",[0,100],"; border-radius: ",[0,100],"; margin-left: ",[0,20],"; }\n.",[1],"namew { margin-top: ",[0,10],"; margin-left: ",[0,20],"; margin-right: ",[0,20],"; }\n.",[1],"comment { height: ",[0,50],"; width: ",[0,50],"; margin: ",[0,0]," ",[0,20],"; margin-left: ",[0,100],"; }\n.",[1],"like { height: ",[0,50],"; width: ",[0,50],"; margin: ",[0,0]," ",[0,20],"; }\n.",[1],"more { height: ",[0,50],"; width: ",[0,50],"; margin: ",[0,0]," ",[0,20],"; }\n.",[1],"btn { font-size: x-small; height: ",[0,50],"; width: ",[0,100],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin-top: ",[0,20],"; }\n.",[1],"fword { font-size: xx-small; color: black; position: fixed; margin-left: ",[0,10],"; }\n.",[1],"followicon { height: ",[0,40],"; width: ",[0,40],"; position: fixed; padding-left: ",[0,10],"; }\n.",[1],"action { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-top: ",[0,20],"; }\n.",[1],"rec { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"recpic { margin-top: ",[0,7],"; height: ",[0,400],"; width: ",[0,700],"; margin-left: ",[0,10],"; margin-right: ",[0,10],"; }\n.",[1],"cardtitle { font-size: large; color: black; margin: ",[0,30]," ",[0,0],"; }\n.",[1],"container { height: 100%; background-color: black; }\n.",[1],"logo { height: ",[0,200],"; width: ",[0,200],"; margin-top: ",[0,200],"; }\n.",[1],"t1 { color: white; }\n",],undefined,{path:"./pages/hot/hot.wxss"});    
__wxAppCode__['pages/hot/hot.wxml']=$gwx('./pages/hot/hot.wxml');

__wxAppCode__['pages/login/login.wxss']=setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"lg-back { height: 100%; background-color: white; }\n.",[1],"logo { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; }\n.",[1],"itemView { height: 10%; border: ",[0,1]," solid black; -webkit-border-radius: 2px; border-radius: 2px; background-color: #F8F8FF; }\n.",[1],"action-row { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"Reg { color: black; }\n",],undefined,{path:"./pages/login/login.wxss"});    
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/open/open.wxss']=setCssToHead(["body{ height: 100%; width: 100%; }\n.",[1],"test1{ height: 50%; width: 80%; }\n",],undefined,{path:"./pages/open/open.wxss"});    
__wxAppCode__['pages/open/open.wxml']=$gwx('./pages/open/open.wxml');

__wxAppCode__['pages/profile/profile.wxss']=setCssToHead(["body { height: 100%; width: 100%; }\n.",[1],"background { height: 100%; background-color: #000000; }\n.",[1],"picbox { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; background-color: #000000; height: ",[0,360],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"profilepic { width: ",[0,120],"; height: ",[0,120],"; -webkit-border-radius: ",[0,60],"; border-radius: ",[0,60],"; }\n.",[1],"change { color: white; font-size: x-small; margin-top: ",[0,20],"; }\n.",[1],"information-card { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: ",[0,600],"; margin-top: ",[0,100],"; color: #E80080; }\n.",[1],"title-line { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; height: ",[0,600],"; margin-left: ",[0,50],"; }\n.",[1],"infoline { height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"info-title { color: #888888; margin-left: ",[0,20],"; font-size: x-small; }\n.",[1],"info-content { color: white; margin-left: ",[0,50],"; font-size: small; }\n.",[1],"content-line { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: ",[0,600],"; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"content-space { margin-left: ",[0,200],"; }\n.",[1],"edit-button { width: 100%; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; margin-top: ",[0,50],"; }\n.",[1],"edit-text { color: #929292; font-size: large; }\n.",[1],"film-upload{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; height: ",[0,60],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"film-upload-text{ color: white; font-size: middle; }\n",],undefined,{path:"./pages/profile/profile.wxss"});    
__wxAppCode__['pages/profile/profile.wxml']=$gwx('./pages/profile/profile.wxml');

__wxAppCode__['pages/register/register.wxss']=setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"Reg-back { height: 100%; background-color: white; }\n.",[1],"logo { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; }\n.",[1],"itemView { height: 10%; border: ",[0,1]," solid black; -webkit-border-radius: 2px; border-radius: 2px; background-color: #F8F8FF; }\n",],undefined,{path:"./pages/register/register.wxss"});    
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/Swiper-detail/Swiper-detail.wxss']=setCssToHead(["body { height: 100%; width: 100%; }\n.",[1],"container { height: 100%; width: 100%; }\n.",[1],"background { background-color: #888888; height: 100%; width: 100%; }\n.",[1],"fud { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: 100%; width: 100%; }\n.",[1],"notice { color: white; font-weight: 200; font-size: large; }\n",],undefined,{path:"./pages/Swiper-detail/Swiper-detail.wxss"});    
__wxAppCode__['pages/Swiper-detail/Swiper-detail.wxml']=$gwx('./pages/Swiper-detail/Swiper-detail.wxml');

__wxAppCode__['pages/videoplay1/videoplay1.wxss']=setCssToHead(["body { width: 100%; height: 200%; }\n.",[1],"super_center { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"hor_center { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"row { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"VP-back { height: 100%; }\n.",[1],"play-video { width: 100%; }\n.",[1],"V-intro { height: 50%; }\n.",[1],"video-info-card { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; height: ",[0,350],"; }\n.",[1],"video-pic-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: ",[0,297],"; width: ",[0,221.31],"; margin: ",[0,20]," ",[0,20]," ",[0,20],"; margin-bottom: ",[0,20],"; }\n.",[1],"video-pic-set { height: ",[0,297],"; width: 100%; }\n.",[1],"video-info-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,50],"; height: 100%; }\n.",[1],"actors { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; color: black; font-size: large; }\n.",[1],"com-write { height: 10%; border: ",[0,1]," solid black; -webkit-border-radius: 2px; border-radius: 2px; background-color: #F8F8FF; }\n.",[1],"V-com-area { position: fixed; bottom: 1%; left: 0; right: 0; }\n.",[1],"body-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; width: 100%; background-color: black; }\n.",[1],"top-menu-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; white-space: nowrap; width: 100%; background-color: orange; height: ",[0,80],"; top: 0; }\n.",[1],"top-menu-view .",[1],"menu-one-view { display: inline-block; white-space: nowrap; height: 100%; width: 50%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: white; line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: rgba(0, 170, 255, 1); line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; background: rgba(0, 170, 255, 1); }\n.",[1],"swiper-box-list { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; height: 60%; background-color:black; border: ",[0,5]," solid #000000; position: absolute; }\n.",[1],"swiper-one-list { height: 100%; width: 100%; }\n.",[1],"swiper { height: ",[0,360],"; }\n.",[1],"slideimage { width: 100%; }\n.",[1],"filmsarea { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"oneline { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"title { font-size: larger; color: orange; padding-left: ",[0,50],"; margin-bottom: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"filmsline { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"filmname { color: #FFA500; font-size: large; }\n.",[1],"film { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"filmpic { width: ",[0,245.9],"; height: ",[0,330],"; }\n.",[1],"new_comment { width: 100%; height: ",[0,80],"; }\n.",[1],"latest_comment { font-size: large; color: white; margin-left: ",[0,40],"; }\n.",[1],"videocomment { width: 100%; height: 26%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: relative; }\n.",[1],"user_info { height: auto; width: auto; min-width: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin: ",[0,20]," ",[0,20],"; position: absolute; }\n.",[1],"user_info_name { width: auto; min-width: ",[0,40],"; max-width: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"content_box { margin-left: ",[0,20],"; margin-right: ",[0,40],"; margin-top: ",[0,50],"; margin-bottom: ",[0,20],"; position: absolute; height: 60%; width: 95%; }\n.",[1],"text_i { display: inline-block; width: 100%; }\n.",[1],"content_text { display: inline-block; width: 100%; text-align: justify; font-size: medium; color: white; }\n.",[1],"user_info_name_text { font-size: small; color: white; }\n.",[1],"comment_profile_pic { height: ",[0,80],"; width: ",[0,80],"; border: ",[0,2],"; -webkit-border-radius: ",[0,150],"; border-radius: ",[0,150],"; }\n.",[1],"comment_text { display: inline-block; font-size: medium; color: #1AAD19; width: 100%; }\n.",[1],"comment_box { height: 100%; left: 15%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; position: absolute; width: 80%; }\n.",[1],"time { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: 20%; right: 3%; position: absolute; }\n.",[1],"time_text { font-size: small; color: #BBBBBB; }\n.",[1],"border_line { position: relative; width: 80%; left: 10%; right: 10%; height: ",[0,2],"; border-bottom: ",[0,2]," solid #777777; }\n.",[1],"comment_show{ width: 25%; height: 15%; position: absolute; bottom: 0; right: 0; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; font-size: x-small; color: white; }\n.",[1],"like_button{ height: 16%; width: 16%; position: fixed; bottom: 4%; right: 5%; }\n",],undefined,{path:"./pages/videoplay1/videoplay1.wxss"});    
__wxAppCode__['pages/videoplay1/videoplay1.wxml']=$gwx('./pages/videoplay1/videoplay1.wxml');

__wxAppCode__['pages/videoplay2/videoplay2.wxss']=setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"VP-back { height: 100%; }\n.",[1],"play-video { width: 100%; }\n.",[1],"V-intro { height: 50%; }\n.",[1],"video-info-card { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; height: ",[0,350],"; }\n.",[1],"video-pic-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: ",[0,297],"; width: ",[0,221.31],"; margin: ",[0,20]," ",[0,20]," ",[0,20],"; margin-bottom: ",[0,20],"; }\n.",[1],"video-pic-set { height: ",[0,297],"; width: 100%; }\n.",[1],"video-info-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,50],"; height: 100%; }\n.",[1],"actors { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; color: black; font-size: large; }\n.",[1],"com-write { height: 10%; border: ",[0,1]," solid black; -webkit-border-radius: 2px; border-radius: 2px; background-color: #F8F8FF; }\n.",[1],"V-com-area { position: fixed; bottom: 1%; left: 0; right: 0; }\n.",[1],"body-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; width: 100%; background-color: black; }\n.",[1],"top-menu-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; white-space: nowrap; width: 100%; background-color: orange; height: ",[0,80],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view { display: inline-block; white-space: nowrap; height: 100%; width: 50%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: white; line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: rgba(0, 170, 255, 1); line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; background: rgba(0, 170, 255, 1); }\n.",[1],"swiper-box-list { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; height: 60%; background-color: #FFFFFF; border: ",[0,5]," solid #000000; }\n.",[1],"swiper-one-list { height: 100%; width: 100%; }\n.",[1],"swiper { height: ",[0,360],"; }\n.",[1],"slideimage { width: 100%; }\n.",[1],"filmsarea { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"oneline { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"title { font-size: larger; color: orange; padding-left: ",[0,50],"; margin-bottom: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"filmsline { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"filmname { color: #FFA500; font-size: large; }\n.",[1],"film { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"filmpic { width: ",[0,245.9],"; height: ",[0,330],"; }\n",],undefined,{path:"./pages/videoplay2/videoplay2.wxss"});    
__wxAppCode__['pages/videoplay2/videoplay2.wxml']=$gwx('./pages/videoplay2/videoplay2.wxml');

__wxAppCode__['pages/videoplay3/videoplay3.wxss']=setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"VP-back { height: 100%; }\n.",[1],"play-video { width: 100%; }\n.",[1],"V-intro { height: 50%; }\n.",[1],"video-info-card { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; height: ",[0,350],"; }\n.",[1],"video-pic-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: ",[0,297],"; width: ",[0,221.31],"; margin: ",[0,20]," ",[0,20]," ",[0,20],"; margin-bottom: ",[0,20],"; }\n.",[1],"video-pic-set { height: ",[0,297],"; width: 100%; }\n.",[1],"video-info-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,50],"; height: 100%; }\n.",[1],"actors { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; color: black; font-size: large; }\n.",[1],"com-write { height: 10%; border: ",[0,1]," solid black; -webkit-border-radius: 2px; border-radius: 2px; background-color: #F8F8FF; }\n.",[1],"V-com-area { position: fixed; bottom: 1%; left: 0; right: 0; }\n.",[1],"body-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; width: 100%; background-color: black; }\n.",[1],"top-menu-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; white-space: nowrap; width: 100%; background-color: orange; height: ",[0,80],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view { display: inline-block; white-space: nowrap; height: 100%; width: 50%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: white; line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: rgba(0, 170, 255, 1); line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; background: rgba(0, 170, 255, 1); }\n.",[1],"swiper-box-list { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; height: 60%; background-color: #FFFFFF; border: ",[0,5]," solid #000000; }\n.",[1],"swiper-one-list { height: 100%; width: 100%; }\n.",[1],"swiper { height: ",[0,360],"; }\n.",[1],"slideimage { width: 100%; }\n.",[1],"filmsarea { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"oneline { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"title { font-size: larger; color: orange; padding-left: ",[0,50],"; margin-bottom: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"filmsline { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"filmname { color: #FFA500; font-size: large; }\n.",[1],"film { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"filmpic { width: ",[0,245.9],"; height: ",[0,330],"; }\n",],undefined,{path:"./pages/videoplay3/videoplay3.wxss"});    
__wxAppCode__['pages/videoplay3/videoplay3.wxml']=$gwx('./pages/videoplay3/videoplay3.wxml');

__wxAppCode__['pages/videoplay4/videoplay4.wxss']=setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"VP-back { height: 100%; }\n.",[1],"play-video { width: 100%; }\n.",[1],"V-intro { height: 50%; }\n.",[1],"video-info-card { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; height: ",[0,350],"; }\n.",[1],"video-pic-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: ",[0,297],"; width: ",[0,221.31],"; margin: ",[0,20]," ",[0,20]," ",[0,20],"; margin-bottom: ",[0,20],"; }\n.",[1],"video-pic-set { height: ",[0,297],"; width: 100%; }\n.",[1],"video-info-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,50],"; height: 100%; }\n.",[1],"actors { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; color: black; font-size: large; }\n.",[1],"com-write { height: 10%; border: ",[0,1]," solid black; -webkit-border-radius: 2px; border-radius: 2px; background-color: #F8F8FF; }\n.",[1],"V-com-area { position: fixed; bottom: 1%; left: 0; right: 0; }\n.",[1],"body-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; width: 100%; background-color: black; }\n.",[1],"top-menu-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; white-space: nowrap; width: 100%; background-color: orange; height: ",[0,80],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view { display: inline-block; white-space: nowrap; height: 100%; width: 50%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: white; line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: rgba(0, 170, 255, 1); line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; background: rgba(0, 170, 255, 1); }\n.",[1],"swiper-box-list { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; height: 60%; background-color: #FFFFFF; border: ",[0,5]," solid #000000; }\n.",[1],"swiper-one-list { height: 100%; width: 100%; }\n.",[1],"swiper { height: ",[0,360],"; }\n.",[1],"slideimage { width: 100%; }\n.",[1],"filmsarea { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"oneline { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"title { font-size: larger; color: orange; padding-left: ",[0,50],"; margin-bottom: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"filmsline { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"filmname { color: #FFA500; font-size: large; }\n.",[1],"film { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"filmpic { width: ",[0,245.9],"; height: ",[0,330],"; }\n",],undefined,{path:"./pages/videoplay4/videoplay4.wxss"});    
__wxAppCode__['pages/videoplay4/videoplay4.wxml']=$gwx('./pages/videoplay4/videoplay4.wxml');

__wxAppCode__['pages/videoplay5/videoplay5.wxss']=setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"VP-back { height: 100%; }\n.",[1],"play-video { width: 100%; }\n.",[1],"V-intro { height: 50%; }\n.",[1],"video-info-card { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; height: ",[0,350],"; }\n.",[1],"video-pic-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: ",[0,297],"; width: ",[0,221.31],"; margin: ",[0,20]," ",[0,20]," ",[0,20],"; margin-bottom: ",[0,20],"; }\n.",[1],"video-pic-set { height: ",[0,297],"; width: 100%; }\n.",[1],"video-info-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,50],"; height: 100%; }\n.",[1],"actors { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; color: black; font-size: large; }\n.",[1],"com-write { height: 10%; border: ",[0,1]," solid black; -webkit-border-radius: 2px; border-radius: 2px; background-color: #F8F8FF; }\n.",[1],"V-com-area { position: fixed; bottom: 1%; left: 0; right: 0; }\n.",[1],"body-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; width: 100%; background-color: black; }\n.",[1],"top-menu-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; white-space: nowrap; width: 100%; background-color: orange; height: ",[0,80],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view { display: inline-block; white-space: nowrap; height: 100%; width: 50%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: white; line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: rgba(0, 170, 255, 1); line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; background: rgba(0, 170, 255, 1); }\n.",[1],"swiper-box-list { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; height: 60%; background-color: #FFFFFF; border: ",[0,5]," solid #000000; }\n.",[1],"swiper-one-list { height: 100%; width: 100%; }\n.",[1],"swiper { height: ",[0,360],"; }\n.",[1],"slideimage { width: 100%; }\n.",[1],"filmsarea { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"oneline { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"title { font-size: larger; color: orange; padding-left: ",[0,50],"; margin-bottom: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"filmsline { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"filmname { color: #FFA500; font-size: large; }\n.",[1],"film { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"filmpic { width: ",[0,245.9],"; height: ",[0,330],"; }\n",],undefined,{path:"./pages/videoplay5/videoplay5.wxss"});    
__wxAppCode__['pages/videoplay5/videoplay5.wxml']=$gwx('./pages/videoplay5/videoplay5.wxml');

__wxAppCode__['pages/videoplay6/videoplay6.wxss']=setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"VP-back { height: 100%; }\n.",[1],"play-video { width: 100%; }\n.",[1],"V-intro { height: 50%; }\n.",[1],"video-info-card { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; height: ",[0,350],"; }\n.",[1],"video-pic-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: ",[0,297],"; width: ",[0,221.31],"; margin: ",[0,20]," ",[0,20]," ",[0,20],"; margin-bottom: ",[0,20],"; }\n.",[1],"video-pic-set { height: ",[0,297],"; width: 100%; }\n.",[1],"video-info-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,50],"; height: 100%; }\n.",[1],"actors { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; color: black; font-size: large; }\n.",[1],"com-write { height: 10%; border: ",[0,1]," solid black; -webkit-border-radius: 2px; border-radius: 2px; background-color: #F8F8FF; }\n.",[1],"V-com-area { position: fixed; bottom: 1%; left: 0; right: 0; }\n.",[1],"body-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; width: 100%; background-color: black; }\n.",[1],"top-menu-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; white-space: nowrap; width: 100%; background-color: orange; height: ",[0,80],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view { display: inline-block; white-space: nowrap; height: 100%; width: 50%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: white; line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: rgba(0, 170, 255, 1); line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; background: rgba(0, 170, 255, 1); }\n.",[1],"swiper-box-list { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; height: 60%; background-color: #FFFFFF; border: ",[0,5]," solid #000000; }\n.",[1],"swiper-one-list { height: 100%; width: 100%; }\n.",[1],"swiper { height: ",[0,360],"; }\n.",[1],"slideimage { width: 100%; }\n.",[1],"filmsarea { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"oneline { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"title { font-size: larger; color: orange; padding-left: ",[0,50],"; margin-bottom: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"filmsline { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"filmname { color: #FFA500; font-size: large; }\n.",[1],"film { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"filmpic { width: ",[0,245.9],"; height: ",[0,330],"; }\n",],undefined,{path:"./pages/videoplay6/videoplay6.wxss"});    
__wxAppCode__['pages/videoplay6/videoplay6.wxml']=$gwx('./pages/videoplay6/videoplay6.wxml');

__wxAppCode__['pages/videosearch/videosearch.wxss']=undefined;    
__wxAppCode__['pages/videosearch/videosearch.wxml']=$gwx('./pages/videosearch/videosearch.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
       plus.webview.getLaunchWebview().evalJS('__uniAppViewReadyCallback__("' + plus.webview.currentWebview()
           .id + '")')
})();

