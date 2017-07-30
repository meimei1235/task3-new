'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
     var collC = new Array();
     var arr = new Array();
     var collA_last = collectionA.pop();
     var count = 1;
     var key;
     var obj = {
               'key': '',
               'count': 1
               };
     for(var i = 0; i < collectionA.length-1; i++) {
        if(collectionA[i] === collectionA[i+1]){
           key = collectionA[i];
           count = count + 1;
        }else{
           obj.key = key;
           obj.count = count;
           collC.push(obj);
           count = 1
         }
     
     }
     var collA_last_key = collA_last.split("-")[0];
     var collA_last_count = collA_last.split("-")[1];
     obj.key =  collA_last_key;
     obj.count = collA_last_count;
     collC.push(obj);
     collC.forEach(item => {
     objectB.value.forEach(data => {
       if(item.key === data){
         item.count = item.count - Math.floor((item.count)/3);
        }
     });
   }); 
     return collC;
};