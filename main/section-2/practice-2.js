
/*eslint-disable no-undef */
'use strict';

module.exports = function countSameElements(collection) {
      var arr = [];
      var regx = /\[|\]|-|:/g;
      collection.forEach( item  => {
                for(var i = 0; i < arr.length; i++) {
                      if(item.replace(regx,",").split(",")[0] === arr[i].key) {
                         arr[i].count += item.replace(regx, ",").split(",")[1] ? parseInt(item.replace(regx, ",").split(",")[1], 10) : 1;
                         return;
                      }     
                }
               arr[arr.length] = { key: item.replace(regx, ",").split(",")[0],
                                   count: item.replace(regx, ",").split(",")[1] ? parseInt(item.replace(regx, ",").split(",")[1], 10) : 1
                                  };
               
      });
      
      return arr;

};