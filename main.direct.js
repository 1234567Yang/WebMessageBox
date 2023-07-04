var text = "";

function direct(){
  getVersion()
  
  
  setTimeout(function(){check()},3000);
  
}

function check(){
  if(text = ""){
    setTimeout(function(){direct()},3000);
  }else{
    setTimeout(function(){jump()},500);
  }
}


function jump(){
  var href = "";
  if(text = "Windows11"){
    href = "./Windows11 Style";
  }else if(text = "Windows10"){
    href = "./Windows10 Style";
  }else if(text = "Windows7"){
    href = "./Windows7 Style";
  }else{
    href = "./Windows10 Style"; //瞎猫碰死耗子
  }
  
    
  href += "/index.html";
  
  console.log(href);
  
  window.location.href = href
}

function isFirefox(){
  if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
    return true;
  }else{
    return false;
    }
}

function getVersion() { //异步方法，return之后处理

  if(isFirefox()){ //Firefox不支持userAgentData
    text = getEarilerVersion();
  }else{

    return navigator.userAgentData.getHighEntropyValues(["platformVersion"])
        .then(ua => {
            if (navigator.userAgentData.platform === "Windows") {
                const majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
                if (majorPlatformVersion >= 13) {
                    text = "Windows11";
                }
                else if (majorPlatformVersion > 0) {
                    text = "Windows10";
                }
                else {
                    text = "Before Windows 10";
                    text = getEarilerVersion();
                }
            }
            else {
                text = "Not running on Windows";
            }
        });

  }

}

function getEarilerVersion() {
    var version = navigator.userAgent;
    if (version.indexOf("Windows NT 5.0") != -1) {
        return "Windows2000";
    } else if (version.indexOf("Windows NT 5.1") != -1) {
        return "WindowsXP";
    } else if (version.indexOf("Windows NT 5.2") != -1) {
        return "Windows2003";
    } else if (version.indexOf("Windows NT 6.0") != -1) {
        return "WindowsVista";
    } else if (version.indexOf("Windows NT 6.1") != -1) {
        return "Windows7";
    } else if (version.indexOf("Windows NT 6.2") != -1) {
        return "Windows8";
    } else if (version.indexOf("Windows NT 10.0") != -1) {
        return "Windows10";
    }else{
      return "Windows11"; // can not direct, just return win11
    }
    // https://blog.csdn.net/qq_36357608/article/details/108397617
}
