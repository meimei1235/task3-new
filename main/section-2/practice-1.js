'use strict';



module.exports = function countSameElements(collection) {
      var count_value = 0;
      var arr = new Array();
      var key_value = '';
      for(var i = 0; i < collection.length;i++){
      if(collection[i] != -1){
        key_value = collection[i];
        var keyCountObj = get_obj( collection,key_value, count_value);
        arr.push(keyCountObj);
        count_value = 0;
       }
     }
      return arr;
 
};
function get_obj(collection,key_value, count_value){
  for(var j = 0;j < collection.length;j++){
    if(key_value === collection[j]){
      count_value++;
      collection[j] = -1;
    }
  }
  var keyCountObj = {key:key_value,count:count_value};

  return keyCountObj;
}