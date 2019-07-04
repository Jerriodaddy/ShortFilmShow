
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body{ height: 100%; width: 100%; }\n.",[1],"test1{ height: 50%; width: 80%; }\n",],undefined,{path:"./pages/open/open.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/open/open.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      