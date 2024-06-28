const DESERT = {
    selector: 'sun-container',
    create: function(imageFolder, background, cover) {
        app.utils.setBackground(background);
        app.utils.setImages(imageFolder);
        app.utils.setSideCover(cover);
        
        var newDiv = document.createElement("div");
        newDiv.classList.add(this.selector);
        document.body.appendChild(newDiv);
    },
    destroy: function() {
        var container = document.querySelector(`.${this.selector}`);
        container.remove();
    }

}