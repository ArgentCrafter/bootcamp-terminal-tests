module.exports = function countAllPaarl(regString){
    if (typeof regString == "string"){
      var regList = regString.split(", ");
      var regAnswer = 0;
      for (var i=0;i<regList.length;i++){
        if (regList[i].startsWith("CJ")){
          regAnswer++;
        }
      }
      return regAnswer;
    }
    else
    return "Please enter a string";
    };