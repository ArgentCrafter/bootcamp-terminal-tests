module.exports = function mostProfitableDepartment(list){
    if (typeof list == "object"){
      const departments = {};
    
    for (var i=0;i<list.length;i++){
      var current = list[i];
      departments[current.department] = 0;
    }
    
    for (var i=0;i<list.length;i++){
      var current = list[i];
      var currentTotal = departments[current.department];
      currentTotal += current.sales;
      departments[current.department] = currentTotal;
    }
  
    var currentMostProfit = 'hardware';
    for (const dep in departments) {
      if (departments[dep] > departments[currentMostProfit]) {
        currentMostProfit = dep;
      }
    }
    return currentMostProfit;
  }
  else{
    return "Please enter a valid list";
  }
    
  };