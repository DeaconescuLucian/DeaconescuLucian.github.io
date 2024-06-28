const RAIN_EFFECT = {
    imageFolder: "images/sensei",
    background: "linear-gradient(45deg, #111f27, #192e19, #111f27, #192e19);",
    coverBackground: "linear-gradient(45deg, transparent, transparent, transparent, transparent, transparent, transparent, rgb(76, 148, 82), transparent, transparent, transparent, transparent, transparent, transparent);",
    animation: RAIN,
    create: function() {
        this.animation.create(this.imageFolder, this.background, this.coverBackground);
        app.sound.createRainSound();
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