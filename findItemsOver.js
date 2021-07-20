module.exports  = function findItemsOver(list, amnt){
    if ((typeof list == "object") && (typeof amnt == "number")){
    var over = [];
    for (var i=0;i<list.length;i++){
     var current = list[i];
      if (current.qty > amnt) {
          over.push(current);
          }
    }
   return over; 
}
else{
    return "Please enter valid values";
}
  };