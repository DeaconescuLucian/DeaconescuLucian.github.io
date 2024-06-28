const JAPAN_EFFECT = {
    imageFolder: "images/japanese-spring",
    background: "linear-gradient(45deg, #b689a8, #d3bbc9, #b689a8, #d3bbc9);",
    coverBackground: "linear-gradient(45deg, transparent, transparent, transparent, transparent, transparent, transparent, rgb(223, 55, 105), transparent, transparent, transparent, transparent, transparent, transparent);",
    animation: FLOWER,
    create: function() {
        this.animation.create(this.imageFolder, this.background, this.coverBackground);
        app.sound.createJapaneseSound();
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