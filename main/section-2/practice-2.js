'use strict';

module.exports = function countSameElements(collection) {
      var last = collection.pop(); //返回集合中的最后一个元素
      var count = 1;
      var arr = new Array();
      var key;
      var obj = { "key": '', "count": 0 };
      for(var i = 0; i < collection.length-1; i++) {
          if(collection[i] === collection[i+1]) {
            key = collection[i];
            count++;
          } else {
             obj.key = key;
             obj.count = count;
             arr.push(obj);
             count = 1;
          }
          
      }
      var last_key = last.split('-')[0];
      var last_count = last.split('-')[1];
      obj.key = last_key;
      obj.count = last_count;
      arr.push(obj);
      return arr;

};