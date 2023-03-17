function buttonClicked(dialog, anotherFunc) {
  //console.log (dialog);
  //console.log (buttonId);
  //console.log (dialog.style.opacity);
  Sleep(100);
  for (let i = 0; i <= 10; i++) {
    //dialog.style.opacity = 1 - i / 10;
    Sleep(1);
}
  
  dialog.open = false;
  //console.log (anotherFunc);
  eval(anotherFunc);

}
  
  function Sleep(time) {
  var startTime = new Date().getTime() + parseInt(time, 10);
  while(new Date().getTime() < startTime) {
    
  }
}
  
  function fuc(theid){
    
  }
