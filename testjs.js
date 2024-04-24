// Importe les fonctions fermevideo et joueVideo depuis le fichier index.html
// Remarque : Il est inhabituel d'importer des fonctions JavaScript depuis un fichier HTML.
const { fermevideo, joueVideo } = require('./index.html');

// Remplace la méthode getElementById par un faux (mock) créé par Jest
document.getElementById = jest.fn();

// Suite de tests pour la fonction fermevideo
describe('Test fermevideo function', () => {
    // Test individuel pour vérifier le comportement de la fonction fermevideo
    test('Should hide videoPlay and mute maVideo', () => {
        // Crée un faux objet représentant l'élément videoPlay avec display vide
        const mockVideoPlay = { style: { display: '' } };
        // Crée un faux objet représentant l'élément maVideo avec muted à false
        const mockMaVideo = { muted: false };
        // Définit le comportement attendu de document.getElementById
        document.getElementById
            .mockReturnValueOnce(mockVideoPlay) // la première fois, retourne mockVideoPlay
            .mockReturnValueOnce(mockMaVideo); // la deuxième fois, retourne mockMaVideo

        // Appelle la fonction fermevideo
        fermevideo();

        // Vérifie si videoPlay est masqué en vérifiant la propriété display
        expect(mockVideoPlay.style.display).toBe('none');
        // Vérifie si maVideo est muette en vérifiant la propriété muted
        expect(mockMaVideo.muted).toBe(true);
    });
});

// Suite de tests pour la fonction joueVideo
describe('Test joueVideo function', () => {
    // Test individuel pour vérifier le comportement de la fonction joueVideo
    test('Should set src for maVideo and show videoPlay', () => {
        // Crée un faux objet représentant l'élément videoPlay avec display vide
        const mockVideoPlay = { style: { display: '' } };
        // Crée un faux objet représentant l'élément maVideo avec src vide
        const mockMaVideo = { src: '' };
        // Définit le comportement attendu de document.getElementById
        document.getElementById
            .mockReturnValueOnce(mockVideoPlay) // la première fois, retourne mockVideoPlay
            .mockReturnValueOnce(mockMaVideo); // la deuxième fois, retourne mockMaVideo

        // Appelle la fonction joueVideo avec un chemin vidéo en paramètre
        joueVideo('./video/Fortnite.mp4');

        // Vérifie si le src de maVideo est correctement défini
        expect(mockMaVideo.src).toBe('./video/Fortnite.mp4');
        // Vérifie si videoPlay est affiché en vérifiant la propriété display
        expect(mockVideoPlay.style.display).toBe('block');
    });
});
