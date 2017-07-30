'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
      var newCol = new Array();
      for (var i = 0; i < collectionA.length; i++) {
          for (var j = 0; j < collectionB.length; j++) {
              if ( collectionA[i] === collectionB[j]) {
                  newCol.push(collectionA[i] );
              }
          }
      }
      return newCol;

};
