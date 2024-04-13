const { fermevideo, joueVideo } = require('./index.html');

document.getElementById = jest.fn();

describe('Test fermevideo function', () => {
    test('Should hide videoPlay and mute maVideo', () => {
        const mockVideoPlay = { style: { display: '' } };
        const mockMaVideo = { muted: false };
        document.getElementById
            .mockReturnValueOnce(mockVideoPlay)
            .mockReturnValueOnce(mockMaVideo);

        fermevideo();

        expect(mockVideoPlay.style.display).toBe('none');
        expect(mockMaVideo.muted).toBe(true);
    });
});

describe('Test joueVideo function', () => {
    test('Should set src for maVideo and show videoPlay', () => {
        const mockVideoPlay = { style: { display: '' } };
        const mockMaVideo = { src: '' };
        document.getElementById
            .mockReturnValueOnce(mockVideoPlay)
            .mockReturnValueOnce(mockMaVideo);

        joueVideo('./video/Fortnite.mp4');

        expect(mockMaVideo.src).toBe('./video/Fortnite.mp4');
        expect(mockVideoPlay.style.display).toBe('block');
    });
});
