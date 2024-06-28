const ARTIC_EFFECT = {
    imageFolder: "images/artic",
    background: "linear-gradient(45deg, #b4bbc0, #15415e, #b4bbc0, #15415e);",
    coverBackground: "linear-gradient(45deg, transparent, transparent, transparent, transparent, transparent, transparent, rgb(24, 165, 184), transparent, transparent, transparent, transparent, transparent, transparent);",
    animation: ARTIC,
    create: function() {
        this.animation.create(this.imageFolder, this.background, this.coverBackground);
        app.sound.createArticSound();
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