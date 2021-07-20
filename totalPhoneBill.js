module.exports = function totalPhoneBill(phoneStr){
    if (typeof phoneStr == "string"){
      var phoneList = phoneStr.split(", ");
      var call = 0;
      var sms = 0;
      for (var i=0;i<phoneList.length;i++){
        if (phoneList[i] === "call"){
          
          call++;
        }
        else{
          if (phoneList[i] === "sms"){
          sms++;
          }
          else{
            return "Please enter a valid string";
          }
        }
      }
          var Answer = (call * 2.75) + (sms * 0.65);
          var Answer = "R" + Answer.toFixed(2);  	
        return Answer;
    }
    else{
      return "Please enter a valid string";
    }
    };