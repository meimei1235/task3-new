'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  collectionA.forEach(item => {
     objectB.value.forEach(data => {
       if(item.key === data){
         item.count = item.count - Math.floor((item.count)/3);
        }
     });
   });
 
   return collectionA;
};