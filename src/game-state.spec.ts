import {describe, expect, it} from '@jest/globals';
import {deck} from "./game-state";

describe('game state', () => {
    it('should deal cards', () => {

        const cards = deck()
        expect(cards).toHaveLength(150);
        expect(cards.filter(v => v === -2)).toHaveLength(5);
        expect(cards.filter(v => v === -1)).toHaveLength(10);
        expect(cards.filter(v => v === 0)).toHaveLength(15);
        for (let i = 1; i <= 12; i++) {
            expect(cards.filter(v => v === i)).toHaveLength(10);
        }
    });
});
