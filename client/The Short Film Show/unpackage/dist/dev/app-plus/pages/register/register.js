
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["body { width: 100%; height: 100%; }\n.",[1],"Reg-back { height: 100%; background-color: white; }\n.",[1],"logo { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: 100%; }\n.",[1],"itemView { height: 10%; border: ",[0,1]," solid black; border-radius: 2px; background-color: #F8F8FF; }\n",],undefined,{path:"./pages/register/register.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/register/register.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      