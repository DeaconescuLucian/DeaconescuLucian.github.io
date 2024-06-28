const FLOWER = {
    selector: 'flower-container',
    create: function(imageFolder, background, cover) {
        app.utils.setBackground(background);
        app.utils.setImages(imageFolder);
        app.utils.setSideCover(cover);
        
        var newDiv = document.createElement("div");
        newDiv.classList.add(this.selector);
        document.body.appendChild(newDiv);
        var container = document.querySelector(`.${this.selector}`);
        var numberOfFlowers = 100;

        for (let i = 0; i < numberOfFlowers; i++) {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            flower.style.top = `${Math.random() * (-300)}px`;
            flower.style.left = `${Math.random() * window.innerWidth}px`;
            flower.style.animationDuration = `${3 + 3*Math.random()}s`;
            container.appendChild(flower);
        }
    },
    destroy: function() {
        var container = document.querySelector(`.${this.selector}`);
        container.remove();
    }

}