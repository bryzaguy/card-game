'use strict';

module.exports = {
  shuffle: function (array) {
    var n = array.length, t, i;
    while (n) {
      i = Math.random() * n-- | 0;
      t = array[n];
      array[n] = array[i];
      array[i] = t;
    }
    return array;
  },
  sortAscending: function () {}
};
