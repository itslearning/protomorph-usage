import {expect} from '@plumpnation/protomorph/lib/SpecHelper';

describe('dummy suite', () => {
    describe('methodName()', () => {
        it('should do something cool', testThatPasses);
        it('should do something uncool', testThatFails);
    });

    // /////////////////////////////////////////////////////////////////////////

    function testThatPasses() {
        expect(true).to.equal(true);
    }

    function testThatFails() {
        expect(true).to.not.equal(true);
    }
});
