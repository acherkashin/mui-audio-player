import { expect } from 'chai';
import { createMockedPlayer } from './utils';

import { playAudio } from '../src/components/AudioPlayer/utils';
import Constants from '../src/components/AudioPlayer/utils/constants';

describe("Actions", () => {
    describe("Play", () => {
        let mockedPlayer = null;

        it("When calling `playAudio` should return an Object.", done => {
            mockedPlayer = createMockedPlayer({ paused: true });
            const status = playAudio(mockedPlayer);

            expect(status).to.be.a("object");
            done();
        });

        it("When calling `playAudio` should return an Object that has a property called `playStatus`.", done => {
            mockedPlayer = createMockedPlayer({ paused: true });
            const status = playAudio(mockedPlayer);

            expect(status).to.have.property('playStatus');
            done();
        });

        it("When calling `playAudio` should return an Object that has a property called `playStatus` which is a String.", done => {
            mockedPlayer = createMockedPlayer({ paused: true });
            const status = playAudio(mockedPlayer);

            expect(status.playStatus).to.be.a("string");
            done();
        });

        it("When calling `playAudio` and player.paused value is true, should return an Object that has a property called `playStatus` with value `play`.", done => {
            mockedPlayer = createMockedPlayer({ paused: true });
            const status = playAudio(mockedPlayer);

            expect(status.playStatus).to.be.equal(Constants.Status.PLAY);
            done();
        });

        it("When calling `playAudio` and player.paused value is false, should return an Object that has a property called `playStatus` with value `pause`.", done => {
            mockedPlayer = createMockedPlayer({ paused: false });
            const status = playAudio(mockedPlayer);

            expect(status.playStatus).to.be.equal(Constants.Status.PAUSE);
            done();
        });

        it("When calling `playAudio` and player.paused value is true, player.paused should be a boolean.", done => {
            mockedPlayer = createMockedPlayer({ paused: true });
            playAudio(mockedPlayer);

            expect(mockedPlayer.paused).to.be.a("boolean");
            done();
        });

        it("When calling `playAudio` and player.paused value is false, player.paused should be a boolean.", done => {
            mockedPlayer = createMockedPlayer({ paused: false });
            playAudio(mockedPlayer);

            expect(mockedPlayer.paused).to.be.a("boolean");
            done();
        });

        it("When calling `playAudio` and player.paused value is true, player.paused should change to false.", done => {
            mockedPlayer = createMockedPlayer({ paused: true });
            playAudio(mockedPlayer);

            expect(mockedPlayer.paused).to.be.equal(false);
            done();
        });

        it("When calling `playAudio` and player.paused value is false, player.paused should change to true.", done => {
            mockedPlayer = createMockedPlayer({ paused: false });
            playAudio(mockedPlayer);

            expect(mockedPlayer.paused).to.be.equal(true);
            done();
        });
    });
});