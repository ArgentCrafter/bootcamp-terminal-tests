module.exports = function fromWhere(regNumber){
    if (typeof regNumber == "string"){
      switch (regNumber) {
        case "CY":
          return "Bellville";
          break;
        case "CJ":
          return "Paarl";
          break;
        case "CA":
          return "Cape Town";
          break;
        default:
          return "Some other place!";
    }
  }
  else{
    return "Please enter a valid string";
  }
    };