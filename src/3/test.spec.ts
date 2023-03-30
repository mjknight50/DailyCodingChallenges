import { assert } from 'chai';
import { minMaxValues } from '.';


describe('Test #3', () => {
    it('Solves Challenge', () => {
        assert.sameDeepOrderedMembers(minMaxValues([1, 3, 5, 7, 9]), [16, 24]), 'minMaxValues([1, 3, 5, 7, 9]), [16, 24]';
        assert.sameDeepOrderedMembers(minMaxValues([4, 12, 5, 4, 15]), [25, 36]), 'minMaxValues([1, 3, 5, 7, 9]), [16, 24]';
        assert.notSameDeepOrderedMembers(minMaxValues([2, 3, -5, 0, 2, 1]), [1, 2]), 'minMaxValues([2, 3, -5, 0, 2, 1]), [1, 2]';
    });
});