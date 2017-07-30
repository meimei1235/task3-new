'use strict';

module.exports = function countSameElements(collection) {
   var result = [];
   var data =[];
   var result_sum=[];

  collection.forEach((element, index) => {
    if (element.length > 1) {
      var temporaryArray = element.split("");
      var number = parseInt(element.replace(/[^0-9]/ig, ""));
      for(var i = 0;i < number-1;i++){
        result.push(temporaryArray[0])
      }
      collection.splice(index, 1,temporaryArray[0]);
      result_sum = collection.concat(result);

    }
  });
  result_sum.forEach(item => {
    if (!data.find(element => element.name === item))
      data.push({name: item, summary: result_sum.filter(element => element === item).length});
  });

  return data;
};