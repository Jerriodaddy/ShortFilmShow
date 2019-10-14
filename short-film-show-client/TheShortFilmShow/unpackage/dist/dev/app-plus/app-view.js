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
Z([3,'container'])
Z([3,'background'])
Z([3,'fud'])
Z([3,'notice'])
Z([3,'Function under development'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container column'])
Z([3,'card'])
Z([3,'rec'])
Z([3,'../videoplay1/videoplay1'])
Z([3,'__e'])
Z([3,'play-video'])
Z([[4],[[5],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'videoErrorCallback']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'5285890787780845965'])
Z([3,'http://1258775435.vod2.myqcloud.com/2512c371vodcq1258775435/fbd4a1c45285890787780845965/GtCUUl8lkqIA.mp4'])
Z([3,'cardtitle'])
Z([3,'Vendetta (ven·dét·ta)'])
Z(z[1])
Z(z[2])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'body-view'])
Z([3,'top-menu-view'])
Z([[7],[3,'scrollLeft']])
Z([3,'true'])
Z([3,'index'])
Z([3,'menuTabs'])
Z([[7],[3,'menuTabs']])
Z(z[4])
Z([3,'__e'])
Z([3,'menu-one-view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'swichMenu']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'+'],[1,'tabNum'],[[7],[3,'index']]])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[[7],[3,'index']]],[1,'menu-one-act'],[1,'menu-one']]]])
Z([3,'menu-one-txt'])
Z([a,[[6],[[7],[3,'menuTabs']],[3,'name']]])
Z([3,'menu-one-bottom'])
Z([3,'menu-one-bottom-color'])
Z(z[8])
Z([3,'swiper-box-list'])
Z([[7],[3,'currentTab']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([3,'index1'])
Z([3,'swiperDate'])
Z([[7],[3,'swiperDateList']])
Z(z[22])
Z(z[8])
Z([3,'swiper-one-list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadMore']],[[4],[[5],[[7],[3,'index1']]]]]]]]]]]])
Z(z[3])
Z([1,true])
Z(z[30])
Z([3,'swiper'])
Z([1,500])
Z([[7],[3,'black']])
Z([[7],[3,'white']])
Z(z[30])
Z([1,3000])
Z([3,'../videoplay1/videoplay1'])
Z([3,'slideimage'])
Z([3,'../../static/assets/Andrea Facheris.jpg'])
Z([3,'../videoplay2/videoplay2'])
Z(z[39])
Z([3,'../../static/assets/Sunnie Du.jpg'])
Z([3,'../videoplay3/videoplay3'])
Z(z[39])
Z([3,'../../static/assets/Matt Bowron.jpg'])
Z([3,'filmsarea'])
Z([3,'title'])
Z([3,'Default Column1'])
Z(z[8])
Z([3,'oneline'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'getMoreAllVideoList']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[3])
Z([3,'filmsblock'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'videoList']])
Z([3,'id'])
Z([3,'film'])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navigatToVideoPlay']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'videoList']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]]]]]]]]]]]]]]])
Z([3,'filmpic'])
Z([[2,'+'],[[7],[3,'serverUrl']],[[6],[[7],[3,'item']],[3,'coverPath']]])
Z([3,'filmname'])
Z([a,[[6],[[7],[3,'item']],[3,'videoName']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'lg-back'])
Z([3,'picture'])
Z([3,'logo'])
Z([3,'aspectFit'])
Z([3,'../../static/assets/logo.png'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'login']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'itemView'])
Z([3,'input'])
Z([3,'username'])
Z([3,'Username'])
Z(z[7])
Z(z[8])
Z([3,'password'])
Z([3,'Password'])
Z([3,'button-area'])
Z([3,'loginBtn'])
Z([3,'submit'])
Z([3,'Login'])
Z(z[5])
Z([3,'registerBtn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'register']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'Sign up now!'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'test1'])
Z([3,'../../static/assets/logo-empty.png'])
Z(z[0])
Z([3,'../../static/assets/wheel.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'background'])
Z([3,'picbox'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'upload']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'profilepic'])
Z([[7],[3,'faceUrl']])
Z([a,[[6],[[7],[3,'userInfo']],[3,'username']]])
Z([3,'data_box column_center'])
Z([3,'data_box_text'])
Z([3,'Follow'])
Z([3,'data_border'])
Z(z[9])
Z([3,'Fans'])
Z(z[11])
Z(z[9])
Z([3,'Donate'])
Z([3,'container_profile column hor_center'])
Z([3,'drawer column_center'])
Z([3,'icon-proflie'])
Z([3,'../../static/icons/history.png'])
Z([3,'profile_title column_center'])
Z([3,'profiel_title_text'])
Z([3,'navigator-hover'])
Z([3,'../watchhistory/watchhistory'])
Z([a,[[7],[3,'history']]])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[21])
Z(z[22])
Z(z[23])
Z([3,'../profileinfo/profileinfo'])
Z([3,'Edit\n					information'])
Z(z[2])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'logout']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'logout'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'background'])
Z([3,'information-card'])
Z([3,'title-line'])
Z([3,'info-title'])
Z([3,'Nicke name'])
Z(z[3])
Z([3,'ID'])
Z(z[3])
Z([3,'Gender'])
Z(z[3])
Z([3,'Birthday'])
Z(z[3])
Z([3,'Prefer'])
Z([3,'content-line'])
Z([3,'info-content conteng-space'])
Z([3,'content'])
Z(z[14])
Z(z[15])
Z(z[14])
Z(z[15])
Z(z[14])
Z(z[15])
Z(z[14])
Z(z[15])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'reg-back'])
Z([3,'picture'])
Z([3,'logo'])
Z([3,'aspectFit'])
Z([3,'../../static/assets/logo.png'])
Z([3,'formReset'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'register']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'itemView'])
Z([3,'input'])
Z([3,'email'])
Z([3,'Email'])
Z(z[8])
Z(z[9])
Z([3,'username'])
Z([3,'Username'])
Z(z[8])
Z(z[9])
Z([3,'password'])
Z([3,'Password'])
Z(z[8])
Z(z[9])
Z([3,'vPassword'])
Z([3,'Vertify Password'])
Z([3,'btn-row'])
Z([3,'register'])
Z([3,'submit'])
Z([3,'Complete!'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'cropper-wrapper'])
Z([3,'height:617px;'])
Z([3,'__e'])
Z(z[3])
Z(z[3])
Z([3,'cropper'])
Z(z[6])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'touchStart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'touchMove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'touchEnd']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[6],[[7],[3,'cropperOpt']],[3,'width']]],[1,';']],[[2,'+'],[[2,'+'],[1,'height:'],[[6],[[7],[3,'cropperOpt']],[3,'height']]],[1,';']]])
Z([3,'cropper-buttons'])
Z(z[3])
Z([3,'upload'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'uploadTap']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'Browse Album'])
Z(z[3])
Z([3,'getCropperImage'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'getCropperImage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'Confirm'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'VP-back'])
Z([3,'VP-screen'])
Z([3,'screen'])
Z([3,'__e'])
Z([3,'play-video'])
Z([[4],[[5],[[4],[[5],[[5],[1,'error']],[[4],[[5],[[4],[[5],[[5],[1,'videoErrorCallback']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'filmUrl']])
Z([3,'filmmaker_title column_center'])
Z([3,'filmmaker_title_text'])
Z([3,'Director'])
Z([3,'data_box column_center'])
Z([3,'filmmaker-pic'])
Z([3,'../../static/icons/logo.png'])
Z([3,'filmmaker-name column_center'])
Z([3,'filmmaker-name-text'])
Z([3,'Guetta Xia'])
Z([3,'follow_button'])
Z([3,'button-hover'])
Z([3,'true'])
Z([3,'mini'])
Z([3,'primary'])
Z([3,'Follow'])
Z([3,'control_interface'])
Z([3,'top-menu-view'])
Z([[7],[3,'scrollLeft']])
Z(z[18])
Z([3,'index'])
Z([3,'menuTabs'])
Z([[7],[3,'menuTabs']])
Z(z[26])
Z(z[3])
Z([3,'menu-one-view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'swichMenu']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'+'],[1,'tabNum'],[[7],[3,'index']]])
Z([[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'currentTab']],[[7],[3,'index']]],[1,'menu-one-act'],[1,'menu-one']]]])
Z([3,'menu-one-txt'])
Z([a,[[6],[[7],[3,'menuTabs']],[3,'name']]])
Z([3,'menu-one-bottom'])
Z([3,'menu-one-bottom-color'])
Z(z[3])
Z([3,'swiper-box-list'])
Z([[7],[3,'currentTab']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'swiperChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'300'])
Z([3,'index1'])
Z([3,'swiperDate'])
Z([[7],[3,'swiperDateList']])
Z(z[44])
Z(z[3])
Z([3,'swiper-one-list'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadMore']],[[4],[[5],[[7],[3,'index1']]]]]]]]]]]])
Z(z[18])
Z([3,'video-info-card'])
Z([3,'video-pic-box'])
Z([3,'video-pic-set'])
Z([3,'../../static/assets/images2.jpg'])
Z([3,'video-info-box'])
Z([3,'filmname'])
Z([3,'Vendetta (ven·dét·ta)'])
Z([3,'actors'])
Z([3,'actor-name'])
Z([3,'Film Maker:'])
Z(z[60])
Z([3,'Andrea Facheris'])
Z([3,'filmintro'])
Z(z[3])
Z(z[49])
Z(z[50])
Z(z[18])
Z([3,'new_comment hor_center'])
Z([3,'latest_comment hor_center'])
Z([3,'Latest comment'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'comments']])
Z([3,'id'])
Z([3,'videocomment'])
Z([3,'border_line'])
Z([3,'user_info'])
Z([3,'comment_profile_pic'])
Z(z[12])
Z([3,'user_info_name'])
Z([3,'user_info_name_text'])
Z([a,[[6],[[7],[3,'item']],[3,'fromUserId']]])
Z([3,'comment_box'])
Z([3,'time'])
Z([3,'time_text'])
Z([a,[[6],[[7],[3,'item']],[3,'createDate']]])
Z([3,'content_box'])
Z([3,'content_text'])
Z([a,[[2,'+'],[1,''],[[6],[[7],[3,'item']],[3,'comment']]]])
Z([3,'text_i'])
Z([3,'comment_show super_center'])
Z([3,'Show more'])
Z([3,'V-com-area'])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'comment']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'com-write'])
Z([3,'input'])
Z([3,'comment'])
Z([3,'Write some comment?'])
Z([3,'submit'])
Z([3,'send'])
Z([3,'like_button'])
Z([3,'aspectFit'])
Z([3,'../../static/icons/like2.png'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'video-name'])
Z([3,'section title'])
Z([3,'Viedo name'])
Z([3,'__e'])
Z([3,'name'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'name']],[1,'$event']],[[4],[[5]]]]]]]],[[4],[[5],[[5],[1,'clearInput']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'please enter video name:'])
Z([[7],[3,'name']])
Z([[7],[3,'showClearIcon']])
Z(z[3])
Z([3,'uni-icon uni-icon-clear'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clearIcon']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'video-discription'])
Z(z[1])
Z([3,'Video discription'])
Z(z[3])
Z([3,'discription'])
Z([[4],[[5],[[4],[[5],[[5],[1,'input']],[[4],[[5],[[5],[[4],[[5],[[5],[1,'__set_model']],[[4],[[5],[[5],[[5],[[5],[1,'']],[1,'disription']],[1,'$event']],[[4],[[5]]]]]]]],[[4],[[5],[[5],[1,'clearInput']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,' please enter video discription'])
Z([[7],[3,'disription']])
Z(z[8])
Z(z[3])
Z(z[10])
Z(z[11])
Z([3,'Choose-class'])
Z([3,'uni-title uni-common-pl'])
Z([3,'video classification'])
Z([3,'list-cell'])
Z([3,'list-cell-left'])
Z([3,'class'])
Z([3,'list-cell-picker'])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'bindPickerChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'array']])
Z([[7],[3,'index']])
Z([3,'uni-input'])
Z([a,[[6],[[7],[3,'array']],[[7],[3,'index']]]])
Z([3,'locate-directory'])
Z([3,'path'])
Z([a,[[7],[3,'path']]])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'findlocation']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([3,'primary'])
Z([3,'press me to locate'])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'uploadvideo']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[43])
Z([3,'页upload'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container column'])
Z([3,'history_a column'])
Z([3,'__i0__'])
Z([3,'c'])
Z([[7],[3,'history_card']])
Z([3,'card_loop'])
Z([3,'__e'])
Z([3,'history_card row hor_center'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'jumpvp']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'history_t super_center'])
Z([3,'history_fn'])
Z([a,[[7],[3,'history']]])
Z([3,'history_ia super_center'])
Z([3,'history_img'])
Z([3,'aspectFit'])
Z([3,'../../static/assets/Tom Eastwood.jpg'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/Swiper-detail/Swiper-detail.wxml','./pages/filmlibrary/filmlibrary.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/open/open.wxml','./pages/profile/profile.wxml','./pages/profileinfo/profileinfo.wxml','./pages/register/register.wxml','./pages/upload/upload.wxml','./pages/videoplay/videoplay.wxml','./pages/videosearch/videosearch.wxml','./pages/watchhistory/watchhistory.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',1,e,s,gg)
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_n('text')
_rz(z,fE,'class',3,e,s,gg)
var cF=_oz(z,4,e,s,gg)
_(fE,cF)
_(oD,fE)
_(xC,oD)
_(oB,xC)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var oH=_n('view')
_rz(z,oH,'class',0,e,s,gg)
var cI=_n('view')
_rz(z,cI,'class',1,e,s,gg)
var oJ=_mz(z,'navigator',['class',2,'url',1],[],e,s,gg)
var lK=_mz(z,'video',['controls',-1,'binderror',4,'class',1,'data-event-opts',2,'id',3,'src',4],[],e,s,gg)
_(oJ,lK)
var aL=_n('text')
_rz(z,aL,'class',9,e,s,gg)
var tM=_oz(z,10,e,s,gg)
_(aL,tM)
_(oJ,aL)
_(cI,oJ)
_(oH,cI)
var eN=_n('view')
_rz(z,eN,'class',11,e,s,gg)
var bO=_mz(z,'navigator',['class',12,'url',1],[],e,s,gg)
var oP=_mz(z,'video',['controls',-1,'binderror',14,'class',1,'data-event-opts',2,'id',3,'src',4],[],e,s,gg)
_(bO,oP)
var xQ=_n('text')
_rz(z,xQ,'class',19,e,s,gg)
var oR=_oz(z,20,e,s,gg)
_(xQ,oR)
_(bO,xQ)
_(eN,bO)
_(oH,eN)
_(r,oH)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cT=_n('view')
_rz(z,cT,'class',0,e,s,gg)
var hU=_mz(z,'scroll-view',['class',1,'scrollLeft',1,'scrollX',2],[],e,s,gg)
var oV=_v()
_(hU,oV)
var cW=function(lY,oX,aZ,gg){
var e2=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2,'id',3],[],lY,oX,gg)
var b3=_n('view')
_rz(z,b3,'class',12,lY,oX,gg)
var o4=_n('view')
_rz(z,o4,'class',13,lY,oX,gg)
var x5=_oz(z,14,lY,oX,gg)
_(o4,x5)
_(b3,o4)
var o6=_n('view')
_rz(z,o6,'class',15,lY,oX,gg)
var f7=_n('view')
_rz(z,f7,'class',16,lY,oX,gg)
_(o6,f7)
_(b3,o6)
_(e2,b3)
_(aZ,e2)
return aZ
}
oV.wxXCkey=2
_2z(z,6,cW,e,s,gg,oV,'menuTabs','index','index')
_(cT,hU)
var c8=_mz(z,'swiper',['bindchange',17,'class',1,'current',2,'data-event-opts',3,'duration',4],[],e,s,gg)
var h9=_v()
_(c8,h9)
var o0=function(oBB,cAB,lCB,gg){
var tEB=_n('swiper-item')
var eFB=_mz(z,'scroll-view',['bindscrolltolower',26,'class',1,'data-event-opts',2,'scrollY',3],[],oBB,cAB,gg)
var bGB=_mz(z,'swiper',['autoplay',30,'circular',1,'class',2,'duration',3,'indicatorActiveColor',4,'indicatorColor',5,'indicatorDots',6,'interval',7],[],oBB,cAB,gg)
var oHB=_n('swiper-item')
var xIB=_n('navigator')
_rz(z,xIB,'url',38,oBB,cAB,gg)
var oJB=_mz(z,'image',['mode',-1,'class',39,'src',1],[],oBB,cAB,gg)
_(xIB,oJB)
_(oHB,xIB)
_(bGB,oHB)
var fKB=_n('swiper-item')
var cLB=_n('navigator')
_rz(z,cLB,'url',41,oBB,cAB,gg)
var hMB=_mz(z,'image',['mode',-1,'class',42,'src',1],[],oBB,cAB,gg)
_(cLB,hMB)
_(fKB,cLB)
_(bGB,fKB)
var oNB=_n('swiper-item')
var cOB=_n('navigator')
_rz(z,cOB,'url',44,oBB,cAB,gg)
var oPB=_mz(z,'image',['mode',-1,'class',45,'src',1],[],oBB,cAB,gg)
_(cOB,oPB)
_(oNB,cOB)
_(bGB,oNB)
_(eFB,bGB)
var lQB=_n('view')
_rz(z,lQB,'class',47,oBB,cAB,gg)
var aRB=_n('view')
_rz(z,aRB,'class',48,oBB,cAB,gg)
var tSB=_oz(z,49,oBB,cAB,gg)
_(aRB,tSB)
_(lQB,aRB)
var eTB=_mz(z,'scroll-view',['bindscrolltolower',50,'class',1,'data-event-opts',2,'scrollX',3],[],oBB,cAB,gg)
var bUB=_n('view')
_rz(z,bUB,'class',54,oBB,cAB,gg)
var oVB=_v()
_(bUB,oVB)
var xWB=function(fYB,oXB,cZB,gg){
var o2B=_n('view')
_rz(z,o2B,'class',59,fYB,oXB,gg)
var c3B=_mz(z,'view',['bindtap',60,'data-event-opts',1],[],fYB,oXB,gg)
var o4B=_mz(z,'image',['mode',-1,'class',62,'src',1],[],fYB,oXB,gg)
_(c3B,o4B)
var l5B=_n('text')
_rz(z,l5B,'class',64,fYB,oXB,gg)
var a6B=_oz(z,65,fYB,oXB,gg)
_(l5B,a6B)
_(c3B,l5B)
_(o2B,c3B)
_(cZB,o2B)
return cZB
}
oVB.wxXCkey=2
_2z(z,57,xWB,oBB,cAB,gg,oVB,'item','__i0__','id')
_(eTB,bUB)
_(lQB,eTB)
_(eFB,lQB)
_(tEB,eFB)
_(lCB,tEB)
return lCB
}
h9.wxXCkey=2
_2z(z,24,o0,e,s,gg,h9,'swiperDate','index1','index1')
_(cT,c8)
_(r,cT)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var e8B=_n('view')
_rz(z,e8B,'class',0,e,s,gg)
var b9B=_n('view')
_rz(z,b9B,'class',1,e,s,gg)
var o0B=_mz(z,'image',['class',2,'mode',1,'src',2],[],e,s,gg)
_(b9B,o0B)
_(e8B,b9B)
var xAC=_mz(z,'form',['bindsubmit',5,'data-event-opts',1],[],e,s,gg)
var oBC=_n('view')
_rz(z,oBC,'class',7,e,s,gg)
var fCC=_mz(z,'input',['class',8,'name',1,'placeholder',2],[],e,s,gg)
_(oBC,fCC)
_(xAC,oBC)
var cDC=_n('view')
_rz(z,cDC,'class',11,e,s,gg)
var hEC=_mz(z,'input',['class',12,'name',1,'placeholder',2],[],e,s,gg)
_(cDC,hEC)
_(xAC,cDC)
var oFC=_n('view')
_rz(z,oFC,'class',15,e,s,gg)
var cGC=_mz(z,'button',['class',16,'formType',1],[],e,s,gg)
var oHC=_oz(z,18,e,s,gg)
_(cGC,oHC)
_(oFC,cGC)
var lIC=_mz(z,'button',['bindtap',19,'class',1,'data-event-opts',2],[],e,s,gg)
var aJC=_oz(z,22,e,s,gg)
_(lIC,aJC)
_(oFC,lIC)
_(xAC,oFC)
_(e8B,xAC)
_(r,e8B)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var eLC=_n('view')
var bMC=_mz(z,'image',['mode',-1,'class',0,'src',1],[],e,s,gg)
_(eLC,bMC)
var oNC=_mz(z,'image',['mode',-1,'class',2,'src',1],[],e,s,gg)
_(eLC,oNC)
_(r,eLC)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oPC=_n('view')
_rz(z,oPC,'class',0,e,s,gg)
var fQC=_n('view')
_rz(z,fQC,'class',1,e,s,gg)
var cRC=_mz(z,'view',['bindtap',2,'data-event-opts',1,'type',2],[],e,s,gg)
var hSC=_mz(z,'image',['class',5,'src',1],[],e,s,gg)
_(cRC,hSC)
_(fQC,cRC)
var oTC=_n('view')
var cUC=_oz(z,7,e,s,gg)
_(oTC,cUC)
_(fQC,oTC)
_(oPC,fQC)
var oVC=_n('view')
_rz(z,oVC,'class',8,e,s,gg)
var lWC=_n('text')
_rz(z,lWC,'class',9,e,s,gg)
var aXC=_oz(z,10,e,s,gg)
_(lWC,aXC)
_(oVC,lWC)
var tYC=_n('view')
_rz(z,tYC,'class',11,e,s,gg)
_(oVC,tYC)
var eZC=_n('text')
_rz(z,eZC,'class',12,e,s,gg)
var b1C=_oz(z,13,e,s,gg)
_(eZC,b1C)
_(oVC,eZC)
var o2C=_n('view')
_rz(z,o2C,'class',14,e,s,gg)
_(oVC,o2C)
var x3C=_n('text')
_rz(z,x3C,'class',15,e,s,gg)
var o4C=_oz(z,16,e,s,gg)
_(x3C,o4C)
_(oVC,x3C)
_(oPC,oVC)
var f5C=_n('view')
_rz(z,f5C,'class',17,e,s,gg)
var c6C=_n('view')
_rz(z,c6C,'class',18,e,s,gg)
var h7C=_mz(z,'image',['mode',-1,'class',19,'src',1],[],e,s,gg)
_(c6C,h7C)
var o8C=_n('view')
_rz(z,o8C,'class',21,e,s,gg)
var c9C=_mz(z,'navigator',['class',22,'hoverClass',1,'url',2],[],e,s,gg)
var o0C=_oz(z,25,e,s,gg)
_(c9C,o0C)
_(o8C,c9C)
_(c6C,o8C)
_(f5C,c6C)
var lAD=_n('view')
_rz(z,lAD,'class',26,e,s,gg)
var aBD=_mz(z,'image',['mode',-1,'class',27,'src',1],[],e,s,gg)
_(lAD,aBD)
var tCD=_n('view')
_rz(z,tCD,'class',29,e,s,gg)
var eDD=_mz(z,'navigator',['class',30,'hoverClass',1,'url',2],[],e,s,gg)
var bED=_oz(z,33,e,s,gg)
_(eDD,bED)
_(tCD,eDD)
_(lAD,tCD)
_(f5C,lAD)
_(oPC,f5C)
var oFD=_mz(z,'button',['bindtap',34,'data-event-opts',1],[],e,s,gg)
var xGD=_oz(z,36,e,s,gg)
_(oFD,xGD)
_(oPC,oFD)
_(r,oPC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var fID=_n('view')
_rz(z,fID,'class',0,e,s,gg)
var cJD=_n('view')
_rz(z,cJD,'class',1,e,s,gg)
var hKD=_n('view')
_rz(z,hKD,'class',2,e,s,gg)
var oLD=_n('text')
_rz(z,oLD,'class',3,e,s,gg)
var cMD=_oz(z,4,e,s,gg)
_(oLD,cMD)
_(hKD,oLD)
var oND=_n('text')
_rz(z,oND,'class',5,e,s,gg)
var lOD=_oz(z,6,e,s,gg)
_(oND,lOD)
_(hKD,oND)
var aPD=_n('text')
_rz(z,aPD,'class',7,e,s,gg)
var tQD=_oz(z,8,e,s,gg)
_(aPD,tQD)
_(hKD,aPD)
var eRD=_n('text')
_rz(z,eRD,'class',9,e,s,gg)
var bSD=_oz(z,10,e,s,gg)
_(eRD,bSD)
_(hKD,eRD)
var oTD=_n('text')
_rz(z,oTD,'class',11,e,s,gg)
var xUD=_oz(z,12,e,s,gg)
_(oTD,xUD)
_(hKD,oTD)
_(cJD,hKD)
var oVD=_n('view')
_rz(z,oVD,'class',13,e,s,gg)
var fWD=_n('text')
_rz(z,fWD,'class',14,e,s,gg)
var cXD=_oz(z,15,e,s,gg)
_(fWD,cXD)
_(oVD,fWD)
var hYD=_n('text')
_rz(z,hYD,'class',16,e,s,gg)
var oZD=_oz(z,17,e,s,gg)
_(hYD,oZD)
_(oVD,hYD)
var c1D=_n('text')
_rz(z,c1D,'class',18,e,s,gg)
var o2D=_oz(z,19,e,s,gg)
_(c1D,o2D)
_(oVD,c1D)
var l3D=_n('text')
_rz(z,l3D,'class',20,e,s,gg)
var a4D=_oz(z,21,e,s,gg)
_(l3D,a4D)
_(oVD,l3D)
var t5D=_n('text')
_rz(z,t5D,'class',22,e,s,gg)
var e6D=_oz(z,23,e,s,gg)
_(t5D,e6D)
_(oVD,t5D)
_(cJD,oVD)
_(fID,cJD)
_(r,fID)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var o8D=_n('view')
_rz(z,o8D,'class',0,e,s,gg)
var x9D=_n('view')
_rz(z,x9D,'class',1,e,s,gg)
var o0D=_mz(z,'image',['class',2,'mode',1,'src',2],[],e,s,gg)
_(x9D,o0D)
_(o8D,x9D)
var fAE=_mz(z,'form',['bindreset',5,'bindsubmit',1,'data-event-opts',2],[],e,s,gg)
var cBE=_n('view')
_rz(z,cBE,'class',8,e,s,gg)
var hCE=_mz(z,'input',['class',9,'name',1,'placeholder',2],[],e,s,gg)
_(cBE,hCE)
_(fAE,cBE)
var oDE=_n('view')
_rz(z,oDE,'class',12,e,s,gg)
var cEE=_mz(z,'input',['class',13,'name',1,'placeholder',2],[],e,s,gg)
_(oDE,cEE)
_(fAE,oDE)
var oFE=_n('view')
_rz(z,oFE,'class',16,e,s,gg)
var lGE=_mz(z,'input',['class',17,'name',1,'placeholder',2],[],e,s,gg)
_(oFE,lGE)
_(fAE,oFE)
var aHE=_n('view')
_rz(z,aHE,'class',20,e,s,gg)
var tIE=_mz(z,'input',['class',21,'name',1,'placeholder',2],[],e,s,gg)
_(aHE,tIE)
_(fAE,aHE)
var eJE=_n('view')
_rz(z,eJE,'class',24,e,s,gg)
var bKE=_mz(z,'button',['class',25,'formType',1],[],e,s,gg)
var oLE=_oz(z,27,e,s,gg)
_(bKE,oLE)
_(eJE,bKE)
_(fAE,eJE)
_(o8D,fAE)
_(r,o8D)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oNE=_n('view')
_rz(z,oNE,'class',0,e,s,gg)
var fOE=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var cPE=_mz(z,'canvas',['bindtouchend',3,'bindtouchmove',1,'bindtouchstart',2,'canvasId',3,'class',4,'data-event-opts',5,'disableScroll',6,'style',7],[],e,s,gg)
_(fOE,cPE)
_(oNE,fOE)
var hQE=_n('view')
_rz(z,hQE,'class',11,e,s,gg)
var oRE=_mz(z,'view',['bindtap',12,'class',1,'data-event-opts',2],[],e,s,gg)
var cSE=_oz(z,15,e,s,gg)
_(oRE,cSE)
_(hQE,oRE)
var oTE=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],e,s,gg)
var lUE=_oz(z,19,e,s,gg)
_(oTE,lUE)
_(hQE,oTE)
_(oNE,hQE)
_(r,oNE)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var tWE=_n('view')
_rz(z,tWE,'class',0,e,s,gg)
var eXE=_n('view')
_rz(z,eXE,'class',1,e,s,gg)
var bYE=_n('view')
_rz(z,bYE,'class',2,e,s,gg)
var oZE=_mz(z,'video',['controls',-1,'binderror',3,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(bYE,oZE)
_(eXE,bYE)
_(tWE,eXE)
var x1E=_n('view')
_rz(z,x1E,'class',7,e,s,gg)
var o2E=_n('text')
_rz(z,o2E,'class',8,e,s,gg)
var f3E=_oz(z,9,e,s,gg)
_(o2E,f3E)
_(x1E,o2E)
_(tWE,x1E)
var c4E=_n('view')
_rz(z,c4E,'class',10,e,s,gg)
var h5E=_mz(z,'image',['class',11,'src',1],[],e,s,gg)
_(c4E,h5E)
var o6E=_n('view')
_rz(z,o6E,'class',13,e,s,gg)
var c7E=_n('text')
_rz(z,c7E,'class',14,e,s,gg)
var o8E=_oz(z,15,e,s,gg)
_(c7E,o8E)
_(o6E,c7E)
_(c4E,o6E)
var l9E=_mz(z,'button',['class',16,'hoverClass',1,'plain',2,'size',3,'type',4],[],e,s,gg)
var a0E=_oz(z,21,e,s,gg)
_(l9E,a0E)
_(c4E,l9E)
_(tWE,c4E)
var tAF=_n('view')
_rz(z,tAF,'class',22,e,s,gg)
var eBF=_mz(z,'scroll-view',['class',23,'scrollLeft',1,'scrollX',2],[],e,s,gg)
var bCF=_v()
_(eBF,bCF)
var oDF=function(oFF,xEF,fGF,gg){
var hIF=_mz(z,'view',['bindtap',30,'class',1,'data-event-opts',2,'id',3],[],oFF,xEF,gg)
var oJF=_n('view')
_rz(z,oJF,'class',34,oFF,xEF,gg)
var cKF=_n('view')
_rz(z,cKF,'class',35,oFF,xEF,gg)
var oLF=_oz(z,36,oFF,xEF,gg)
_(cKF,oLF)
_(oJF,cKF)
var lMF=_n('view')
_rz(z,lMF,'class',37,oFF,xEF,gg)
var aNF=_n('view')
_rz(z,aNF,'class',38,oFF,xEF,gg)
_(lMF,aNF)
_(oJF,lMF)
_(hIF,oJF)
_(fGF,hIF)
return fGF
}
bCF.wxXCkey=2
_2z(z,28,oDF,e,s,gg,bCF,'menuTabs','index','index')
_(tAF,eBF)
var tOF=_mz(z,'swiper',['bindchange',39,'class',1,'current',2,'data-event-opts',3,'duration',4],[],e,s,gg)
var ePF=_v()
_(tOF,ePF)
var bQF=function(xSF,oRF,oTF,gg){
var cVF=_n('swiper-item')
var hWF=_mz(z,'scroll-view',['bindscrolltolower',48,'class',1,'data-event-opts',2,'scrollY',3],[],xSF,oRF,gg)
var oXF=_n('view')
_rz(z,oXF,'class',52,xSF,oRF,gg)
var cYF=_n('view')
_rz(z,cYF,'class',53,xSF,oRF,gg)
var oZF=_mz(z,'image',['mode',-1,'class',54,'src',1],[],xSF,oRF,gg)
_(cYF,oZF)
_(oXF,cYF)
var l1F=_n('view')
_rz(z,l1F,'class',56,xSF,oRF,gg)
var a2F=_n('text')
_rz(z,a2F,'class',57,xSF,oRF,gg)
var t3F=_oz(z,58,xSF,oRF,gg)
_(a2F,t3F)
_(l1F,a2F)
var e4F=_n('view')
_rz(z,e4F,'class',59,xSF,oRF,gg)
var b5F=_n('text')
_rz(z,b5F,'class',60,xSF,oRF,gg)
var o6F=_oz(z,61,xSF,oRF,gg)
_(b5F,o6F)
_(e4F,b5F)
var x7F=_n('text')
_rz(z,x7F,'class',62,xSF,oRF,gg)
var o8F=_oz(z,63,xSF,oRF,gg)
_(x7F,o8F)
_(e4F,x7F)
_(l1F,e4F)
_(oXF,l1F)
_(hWF,oXF)
var f9F=_n('text')
_rz(z,f9F,'class',64,xSF,oRF,gg)
_(hWF,f9F)
_(cVF,hWF)
_(oTF,cVF)
var c0F=_n('swiper-item')
var hAG=_mz(z,'scroll-view',['bindscrolltolower',65,'class',1,'data-event-opts',2,'scrollY',3],[],xSF,oRF,gg)
var oBG=_n('view')
_rz(z,oBG,'class',69,xSF,oRF,gg)
var cCG=_n('text')
_rz(z,cCG,'class',70,xSF,oRF,gg)
var oDG=_oz(z,71,xSF,oRF,gg)
_(cCG,oDG)
_(oBG,cCG)
_(hAG,oBG)
var lEG=_v()
_(hAG,lEG)
var aFG=function(eHG,tGG,bIG,gg){
var xKG=_n('view')
_rz(z,xKG,'class',76,eHG,tGG,gg)
var oLG=_n('view')
_rz(z,oLG,'class',77,eHG,tGG,gg)
_(xKG,oLG)
var fMG=_n('view')
_rz(z,fMG,'class',78,eHG,tGG,gg)
var cNG=_mz(z,'image',['class',79,'src',1],[],eHG,tGG,gg)
_(fMG,cNG)
var hOG=_n('view')
_rz(z,hOG,'class',81,eHG,tGG,gg)
var oPG=_n('text')
_rz(z,oPG,'class',82,eHG,tGG,gg)
var cQG=_oz(z,83,eHG,tGG,gg)
_(oPG,cQG)
_(hOG,oPG)
_(fMG,hOG)
_(xKG,fMG)
var oRG=_n('view')
_rz(z,oRG,'class',84,eHG,tGG,gg)
var lSG=_n('view')
_rz(z,lSG,'class',85,eHG,tGG,gg)
var aTG=_n('text')
_rz(z,aTG,'class',86,eHG,tGG,gg)
var tUG=_oz(z,87,eHG,tGG,gg)
_(aTG,tUG)
_(lSG,aTG)
_(oRG,lSG)
var eVG=_n('view')
_rz(z,eVG,'class',88,eHG,tGG,gg)
var bWG=_n('text')
_rz(z,bWG,'class',89,eHG,tGG,gg)
var oXG=_oz(z,90,eHG,tGG,gg)
_(bWG,oXG)
_(eVG,bWG)
var xYG=_n('view')
_rz(z,xYG,'class',91,eHG,tGG,gg)
_(eVG,xYG)
_(oRG,eVG)
var oZG=_n('view')
_rz(z,oZG,'class',92,eHG,tGG,gg)
var f1G=_oz(z,93,eHG,tGG,gg)
_(oZG,f1G)
_(oRG,oZG)
_(xKG,oRG)
_(bIG,xKG)
return bIG
}
lEG.wxXCkey=2
_2z(z,74,aFG,xSF,oRF,gg,lEG,'item','__i0__','id')
_(c0F,hAG)
_(oTF,c0F)
return oTF
}
ePF.wxXCkey=2
_2z(z,46,bQF,e,s,gg,ePF,'swiperDate','index1','index1')
_(tAF,tOF)
var c2G=_n('view')
_rz(z,c2G,'class',94,e,s,gg)
var h3G=_mz(z,'form',['bindsubmit',95,'data-event-opts',1],[],e,s,gg)
var o4G=_n('view')
_rz(z,o4G,'class',97,e,s,gg)
var c5G=_mz(z,'input',['class',98,'name',1,'placeholder',2],[],e,s,gg)
_(o4G,c5G)
var o6G=_n('button')
_rz(z,o6G,'formType',101,e,s,gg)
var l7G=_oz(z,102,e,s,gg)
_(o6G,l7G)
_(o4G,o6G)
_(h3G,o4G)
_(c2G,h3G)
_(tAF,c2G)
_(tWE,tAF)
var a8G=_n('view')
var t9G=_mz(z,'image',['class',103,'mode',1,'src',2],[],e,s,gg)
_(a8G,t9G)
_(tWE,a8G)
_(r,tWE)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var bAH=_n('view')
var oBH=_n('view')
_rz(z,oBH,'class',0,e,s,gg)
var oDH=_n('view')
_rz(z,oDH,'class',1,e,s,gg)
var fEH=_oz(z,2,e,s,gg)
_(oDH,fEH)
_(oBH,oDH)
var cFH=_mz(z,'input',['bindinput',3,'class',1,'data-event-opts',2,'placeholder',3,'value',4],[],e,s,gg)
_(oBH,cFH)
var xCH=_v()
_(oBH,xCH)
if(_oz(z,8,e,s,gg)){xCH.wxVkey=1
var hGH=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
_(xCH,hGH)
}
xCH.wxXCkey=1
_(bAH,oBH)
var oHH=_n('view')
_rz(z,oHH,'class',12,e,s,gg)
var oJH=_n('view')
_rz(z,oJH,'class',13,e,s,gg)
var lKH=_oz(z,14,e,s,gg)
_(oJH,lKH)
_(oHH,oJH)
var aLH=_mz(z,'input',['bindinput',15,'class',1,'data-event-opts',2,'placeholder',3,'value',4],[],e,s,gg)
_(oHH,aLH)
var cIH=_v()
_(oHH,cIH)
if(_oz(z,20,e,s,gg)){cIH.wxVkey=1
var tMH=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
_(cIH,tMH)
}
cIH.wxXCkey=1
_(bAH,oHH)
var eNH=_n('view')
_rz(z,eNH,'class',24,e,s,gg)
var bOH=_n('view')
_rz(z,bOH,'class',25,e,s,gg)
var oPH=_oz(z,26,e,s,gg)
_(bOH,oPH)
_(eNH,bOH)
var xQH=_n('view')
_rz(z,xQH,'class',27,e,s,gg)
var oRH=_n('view')
_rz(z,oRH,'class',28,e,s,gg)
var fSH=_oz(z,29,e,s,gg)
_(oRH,fSH)
_(xQH,oRH)
var cTH=_n('view')
_rz(z,cTH,'class',30,e,s,gg)
var hUH=_mz(z,'picker',['bindchange',31,'data-event-opts',1,'range',2,'value',3],[],e,s,gg)
var oVH=_n('view')
_rz(z,oVH,'class',35,e,s,gg)
var cWH=_oz(z,36,e,s,gg)
_(oVH,cWH)
_(hUH,oVH)
_(cTH,hUH)
_(xQH,cTH)
_(eNH,xQH)
_(bAH,eNH)
var oXH=_n('view')
_rz(z,oXH,'class',37,e,s,gg)
var lYH=_n('view')
_rz(z,lYH,'class',38,e,s,gg)
var aZH=_oz(z,39,e,s,gg)
_(lYH,aZH)
_(oXH,lYH)
var t1H=_mz(z,'button',['bindtap',40,'data-event-opts',1,'plain',2,'type',3],[],e,s,gg)
var e2H=_oz(z,44,e,s,gg)
_(t1H,e2H)
_(oXH,t1H)
_(bAH,oXH)
var b3H=_n('view')
var o4H=_mz(z,'button',['bindtap',45,'data-event-opts',1,'type',2],[],e,s,gg)
var x5H=_oz(z,48,e,s,gg)
_(o4H,x5H)
_(b3H,o4H)
_(bAH,b3H)
_(r,bAH)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var f7H=_n('view')
_rz(z,f7H,'class',0,e,s,gg)
var c8H=_n('view')
_rz(z,c8H,'class',1,e,s,gg)
var h9H=_v()
_(c8H,h9H)
var o0H=function(oBI,cAI,lCI,gg){
var tEI=_n('view')
_rz(z,tEI,'class',5,oBI,cAI,gg)
var eFI=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],oBI,cAI,gg)
var bGI=_n('view')
_rz(z,bGI,'class',9,oBI,cAI,gg)
var oHI=_n('text')
_rz(z,oHI,'class',10,oBI,cAI,gg)
var xII=_oz(z,11,oBI,cAI,gg)
_(oHI,xII)
_(bGI,oHI)
_(eFI,bGI)
var oJI=_n('view')
_rz(z,oJI,'class',12,oBI,cAI,gg)
var fKI=_mz(z,'image',['class',13,'mode',1,'src',2],[],oBI,cAI,gg)
_(oJI,fKI)
_(eFI,oJI)
_(tEI,eFI)
_(lCI,tEI)
return lCI
}
h9H.wxXCkey=2
_2z(z,4,o0H,e,s,gg,h9H,'c','__i0__','')
_(f7H,c8H)
_(r,f7H)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
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
var _C= [[[2,1],],[".",[1],"container { position: relative; width: 100%; height: auto; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"column_center{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"hor_center { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"super_center { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"row { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"column{ display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n",],];
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

__wxAppCode__['pages/filmlibrary/filmlibrary.wxss']=setCssToHead(["body { height: 220%; width: 100%; }\n.",[1],"play-video { height: ",[0,400],"; width: 98%; margin-top: ",[0,7],"; margin-left: ",[0,10],"; margin-right: ",[0,10],"; }\n.",[1],"card { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: auto; width: 95%; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; background:-webkit-gradient(linear,left top, left bottom,from(#FFFFFF),to(#696878) ); background:-o-linear-gradient(top,#FFFFFF,#696878 ); background:linear-gradient(to bottom,#FFFFFF,#696878 ); margin: ",[0,12]," ",[0,20],"; border-radius: ",[0,20],"; }\n.",[1],"fword { font-size: xx-small; color: black; position: fixed; margin-left: ",[0,10],"; }\n.",[1],"followicon { height: ",[0,40],"; width: ",[0,40],"; position: fixed; padding-left: ",[0,10],"; }\n.",[1],"action { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-top: ",[0,20],"; }\n.",[1],"rec { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"cardtitle { font-size: large; color: white; margin: ",[0,30]," ",[0,0],"; }\n.",[1],"container { display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; -webkit-box-orient:vertical; -webkit-box-direction:normal; -webkit-flex-direction:column; -ms-flex-direction:column; flex-direction:column; height: 100%; background-color: black; }\n.",[1],"logo { height: ",[0,200],"; width: ",[0,200],"; margin-top: ",[0,200],"; }\n.",[1],"t1 { color: white; }\n",],undefined,{path:"./pages/filmlibrary/filmlibrary.wxss"});    
__wxAppCode__['pages/filmlibrary/filmlibrary.wxml']=$gwx('./pages/filmlibrary/filmlibrary.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["body { width: 100%; height: 200%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"body-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; width: 100%; background-color: black; }\n.",[1],"top-menu-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; white-space: nowrap; width: 100%; background-color: orange; height: ",[0,80],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view { display: inline-block; white-space: nowrap; height: 100%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: white; line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: rgba(0, 170, 255, 1); line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; background: rgba(0, 170, 255, 1); }\n.",[1],"swiper-box-list { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; background-color: #000000; }\n.",[1],"swiper-one-list { height: 100%; width: 100%; }\n.",[1],"swiper { height: ",[0,360],"; }\n.",[1],"slideimage { width: 100%; }\n.",[1],"filmsarea { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"oneline { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"title { font-size: larger; color: orange; padding-left: ",[0,50],"; margin-bottom: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"filmsblock { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"filmname { color: white; font-size: small; }\n.",[1],"film { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"filmpic { width: ",[0,245.9],"; height: ",[0,330],"; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.wxss']=setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"picture { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"lg-back { height: 100%; background-color: black; }\n.",[1],"itemView { height: ",[0,60],"; margin-left: ",[0,30],"; margin-right: ",[0,30],"; margin-bottom: ",[0,20],"; background-color: #F0F0F0; }\n.",[1],"input { BORDER-RIGHT: 0px solid; BORDER-TOP: 0px solid; BORDER-LEFT: 0px solid; BORDER-BOTTOM: 0px solid; }\n.",[1],"loginBtn { width: 40%; margin-right: 30px; float: right; }\n.",[1],"registerBtn { width: 40%; margin-left: 30px; float: left; background-color: orange; color: white; }\n",],undefined,{path:"./pages/login/login.wxss"});    
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/open/open.wxss']=setCssToHead(["body{ height: 100%; width: 100%; }\n.",[1],"test1{ height: 50%; width: 80%; }\n",],undefined,{path:"./pages/open/open.wxss"});    
__wxAppCode__['pages/open/open.wxml']=$gwx('./pages/open/open.wxml');

__wxAppCode__['pages/profile/profile.wxss']=setCssToHead(["body { height: 100%; width: 100%; }\n.",[1],"background { height: 100%; background-color: #000000; }\n.",[1],"picbox { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: 100%; background-color: orange; height: ",[0,300],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; top: 0; }\n.",[1],"profilepic { width: ",[0,120],"; height: ",[0,120],"; border-radius: ",[0,60],"; }\n.",[1],"change { color: white; font-size: x-small; margin-top: ",[0,20],"; }\n.",[1],"data_box { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: ",[0,110],"; width: 100%; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; background: -webkit-gradient(linear, left top, right top, from(orange), color-stop(red), to(orange)); background: -o-linear-gradient(left, orange, red, orange); background: linear-gradient(to right, orange, red, orange); }\n.",[1],"data_box_text { fontsize: small; color: white; }\n.",[1],"data_border { width: ",[0,2],"; background-color: darkgray; height: ",[0,90],"; }\n.",[1],"container_profile { position: relative; width: 100%; height: 100%; background-color: blacke; }\n.",[1],"drawer { height: ",[0,100],"; width: 95%; margin-top: ",[0,10],"; border-top: ",[0,2]," solid darkgray; border-bottom: ",[0,2]," solid darkgray; }\n.",[1],"icon-proflie { width: ",[0,48],"; height: ",[0,48],"; position: absolute; margin-left: 5%; }\n.",[1],"profile_title { width: 87%; height: 80%; margin-left: 2%; }\n.",[1],"profiel_title_text { font-size: large; color: white; margin-left: 20%; }\n",],undefined,{path:"./pages/profile/profile.wxss"});    
__wxAppCode__['pages/profile/profile.wxml']=$gwx('./pages/profile/profile.wxml');

__wxAppCode__['pages/profileinfo/profileinfo.wxss']=setCssToHead(["body { height: 100%; width: 100%; }\n.",[1],"background { height: 100%; background-color: #000000; }\n.",[1],"information-card{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex; }\n.",[1],"title-line { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; height: ",[0,600],"; margin-left: ",[0,50],"; }\n.",[1],"infoline { height: ",[0,100],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"info-title { color: #888888; margin-left: ",[0,20],"; }\n.",[1],"info-content { color: white; margin-left: ",[0,200],"; }\n.",[1],"content-line { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: ",[0,600],"; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; }\n.",[1],"content-space { margin-left: ",[0,200],"; }\n.",[1],"edit-button { width: 100%; height: ",[0,60],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; margin-top: ",[0,50],"; }\n.",[1],"edit-text { color: #929292; font-size: large; }\n.",[1],"film-upload { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; height: ",[0,60],"; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"film-upload-text { color: white; font-size: middle; }\n",],undefined,{path:"./pages/profileinfo/profileinfo.wxss"});    
__wxAppCode__['pages/profileinfo/profileinfo.wxml']=$gwx('./pages/profileinfo/profileinfo.wxml');

__wxAppCode__['pages/register/register.wxss']=setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"picture { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"reg-back { height: 100%; background-color: black; }\n.",[1],"itemView { height: ",[0,60],"; margin-left: ",[0,30],"; margin-right: ",[0,30],"; margin-bottom: ",[0,20],"; background-color: #F0F0F0; }\n.",[1],"btn-row { width: 100%; }\n.",[1],"register { width: 50%; margin: 0px auto; background-color: orange; color: white; }\n",],undefined,{path:"./pages/register/register.wxss"});    
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/Swiper-detail/Swiper-detail.wxss']=setCssToHead(["body { height: 100%; width: 100%; }\n.",[1],"container { height: 100%; width: 100%; }\n.",[1],"background { background-color: #888888; height: 100%; width: 100%; }\n.",[1],"fud { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; height: 100%; width: 100%; }\n.",[1],"notice { color: white; font-weight: 200; font-size: large; }\n",],undefined,{path:"./pages/Swiper-detail/Swiper-detail.wxss"});    
__wxAppCode__['pages/Swiper-detail/Swiper-detail.wxml']=$gwx('./pages/Swiper-detail/Swiper-detail.wxml');

__wxAppCode__['pages/upload/upload.wxss']=setCssToHead([".",[1],"content { background: rgba(255, 255, 255, 1); }\n.",[1],"head-list { height: 43px; width: 100%; background: #ffffff; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; border-bottom: 1px solid rgba(244, 244, 244, 1); }\n.",[1],"head-info { text-align: center; font-size: 18px; color: #000000; font-weight: bold; }\n.",[1],"save-box { position: absolute; right: 0px; width: 50px; height: 43px; line-height: 43px; }\n.",[1],"save { color: rgba(98, 111, 252, 1); font-size: 16px; font-weight: 400; }\n.",[1],"icon-back { margin-top: 11px; width: 10px; height: 18px; color: #000000; margin-left: 6px; }\n.",[1],"icon-back-box { display: block; position: absolute; left: 6px; height: 43px; width: 30px; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"cropper { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }\n.",[1],"cropper-buttons { background-color: rgba(0, 0, 0, 0.95); color: #04b00f; }\n.",[1],"cropper-wrapper { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; width: 100%; background-color: #F0F0F0; }\n.",[1],"cropper-buttons { width: 100vw; height: 50px; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: fixed; bottom: 0; left: 0; line-height: 50px; }\n.",[1],"cropper-buttons .",[1],"upload, .",[1],"cropper-buttons .",[1],"getCropperImage { width: 50%; text-align: center; }\n",],undefined,{path:"./pages/upload/upload.wxss"});    
__wxAppCode__['pages/upload/upload.wxml']=$gwx('./pages/upload/upload.wxml');

__wxAppCode__['pages/videoplay/videoplay.wxss']=setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"VP-back { height: 100%; }\n.",[1],"play-video { height: ",[0,380],"; width: 100%; }\n.",[1],"V-intro { height: 50%; }\n.",[1],"screen { width: 100%; height: ",[0,380],"; }\n.",[1],"video-info-card { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; height: ",[0,350],"; }\n.",[1],"video-pic-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: ",[0,297],"; width: ",[0,221.31],"; margin: ",[0,20]," ",[0,20]," ",[0,20],"; margin-bottom: ",[0,20],"; }\n.",[1],"video-pic-set { height: ",[0,297],"; width: 100%; }\n.",[1],"video-info-box { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; margin-left: ",[0,50],"; height: 100%; }\n.",[1],"actors { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; color: black; font-size: large; }\n.",[1],"actor-name { color: white; font-size: large; }\n.",[1],"com-write { height: 10%; border: ",[0,1]," solid black; border-radius: 2px; background-color: #F8F8FF; }\n.",[1],"V-com-area { position: fixed; bottom: 1%; left: 0; right: 0; }\n.",[1],"body-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; overflow: hidden; height: 100%; width: 100%; background-color: black; }\n.",[1],"top-menu-view { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; white-space: nowrap; width: 100%; background-color: orange; height: ",[0,80],"; top: 0; }\n.",[1],"top-menu-view .",[1],"menu-one-view { display: inline-block; white-space: nowrap; height: 100%; width: 50%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: white; line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act { margin-left: ",[0,25],"; margin-right: ",[0,25],"; position: relative; height: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-txt { height: ",[0,40],"; font-size: ",[0,28],"; font-weight: 400; color: rgba(0, 170, 255, 1); line-height: ",[0,40],"; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom { position: absolute; bottom: 0; width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"top-menu-view .",[1],"menu-one-view .",[1],"menu-one-act .",[1],"menu-one-bottom .",[1],"menu-one-bottom-color { width: 60%; height: ",[0,4],"; background: rgba(0, 170, 255, 1); }\n.",[1],"swiper-box-list { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; width: 100%; height: 60%; background-color: black; border: ",[0,5]," solid #000000; position: absolute; }\n.",[1],"swiper-one-list { height: 100%; width: 100%; }\n.",[1],"swiper { height: ",[0,360],"; }\n.",[1],"slideimage { width: 100%; }\n.",[1],"filmsarea { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"oneline { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"title { font-size: larger; color: orange; padding-left: ",[0,50],"; margin-bottom: ",[0,20],"; margin-top: ",[0,20],"; }\n.",[1],"filmsline { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"filmname { color: #FFA500; font-size: large; }\n.",[1],"film { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; }\n.",[1],"filmpic { width: ",[0,245.9],"; height: ",[0,330],"; }\n.",[1],"content_box { margin-left: ",[0,20],"; margin-right: ",[0,40],"; margin-top: ",[0,50],"; margin-bottom: ",[0,20],"; position: absolute; height: 60%; width: 95%; }\n.",[1],"text_i { display: inline-block; width: 100%; }\n.",[1],"content_text { width: 100%; font-size: medium; color: white; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }\n.",[1],"new_comment { width: 100%; height: ",[0,80],"; }\n.",[1],"latest_comment { font-size: large; color: white; margin-left: ",[0,40],"; }\n.",[1],"videocomment { width: 100%; height: 26%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: relative; }\n.",[1],"user_info { height: auto; width: auto; min-width: ",[0,40],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; margin: ",[0,20]," ",[0,20],"; position: absolute; }\n.",[1],"user_info_name { width: auto; min-width: ",[0,40],"; max-width: ",[0,80],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"user_info_name_text { font-size: small; color: white; }\n.",[1],"comment_profile_pic { height: ",[0,80],"; width: ",[0,80],"; border: ",[0,2],"; border-radius: ",[0,150],"; }\n.",[1],"comment_text { display: inline-block; font-size: medium; color: #1AAD19; width: 100%; }\n.",[1],"comment_box { height: 100%; left: 15%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; position: absolute; width: 80%; }\n.",[1],"time { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: 20%; right: 3%; position: absolute; }\n.",[1],"time_text { font-size: small; color: #BBBBBB; }\n.",[1],"border_line { position: relative; width: 80%; left: 10%; right: 10%; height: ",[0,2],"; border-bottom: ",[0,2]," solid #777777; }\n.",[1],"comment_show { width: 25%; height: 15%; position: absolute; bottom: 0; right: 0; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; font-size: x-small; color: white; }\n.",[1],"like_button { height: 16%; width: 16%; position: fixed; bottom: 4%; right: 5%; }\n.",[1],"data_box { position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; height: ",[0,90],"; width: 100%; background-color: white; }\n.",[1],"data_box_text { fontsize: small; }\n.",[1],"data_border { width: ",[0,2],"; background-color: darkgray; height: ",[0,90],"; }\n.",[1],"filmmaker_title { background: -webkit-gradient(linear, left top, right top, from(#666666), to(white)); background: -o-linear-gradient(left, #666666, white); background: linear-gradient(to right, #666666, white); height: ",[0,48],"; width: 100%; }\n.",[1],"filmmaker_title_text { position: absolute; margin-left: 4%; color: black; font-size: large; font-style: oblique; font-weight: 900; }\n.",[1],"filmmaker-pic { position: absolute; border: ",[0,2]," solid #A9A9A9; border-radius: ",[0,100],"; height: ",[0,65],"; width: ",[0,65],"; margin-left: 4%; }\n.",[1],"filmmaker-name { width: 30%; position: absolute; margin-left: 16%; }\n.",[1],"filmmaker-name-text { font-size: medium; }\n.",[1],"msg_button { margin-left: 46%; position: absolute; }\n.",[1],"follow_button { position: absolute; margin-left: 75%; }\n",],undefined,{path:"./pages/videoplay/videoplay.wxss"});    
__wxAppCode__['pages/videoplay/videoplay.wxml']=$gwx('./pages/videoplay/videoplay.wxml');

__wxAppCode__['pages/videosearch/videosearch.wxss']=undefined;    
__wxAppCode__['pages/videosearch/videosearch.wxml']=$gwx('./pages/videosearch/videosearch.wxml');

__wxAppCode__['pages/watchhistory/watchhistory.wxss']=setCssToHead(["body { background-color: #000000; }\n.",[1],"history_a { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: relative; background-color: black; width: 100%; height: auto; }\n.",[1],"card_loop{ width: 100%; }\n.",[1],"history_card { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; height: ",[0,160],"; border-bottom: ",[0,2]," solid darkgray; margin-top: ",[0,20],"; }\n.",[1],"history_t { position: absolute; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; height: 100%; width: 68%; }\n.",[1],"history_fn { font-size: medium; color: darkgray; }\n.",[1],"history_ia { position: absolute; left: 68%; width: 32%; height: 100%; }\n.",[1],"history_img { position: absolute; width: 100%; }\n",],undefined,{path:"./pages/watchhistory/watchhistory.wxss"});    
__wxAppCode__['pages/watchhistory/watchhistory.wxml']=$gwx('./pages/watchhistory/watchhistory.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
