'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  var arr = [];
 var a_obj = get_obj(collectionA);
for ( var index in a_obj) {
  if (objectB.value.indexOf(a_obj[index].key) >= 0) {
      arr.push({
        key: a_obj[index].key,
        count: a_obj[index].count - Math.floor(a_obj[index].count/3)
      });
  } else {
    arr.push({
      key: a_obj[index].key,
      count: a_obj[index].count
    });
  }
}

  return arr;

  function get_obj(collection) {
    var a_obj = [];
    collection.forEach(item => {
      for (var i = 0; i < a_obj.length; i++) {
        if (item == a_obj[i].key) {
          a_obj[i].count += 1;
          return
        }
      }
      a_obj[a_obj.length] = { key: item,
                          count: 1
                        };
   });

   return a_obj;
}


};