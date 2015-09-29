/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var sortAscending = __webpack_require__(1).sortAscending,
	  shuffle = __webpack_require__(1).shuffle;

	describe('card game', function () {
	  beforeEach(function () {
	    this.cards = [{
	      suit: '♠',
	      rank: '2'
	    }, {
	      suit: '♠',
	      rank: 'A'
	    }, {
	      suit: '♦',
	      rank: '8'
	    }, {
	      suit: '♦',
	      rank: '9'
	    }, {
	      suit: '♦',
	      rank: '4'
	    }, {
	      suit: '♦',
	      rank: '5'
	    }, {
	      suit: '♥',
	      rank: '5'
	    }, {
	      suit: '♣',
	      rank: 'K'
	    }, {
	      suit: '♣',
	      rank: '10'
	    }, {
	      suit: '♣',
	      rank: 'J'
	    }, {
	      suit: '♣',
	      rank: 'Q'
	    }];
	  });

	  describe('function: shuffle', function () {
	    beforeEach(function () {
	      this.result = shuffle(this.cards.slice());
	    });

	    it('returns cards in a different order', function () {
	      expect(this.result).not.toEqual(this.cards);
	    });

	    it('returns a different order each time', function () {
	      expect(this.result).not.toEqual(shuffle(this.cards));
	    });

	    it('returns the same number as given', function () {
	      expect(this.result.length).toBe(this.cards.length);
	    });

	    it('includes all the cards', function () {
	      this.cards.forEach(function (card) {
	        expect(this.result).toContain(card);
	      }.bind(this));
	    });
	  });

	  describe('function: sortAscending', function () {
	    beforeEach(function () {
	      this.result = sortAscending(this.cards.slice());
	    });

	    it('returns cards grouped by suits ♠, ♣, ♥ then ♦', function () {
	      expect(getSuitsInOrderTheyAppear(this.result)).toEqual(['♠', '♣', '♥', '♦']);
	    });

	    it('returns the rank numbers in order', function () {
	      expect(getRanksFilterBySuit(this.result, '♦')).toEqual(['4', '5', '8', '9']);
	    });

	    it('returns rank ace before two', function () {
	      expect(getRanksFilterBySuit(this.result, '♠')).toEqual(['A', '2']);
	    });

	    it('returns cards for a rank by 10, jack, king then queen', function () {
	      expect(getRanksFilterBySuit(this.result, '♣')).toEqual(['10', 'J', 'Q', 'K']);
	    });

	    it('returns cards in same order even after shuffling', function () {
	      expect(this.result).toEqual(shuffle(this.result));
	    });

	    it('returns the same number as given', function () {
	      expect(this.result.length).toBe(this.cards.length);
	    });

	    it('includes all the cards', function () {
	      this.cards.forEach(function (card) {
	        expect(this.result).toContain(card);
	      }.bind(this));
	    });

	    function getRanksFilterBySuit(cards, suit) {
	      return cards.filter(function (card) {
	        return card.suit === suit;
	      }).map(function (card) {
	        return card.rank;
	      });
	    }

	    function getSuitsInOrderTheyAppear(cards) {
	      var suits = [];
	      for (var i in cards) {
	        if ((cards[i - 1] || {}).suit !== cards[i].suit) {
	          suits.push(cards[i].suit);
	        }
	      }
	      return suits;
	    }
	  });
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);