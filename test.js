'use strict';

describe('card game', function () {
  beforeEach(function () {
    this.cards = [{
      suit: '♥',
      rank: '4'
    }, {
      suit: '♥',
      rank: '3'
    }, {
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
      this.result = shuffle(this.cards);
    });
    it('returns cards in a different order', function () {
      expect(this.result).not.toEqual(this.cards);
    });
    it('returns a different order each time', function () {
      expect(this.result).not.toEqual(shuffle(this.cards));
    });
    it('returns the same number as given', function () {
      expect(this.result.count).toBe(this.cards.length);
    });
    it('includes all the cards', function () {
      this.cards.forEach(function (card) {
        expect(this.result).toContain(card);
      });
    });
  });

  describe('function: sortAscending', function () {
    beforeEach(function () {
      this.result = sortAscending(this.cards);
    });
    it('returns cards grouped by suits ♠, ♣, ♥ then ♦', function () {});
    it('returns the rank numbers in order', function () {});
    it('returns rank ace before two', function () {});
    it('returns cards for a rank by 10, jack, king then queen', function () {});
    it('returns cards in same order even after shuffling', function () {})
  });
});
