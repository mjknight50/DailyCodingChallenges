import { assert } from 'chai';
import { plusMinus } from '.';


describe('Test #2', () => {
    it('Solves Challenge', () => {
        assert.sameDeepOrderedMembers(plusMinus([-4, 3, -9, 0, 4, 1]), ['0.500000', '0.333333', '0.166667']), 'plusMinus([-4, 3, -9, 0, 4, 1]), [`0.500000`, `0.333333`, `0.166667`]';
        assert.notSameDeepOrderedMembers(plusMinus([2, 3, -5, 0, 2, 1]), ['0.500000', '0.333333', '0.166667']), 'plusMinus([2, 3, -5, 0, 2, 1]), [`0.500000`, `0.333333`, `0.166667`]';
    });
});