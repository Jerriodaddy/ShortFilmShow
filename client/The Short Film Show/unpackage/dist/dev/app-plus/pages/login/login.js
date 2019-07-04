
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"lg-back { height: 100%; background-color: white; }\n.",[1],"logo { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; }\n.",[1],"itemView { height: 10%; border: ",[0,1]," solid black; border-radius: 2px; background-color: #F8F8FF; }\n.",[1],"action-row { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"Reg { color: black; }\n",],undefined,{path:"./pages/login/login.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/login/login.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      