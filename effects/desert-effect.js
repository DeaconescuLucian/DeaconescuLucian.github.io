const DESERT_EFFECT = {
    imageFolder: "images/desert",
    background: "linear-gradient(45deg, #3a1c04, #835603, #3a1c04, #835603);",
    coverBackground: "linear-gradient(45deg, transparent, transparent, transparent, transparent, transparent, transparent, gold, transparent, transparent, transparent, transparent, transparent, transparent);",
    animation: DESERT,
    create: function() {
        this.animation.create(this.imageFolder, this.background, this.coverBackground);
        app.sound.createDesertSound();
        app.sound.playAudio();
    },
    destroy: async function() {
        await app.utils.destroyEffect(this.animation)
    },
    play: async function() {
        this.create();
        await this.destroy();
    }
}