module.exports = function findItemsOver20(list){
    if (typeof list == "object"){
      var over20 = [];
      for (var i=0;i<list.length;i++){
        var current = list[i];
        if (current.qty > 20){
         over20.push(current); 
        }
      }
      return over20;
    }
    else{
      return "Please enter a valid list";
    }
    };