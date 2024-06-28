const utils = {
    hideDiv: function() {
        var div = document.querySelector('.left1');
        div.style.opacity= 0;
        setTimeout(function() {
        div.style.opacity = 1;
        }, 500);
    },
    hideSideWhenPassingThrough: function() {
        setTimeout(() => {
            this.hideDiv();
            setInterval(this.hideDiv, 20000);
        }, 3000);
    },
    setBackground: function(bg) {
        document.getElementById("bg")?.remove();
        var styleElement = document.createElement('style');
        styleElement.id = "bg"
        var cssRule = `body { background: ${bg}; background-size: 400%, 400%; }`;
        styleElement.appendChild(document.createTextNode(cssRule));
        document.head.appendChild(styleElement);
    },
    setImages: function(folder) {
        document.getElementById("img")?.remove();
        var styleElement = document.createElement('style');
        styleElement.id = "img"
        var cssRule = 
        `   .front { background-image: url('${folder}/1.png');}
            .back { background-image: url('${folder}/2.png');}
            .left1 { background-image: url('${folder}/3.png');}
            .left2 { background-image: url('${folder}/4.png');}
            .right1 { background-image: url('${folder}/5.png');}
            .right2 { background-image: url('${folder}/6.png');}`;
        styleElement.appendChild(document.createTextNode(cssRule));
        document.head.appendChild(styleElement);
    },
    setSideCover: function(bg) {
        document.getElementById("cover")?.remove();
        var styleElement = document.createElement('style');
        styleElement.id = "cover"
        var cssRule = `
        .side-cover 
        {   background: ${bg}; 
            background-size: 100% 300%;
            background-position: 0% 0%; }`;
        styleElement.appendChild(document.createTextNode(cssRule));
        document.head.appendChild(styleElement);
    },
    destroyEffect: function(animation) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                app.sound.stopAudioSmoothly(app.sound.audio, app.settings.soundFadeOffDuration).then((r) => {
                        animation.destroy();
                        resolve();
                    });
            }, app.settings.effectDuration);
        });
    }
}