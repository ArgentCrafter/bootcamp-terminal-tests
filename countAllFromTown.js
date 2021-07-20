module.exports = function countAllFromTown(regString, regTown){
    if ((typeof regString == "string") && (typeof regTown == "string")){
      var regList = regString.split(",");
      console.log(regList);
      var regAnswer = 0;
      for (var i=0;i<regList.length;i++){
        if (regList[i].startsWith(regTown) || regList[i].startsWith(" " + regTown)){
          regAnswer++;
        }
      }
      return regAnswer;
    }
    else{
      return "Please enter a string";
    }};