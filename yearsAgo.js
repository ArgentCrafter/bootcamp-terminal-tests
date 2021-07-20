module.exports = function yearsAgo(Year){
    if (typeof Year == "number"){
        const year2 = (new Date()).getFullYear();
       return (year2 - Year);
    }
    else{
        return "Not a valid year";
    }
      
      };
      