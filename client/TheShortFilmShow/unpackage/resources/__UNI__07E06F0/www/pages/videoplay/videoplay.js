
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"VP-back{ height: 100%; }\n.",[1],"play-video{ width: 100%; }\n.",[1],"V-intro{ height: 50%; }\n.",[1],"com-write { height: 10%; border: ",[0,1]," solid black; border-radius: 2px; background-color: #F8F8FF; }\n.",[1],"V-com-area { position: fixed; bottom:1%;left:0;right:0; }\n",],undefined,{path:"./pages/videoplay/videoplay.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/videoplay/videoplay.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      