const RAIN = {
    selector: 'rain-container',
    create: function(imageFolder, background, cover) {
        app.utils.setBackground(background);
        app.utils.setImages(imageFolder);
        app.utils.setSideCover(cover);
        
        var newDiv = document.createElement("div");
        newDiv.classList.add(this.selector);
        document.body.appendChild(newDiv);
        var container = document.querySelector(`.${this.selector}`);
        var numberOfDrops = 100;

        for (let i = 0; i < numberOfDrops; i++) {
            const raindrop = document.createElement('div');
            raindrop.classList.add('rain');
            raindrop.style.left = `${Math.random() * window.innerWidth}px`;
            let rand = Math.random();
            raindrop.style.animationDuration = `${rand > 0.2 ? 2*rand : 1 + 2*Math.random()}s`;
            container.appendChild(raindrop);
        }
    },
    destroy: function() {
        var container = document.querySelector(`.${this.selector}`);
        container.remove();
    }

}