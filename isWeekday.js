module.exports = function isWeekday(string){
    switch(string){
      case "Saturday":
        return false;
        break;
      case "Sunday":
        return false;
        break;
      case "Monday":
        return true;
        break;  
      case "Tuesday":
        return true;
        break;
      case "Wednesday":
        return true;
        break;
       case "Thursday":
        return true;
        break;
      case "Friday":
        return true;
        break;
      default:
        return "Not a valid day";
                 }
  };