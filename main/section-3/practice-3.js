'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    var collC = new Array();
    var count = 1;
    var key;
    var obj = {
               'key': '',
               'count': 0
               };
  for(var i = 0; i < collectionA.length-1; i++) {
     if(collectionA[i] === collectionA[i+1]){
          key = collectionA[i];
          count = count +1;
      }else{
           obj.key = key; 
           obj.count = count;
           collC.push(obj);
           count = 1;
          
     }
     
  }
  collC.forEach(item => {
     objectB.value.forEach(data => {
       if(item.key === data){
         item.count = item.count - Math.floor((item.count)/3);
        }
     });
   });
   return collC;
 };