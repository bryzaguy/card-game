'use strict';

describe('function: shuffle', function () {
  beforeEach(function () {
    this.cards = [{
      suit: '♠',
      rank: '1'
    }, {
      suit: '♥',
      rank: '3'
    }, {
      suit: '♦',
      rank: '9'
    }, {
      suit: '♣',
      rank: 'K'
    }];

    this.result = shuffle(this.cards);
  });
  it('returns cards in a different order', function () {
    expect(this.result).not.toEqual(this.cards);
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
