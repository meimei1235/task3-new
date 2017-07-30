'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
         var arr = new Array();
         collectionA.forEach(item => {
                   collectionB[0].forEach(data => {
                          if(item === data) {
                                    arr.push(item);
                          }
                   });
         });
        
        return arr;
};