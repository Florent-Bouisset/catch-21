import {
    cardNumbers,
    colors
} from '@/utils/types.js'

export default class Deck {
    constructor() {
        this.cards = [];
        this.create();
        // this.createEasy();
    }

    create() {
        const cards = [];
        for (const color in colors) {
            for (const number in cardNumbers) {
                cards.push({
                    color: color,
                    cardNumber: number,
                });
            }
        }
        this.cards = cards;
    }
    // Function for cheating and have a deck full of the same card
    createEasy() {
        const cards = [];
        for (let i = 0; i < 52; i++) {
            cards.push({
                color: 'SPADE',
                cardNumber: 'SEVEN',
            });
        }
        this.cards = cards;
    }
    shuffle() {
        const nb_shuffle = 3;
        for (let i = 0; i < nb_shuffle; i++) {
            this.shuffleOnce()
        }
    }
    shuffleOnce() {
        for (let i = 0; i < this.cards.length; i++) {
            const cardToSwap = Math.floor(Math.random() * this.cards.length);
            const tmp = this.cards[i]
            this.cards[i] = this.cards[cardToSwap]
            this.cards[cardToSwap] = tmp
        }
    }
    static isABlackJack(card) {
        if (card.cardNumber === "JACK") {
            if (card.color === "SPADE" || card.color === "CLUB") {
                return true;
            }
        }
        return false;
    }
}