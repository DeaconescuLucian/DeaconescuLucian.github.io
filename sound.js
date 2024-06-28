var sound = {
    playing: false,
    audio: null,
    createRainSound: function() {
        this.audio = new Audio('sound/rain.wav');
        this.audio.loop = true;
    },
    createDesertSound: function() {
        this.audio = new Audio('sound/desert.mp3');
        this.audio.loop = true;
    },
    createArticSound: function() {
        this.audio = new Audio('sound/artic.mp3');
        this.audio.loop = true;
    },
    createJapaneseSound: function() {
        this.audio = new Audio('sound/japan.mp3');
        this.audio.loop = true;
    },
    startAudio: function() {
        const self = this;
        document.addEventListener('click', function () {
            self.audio.play();
            self.playing = true;
        });
    },
    restartAudio: function() {
        this.audio.volume = 1;
        this.audio.play();
    },
    stopAudioSmoothly: function(audioElement, duration) {
        return new Promise((resolve, reject) => {
            const intervalTime = duration / 100;
            const volumeStep = audioElement.volume / 100;
    
            const fadeoutInterval = setInterval(() => {
                audioElement.volume -= volumeStep;
                if (audioElement.volume <= 0.01) {
                    audioElement.pause();
                    clearInterval(fadeoutInterval);
                    resolve();
                }
            }, intervalTime);
        });
    },
    playAudio: function() {
        if(this.playing === false)
            this.startAudio();
        else
            this.restartAudio();
    }
}