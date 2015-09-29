'use strict';

var sortAscending = require('./').sortAscending,
  shuffle = require('./').shuffle;

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
