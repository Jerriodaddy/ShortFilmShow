(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/upload/upload"],{"27f6":function(e,t,o){"use strict";var n=o("43f9"),a=o.n(n);a.a},"3fd0":function(e,t,o){"use strict";o.r(t);var n=o("6f4e"),a=o("c8c5");for(var r in a)"default"!==r&&function(e){o.d(t,e,function(){return a[e]})}(r);o("27f6");var u=o("2877"),i=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=i.exports},"43f9":function(e,t,o){},"6f4e":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},7581:function(e,t,o){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(o("6d73"));function r(e){return e&&e.__esModule?e:{default:e}}var u=e.getSystemInfoSync(),i=u.windowWidth,c=u.windowHeight-50;console.log(n(u," at pages/upload/upload.vue:19"));var s={data:function(){return{cropperOpt:{id:"cropper",width:i,height:c,scale:2.5,zoom:8,cut:{x:(i-295)/2,y:(c-413)/2,width:295,height:413}},weCropper:""}},methods:{back:function(){e.redirectTo({url:"../infoDetail/infoDetail"})},touchStart:function(e){this.weCropper.touchStart(e)},touchMove:function(e){this.weCropper.touchMove(e)},touchEnd:function(e){this.weCropper.touchEnd(e)},convertBase64UrlToBlob:function(e,t){for(var o=atob(e.split(",")[1]),n=[],a=0;a<o.length;a++)n.push(o.charCodeAt(a));return new Blob([new Uint8Array(n)],{type:t},{filename:"1111.jpg"})},blobToDataURL:function(e){var t=new FileReader;t.readAsDataURL(e),t.onload=function(e){var t=e.target.result;console.log(n(t," at pages/upload/upload.vue:71"))}},getCropperImage:function(){var t=this.getGlobalUserInfo();if(null!=t&&void 0!=t&&""!=t){var o=this;this.weCropper.getCropperImage(function(a){a?(e.uploadFile({url:o.$serverUrl+"/user/uploadFace?userId="+t.id,filePath:o.cropperOpt.src,name:"file",header:{"content-type":"application/json",userId:t.id,userToken:t.userToken},success:function(t){console.log(n(t," at pages/upload/upload.vue:104"));var a=JSON.parse(t.data);if(e.hideLoading(),200==a.status){e.showToast({title:"Success!",icon:"success"});var r=a.data;o.faceUrl=o.$serverUrl+r}else e.showToast({title:a.msg})}}),e.switchTab({url:"../profile/profile"})):console.log(n("获取图片失败，请稍后重试"," at pages/upload/upload.vue:158"))})}else e.navigateTo({url:"../login/login"})},uploadTap:function(){var t=this;e.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){var o=e.tempFilePaths[0];t.weCropper.pushOrign(o)}})}},onLoad:function(t){var o=this.cropperOpt,r=t.src;r&&(Object.assign(o,{src:r}),this.weCropper=new a.default(o).on("ready",function(e){}).on("beforeImageLoad",function(t){e.showToast({title:"上传中",icon:"loading",duration:3e3})}).on("imageLoad",function(t){e.hideToast()})),console.log(n(this.cropperOpt.src," at pages/upload/upload.vue:200"))}};t.default=s}).call(this,o("6e42")["default"],o("0de9")["default"])},bc33:function(e,t,o){"use strict";(function(e){o("28b5"),o("921b");n(o("66fd"));var t=n(o("3fd0"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},c8c5:function(e,t,o){"use strict";o.r(t);var n=o("7581"),a=o.n(n);for(var r in n)"default"!==r&&function(e){o.d(t,e,function(){return n[e]})}(r);t["default"]=a.a}},[["bc33","common/runtime","common/vendor"]]]);