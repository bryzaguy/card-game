'use strict';

var ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];


module.exports = {
  shuffle: function (array) {
    var n = array.length,
      t, i;
    while (n) {
      i = Math.random() * n-- | 0;
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
    return array;
  },
  sortAscending: function (array) {
    array.sort(function (a, b) {
      return a.suit > b.suit ? 1 : 
        (b.suit > a.suit ? -1 : 
          (ranks.indexOf(a.rank) > ranks.indexOf(b.rank) ? 1 : 
            (ranks.indexOf(b.rank) > ranks.indexOf(a.rank) ? -1 : 0)
          )
        );
    });
    return array;
  }
};
